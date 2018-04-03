package ch.mikenoethiger.epd.model.http;

public class EhrAccessRequest {

	private String requesterPublicKey;
	private int requesterSignature;
	
	public EhrAccessRequest(String requesterPublicKey, int requesterSignature) {
		super();
		this.requesterPublicKey = requesterPublicKey;
		this.requesterSignature = requesterSignature;
	}
	
	public EhrAccessRequest() {
		// TODO Auto-generated constructor stub
	}

	public String getRequesterPublicKey() {
		return requesterPublicKey;
	}

	public void setRequesterPublicKey(String requesterPublicKey) {
		this.requesterPublicKey = requesterPublicKey;
	}

	public int getRequesterSignature() {
		return requesterSignature;
	}

	public void setRequesterSignature(int requesterSignature) {
		this.requesterSignature = requesterSignature;
	}
	
	
}
