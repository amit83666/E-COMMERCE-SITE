-- -------------------------------------------------------- Master Table----------------------------------------------------------------------
create table users(
userId int primary key auto_increment,
userEmail varchar(50) unique,
userPassword varchar(50) not null,
userFullName varchar(50) not null,
userContactNo varchar(50) not null,
userAddress varchar(100) not null,
userRole varchar(10),	
userRegDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
desc users;
drop table users;

create table sellers(
sellerId int primary key auto_increment,
userId int not null,
accountNo varchar(50) not null,
gstin varchar(50),
sellerRegDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
constraint userSellerFK foreign key (userId) references users(userId)
);
drop table sellers;
desc Sellers;

create table shippingVendors(
vendorId int primary key auto_increment,
userId int not null,
vendorRegDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
constraint userVendorFK foreign key (userId) references users(userId)
);
desc shippingVendors;

create table categories(
categoryId int primary key auto_increment,
category varchar(50) not null,
sellerId int not null,
constraint sellerCategoryFK foreign key (sellerId) references sellers(sellerId)
);
desc category;

create table products(
productId int primary key auto_increment,
title varchar(50) not null,
description varchar(100) not null,
quantity varchar(40) not null,
unitprice varchar(50) not null,
categoryId int not null,
sellerId int not null,
constraint categoryProductFK foreign key (categoryId) references categories(categoryId),
constraint sellerProductFK foreign key (sellerId) references sellers(sellerId)
);
desc products;

create table orders(
orderId int primary key auto_increment,
orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
userId int not null,
status varchar(50) default('inprogress'),
constraint userOrderFK foreign key (userId) references users(userId)
);
desc orders;

create table itemDetails(
orderDetailId int primary key auto_increment,
orderId int not null,
productId int not null,
quantity int not null,
amount varchar(50) not null,
constraint OrderItemdetailFK foreign key (orderId) references orders(orderId),
constraint productItemdetailFK foreign key (productId) references products(productId)
);
desc itemDetails;

create table payments(
paymentId int primary key auto_increment,
paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
orderId int not null,
orderDetailId int not null,
tranctionId varchar(50),
paymentMode varchar(50),
amount varchar(50),
constraint orderPaymentFK foreign key (orderId) references orders(orderId),
constraint orderDetailPaymentFK foreign key (orderDetailId) references itemDetails(orderDetailId)
);

desc payments;
