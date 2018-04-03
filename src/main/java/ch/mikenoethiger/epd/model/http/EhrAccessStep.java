package ch.mikenoethiger.epd.model.http;

public class EhrAccessStep {

	private String title;
	private String description;
	private boolean valid;

	public EhrAccessStep(String title, String description, boolean valid) {
		super();
		this.title = title;
		this.description = description;
		this.valid = valid;
	}

	public EhrAccessStep() {
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

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

}
