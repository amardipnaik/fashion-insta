package com.project.finsta.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.finsta.bean.CardBean;
import com.project.finsta.bean.FeedBackBean;
import com.project.finsta.bean.Notification;
import com.project.finsta.bean.OrderBean;
import com.project.finsta.bean.ProductBean;
import com.project.finsta.bean.UserBean;
import com.project.finsta.bean.WebDetails;
import com.project.finsta.dao.IUserBeanDao;



@Service
public class UserBeanServiceImpl implements IUserBeanService{
	
	private  IUserBeanDao iuserBeanDao;


	

	public IUserBeanDao getiuserBeanDao() {
		return iuserBeanDao;
	}

	public void setiuserBeanDao(IUserBeanDao iuserBeanDao) {
		this.iuserBeanDao = iuserBeanDao;
	}

	@Transactional
	public void adduserBean(UserBean userBean) {
		iuserBeanDao.adduserBean(userBean);
		
	}
	
	@Transactional
	public List<UserBean> userList() {
		return iuserBeanDao.userList();
		
	}



	

	@Transactional
	public UserBean getuserBeanById(int id) {
		// TODO Auto-generated method stub
		return iuserBeanDao.getuserBeanById(id);
	}

	@Transactional
	public void removeuserBean(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<UserBean> listuserBean(String isTor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateuserBean(UserBean userBean) {
		// TODO Auto-generated method stub
		
	}

	@Transactional
	public List<FeedBackBean> feedbackList() {
		return iuserBeanDao.feedbackList();
	}

	@Transactional
	public List<ProductBean> productList() {
		return iuserBeanDao.productList();
	}

	@Transactional
	public List<WebDetails> webDetailsList() {
		
		return iuserBeanDao.webDetailsList();
	}

	@Transactional
	public void addProduct(ProductBean productBean) {
		iuserBeanDao.addProduct(productBean);
		
	}

	@Transactional
	public void updateProduct(ProductBean productBean) {
		iuserBeanDao.updateProduct(productBean);
		
	}

	@Transactional
	public void updateFeedback(FeedBackBean feedBackBean) {
		
		iuserBeanDao.updateFeedback(feedBackBean);
	}
	@Transactional
	public void updateWebDetails(WebDetails webDetails)
	{
		iuserBeanDao.updateWebDetails(webDetails);
		
	}
	
	@Transactional
	public List<UserBean> userBeanList(UserBean userBean)
	{
		return iuserBeanDao.userBeanList(userBean);
		
	}
	
	@Transactional
	public void addCardBean(CardBean cardBean) {
		iuserBeanDao.addCardBean(cardBean);
		
	}
	
	@Transactional
	public void addNotification(Notification notification) {
		iuserBeanDao.addNotification(notification);
		
	}
	
	@Transactional
	public List<ProductBean> productListByUserId(CardBean cardBean) {
		return iuserBeanDao.productListByUserId(cardBean);
		
	}
	
	
	@Transactional
	public List<Notification> notificationList() {
		return iuserBeanDao.notificationList();
		
	}
	
	@Transactional
	public void addOrder(OrderBean order)
	{
		iuserBeanDao.addOrder(order);
	}
	
	@Transactional
	public void addCardUpdate(OrderBean order)
	{
		iuserBeanDao.addCardUpdate(order);
	}
	
	@Transactional
	public List<OrderBean> orderList(String userId)
	{
		return iuserBeanDao.orderList(userId);
	}
	
	
	@Transactional
	public void resetPassword(String userId)
	{
		iuserBeanDao.resetPassword(userId);
	}
	
	
	
	@Transactional
	public void addFeedback(FeedBackBean feedbackbean)
	{
		iuserBeanDao.addFeedback(feedbackbean);
	}

}
