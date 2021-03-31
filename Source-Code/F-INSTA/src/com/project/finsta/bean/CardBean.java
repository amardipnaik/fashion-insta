package com.project.finsta.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="card")
public class CardBean {
	
	@Override
	public String toString() {
		return "CardBean [id=" + id + ", productId=" + productId + ", userId=" + userId + ", trasactionType="
				+ trasactionType + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getTrasactionType() {
		return trasactionType;
	}

	public void setTrasactionType(String trasactionType) {
		this.trasactionType = trasactionType;
	}

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="product_id")
	private Long productId;
	
	@Column(name="user_id")
	private Long userId;
	
	@Column(name="trasaction_type")
	private String trasactionType;
	
	

}
