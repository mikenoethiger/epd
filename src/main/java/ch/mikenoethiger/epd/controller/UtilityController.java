package ch.mikenoethiger.epd.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.mikenoethiger.epd.model.http.TextToNumberRequest;
import ch.mikenoethiger.epd.service.AsciiService;

@RestController
public class UtilityController {

	@Autowired
	AsciiService asciiService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/utility/texttonumber")
	public TextToNumberRequest textToNumber(@RequestBody TextToNumberRequest textToNumberRequest) throws NoSuchAlgorithmException {
		Long numberRepresentation = asciiService.stringToAscii(textToNumberRequest.getText());
		textToNumberRequest.setNumber(numberRepresentation);
		return textToNumberRequest;
	}
}
