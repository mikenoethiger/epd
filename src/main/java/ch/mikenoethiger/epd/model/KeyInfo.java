package ch.mikenoethiger.epd.model;

import java.util.List;

public class KeyInfo {

	private final int p;
	private final int q;
	private final int e;
	private final int d;
	private final String publicKey;
	private final String privateKey;
	private final int k;
	private final int modulus;
	private final int phiModulus;
	private final List<KeyCreationStep> keyCreationSteps;
	
	public KeyInfo(int p, int q, int e, int d, String publicKey, String privateKey, int k, int modulus, int phiModulus, List<KeyCreationStep> keyCreationSteps) {
		super();
		this.p = p;
		this.q = q;
		this.e = e;
		this.d = d;
		this.publicKey = publicKey;
		this.privateKey = privateKey;
		this.k = k;
		this.modulus = modulus;
		this.phiModulus = phiModulus;
		this.keyCreationSteps = keyCreationSteps;
	}

	public int getP() {
		return p;
	}

	public int getQ() {
		return q;
	}

	public String getPublicKey() {
		return publicKey;
	}

	public String getPrivateKey() {
		return privateKey;
	}

	public int getK() {
		return k;
	}

	public int getModulus() {
		return modulus;
	}

	public int getPhiModulus() {
		return phiModulus;
	}

	public int getE() {
		return e;
	}

	public int getD() {
		return d;
	}

	public List<KeyCreationStep> getKeyCreationSteps() {
		return keyCreationSteps;
	}
	
}
