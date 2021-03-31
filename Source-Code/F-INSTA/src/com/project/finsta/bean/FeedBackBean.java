package com.project.finsta.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
public class FeedBackBean {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	



	@Column(name="username")
	private String username;
	
	@Column(name="email")
	private String email;
	
	@Column(name="feedback")
	private String feedback;
	
	@Column(name="delete_flag")
	private String deleteFlag;
	

	@Override
	public String toString() {
		return "FeedBackBean [id=" + id + ", username=" + username + ", email=" + email + ", feedback=" + feedback
				+ ", deleteFlag=" + deleteFlag + "]";
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
	


	
	
	
	
	
	
	
}
