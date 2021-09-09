package com.project.dsvendas.dto;

import java.io.Serializable;

import com.project.dsvendas.entities.Seller;

public class SaleSumDto implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double sum;
	
	public SaleSumDto() {
	}

	public SaleSumDto(Seller seller, Double sum) {
		setSellerName(seller.getName());
		this.setSum(sum);
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}

	
}
