package ch.mikenoethiger.epd.model;

public class KeyCreationStep {

	private String title;
	private String description;

	public KeyCreationStep(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}

	public KeyCreationStep() {
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
