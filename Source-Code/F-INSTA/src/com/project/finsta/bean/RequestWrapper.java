package com.project.finsta.bean;

public class RequestWrapper {
	
	private String userId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "RequestWrapper [userId=" + userId + "]";
	}

}
