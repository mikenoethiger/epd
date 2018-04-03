package ch.mikenoethiger.epd.model.http;

public class EntitlePermissionStep {

	private boolean valid;
	private String title;
	private String description;

	public EntitlePermissionStep() {
	}

	public EntitlePermissionStep(boolean valid, String title, String description) {
		super();
		this.valid = valid;
		this.title = title;
		this.description = description;
	}

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
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
