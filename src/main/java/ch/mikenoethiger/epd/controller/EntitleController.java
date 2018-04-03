package ch.mikenoethiger.epd.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.mikenoethiger.epd.httperror.ResourceNotFoundException;
import ch.mikenoethiger.epd.model.Ehr;
import ch.mikenoethiger.epd.model.http.EntitlePermissionStep;
import ch.mikenoethiger.epd.model.http.EntitleRequest;
import ch.mikenoethiger.epd.model.http.EntitleResponse;
import ch.mikenoethiger.epd.repository.EhrRepository;
import ch.mikenoethiger.epd.repository.EpdRepository;
import ch.mikenoethiger.epd.service.CryptographyService;

@RestController
public class EntitleController {

	@Autowired
	EpdRepository epdRepository;
	@Autowired
	EhrRepository ehrRepository;
	@Autowired
	GridFsOperations gridOperations;
	@Autowired
	CryptographyService cryptographyService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/entitle/{id}")
	public EntitleResponse ehrAccessRequest(@PathVariable String id, @RequestBody() EntitleRequest entitleRequest) {
		Ehr ehr = ehrRepository.findById(id).orElseGet(() -> null);
		if (ehr == null) {
			throw new ResourceNotFoundException();
		}
		
		List<EntitlePermissionStep> entitlePermissionSteps = new ArrayList<>();
		
		int decryptedSignature = cryptographyService.encrypt(entitleRequest.getSignature(), ehr.getOwnerPublicKey());
		boolean signatureValid = decryptedSignature == 12345;
		int m = entitleRequest.getSignature();
		String e = ehr.getOwnerPublicKey().split("N")[0];
		String N = ehr.getOwnerPublicKey().split("N")[1];
		
		EntitlePermissionStep entitlePermissionStep = new EntitlePermissionStep();
		entitlePermissionStep.setTitle("Signatur prüfen");
		if (signatureValid) {
			entitlePermissionStep.setDescription(String.format("Die Signatur muss vom Eigentümer des EPDs erstellt worden sein. Der Eigentümer ist %s mit dem Public Key %s. Die Signatur muss entschlüsselt mit diesem Public Key 12345 ergeben. <br><br><mark>%s<sup>%s</sup> mod %s = <b>%s</b></mark><br><b>Signatur gültig</b>", ehr.getOwnerName(), ehr.getOwnerPublicKey(), m, e, N, decryptedSignature));
			ehr.getPermittedPublicKeys().add(entitleRequest.getPublicKey());
			ehrRepository.save(ehr);
		} else {
			entitlePermissionStep.setDescription(String.format("Die Signatur muss vom Eigentümer des EPDs erstellt worden sein. Der Eigentümer ist %s mit dem Public Key %s. Die Signatur muss entschlüsselt mit diesem Public Key 12345 ergeben. <br><br><mark>%s<sup>%s</sup> mod %s = <b>%s</b></mark><br><b>Signatur ungültig!</b>", ehr.getOwnerName(), ehr.getOwnerPublicKey(), m, e, N, decryptedSignature));
		}
		entitlePermissionStep.setValid(signatureValid);
		entitlePermissionSteps.add(entitlePermissionStep);
		
		boolean allValid = signatureValid;
		return new EntitleResponse(allValid, entitlePermissionSteps);
	}
}
