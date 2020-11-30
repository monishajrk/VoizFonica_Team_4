package com.login.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.login.model.Services;


public interface CrudReposer extends JpaRepository<Services, String>{

	public Services findByEmailId(String id);
	public Services findById(int id);

	
	
}
