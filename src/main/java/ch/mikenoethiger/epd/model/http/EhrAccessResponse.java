package ch.mikenoethiger.epd.model.http;

import java.util.List;

public class EhrAccessResponse {

	private boolean valid;
	private List<EhrAccessStep> ehrAccessSteps;
	
	public EhrAccessResponse() {
	}

	public EhrAccessResponse(boolean valid, List<EhrAccessStep> ehrAccessSteps) {
		super();
		this.valid = valid;
		this.ehrAccessSteps = ehrAccessSteps;
	}

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public List<EhrAccessStep> getEhrAccessSteps() {
		return ehrAccessSteps;
	}

	public void setEhrAccessSteps(List<EhrAccessStep> ehrAccessSteps) {
		this.ehrAccessSteps = ehrAccessSteps;
	}
}
