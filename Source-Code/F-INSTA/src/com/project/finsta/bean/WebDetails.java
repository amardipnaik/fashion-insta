package com.project.finsta.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="web_details")
public class WebDetails {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="banner")
	private String banner;
	
	@Column(name="contact_us_phone")
	private String contactUsPhone;
	
	@Column(name="contact_us_email")
	private String contactUsEmail;
	
	@Override
	public String toString() {
		return "WebDetails [id=" + id + ", banner=" + banner + ", contactUsPhone=" + contactUsPhone
				+ ", contactUsEmail=" + contactUsEmail + ", about_Us=" + about_Us + ", getId()=" + getId()
				+ ", getBanner()=" + getBanner() + ", getContactUsPhone()=" + getContactUsPhone()
				+ ", getContactUsEmail()=" + getContactUsEmail() + ", getAbout_Us()=" + getAbout_Us() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBanner() {
		return banner;
	}

	public void setBanner(String banner) {
		this.banner = banner;
	}

	public String getContactUsPhone() {
		return contactUsPhone;
	}

	public void setContactUsPhone(String contactUsPhone) {
		this.contactUsPhone = contactUsPhone;
	}

	public String getContactUsEmail() {
		return contactUsEmail;
	}

	public void setContactUsEmail(String contactUsEmail) {
		this.contactUsEmail = contactUsEmail;
	}

	public String getAbout_Us() {
		return about_Us;
	}

	public void setAbout_Us(String about_Us) {
		this.about_Us = about_Us;
	}

	@Column(name="about_us")
	private String about_Us;


	
	
	


	
	
	
	
	
	
	
}
