package com.santosediego.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}