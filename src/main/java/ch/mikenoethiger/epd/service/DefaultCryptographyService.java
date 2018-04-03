package ch.mikenoethiger.epd.service;

import java.math.BigInteger;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

@Service
public class DefaultCryptographyService implements CryptographyService {

	@Override
	public IndependentPrimes generateIndependantPrimes(int digits) {
		if (digits < 1) {
			throw new IllegalArgumentException("number of digits must be >= 1");
		}

		int min = new Double(Math.pow(10, digits - 1)).intValue();
		int max = new Double(Math.pow(10, digits) - 1).intValue();

		int randomP = getRandomPrime(min, max);

		int randomQ = getRandomPrime(min, max);
		while (randomQ == randomP) {
			randomQ = getRandomPrime(min, max);
		}

		return new IndependentPrimes(randomP, randomQ);
	}

	private int getRandomPrime(int min, int max) {
		int randomPrime = ThreadLocalRandom.current().nextInt(min, max);
		while (!isPrime(randomPrime)) {
			randomPrime = ThreadLocalRandom.current().nextInt(min, max);
		}
		return randomPrime;
	}

	@Override
	public boolean isPrime(int number) {
		for (int i = 2; i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int getRandomCoprime(int coprimeTo, int min, int max) {
		int coprime = getRandomPrime(min, max);

		while (coprime == coprimeTo || coprime % coprimeTo == 0) {
			coprime = getRandomPrime(min, max);
		}

		return coprime;
	}

	/**
	 * @param p
	 * @param q
	 * @return array [d, a, b] such that d = gcd(p, q), ap + bq = d
	 */
	public int[] gcd(int p, int q) {
		if (q == 0)
			return new int[] { p, 1, 0 };

		int[] vals = gcd(q, p % q);
		int d = vals[0];
		int a = vals[2];
		int b = vals[1] - (p / q) * vals[2];
		return new int[] { d, a, b };
	}

	// TODO: not working yet
	@Override
	public String encryptText(String message, String key) {
		int e = Integer.valueOf(key.split("N")[0]);
		int N = Integer.valueOf(key.split("N")[1]);
		
		StringBuilder output = new StringBuilder();
		for (int i = 0; i < message.length(); i++) {
			char ch = message.charAt(i);
			double c = encryptNumber((int) ch, e, N);
			System.out.println(c);
			output.append(Character.toString((char)c));
		} 
		
		return output.toString();
	}
	
	@Override
	public int encrypt(int number, String key) {
		int e = Integer.valueOf(key.split("N")[0]);
		int N = Integer.valueOf(key.split("N")[1]);
		
		return BigInteger.valueOf((long) number).pow(e).mod(BigInteger.valueOf(N)).intValue();
	}

	private int encryptNumber(int m, int e, int N) {
		System.out.println("m=" + m + " e=" + e + " N=" + N);
		return BigInteger.valueOf(m).pow(e).mod(BigInteger.valueOf(N)).intValue();
	}
}
