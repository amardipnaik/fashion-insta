/*
SQLyog Community v12.4.0 (64 bit)
MySQL - 5.6.26-log : Database - fasion-insta
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`fasion-insta` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `fasion-insta`;

/*Table structure for table `card` */

DROP TABLE IF EXISTS `card`;

CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `trasaction_type` varchar(255) DEFAULT NULL,
  `delete_flag` varchar(255) DEFAULT 'F',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `card` */

insert  into `card`(`id`,`product_id`,`user_id`,`trasaction_type`,`delete_flag`) values 
(9,4,6,'ADD','T'),
(10,4,6,'WISH','T'),
(11,1,1,'ADD','T'),
(12,1,7,'ADD','T'),
(13,1,7,'WISH','T'),
(14,1,1,'ADD','T'),
(15,1,1,'ADD','F'),
(16,1,1,'WISH','F'),
(17,1,1,'ADD','F'),
(18,1,1,'ADD','F'),
(19,1,1,'WISH','F'),
(20,1,1,'ADD','F');

/*Table structure for table `feedback` */

DROP TABLE IF EXISTS `feedback`;

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `delete_flag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `feedback` */

insert  into `feedback`(`id`,`username`,`email`,`feedback`,`delete_flag`) values 
(1,'amar','amardipsnaik@gmail.com','Good Product','F'),
(2,'nikhil','nikhilsrao@gmail.com','Not Good','T'),
(3,'amar','amardipsnaik@gmail.com','Good','T'),
(4,'amar','amardipsnaik@gmail.com','Good Product','F');

/*Table structure for table `notification` */

DROP TABLE IF EXISTS `notification`;

CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) DEFAULT NULL,
  `message` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `notification` */

insert  into `notification`(`id`,`subject`,`message`) values 
(2,'50% Off','50% Off on all Product'),
(3,'Mega Offer','90% Discount');

/*Table structure for table `ordertable` */

DROP TABLE IF EXISTS `ordertable`;

CREATE TABLE `ordertable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `pinCode` varchar(255) DEFAULT NULL,
  `cardNumber` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `cvvNumber` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `ordertable` */

insert  into `ordertable`(`id`,`building`,`productName`,`street`,`city`,`state`,`pinCode`,`cardNumber`,`year`,`cvvNumber`,`price`,`productId`,`userId`) values 
(7,'C-704','T-Shirt','Leo Land Society','Mumbai','Maharastra','874547445','84744544444','22/10','141','400','4','6');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT '0',
  `image` varchar(15000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `product` */

insert  into `product`(`id`,`pname`,`brand`,`price`,`category`,`sale`,`image`) values 
(1,'Shirt','Addidas','500','Product','90','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');

/*Table structure for table `user_table` */

DROP TABLE IF EXISTS `user_table`;

CREATE TABLE `user_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `user_table` */

insert  into `user_table`(`id`,`login`,`password`,`email`,`contact_number`,`city`,`sex`,`first_name`,`last_name`,`profile`) values 
(1,'amar','pwd','amardipsnaik@gmail.com','7276243827','Nanded','Male','Amardip','Naik','user'),
(3,'admin','admin','admin@gmail.com','7241521441','mumbai','male','admin','admin','admin'),
(5,'demo','pwd','demo@gmail.com','85412214421','nanded',NULL,'demo','demo','user');

/*Table structure for table `web_details` */

DROP TABLE IF EXISTS `web_details`;

CREATE TABLE `web_details` (
  `id` int(11) NOT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `contact_us_phone` varchar(255) DEFAULT NULL,
  `contact_us_email` varchar(255) DEFAULT NULL,
  `about_us` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `web_details` */

insert  into `web_details`(`id`,`banner`,`contact_us_phone`,`contact_us_email`,`about_us`) values 
(1,'Fashion-Insta','022-6541222','amar@gmail.com','Done');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
