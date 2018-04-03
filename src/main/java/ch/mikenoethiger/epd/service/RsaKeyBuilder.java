package ch.mikenoethiger.epd.service;

import java.util.List;

import ch.mikenoethiger.epd.model.KeyCreationStep;

public interface RsaKeyBuilder {

	public int getP();
	public int getQ();
	public int getModulus();
	public int getPhiOfModulus();
	public int getE();
	public int getD();
	public int getK();
	public String getPublicKey();
	public String getPrivateKey();
	public List<KeyCreationStep> getKeyCreationSteps();
}
