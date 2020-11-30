package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Offers;

public interface CrudOffers extends JpaRepository<Offers, Integer> {

	public Offers findByOfferId(String offerId);

	public Offers findByOfferId(int id);

}
