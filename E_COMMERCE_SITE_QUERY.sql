create database e_commerce_site;

desc users;



create table auth(
id int not null auto_increment primary key,
email varchar(50) not null unique,
password varchar(50) not null
);
select * from auth;

select * from users;

create table users(
userID int primary key auto_increment,
userEmail varchar(50) unique,
userPassword varchar(50),
userFirstName varchar(50),
userLastName varchar(50),
userCity varchar(50),
userState varchar(50),
userZip varchar(50),
userRegistrationDate timestamp,
userPhone varchar(50),
userCountry varchar(50),
userAddress varchar(100)
);
show tables;

create table orders(
orderID int not null auto_increment primary key,
orderUserID int(50),
orderAmount float,
orderShipName varchar(100),
orderShipAddress varchar(100),
orderCity varchar(50),
oderState varchar(50),
orderZip varchar(20),
orderCountry varchar(50),
orderPhone varchar(20),
orderShipping float,
orderTax float,
orderEmail varchar(100),
orderDate timestamp,
orderShipped int,
orderTrackingNo varchar(80),
constraint FK_user_order foreign key (orderUserID) references users(userID)
);
desc orderDetails;
drop table orderDetails;
create table orderDetails(
	detailId int(10) not null auto_increment primary key,
    detailOrderId int (50) not null,
    detailProductId int (10),
    detailName varchar(250),
    detailPrice float,
    detailSKU varchar(50),
    detailQuantity int(10),
    constraint fk_order_detail foreign key(detailOrderId) references orders(orderID),
    constraint fk_product_detail foreign key(detailProductId) references products(productId)
);
desc products;
create table products(
	productId int(10) not null auto_increment primary key,
    productSKU varchar(50),
    productName varchar(100),
    productPrice float,
    productWeight float,
    productTitle varchar(250),
    productShortDesc varchar(1000),
    productLongDesc text,
    productCategoryId int(11),
    productUpdateDate timestamp,
    productStock float,
    productLocation varchar(50),
    constraint fk_category_product foreign key(productCategoryId) references productCategories(categoryId)
);

create table productCategories(
	categoryId int(11) not null auto_increment primary key,
    categoryName varchar(50)
);
drop table productCategories;
desc productCategories;

select * from users;
insert into e_commerce_site.users(userID, userEmail, userPassword, userFirstName, userLastName, userCity, userState, userZip,userRegistrationDate,userPhone, userCountry,userAddress)
                           values(101,'amit83666@gmail.com', '123456', 'amit', 'thakur', 'panipat', 'haryana', '132103',"2017-07-23",'9034839322','india','model town');
insert into e_commerce_site.users() values(102,'nitish@gmail.com', '123456', 'nitish', 'thakur', 'panipat', 'haryana', '132103',"2017-07-23",'9034839322','india','model town');

select * from orders;
desc orders;
insert into e_commerce_site.orders() values(201,101,5000, 'papu', 'model town', 'shimala', 'himachal', '123456','india', '4567891235', 123, 18,'amit83666@gmail.com','2017-07-03',45,'1234');

show tables;