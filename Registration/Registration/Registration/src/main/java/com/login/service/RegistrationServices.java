package com.login.service;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.login.model.Admin;
import com.login.model.Offers;
import com.login.model.Plans;
import com.login.model.Services;
import com.login.model.User;
import com.login.repository.*;

import net.bytebuddy.utility.RandomString;

@Service
public class RegistrationServices {
	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private CrudRepo repo;
	@Autowired
	private CrudRepos repos;
	@Autowired
	private CrudReposer reposer;
	@Autowired
	private CrudPlans plans;
	@Autowired
	private CrudOffers offers;

	public User saveUser(User user) {
		//String randomCode = RandomString.make(64);
		//user.setVerification_code(randomCode);
		return repo.save(user);
	}
	public Offers saveOffers(Offers off) {
		//String randomCode = RandomString.make(64);
		//user.setVerification_code(randomCode);
		return offers.save(off);
	}
	public Admin saveAdmin(Admin admin) {
		//String randomCode = RandomString.make(64);
		//user.setVerification_code(randomCode);
		return repos.save(admin);
	}
	public Services saveSer(Services ser) {
		//String randomCode = RandomString.make(64);
		//user.setVerification_code(randomCode);
		return reposer.save(ser);
	}
	public User fetchUserByPhone(String phoneNo)
	{
		return repo.findByPhoneNo(phoneNo);
	}
	public Offers fetchOfferByOfferId(String offerId)
	{
		return offers.findByOfferId(offerId);
	}

	
	public User fetchUserByEmailid(String email) {
		return repo.findByEmailId(email);

	}
	
