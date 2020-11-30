package com.login.controller;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.model.Admin;
import com.login.model.Offers;
import com.login.model.Plans;
import com.login.model.Services;
import com.login.model.User;
import com.login.repository.CrudRepo;
import com.login.service.RegistrationServices;

@RestController
public class RegistrationController {

	@Autowired
	private  RegistrationServices service;
	
	
	@GetMapping("/users")
	@CrossOrigin(origins = "http://localhost:4401")
	public List<User> getUsers(){		
		return service.getAllUsers();
		}
	
	@GetMapping("/offers")
	@CrossOrigin(origins = "http://localhost:4401")
	public List<Offers> getOffers(){		
		return service.getAllOffers();
		}
	
	@GetMapping("/count")
	@CrossOrigin(origins = "http://localhost:4401")
	public long getUsersCount(){		
		return service.getCount();
		}
	
	@GetMapping("/precount")
	@CrossOrigin(origins = "http://localhost:4401")
	public int getPrepaidCount(){		
		return service.getPreCount();
		}
	
	@GetMapping("/postcount")
	@CrossOrigin(origins = "http://localhost:4401")
	public int getPostpaidCount(){		
		return service.getPostCount();
		}
	
	@GetMapping("/donglecount")
	@CrossOrigin(origins = "http://localhost:4401")
	public int getDongleCount(){		
		return service.getDonCount();
		}
	
	@PostMapping("/ebill")
	@CrossOrigin(origins = "http://localhost:4401")
	public Services sendebill(@RequestBody Services ser) throws UnsupportedEncodingException, MessagingException{
		return service.sendEbill(ser);
	}
	
	@PostMapping("/ebillOff")
	@CrossOrigin(origins = "http://localhost:4401")
	public Services sendebillOff(@RequestBody Services ser) throws UnsupportedEncodingException, MessagingException{
		return service.sendEbillOff(ser);
	}
	
	@GetMapping("/users/{emailId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User getById(@PathVariable("emailId") String emailId){
		return service.getUserById(emailId);
	}
	
	@GetMapping("/services/{emailId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Services getServiceById(@PathVariable("emailId") String emailId){
		return service.getServiceById(emailId);
	}
	
	@GetMapping("/servicesplan/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Services getServiceById(@PathVariable("id") int id){
		return service.getServiceByUniqueId(id);
	}
	
	@GetMapping("/serusers/{planId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Plans getByPlanId(@PathVariable("planId") String planId){
		return service.getPlanByPlanId(planId);
	}
	
	@GetMapping("/seroffers/{planId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Offers getByOfferId(@PathVariable("planId") String planId){
		return service.getOfferByOfferId(planId);
	}
	
	@GetMapping("/seroff/{planId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Offers getByOfferId(@PathVariable("planId") int id){
		return service.getOfferById(id);
	}
	
	@GetMapping("/serusers")
	@CrossOrigin(origins = "http://localhost:4401")
	public List<Services> getServices(){

		return service.getAllServices();
	}
	
	@GetMapping("/plans")
	@CrossOrigin(origins = "http://localhost:4401")
	public List<Plans> getPlans(){

		return service.getAllPlans();
	}
	
	@PostMapping("/pay")
	@CrossOrigin(origins = "http://localhost:4401")	
	public Services pay(@RequestBody Services ser) throws UnsupportedEncodingException, MessagingException
	{
		Plans p = service.getPlanByPlanId(ser.getPlanId());
		LocalDate st=ser.getDate();
		ser.setEndDate(st.plusDays(p.getValidity()));

//		service.sendPaymentEmail(ser.getEmailId());
		service.sendPlanPayment(ser);
//		service.sendEbill(ser);
		service.saveSer(ser);
		return ser;
	}
	
