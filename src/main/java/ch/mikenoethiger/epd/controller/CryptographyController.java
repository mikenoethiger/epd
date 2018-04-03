package ch.mikenoethiger.epd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.mikenoethiger.epd.model.http.EncryptRequest;
import ch.mikenoethiger.epd.service.CryptographyService;

@RestController
public class CryptographyController {

	@Autowired
	CryptographyService cryptographyService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/encrypt")
	public EncryptRequest save(@RequestBody EncryptRequest encryptRequest) {
		int c = cryptographyService.encrypt(encryptRequest.getNumber(), encryptRequest.getKey());
		encryptRequest.setEncryptedNumber(c);

		return encryptRequest;
	}
	
}
