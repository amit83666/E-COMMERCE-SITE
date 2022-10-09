create database bank;
use bank;
-- master table
create table bankaccount(
accountId int not null primary key auto_increment,
userId int not null,
balance int not null,
registerUser timestamp
);

create table transaction(
transactionId int not null primary key auto_increment,
fromAccountId int not null,
toAccountId int not null,
transactiontime timestamp,
amount int not null,
constraint fromaccount_transaction_FK foreign key(fromAccountId) references bankaccount(accountId),
constraint toaccount_transaction_FK foreign key(toAccountId) references bankaccount(accountId)
);

create table payments(
paymentId int not null primary key auto_increment,
orderId int null,
amount int not null,
paymentmode varchar(50) not null,
toAccount int not null,
constraint order_payment_FK foreign key(orderId) references orders(orderId),
constraint _payment_FK foreign key(toAccount) references bankaccount(accountId)
);


create table orders(
orderId int not null primary key auto_increment,
orderdate timestamp,
productId int not null,
totalAmount int not null,
customerId int not null,
orderStatus varchar(50),
constraint customerId_order_FK foreign key(customerId) references users(userId),
constraint productId_order_FK foreign key(productId) references products(productId) 
);

-- master table
create table products(
productId int not null primary key auto_increment,
title varchar(50) not null,
image varchar(50) not null,
stock int not null,
unitPrice int not null,
category varchar(50)
);

-- master table
create table users(
userId int not null primary key auto_increment,
email varchar(50) not null,
password varchar(50),
address varchar(50),
userType varchar(50) not null
);

