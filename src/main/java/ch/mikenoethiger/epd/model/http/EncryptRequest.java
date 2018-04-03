package ch.mikenoethiger.epd.model.http;

public class EncryptRequest {

	private String key;
	private int number;
	private int encryptedNumber;

	public EncryptRequest(String key, int number, int encryptedNumber) {
		super();
		this.key = key;
		this.number = number;
		this.encryptedNumber = encryptedNumber;
	}
	
	public EncryptRequest() {
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public int getEncryptedNumber() {
		return encryptedNumber;
	}

	public void setEncryptedNumber(int encryptedNumber) {
		this.encryptedNumber = encryptedNumber;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}
}
