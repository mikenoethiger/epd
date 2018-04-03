package ch.mikenoethiger.epd;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;

import org.junit.Test;

public class KeyGeneratorTest {

	@Test
	public void test2() {
		System.out.println(stringToAscii("嵾"));
	}
	
	public long stringToAscii(String input) {
		StringBuilder concatenatedNumberValues = new StringBuilder();
		for (int i = 0; i < input.length(); i++) {
			char ch = input.charAt(i);
			concatenatedNumberValues.append(String.valueOf((int) ch)); 
		}
		
		return Long.valueOf(concatenatedNumberValues.toString());
	}

	@Test
	public void test() throws NoSuchAlgorithmException {
		KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
		keyPairGenerator.initialize(512);
		KeyPair keyPair = keyPairGenerator.genKeyPair();

		// extract the encoded private key, this is an unencrypted PKCS#8 private key
		byte[] encodedPrivateKey = keyPair.getPrivate().getEncoded();
		byte[] encodedPublicKey = keyPair.getPublic().getEncoded();

		// int decimal = Integer.parseInt(new
		// String(keyPair.getPrivate().getEncoded()),2);
		// String hexStr = Integer.toString(decimal,16);

		System.out.println("Private Key hexStr:");
		System.out.println(bytesToHex(keyPair.getPrivate().getEncoded()));
	}

	private final static char[] hexArray = "0123456789ABCDEF".toCharArray();

	public static String bytesToHex(byte[] bytes) {
		char[] hexChars = new char[bytes.length * 2];
		for (int j = 0; j < bytes.length; j++) {
			int v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}
}
