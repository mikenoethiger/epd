package ch.mikenoethiger.epd.model.http;

public class GetPkOwnerNameRequest {

	private String name;

	public GetPkOwnerNameRequest(String name) {
		super();
		this.name = name;
	}

	public GetPkOwnerNameRequest() {
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
