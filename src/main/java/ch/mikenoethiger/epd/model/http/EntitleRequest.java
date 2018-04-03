package ch.mikenoethiger.epd.model.http;

public class EntitleRequest {

	private String publicKey;
	private int signature;
	
	public EntitleRequest() {
	}

	public EntitleRequest(String publicKey, int signature) {
		super();
		this.publicKey = publicKey;
		this.signature = signature;
	}

	public String getPublicKey() {
		return publicKey;
	}

	public void setPublicKey(String publicKey) {
		this.publicKey = publicKey;
	}

	public int getSignature() {
		return signature;
	}

	public void setSignature(int signature) {
		this.signature = signature;
	}
	
	
}
