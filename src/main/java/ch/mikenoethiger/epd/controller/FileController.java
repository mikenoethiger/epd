package ch.mikenoethiger.epd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.mikenoethiger.epd.model.Epd;

@RestController
public class FileController {

	@Autowired
	GridFsOperations gridOperations;
	
	
}
