package ch.mikenoethiger.epd.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ehr")
public class Ehr {
	
	@Id
	String id;
	String name;
	String imageUrl;
	List<String> permittedPublicKeys;
	
	public Ehr() {}
	
	public Ehr(String name, String imageUrl, List<String> permittedPublicKeys) {
		this.name = name;
		this.imageUrl = imageUrl;
		this.permittedPublicKeys = permittedPublicKeys;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setPermittedPublicKeys(List<String> permittedPublicKeys) {
		this.permittedPublicKeys = permittedPublicKeys;
	}

	public List<String> getPermittedPublicKeys() {
		return permittedPublicKeys;
	}

	public void setName(List<String> permittedPublicKeys) {
		this.permittedPublicKeys = permittedPublicKeys;
	}

}
