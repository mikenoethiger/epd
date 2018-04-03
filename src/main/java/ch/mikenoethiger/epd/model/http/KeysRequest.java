package ch.mikenoethiger.epd.model.http;

public class KeysRequest {

	private int size;

	public KeysRequest(int size) {
		super();
		this.size = size;
	}
	
	public KeysRequest() {
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}
	
	
}
