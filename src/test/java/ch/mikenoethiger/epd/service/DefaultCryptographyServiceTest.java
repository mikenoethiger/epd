package ch.mikenoethiger.epd.service;

import java.math.BigInteger;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import ch.mikenoethiger.epd.EpdApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = EpdApplication.class)
public class DefaultCryptographyServiceTest {

	@Autowired
	DefaultCryptographyService defaultRsaService;

	@Test
	public void test2() {
//		String cipher = defaultRsaService.encrypt("secret", "52163N120457");
//		cipher = defaultRsaService.encrypt("嵾갆듀璯", "11987N120457");
//		System.out.println(cipher);
		
		// Public: 52163N120457
		// Private: 11987N120457
		
//		int initialNumber = 5;
//		System.out.println("initialNumber=" + 5);
//		
//		int c = BigInteger.valueOf((long) initialNumber).pow(52163).mod(BigInteger.valueOf(120457)).intValue();
//		System.out.println("c=" + c);
//		
//		int m = BigInteger.valueOf((long) c).pow(11987).mod(BigInteger.valueOf(120457)).intValue();
//		System.out.println("m=" + c); 
		
		int cipher = defaultRsaService.encrypt(12345, "52163N120457");
		cipher = defaultRsaService.encrypt(105207, "52163N120457");
		System.out.println("cipher=" + cipher);
		
		int message = 12345;
		int e = 52163;
		int d = 11987;
		int N = 120457;
		
		System.out.println("message=" + message);
		System.out.println("e=" + e);
		System.out.println("d=" + d);
		System.out.println("N=" + N);
		
		int c = BigInteger.valueOf((long) message).pow(e).mod(BigInteger.valueOf(N)).intValue();
		System.out.println("c=" + c);
		
		int m = BigInteger.valueOf((long) c).pow(d).mod(BigInteger.valueOf(N)).intValue();
		System.out.println("m=" + m);
	}
	
	@Test
	public void test() {
		IndependentPrimes independantPrimes = defaultRsaService.generateIndependantPrimes();

		Assert.assertEquals(String.valueOf(independantPrimes.getP()).length(), 2);
		Assert.assertEquals(String.valueOf(independantPrimes.getQ()).length(), 2);

		independantPrimes = defaultRsaService.generateIndependantPrimes(1);

		Assert.assertEquals(String.valueOf(independantPrimes.getP()).length(), 1);
		Assert.assertEquals(String.valueOf(independantPrimes.getQ()).length(), 1);

		independantPrimes = defaultRsaService.generateIndependantPrimes(3);

		Assert.assertEquals(String.valueOf(independantPrimes.getP()).length(), 3);
		Assert.assertEquals(String.valueOf(independantPrimes.getQ()).length(), 3);
		
		int[] numbers = defaultRsaService.gcd(23, 120);
		System.out.println("d=" +numbers[0]);
		System.out.println("a=" +numbers[1]);
		System.out.println("b=" +numbers[2]);
	}
}
