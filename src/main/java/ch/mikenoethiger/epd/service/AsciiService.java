package ch.mikenoethiger.epd.service;

import org.springframework.stereotype.Service;

@Service
public class AsciiService {

	public long stringToAscii(String input) {
		StringBuilder concatenatedNumberValues = new StringBuilder();
		for (int i = 0; i < input.length(); i++) {
			char ch = input.charAt(i);
			concatenatedNumberValues.append(String.valueOf((int) ch)); 
		}
		
		return Long.valueOf(concatenatedNumberValues.toString());
	}
}
