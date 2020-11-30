package com.login.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String emailId;
	private String planId;
	private String phoneNo;
	private String amount;
	private String type;
	private String cat;
	
	private LocalDate startDate;
	private LocalDate endDate;
	
	public String getCat() {
		return cat;
	}



	public void setCat(String cat) {
		this.cat = cat;
	}



	public Services() {
		LocalDate myobj = LocalDate.now();
		this.startDate=myobj;
		
		
	}
	
	

	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPlanId() {
		return planId;
	}
	public void setPlanId(String planId) {
		this.planId = planId;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public LocalDate getDate() {
		return startDate;
	}
	public void setDate(LocalDate date) {
		this.startDate = date;
	}
	public LocalDate getEndDate() {
		return endDate;
	}
	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
	
}
