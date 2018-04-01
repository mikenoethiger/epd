package ch.mikenoethiger.epd.to_be_moved;

import org.springframework.web.multipart.MultipartFile;

public class EhrPostRequest {

	private final String ehrName;
    private final MultipartFile ehrImage;
    
	public EhrPostRequest(String ehrName, MultipartFile ehrImage) {
		super();
		this.ehrName = ehrName;
		this.ehrImage = ehrImage;
	}

	public String getEhrName() {
		return ehrName;
	}

	public MultipartFile getEhrImage() {
		return ehrImage;
	}
}
