package ch.mikenoethiger.epd.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

import javax.servlet.annotation.MultipartConfig;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ch.mikenoethiger.epd.httperror.ResourceNotFoundException;
import ch.mikenoethiger.epd.model.Ehr;
import ch.mikenoethiger.epd.model.Epd;
import ch.mikenoethiger.epd.repository.EpdRepository;

@RestController
@MultipartConfig(maxFileSize = 10737418240L, maxRequestSize = 10737418240L, fileSizeThreshold = 52428800)
public class EpdController {

	@Autowired
	EpdRepository epdRepository;
	@Autowired
	GridFsOperations gridOperations;

	@RequestMapping(method = RequestMethod.GET, value = "/epd")
	public Iterable<Epd> contact() {
		return epdRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/epd")
	public Epd save(@RequestBody Epd contact) {
		epdRepository.save(contact);

		return contact;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/epd/{id}/ehr")
	public Ehr saveEhr(@PathVariable String id, @RequestParam("name") String name,
			@RequestParam("image") MultipartFile image) {
		Optional<Epd> epdOptional = epdRepository.findById(id);
		if (!epdOptional.isPresent()) {
			throw new ResourceNotFoundException();
		}
		
		Epd epd = epdOptional.get();
		
		if (epd.getEhrs() == null) {
			epd.setEhrs(new ArrayList<>());
		}

		ObjectId objectId;
		
		try {
			objectId = gridOperations.store(image.getInputStream(), image.getOriginalFilename(), image.getContentType());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		
		Ehr ehr = new Ehr(name, "/file/" + objectId.toString(), null);
		epd.getEhrs().add(ehr);
		epdRepository.save(epd);
		
		return ehr;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/epd/{id}")
	public Epd show(@PathVariable String id) {
		return epdRepository.findById(id).get();
	}
}