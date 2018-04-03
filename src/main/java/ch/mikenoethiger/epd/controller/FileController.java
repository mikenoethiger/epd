package ch.mikenoethiger.epd.controller;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.gridfs.model.GridFSFile;

@RestController
public class FileController {

	@Autowired
	GridFsOperations gridOperations;
	
	@RequestMapping(method = RequestMethod.GET, value = "/file/{id}")
	public void getImageAsByteArray(HttpServletResponse response, @PathVariable String id) throws IOException {
		GridFSFile gridFsdbFile = gridOperations.findOne(new Query(Criteria.where("_id").is(id)));
		GridFsResource resource = gridOperations.getResource(gridFsdbFile.getFilename());
		
	    InputStream in = resource.getInputStream();
	    response.setContentType(MediaType.IMAGE_JPEG_VALUE);
	    IOUtils.copy(in, response.getOutputStream());
	}
	
}
