package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String emailId;
private String password;
public Admin() {}
public Admin(int id, String emailId, String userName, String password) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.password = password;
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
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


}
