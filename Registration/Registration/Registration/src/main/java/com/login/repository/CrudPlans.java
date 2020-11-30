package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.login.model.Plans;



public interface CrudPlans extends JpaRepository<Plans, Integer>{
	public Plans findByPlanId(String planId);
}
