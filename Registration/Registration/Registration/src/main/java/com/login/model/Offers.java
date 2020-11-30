package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Offers {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String offerId;
	private String offerName;
	private String type;
	private int amount;
	private String data;
	private long validity;
	public int getId() {
		return id;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}
	public String getOfferName() {
		return offerName;
	}
	public void setOfferName(String offerName) {
		this.offerName = offerName;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public long getValidity() {
		return validity;
	}
	public void setValidity(long validity) {
		this.validity = validity;
	}
	public String getOfferId() {
		return offerId;
	}
	
}
