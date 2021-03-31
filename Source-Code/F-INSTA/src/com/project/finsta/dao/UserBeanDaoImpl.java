package com.project.finsta.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.springframework.stereotype.Repository;

import com.project.finsta.bean.CardBean;
import com.project.finsta.bean.FeedBackBean;
import com.project.finsta.bean.Notification;
import com.project.finsta.bean.OrderBean;
import com.project.finsta.bean.ProductBean;
import com.project.finsta.bean.UserBean;
import com.project.finsta.bean.WebDetails;




@Repository
public class UserBeanDaoImpl implements IUserBeanDao{

	

	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
		this.sessionFactory = sf;
	}
	
	
	public void adduserBean(UserBean userBean) {
		
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(userBean);
		System.out.println("userBean saved successfully, userBean Details="+userBean);
		
	}
	
	public void addCardBean(CardBean cardBean) {
		
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(cardBean);
		System.out.println("userBean saved successfully, cardBean Details="+cardBean);
		
	}
	
	public void addNotification(Notification notification) {
		
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(notification);
		System.out.println("userBean saved successfully, notificationnotification Details="+notification);
		
	}
	
	public void addOrder(OrderBean order) {
		
		Session session = this.sessionFactory.getCurrentSession();
		try {
			session.persist(order);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("userBean saved successfully, cardBean Details="+order);
		
	}
	
	

	public void updateuserBean(UserBean userBean) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(userBean);
		System.out.println("UserBean updated successfully, UserBean Details="+userBean);
		
	}



	public UserBean getuserBeanById(int id) {
		Session session = this.sessionFactory.getCurrentSession();		
		UserBean userBean = (UserBean) session.load(UserBean.class, new Integer(id));
		System.out.println("UserBean loaded successfully, UserBean details="+userBean);
		return userBean;
		
	}

	public void removeuserBean(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		UserBean userBean = (UserBean) session.load(UserBean.class, new Integer(id));
		if(null != userBean){
			session.delete(userBean);
		}
		System.out.println("UserBean deleted successfully, UserBean details="+userBean);
		
	}
	
	public List<UserBean> userList() {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from UserBean");
       List<UserBean> userBeanList = query.list();
       
       System.out.println("User Bean List Is :: "+userBeanList.size());
       return userBeanList;
		
	}

	
	public List<FeedBackBean> feedbackList() {
		Session session = this.sessionFactory.getCurrentSession();

		StringBuilder querryBuilder=new StringBuilder();
		
		querryBuilder.append("SELECT * FROM feedback WHERE delete_flag='F' ");
       List<FeedBackBean> feedBackBeanList = session.createSQLQuery(querryBuilder.toString()).addEntity(FeedBackBean.class).list();
       
       System.out.println("FeedBackBean List Is :: "+feedBackBeanList.size());
       return feedBackBeanList;
		
	}
	
	

	
	
	
	public List<ProductBean> productList() {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from ProductBean");
       List<ProductBean> productBeanList = query.list();
       
       System.out.println("ProductBean List Is :: "+productBeanList.size());
       return productBeanList;
		
	}
	
	public List<WebDetails> webDetailsList() {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from WebDetails");
       List<WebDetails> webDetailsList = query.list();
       
       System.out.println("WebDetails Bean List Is :: "+webDetailsList.size());
       return webDetailsList;
		
	}
	
public void addProduct(ProductBean productBean) {
		
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(productBean);
		System.out.println("userBean saved successfully, productBean Details="+productBean);
		
	}

public void updateProduct(ProductBean productBean) {
try {
	Session session = this.sessionFactory.getCurrentSession();
		
	String productId=String.valueOf(productBean.getId());
	String productPrice=String.valueOf(productBean.getPrice());
	String productBrand=String.valueOf(productBean.getBrand());
	String productName=String.valueOf(productBean.getName());
	String productSale=String.valueOf(productBean.getSale());
	
	System.out.println("productBean is::::"+productBean);
		StringBuilder querryBuilder=new StringBuilder();
		
		querryBuilder.append("Update product set category='Product' ");
		if(null!=productName &&""!=productName)
		{
		querryBuilder.append(" ,pname=:productName ");
		}
		if(null!=productBrand &&""!=productBrand)
		{
			querryBuilder.append(" ,brand=:productBrand ");
		}
		
		if(null!=productPrice &&""!=productPrice)
		{
			querryBuilder.append(" ,price=:productPrice ");
		}
		
		if(null!=productSale &&""!=productSale)
		{
			querryBuilder.append(" ,sale=:productSale ");
		}
		
		
		
		querryBuilder.append(" where id=:productId ");
		
		
		SQLQuery query
		 = session.createSQLQuery(querryBuilder.toString());
		
		
		
		
		
		
		if(null!=productName &&""!=productName)
		{
			query.setParameter("productName",productName);
		}
		if(null!=productBrand &&""!=productBrand)
		{
			query.setParameter("productBrand",productBrand);
		}
		
		if(null!=productPrice &&""!=productPrice)
		{
			query.setParameter("productPrice",productPrice);
		}
		
		if(null!=productSale &&""!=productSale)
		{
			query.setParameter("productSale",productSale);
		}
		
		query.setParameter("productId",productId);
		
		
	        query.executeUpdate();
} catch (HibernateException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
	
}

public void updateFeedback(FeedBackBean feedBackBean) {
Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("Update feedback set delete_flag='T' ");
	querryBuilder.append(" where id=:userId");
	
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString());
	
	query.setParameter("userId",feedBackBean.getId().toString());

        query.executeUpdate();
	
}


