package com.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Admin;
import com.login.model.User;

public interface CrudRepo extends JpaRepository<User, Integer>
{
	public User findByEmailId(String emailId);
	
	public User findByEmailIdAndPassword(String email, String password);
	public User findByPhoneNo(String phoneNo);
	
	
}
 