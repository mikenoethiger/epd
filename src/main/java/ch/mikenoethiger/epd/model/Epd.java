package ch.mikenoethiger.epd.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "epd")
public class Epd {
	
	@Id
	String id;
	String name;
	String publicKey;
	List<Ehr> ehrs;
	
	public Epd() {}
	
	public Epd(String name, String publicKey, List<Ehr> ehrs) {
		this.name = name;
		this.ehrs = ehrs;
		this.publicKey = publicKey;
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
	
	public String getPublicKey() {
		return publicKey;
	}

	public void setPublicKey(String publicKey) {
		this.publicKey = publicKey;
	}

	public List<Ehr> getEhrs() {
		return ehrs;
	}

	public void setEhrs(List<Ehr> ehrs) {
		this.ehrs = ehrs;
	}
}
