package ch.mikenoethiger.epd.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import ch.mikenoethiger.epd.EpdApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = EpdApplication.class)
public class DefaulRsaKeyBuilderTest {

	@Autowired
	CryptographyService cryptographyService;

	@Test
	public void test() {
		IndependentPrimes independentPrimes = cryptographyService.generateIndependantPrimes(3);

		RsaKeyBuilder rsaKeyBuilder = new DefaultRsaKeyBuilder(cryptographyService, independentPrimes);
		while (rsaKeyBuilder.getD() < 0) {
			rsaKeyBuilder = new DefaultRsaKeyBuilder(cryptographyService, cryptographyService.generateIndependantPrimes(3));
		}
		
		System.out.println(rsaKeyBuilder.toString());
	}
}
