package ch.mikenoethiger.epd.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.mikenoethiger.epd.model.KeyInfo;
import ch.mikenoethiger.epd.model.http.KeysRequest;
import ch.mikenoethiger.epd.service.CryptographyService;
import ch.mikenoethiger.epd.service.DefaultRsaKeyBuilder;
import ch.mikenoethiger.epd.service.IndependentPrimes;
import ch.mikenoethiger.epd.service.RsaKeyBuilder;

@RestController
public class KeypairController {

	@Autowired
	CryptographyService cryptographyService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/keys")
	public KeyInfo generateKeys(@RequestBody KeysRequest keysRequest) throws NoSuchAlgorithmException {
		IndependentPrimes independentPrimes = cryptographyService.generateIndependantPrimes(keysRequest.getSize());

		RsaKeyBuilder rsaKeyBuilder = new DefaultRsaKeyBuilder(cryptographyService, independentPrimes);
		while (rsaKeyBuilder.getD() < 0) {
			rsaKeyBuilder = new DefaultRsaKeyBuilder(cryptographyService, cryptographyService.generateIndependantPrimes(3));
		}
		
		return new KeyInfo(rsaKeyBuilder.getP(), rsaKeyBuilder.getQ(), rsaKeyBuilder.getE(), rsaKeyBuilder.getD(), rsaKeyBuilder.getPublicKey(), rsaKeyBuilder.getPrivateKey(), rsaKeyBuilder.getK(), rsaKeyBuilder.getModulus(), rsaKeyBuilder.getPhiOfModulus(), rsaKeyBuilder.getKeyCreationSteps());
	}
	
}
