package ch.mikenoethiger.epd.model.http;

import java.util.List;

public class EntitleResponse {

	private boolean valid;
	private List<EntitlePermissionStep> permissionSteps;
	
	public EntitleResponse() {
	}
	
	public EntitleResponse(boolean valid, List<EntitlePermissionStep> entitlePermissionSteps) {
		super();
		this.valid = valid;
		this.permissionSteps = entitlePermissionSteps;
	}

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public List<EntitlePermissionStep> getPermissionSteps() {
		return permissionSteps;
	}

	public void setPermissionSteps(List<EntitlePermissionStep> entitlePermissionSteps) {
		this.permissionSteps = entitlePermissionSteps;
	}
	
	
	
}
