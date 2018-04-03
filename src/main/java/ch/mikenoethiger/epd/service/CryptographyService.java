package ch.mikenoethiger.epd.service;

public interface CryptographyService {

	/**
	 * @param digits number of digits for each number, 1 digit means a number between 0-9, 2 digits means a number between 10-99
	 * @return
	 */
	public IndependentPrimes generateIndependantPrimes(int digits);
	
	/**
	 * @return two digit long independent primes
	 */
	public default IndependentPrimes generateIndependantPrimes() {
		return generateIndependantPrimes(2);
	}
	
	public boolean isPrime(int number);
	
	public int getRandomCoprime(int coprimeTo, int min, int max);
	public int[] gcd(int p, int q);
	
	public String encryptText(String message, String key);
	public int encrypt(int number, String key);
}