	public Admin fetchAdminByEmailIdAndPassword(String email, String password) {
		
		return repos.findByEmailIdAndPassword(email, password);
		
	}


	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return repo.findByEmailIdAndPassword(email, password);

	}

	public User upUser(Integer id, String password) {

		
	 Optional<User> db= repo.findById(id); 
	 if(db.isPresent())
	 {
		 User uu = db.get();
		 uu.setPassword(password);
		 
	 }
	
	 User uu1 = db.get();
	 User uu2 = repo.save(uu1);
	 return uu2;
	 
		 
	}
	public void sendVerificationEmail(User user)
			throws UnsupportedEncodingException, MessagingException {
		// TODO Auto-generated method stub
		String subject = "Registration Successful";
		String sendeName = "voiz fonica team";
		String mailContent = "<p>Dear " + user.getFirstName() + ",</p>";
		mailContent += "<p>please click the link below to login:</p>";

		//String verifyURL = /* siteURL /"http://localhost:4401/login" / + "/verify?code=" + user.getVerificationcode() */;
		String loginURL = /* siteURL */"http://localhost:4401/login" /* + "/verify?code=" + user.getVerificationcode() */;
		mailContent += "<h3><a href=\"" + loginURL + "\">LogIn</a></h3>";

		mailContent += "<p>Thank you <br>The voiz fonica team</p>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("monishajrk@gmail.com", sendeName);
		helper.setTo(user.getEmailId());
		helper.setSubject(subject);

		helper.setText(mailContent, true);
		mailSender.send(message);

	}
	
	public Services sendEbill(Services ser)
			throws UnsupportedEncodingException, MessagingException {
		
		String subject = "Ebill";
		String sendeName = "Voiz Fonica team";
		String email=ser.getEmailId();
		User uu = fetchUserByEmailid(email);
		Plans pp = getPlanByPlanId(ser.getPlanId());
		String mailContent = "<p>Dear " + uu.getFirstName() + ",</p>";
		mailContent += "<p>Here's your Ebill for your plan.<br></p>";
		mailContent += "<div class=\"container\" style=\"background-color: oldlace;\">";
		mailContent += "<h1 style=\"color: black;background-color: red;text-align: center;font-size: xx-large;\">VoizFonica Telecom</h1>";
		
		mailContent += "<p style=\"color: blue;font-size: larger;\">Bill Summary<br>for <b>"+uu.getFirstName()+"</b><br>";
		mailContent += "Place -<b>"+uu.getCity()+"</b><br>";
		
		mailContent += "Email -<b>"+uu.getEmailId()+"</b><br>";
				
		mailContent += "Mob No. -<b>"+uu.getPhoneNo()+"</b><br>";
				
		mailContent += "Bill Date - <b>"+ser.getDate()+"</b><br>";
		mailContent+="Bill Period - <b>"+pp.getValidity()+" days</b><br>";
		mailContent+="Valid till - <b>"+ser.getEndDate()+"</b><br></p><hr>";
		mailContent += "<h1 style=\"color: black;font-weight: bolder;text-align: center;background-color: red;\">Congratulations!<br> You are on " +ser.getPlanId()+" plan</h1>";
		mailContent += "<div class=\"container\" style=\"background-color: White;\">";
			
		mailContent +="<table style=\"width: 100%;\" border=\"1\">";
		mailContent +="<tr>"
				+ "    <th colspan=\"4\" style=\"font-weight: bolder;font-size: xx-large;color: red;text-align: center;\" >Invoice</th>"
				+ "  </tr>";	
		mailContent +="<tr>"
				+ "    <th colspan=\"4\" style=\"font-weight: bold;font-size: x-large;color: red;text-align: center;\" >Invoice No. : "+ser.getId()+"</th>"
				+ "  </tr>";	
		mailContent +="<tr style=\"background-color: lightgray;\"><th style=\"font-weight: bolder;background-color: lightgray;\">Date</th>";
		mailContent +="<th style=\"width: 50%;font-weight: bolder;\">Product</th>";
		mailContent +="<th style=\"font-weight: bolder;\">Type</th>";
		mailContent +="<th style=\"font-weight: bolder;\">Amount</th></tr>";
		mailContent +="<tr><td>"+ser.getDate()+"</td>";
		mailContent +="<td>"+ser.getPlanId()+"</td>";
		mailContent +="<td>"+ser.getType()+"</td>";
		mailContent +="<td>"+ser.getAmount()+"</td></tr>";
		mailContent +="<tr style=\"color:red;background-color: lightgray;\" ><td colspan=\"3\">Total</td>"
				+ "    <td>"+ser.getAmount()+"</td></tr>";
		mailContent +="</table></div>";
		mailContent +="<p>To know more, Please visit the website <a href=http://localhost:4401>VoizFonica</a></p>";
		mailContent += "<p>Thank you <br>The voiz fonica team</p>";
		
		

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("monishajrk@gmail.com", sendeName);
		helper.setTo(email);
		helper.setSubject(subject);

		helper.setText(mailContent, true);
		mailSender.send(message);
		return ser;

	}

	public Services sendEbillOff(Services ser)
			throws UnsupportedEncodingException, MessagingException {
		
		String subject = "Ebill";
		String sendeName = "Voiz Fonica team";
		String email=ser.getEmailId();
		User uu = fetchUserByEmailid(email);
		Offers pp = getOfferByOfferId(ser.getPlanId());
		String mailContent = "<p>Dear " + uu.getFirstName() + ",</p>";
		mailContent += "<p>Here's your Ebill for your plan.<br></p>";
		mailContent += "<div class=\"container\" style=\"background-color: oldlace;\">";
		mailContent += "<h1 style=\"color: black;background-color: red;text-align: center;font-size: xx-large;\">VoizFonica Telecom</h1>";
		
		mailContent += "<p style=\"color: blue;font-size: larger;\">Bill Summary<br>for <b>"+uu.getFirstName()+"</b><br>";
		mailContent += "Place -<b>"+uu.getCity()+"</b><br>";
		
		mailContent += "Email -<b>"+uu.getEmailId()+"</b><br>";
				
		mailContent += "Mob No. -<b>"+uu.getPhoneNo()+"</b><br>";
				
		mailContent += "Bill Date - <b>"+ser.getDate()+"</b><br>";
		mailContent+="Bill Period - <b>"+pp.getValidity()+" days</b><br>";
		mailContent+="Valid till - <b>"+ser.getEndDate()+"</b><br></p><hr>";
		mailContent += "<h1 style=\"color: black;font-weight: bolder;text-align: center;background-color: red;\">Congratulations!<br> You are on " +ser.getPlanId()+" plan</h1>";
		mailContent += "<div class=\"container\" style=\"background-color: White;\">";
			
		mailContent +="<table style=\"width: 100%;\" border=\"1\">";
		mailContent +="<tr>"
				+ "    <th colspan=\"4\" style=\"font-weight: bolder;font-size: xx-large;color: red;text-align: center;\" >Invoice</th>"
				+ "  </tr>";	
		mailContent +="<tr>"
				+ "    <th colspan=\"4\" style=\"font-weight: bold;font-size: x-large;color: red;text-align: center;\" >Invoice No. : "+ser.getId()+"</th>"
				+ "  </tr>";
		mailContent +="<tr style=\"background-color: lightgray;\"><th style=\"font-weight: bolder;background-color: lightgray;\">Date</th>";
		mailContent +="<th style=\"width: 50%;font-weight: bolder;\">Product</th>";
		mailContent +="<th style=\"font-weight: bolder;\">Type</th>";
		mailContent +="<th style=\"font-weight: bolder;\">Amount</th></tr>";
		mailContent +="<tr><td>"+ser.getDate()+"</td>";
		mailContent +="<td>"+ser.getPlanId()+"</td>";
		mailContent +="<td>"+ser.getType()+"</td>";
		mailContent +="<td>"+ser.getAmount()+"</td></tr>";
		mailContent +="<tr style=\"color:red;background-color: lightgray;\" ><td colspan=\"3\">Total</td>"
				+ "    <td>"+ser.getAmount()+"</td></tr>";
		mailContent +="</table></div>";
		mailContent +="<p>To know more, Please visit the website <a href=http://localhost:4401>VoizFonica</a></p>";
		mailContent += "<p>Thank you <br>The voiz fonica team</p>";
		
		

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("monishajrk@gmail.com", sendeName);
		helper.setTo(email);
		helper.setSubject(subject);

		helper.setText(mailContent, true);
		mailSender.send(message);
		return ser;

	}
	
	public void sendPlanPayment(Services ser)
			throws UnsupportedEncodingException, MessagingException {
		String email=ser.getEmailId();
		String subject = "Payment Successful";
		Plans pp = getPlanByPlanId(ser.getPlanId());
		String sendeName = "voiz fonica team";
		User uu = fetchUserByEmailid(email);
		String mailContent = "<p>Dear " + uu.getFirstName() + ",</p>";
		mailContent += "<h2 style=\"color: blue;\">VoizFonica Telecom</h2><hr>";
		mailContent += "<p>Thank you for subscribing to <b>"+pp.getPlanName()+"</b> plan.<br>Details of your subscription:<br>";
		
				
		mailContent += "Product Name      : <b>"+pp.getPlanName()+"</b><br>";
		mailContent += "Product Id       : <b>"+ser.getPlanId()+"</b><br>";
		mailContent += "Registered Email : <b>"+ser.getEmailId()+"</b><br>";
		mailContent += "Mobile No.       : <b>"+ser.getPhoneNo()+"</b><br>";		
		mailContent += "Service Type  	 : <b>"+ser.getType()+"</b><br>";
		mailContent += "Data          	 : <b>"+pp.getData()+"</b><br>";
		mailContent += "Validity      	 : <b>"+pp.getValidity()+"</b><br>";
		mailContent += "Amount           : <b>"+ser.getAmount()+"</b><br>";
		mailContent += "Subscribed on    : <b>"+ser.getDate()+"</b><br>";
		mailContent += "Expires on       : <b>"+ser.getEndDate()+"</b></p>";
		mailContent += "<p>This is an auto generated mail. Please do not reply to this message or on this email address.\r\n"
				+ "For any query, please visit our website <a href=http://localhost:4401>VoizFonica</a>"+".</p>";
		mailContent += "<p><i><b>Note:Do not disclose any confidential information such as Username,Password,OTP etc. to anyone.</b></i></p>";
		//String verifyURL = /* siteURL /"http://localhost:4401/login" / + "/verify?code=" + user.getVerificationcode() */;
		String loginURL = /* siteURL */"http://localhost:4401/login" /* + "/verify?code=" + user.getVerificationcode() */;
//		mailContent += "<h3><a href=\"" + loginURL + "\">LogIn</a></h3>";

		mailContent += "<p>Thank you <br>The voiz fonica team</p>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("voizfonica.supp@gmail.com", sendeName);
		helper.setTo(email);
		helper.setSubject(subject);

		helper.setText(mailContent, true);
		mailSender.send(message);

	}
	public void sendOfferPayment(Services ser)
			throws UnsupportedEncodingException, MessagingException {
		String email=ser.getEmailId();
		String subject = "Payment Successful";
		Offers pp = getOfferByOfferId(ser.getPlanId());
		String sendeName = "voiz fonica team";
		User uu = fetchUserByEmailid(email);
		String mailContent = "<p>Dear " + uu.getFirstName() + ",</p>";
		mailContent += "<h2 style=\"color: blue;\">VoizFonica Telecom</h2><hr>";
		mailContent += "<p>Thank you for subscribing to <b>"+pp.getOfferName()+"</b> plan.<br>Details of your subscription:<br>";
		mailContent += "Product Name      : <b>"+pp.getOfferName()+"</b><br>";
		mailContent += "Product Id       : <b>"+ser.getPlanId()+"</b><br>";
		mailContent += "Registered Email : <b>"+ser.getEmailId()+"</b><br>";
		mailContent += "Mobile No.       : <b>"+ser.getPhoneNo()+"</b><br>";		
		mailContent += "Service Type  	 : <b>"+ser.getType()+"</b><br>";
		mailContent += "Data          	 : <b>"+pp.getData()+"</b><br>";
		mailContent += "Validity      	 : <b>"+pp.getValidity()+"</b><br>";
		mailContent += "Amount           : <b>"+ser.getAmount()+"</b><br>";
		mailContent += "Subscribed on    : <b>"+ser.getDate()+"</b><br>";
		mailContent += "Expires on       : <b>"+ser.getEndDate()+"</b></p>";
		mailContent += "<p>This is an auto generated mail. Please do not reply to this message or on this email address.\r\n"
				+ "For any query, please visit our website <a href=http://localhost:4401>VoizFonica</a>"+".</p>";
		mailContent += "<p><i><b>Note:Do not disclose any confidential information such as Username,Password,OTP etc. to anyone.</b></i></p>";
		//String verifyURL = /* siteURL /"http://localhost:4401/login" / + "/verify?code=" + user.getVerificationcode() */;
		String loginURL = /* siteURL */"http://localhost:4401/login" /* + "/verify?code=" + user.getVerificationcode() */;
//		mailContent += "<h3><a href=\"" + loginURL + "\">LogIn</a></h3>";

		mailContent += "<p>Thank you <br>The voiz fonica team</p>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("voizfonica.supp@gmail.com", sendeName);
		helper.setTo(email);
		helper.setSubject(subject);

		helper.setText(mailContent, true);
		mailSender.send(message);

	}
	public User upUserProf(Integer id, User user) {

		
		 Optional<User> db= repo.findById(id); 
		 if(db.isPresent())
		 {
			 User uu = db.get();
			 uu.setPassword(user.getPassword());
			 uu.setCity(user.getCity());
			 uu.setEmailId(user.getEmailId());
			 uu.setFirstName(user.getFirstName());
			 uu.setLastName(user.getLastName());
			 uu.setPhoneNo(user.getPhoneNo());
			 uu.setPincode(user.getPincode());
			 
		 }
		
		 User uu3 = db.get();
		 User uu4 = repo.save(uu3);
		 return uu4;
		 
			 
		}
	
	public Offers upOffer(Integer id, Offers off) {

		
		 Optional<Offers> db= offers.findById(id); 
		 if(db.isPresent())
		 {
			 Offers uu = db.get();
			uu.setAmount(off.getAmount());
			uu.setData(off.getData());
			uu.setOfferId(off.getOfferId());
			uu.setOfferName(off.getOfferName());
			uu.setValidity(off.getValidity());
			uu.setType(off.getType());
			 
		 }
		
		 Offers uu3 = db.get();
		 Offers uu4 = offers.save(uu3);
		 return uu4;
		 
			 
		}
	
	
	public User upUserProfe(String id, String pass) {
		User db=repo.findByEmailId(id);	 
		db.setPassword(pass);
		User rd =repo.save(db);
		return rd;
		}
	
	public Admin upAdminProfe(String id, String pass) {

		Admin db=repos.findByEmailId(id);	 
		db.setPassword(pass);
		Admin rd =repos.save(db);
		return rd;
		}

	public void deleteUserById(Integer id) {

		repo.deleteById(id);
	}
	
	public void deleteOfferById(Integer id) {

		offers.deleteById(id);
	}

	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public List<Offers> getAllOffers() {
		return offers.findAll();
	}
	
	public long getCount() {
		return repo.count();
	}
	
	public int getPreCount() {
		int pre=0;
		
		long len = reposer.count();
		for(int i = 1; i<=len;i++)
		{
			Services ser = reposer.findById(i);
			if((ser.getType()).equalsIgnoreCase("prepaid"))
					{
						pre=pre+1;
					}
			
		}
		return pre;
	}
	public int getPostCount() {
		
		int post=0;
		
		long len = reposer.count();
		for(int i = 1; i<=len;i++)
		{
			Services ser = reposer.findById(i);
			
			 if((ser.getType()).equalsIgnoreCase("postpaid"))
					{
						post=post+1;
					}
			
		}
		return post;
	}
	public int getDonCount() {
		
		int don=0;
		long len = reposer.count();
		for(int i = 1; i<=len;i++)
		{
			Services ser = reposer.findById(i);
			if((ser.getType()).equalsIgnoreCase("dongle"))
					{
						don=don+1;
					}
			
		}
		return don;
	}
	public List<Services> getAllServices() {
		return reposer.findAll();
	}
	
	public List<Plans> getAllPlans() {
		return plans.findAll();
	}
	
	public User getUserById(String emailId) {
		return repo.findByEmailId(emailId);
	}
	
	public Plans getPlanByPlanId(String planId)
	{
		return plans.findByPlanId(planId);
	}
	public Offers getOfferByOfferId(String planId)
	{
		return offers.findByOfferId(planId);
	}
	public Offers getOfferById(int id)
	{
		return offers.findByOfferId(id);
	}
	public Services getServiceById(String emailId)
	{
		return reposer.findByEmailId(emailId);
	}
	public Services getServiceByUniqueId(int id)
	{
		return reposer.findById(id);
	}
}
