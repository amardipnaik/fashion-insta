package com.project.finsta.service;

import java.util.List;

import com.project.finsta.bean.CardBean;
import com.project.finsta.bean.FeedBackBean;
import com.project.finsta.bean.Notification;
import com.project.finsta.bean.OrderBean;
import com.project.finsta.bean.ProductBean;
import com.project.finsta.bean.UserBean;
import com.project.finsta.bean.WebDetails;



public interface IUserBeanService {
	
	
	public void adduserBean(UserBean userBean);
	public void updateuserBean(UserBean userBean);
	public List<UserBean> listuserBean(String isTor);
	public UserBean getuserBeanById(int id);
	public void removeuserBean(int id);
	
	public List<UserBean> userList();

public List<FeedBackBean> feedbackList();
	
	public List<ProductBean> productList();
	
	public List<WebDetails> webDetailsList();
	
	public void addProduct(ProductBean productBean) ;
	
	public void updateProduct(ProductBean productBean);
	
	public void updateFeedback(FeedBackBean feedBackBean);
	
	public void updateWebDetails(WebDetails webDetails);
	
	public List<UserBean> userBeanList(UserBean userBean);
	
public void addCardBean(CardBean cardBean) ;
	
	public void addNotification(Notification notification);
	
	public List<ProductBean> productListByUserId(CardBean cardBean);
	
	public List<Notification> notificationList();
	
	public void addOrder(OrderBean order);
	
	public void addCardUpdate(OrderBean order);
	
	public List<OrderBean> orderList(String userId);
	
	public void resetPassword(String userId);
	
	
	public void addFeedback(FeedBackBean feedbackbean);
}