	@PostMapping("/payOffers")
	@CrossOrigin(origins = "http://localhost:4401")	
	public Services payOffer(@RequestBody Services ser) throws UnsupportedEncodingException, MessagingException
	{
		Offers p = service.getOfferByOfferId(ser.getPlanId());
		LocalDate st=ser.getDate();
		ser.setEndDate(st.plusDays(p.getValidity()));

//		service.sendPaymentEmail(ser.getEmailId());
		service.sendOfferPayment(ser);
//		service.sendEbill(ser);
		service.saveSer(ser);
		return ser;
	}
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4401")	
	public User registerUser(@RequestBody User user) throws Exception {
		
		String tempEmailId=user.getEmailId();
		String tempPhoneNo=user.getPhoneNo();
		if(tempPhoneNo !=null && !"".equals(tempPhoneNo)) {
			User userObj1=service.fetchUserByPhone(tempPhoneNo);
			if(userObj1!=null)
			{
				throw new Exception("user with"+tempPhoneNo+"is already exists");
			}
		}
		
		if(tempEmailId !=null && !"".equals(tempEmailId)) {
		User userobj=	service.fetchUserByEmailid(tempEmailId);
		if(userobj !=null) {
			throw new Exception("User with "+tempEmailId+"is already exists");
		}
	}
	
	
	
		User userObj=null;
		
		userObj=service.saveUser(user);
		service.sendVerificationEmail(user);
		return userObj;
		
	}	
	
	@PostMapping("/registeroffer")
	@CrossOrigin(origins = "http://localhost:4401")	
	public Offers registerOffer(@RequestBody Offers offers) throws Exception {
		

		String tempOfferId=offers.getOfferId();
		
		if(tempOfferId !=null && !"".equals(tempOfferId)) {
			Offers offersObj1=service.fetchOfferByOfferId(tempOfferId);
			if(offersObj1!=null)
			{
				throw new Exception("offer with"+tempOfferId+"is already existing");
			}
		}
		
		Offers offersObj=null;
		
		offersObj=service.saveOffers(offers);

		return offersObj;
		
	}	
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4401")

	public User loginUser(@RequestBody User user) throws Exception {
		
		String tempEmail=user.getEmailId();
		String tempPass=user.getPassword();
		User userObj=null;
		if(tempEmail !=null && tempPass != null) {
			userObj=service.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credintials");
		}
		
		return userObj;
		

	}	
	
	
	
	@PostMapping("/loginadmin")
	@CrossOrigin(origins = "http://localhost:4401")

	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {

		String tempEmail=admin.getEmailId();
		String tempPass=admin.getPassword();
		Admin userObj=null;
		if(tempEmail !=null && tempPass != null) {
			userObj=service.fetchAdminByEmailIdAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credintials");
		}
		
		return userObj;
	
	}
	
	@DeleteMapping("/removeuser/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public void deleteUser(@PathVariable("id") Integer id)  {		
		service.deleteUserById(id);	
	}
	
	@DeleteMapping("/removeoffer/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public void deleteOffer(@PathVariable("id") Integer id)  {		
		service.deleteOfferById(id);	
	}
	
	
	
	@PutMapping("/update/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
		String newPass=user.getPassword();
		return service.upUser(id, newPass);
	}
	
	@PutMapping("/updateprofile/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User updateUserProf(@PathVariable("id") Integer id, @RequestBody User user) {
		//String newPass=user.getPassword();
		return service.upUserProf(id, user);
	}
	
	@PutMapping("/updateoffer/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Offers updateOffer(@PathVariable("id") Integer id, @RequestBody Offers offer) {
		//String newPass=user.getPassword();
		return service.upOffer(id, offer);
	}
	
	@PutMapping("/updatepassword/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User updateUserPassword(@PathVariable("id") String id,@RequestBody String pass) {
		//String newPass=user.getPassword();
		return service.upUserProfe(id, pass);
	}
	
	@PutMapping("/updateadminpassword/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public Admin updateAdminPassword(@PathVariable("id") String id,@RequestBody String pass) {
		//String newPass=user.getPassword();
		return service.upAdminProfe(id, pass);
	}
	
}
