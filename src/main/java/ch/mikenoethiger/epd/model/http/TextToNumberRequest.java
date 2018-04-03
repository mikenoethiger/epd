package ch.mikenoethiger.epd.model.http;

public class TextToNumberRequest {

	private String text;
	private Long number;

	public TextToNumberRequest(String text, Long number) {
		super();
		this.text = text;
		this.number = number;
	}
	
	public TextToNumberRequest() {
		// TODO Auto-generated constructor stub
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getNumber() {
		return number;
	}

	public void setNumber(Long number) {
		this.number = number;
	}
	
}
