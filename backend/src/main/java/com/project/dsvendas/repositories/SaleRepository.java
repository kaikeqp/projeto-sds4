package com.project.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
