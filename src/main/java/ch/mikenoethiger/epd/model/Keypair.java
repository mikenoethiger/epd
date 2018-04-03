package ch.mikenoethiger.epd.model;

public class Keypair {

	private final String privateKey;
	private final String publicKey;

	public Keypair(String privateKey, String publicKey) {
		super();
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}

	public String getPrivateKey() {
		return privateKey;
	}

	public String getPublicKey() {
		return publicKey;
	}

}
