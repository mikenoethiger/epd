package ch.mikenoethiger.epd.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

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
import ch.mikenoethiger.epd.model.http.EhrAccessRequest;
import ch.mikenoethiger.epd.model.http.EhrAccessResponse;
import ch.mikenoethiger.epd.model.http.EhrAccessStep;
import ch.mikenoethiger.epd.model.http.GetPkOwnerNameRequest;
import ch.mikenoethiger.epd.repository.EhrRepository;
import ch.mikenoethiger.epd.repository.EpdRepository;
import ch.mikenoethiger.epd.service.CryptographyService;

@RestController
public class EpdController {

	@Autowired
	EpdRepository epdRepository;
	@Autowired
	EhrRepository ehrRepository;
	@Autowired
	GridFsOperations gridOperations;
	@Autowired
	CryptographyService cryptographyService;

	@RequestMapping(method = RequestMethod.GET, value = "/epd")
	public Iterable<Epd> contact() {
		return epdRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/ehr-access-request/{id}")
	public EhrAccessResponse ehrAccessRequest(@PathVariable String id, @RequestBody() EhrAccessRequest ehrAccessRequest) {
		Ehr ehr = ehrRepository.findById(id).orElseGet(() -> null);
		if (ehr == null) {
			throw new ResourceNotFoundException();
		}
		
		List<EhrAccessStep> ehrAccessSteps = new ArrayList<>();
		
		boolean requesterPublicKeyPermitted = ehr.getPermittedPublicKeys().contains(ehrAccessRequest.getRequesterPublicKey());
		
		EhrAccessStep ehrAccessStep = new EhrAccessStep();
		ehrAccessStep.setTitle("Public Key prüfen");
		if (requesterPublicKeyPermitted) {
			ehrAccessStep.setDescription(String.format("Public Key <mark>%s</mark> ist berechtigt", ehrAccessRequest.getRequesterPublicKey()));
		} else {
			ehrAccessStep.setDescription(String.format("Public Key <mark>%s</mark> <b>nicht<b> berechtigt, Zugriff verweigert!", ehrAccessRequest.getRequesterPublicKey()));
		}
		ehrAccessStep.setValid(requesterPublicKeyPermitted);
		ehrAccessSteps.add(ehrAccessStep);
		
		int decryptedSignature = cryptographyService.encrypt(ehrAccessRequest.getRequesterSignature(), ehrAccessRequest.getRequesterPublicKey());
		boolean signatureValid = decryptedSignature == 12345;
		int m = ehrAccessRequest.getRequesterSignature();
		String e = ehrAccessRequest.getRequesterPublicKey().split("N")[0];
		String N = ehrAccessRequest.getRequesterPublicKey().split("N")[1];
		
		ehrAccessStep = new EhrAccessStep();
		ehrAccessStep.setTitle("Signatur prüfen");
		if (signatureValid) {
			ehrAccessStep.setDescription(String.format("Die Signatur muss entschlüsselt mit dem Public Key 12345 ergeben. <br><br><mark>%s<sup>%s</sup> mod %s = <b>%s</b></mark><br><b>Signatur gültig</b>", m, e, N, decryptedSignature));
		} else {
			ehrAccessStep.setDescription(String.format("Die Signatur muss entschlüsselt mit dem Public Key 12345 ergeben. <br><br><mark>%s<sup>%s</sup> mod %s = <b>%s</b></mark><br><b>Signatur ungültig!</b>", m, e, N, decryptedSignature));
		}
		ehrAccessStep.setValid(signatureValid);
		ehrAccessSteps.add(ehrAccessStep);
		
		boolean allValid = requesterPublicKeyPermitted && signatureValid;
		return new EhrAccessResponse(allValid, ehrAccessSteps);
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
		
		List<String> permittedPublicKeys = new ArrayList<>();
		permittedPublicKeys.add(epd.getPublicKey());
		
		Ehr ehr = new Ehr(name, "/file/" + objectId.toString(), epd.getName(), epd.getPublicKey(), permittedPublicKeys);
		ehrRepository.save(ehr);
		epd.getEhrs().add(ehr);
		epdRepository.save(epd);
		
		return ehr;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/epd/{id}")
	public Epd show(@PathVariable String id) {
		return epdRepository.findById(id).get();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/ehr/{id}")
	public Ehr showEhr(@PathVariable String id) {
		return ehrRepository.findById(id).get();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-pk-owner-name/{pk}")
	public GetPkOwnerNameRequest getPkOwnerName(@PathVariable String pk) {
		Iterable<Epd> epds = epdRepository.findAll();
		
		Iterator<Epd> epdIterator = epds.iterator();
		while (epdIterator.hasNext()) {
			Epd epd = epdIterator.next();
			if (epd.getPublicKey().equalsIgnoreCase(pk)) {
				return new GetPkOwnerNameRequest(epd.getName());
			}
		}
		return new GetPkOwnerNameRequest("Unbekannt");
	}
}