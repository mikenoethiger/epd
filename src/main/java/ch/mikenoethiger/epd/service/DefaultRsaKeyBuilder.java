package ch.mikenoethiger.epd.service;

import java.util.ArrayList;
import java.util.List;

import ch.mikenoethiger.epd.model.KeyCreationStep;

public class DefaultRsaKeyBuilder implements RsaKeyBuilder {

	private final CryptographyService cryptographyService;
	
	private final IndependentPrimes independentPrimes;
	private final int e;
	private final int d;
	private final int k;
	private final List<KeyCreationStep> keyCreationSteps = new ArrayList<>();
	
	public DefaultRsaKeyBuilder(CryptographyService cryptographyService, IndependentPrimes independentPrimes) {
		this.independentPrimes = independentPrimes;
		this.cryptographyService = cryptographyService;
		
		// Step 4: https://de.wikipedia.org/wiki/RSA-Kryptosystem#Erzeugung_des_%C3%B6ffentlichen_und_privaten_Schl%C3%BCssels
		this.e = cryptographyService.getRandomCoprime(getPhiOfModulus(), 2, getPhiOfModulus()-1);
		this.d = cryptographyService.gcd(this.e, this.getPhiOfModulus())[1];
		this.k = cryptographyService.gcd(this.e, this.getPhiOfModulus())[2];
		
		keyCreationSteps.add(new KeyCreationStep("Primzahlen definieren", String.format("Wähle zufällig und stochastisch unabhängig zwei Primzahlen  <mark>p</mark> &ne; <mark>q</mark>. <br><mark>p=<b>%s</b></mark> und <mark>q=<b>%s</b></mark>.", this.independentPrimes.getP(), this.independentPrimes.getQ())));
		keyCreationSteps.add(new KeyCreationStep("RSA-Modul berechnen", String.format("<mark>N = p &sdot; q</mark> &rarr; <mark>N = %s &sdot; %s = <b>%s</b></mark>.", this.independentPrimes.getP(), this.independentPrimes.getQ(), this.getModulus())));
		keyCreationSteps.add(new KeyCreationStep("Phi von N berechnen", String.format("<mark>&phi;(N) = (p-1) &sdot; (q-1)</mark> &rarr; <mark>&phi;(N) = %s &sdot; %s = <b>%s</b></mark>.", this.independentPrimes.getP()-1, this.independentPrimes.getQ()-1, this.getPhiOfModulus())));
		keyCreationSteps.add(new KeyCreationStep("Ersten Schlüssel definieren", String.format("Wähle eine zu &phi;(N) teilerfremde Zahl <mark>e</mark>, für die gilt <mark>1 &lt; e &lt; &phi;(N)</mark>. <br><mark>e=<b>%s</b></mark>", this.getE())));
		keyCreationSteps.add(new KeyCreationStep("Zweiten Schlüssel errechnen", String.format("Entschlüsselungsexponenten <mark>d</mark> berechnen als Multiplikatives Inverses von <mark>e</mark> bezüglich des Moduls <mark>&phi;(N)</mark>. Es soll also die folgende Kongruenz gelten <mark>e &sdot; d &equiv; 1  (mod &phi;(N))</mark> <br><br><mark>e &sdot; d + k &sdot; &phi;(N) = 1 = ggT(e, &phi;(N))</mark> <br>&rarr; <mark>%s &sdot; <b>%s</b> + (%s) &sdot; %s = 1</mark> <br>&rarr;<mark>d = <b>%s</b></mark>", this.getE(), this.getD(), this.getK(), this.getPhiOfModulus(), this.getD())));
	}
	
	@Override
	public int getP() {
		return independentPrimes.getP();
	}

	@Override
	public int getQ() {
		return independentPrimes.getQ();
	}

	@Override
	public int getModulus() {
		return independentPrimes.getP()*independentPrimes.getQ();
	}

	@Override
	public int getPhiOfModulus() {
		return (independentPrimes.getP()-1)*(independentPrimes.getQ()-1);
	}

	@Override
	public int getE() {
		return this.e;
	}

	@Override
	public int getD() {
		return this.d;
	}

	@Override
	public int getK() {
		return k;
	}

	@Override
	public String toString() {
		return "DefaultRsaKeyBuilder [cryptographyService=" + cryptographyService + ", independentPrimes="
				+ independentPrimes + ", e=" + e + ", d=" + d + ", k=" + k + "]";
	}

	@Override
	public String getPublicKey() {
		return String.valueOf(getE()) + "N" + getModulus();
	}

	@Override
	public String getPrivateKey() {
		return String.valueOf(getD()) + "N" + getModulus();
	}

	@Override
	public List<KeyCreationStep> getKeyCreationSteps() {
		return keyCreationSteps;
	}
}