public void updateWebDetails(WebDetails webDetails) {
	try {
		Session session = this.sessionFactory.getCurrentSession();
		System.out.println("webDetails is :::::"+webDetails);
		String id=String.valueOf(webDetails.getId());
		String aboutUs=String.valueOf(webDetails.getAbout_Us());
		String email=String.valueOf(webDetails.getContactUsEmail());
		String contact=String.valueOf(webDetails.getContactUsPhone());
		
			StringBuilder querryBuilder=new StringBuilder();
			
			querryBuilder.append("Update web_details set banner='Fashion-Insta' ");
			
			if(null!=contact &&""!=contact)
			{
				querryBuilder.append(" ,contact_us_phone=:contact ");
			}
			
			if(null!=email &&""!=email)
			{
				querryBuilder.append(" ,contact_us_email=:email ");
			}
			
			if(null!=aboutUs &&""!=aboutUs)
			{
				querryBuilder.append(" ,about_us=:aboutUs ");
			}
			
			
			
			
			SQLQuery query
			 = session.createSQLQuery(querryBuilder.toString());
			
			
			
			if(null!=contact &&""!=contact)
			{
				query.setParameter("contact",contact);
			}
			
			if(null!=email &&""!=email)
			{
				query.setParameter("email",email);
			}
			
			if(null!=aboutUs &&""!=aboutUs)
			{
				query.setParameter("aboutUs",aboutUs);
			}
			
		
			
			
		        query.executeUpdate();
	} catch (HibernateException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
}

public List<UserBean> userBeanList(UserBean userBean) {
	Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("SELECT * FROM user_table where login=:login and password=:password ");
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString()).addEntity(UserBean.class);
	
	query.setParameter("login",userBean.getLogin());
	query.setParameter("password",userBean.getPassword());
	
	List<UserBean> userBeanList=query.list();
	
	return userBeanList;
	
}

public List<ProductBean> productListByUserId(CardBean cardBean) {
Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("SELECT DISTINCT p.* FROM product p ");
	querryBuilder.append("INNER JOIN card c ON c.product_id=p.id ");
	querryBuilder.append("WHERE c.trasaction_type=:trasactionType ");
	querryBuilder.append("AND c.user_id=:userId and c.delete_flag='F' ");
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString()).addEntity(ProductBean.class);
	
	query.setParameter("userId",cardBean.getUserId());
	query.setParameter("trasactionType",cardBean.getTrasactionType());
   List<ProductBean> productBeanList = query.list();
   
   System.out.println("ProductBean List Is :: "+productBeanList.size());
   return productBeanList;
	
}


public List<Notification> notificationList() {
	Session session = this.sessionFactory.getCurrentSession();
	Query query = session.createQuery("from Notification");
   List<Notification> notificationList = query.list();
   
   System.out.println("notificationList List Is :: "+notificationList.size());
   return notificationList;
	
}


public void addCardUpdate(OrderBean order) {
Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("Update card set delete_flag='T' ");
	querryBuilder.append(" where user_id=:userId and product_id=:productId ");
	
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString());
	
	query.setParameter("userId",order.getUserId());
	query.setParameter("productId",order.getProductId());
        query.executeUpdate();
 }

public List<OrderBean> orderList(String userId) {
Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("select * from ordertable ");
	querryBuilder.append(" where userId=:userId  ");
	
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString()).addEntity(OrderBean.class);
	
	query.setParameter("userId",userId);
	
        List <OrderBean> orderBeanList=query.list();
        
        return orderBeanList;
 }


public void resetPassword(String userId) {
Session session = this.sessionFactory.getCurrentSession();
	
	StringBuilder querryBuilder=new StringBuilder();
	
	querryBuilder.append("Update user_table set password='pwd' ");
	querryBuilder.append(" where id=:userId");
	
	
	SQLQuery query
	 = session.createSQLQuery(querryBuilder.toString());
	
	query.setParameter("userId",userId);

        query.executeUpdate();
 }

public void addFeedback(FeedBackBean feedbackbean) {
	
	Session session = this.sessionFactory.getCurrentSession();
	session.persist(feedbackbean);
	System.out.println("feedbackbean saved successfully, feedbackbean Details="+feedbackbean);
	
}


}
