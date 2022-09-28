-- userId,userEmail,userPassword,userFullName,userContactNo,userRole,userRegDt COLUMNS
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (1, 'amit83666@gmail.com', 'seed123', 'amit kumar', '9034839322','panipat model town', 'C');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (2, 'ram@gmail.com', 'ram123', 'ram chand', '9056457815', 'sonipat', 'C');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (3, 'sham@gmail.com', 'sham123', 'sham anand', '9056485815', 'delhi','V');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (4, 'akshay@gmail.com', 'akshay123', 'akshay kumar', '9048457815','gurgoan', 'S');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (5, 'mohan@gmail.com', 'mohan123', 'mohan kumar', '8056457815','noida', 'S');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (6, 'sohan@gmail.com', 'sohan123', 'sohan sharma', '9056457445','delhi', 'S');
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (7, 'karan@gmail.com', 'karan123', 'karan chawla', '9056458715','rajasthan', 'V'); 
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (8, 'goldy@gmail.com', 'goldy123', 'goldy nandvani', '9099458715','faridabad', 'C'); 
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (9, 'neha@gmail.com', 'neha123', 'neha sharma', '9045658715','jaipur', 'V'); 
insert into users(userId,userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (10, 'silky@gmail.com', 'silky123', 'silky verma', '9056455615','U.P.', 'C'); 

select * from users;

-- sellerId,userId,accountNo,gstin,sellerRegDt
insert into sellers(sellerId,userId,accountNo,gstin) values(101, 4, '800354546423', '897657856678423');
insert into sellers(sellerId,userId,accountNo,gstin) values(102, 5, '800756546423', '897657856678975');
insert into sellers(sellerId,userId,accountNo,gstin) values(103, 6, '800354546853', '897657856678249');

select * from sellers;

insert into shippingVendors(vendorId,userId) values (201,3);
insert into shippingVendors(vendorId,userId) values (202,7);
insert into shippingVendors(vendorId,userId) values (203,9);

select * from shippingVendors;

-- categoryId,category,sellerId --------------------categories table
insert into categories() values(301, 'smart phones', 101);
insert into categories() values(302, 'laptops', 102);
insert into categories() values(303, 'bikes', 103);
select * from categories;

-- productId,title,description,quantity,unitprice,categoryId,sellerId
insert into products() values(401, 'iphone13', 'latest thinest phone', '500', '1200000',301, 101);
insert into products() values(402, 'samsungA7', 'latest samsung phone', '900', '40000',301, 101);
insert into products() values(403, 'redmi', 'latest redmi phone', '1000', '20000',301, 101);
insert into products() values(404, 'HP pavilion i7', 'latest hp laptop', '100', '80000',302, 102);
insert into products() values(405, 'dell vista 3.0', 'latest dell laptop', '150', '90000',302, 102);
insert into products() values(406, 'lenono 360', 'latest lenovo laptop', '200', '80000',302, 102);
insert into products() values(407, 'bullet', 'latest bullet bike', '50', '200000',303, 103);
insert into products() values(408, 'suzuki', '7 generation bike', '20', '180000',303, 103);
insert into products() values(409, 'hero honda', 'latest hero honda bike', '300', '70000',303, 103);
select * from products;

-- orderId,orderDate,userId,status
insert into orders(orderId, userId) values(501,1);
insert into orders(orderId, userId) values(502,2);
insert into orders(orderId, userId) values(503,8);
insert into orders(orderId, userId) values(504,10);
select * from orders;

-- orderDetailId,orderId,productId,quantity,amount 
insert into  itemDetails() values (601, 501, 401,1,'1200000');
insert into  itemDetails() values (602, 502, 404,1,'800000');
insert into  itemDetails() values (603, 503, 407,1,'218000');
insert into  itemDetails() values (604, 504, 408,1,'70000');

select * from itemDetails;

-- paymentId,paymentDate,orderId,orderDetailId,tranctionId,paymentMode,amount
insert into payments(paymentId,orderId,orderDetailId,tranctionId,paymentMode,amount) values(701, 501,601,'5465434365426875','online','1200000');
insert into payments(paymentId,orderId,orderDetailId,tranctionId,paymentMode,amount) values(702, 502,602,'1234634365426878','online','8000000');
insert into payments(paymentId,orderId,orderDetailId,tranctionId,paymentMode,amount) values(703, 503,603,'5465434367868891','online','218000');
insert into payments(paymentId,orderId,orderDetailId,tranctionId,paymentMode,amount) values(704, 504,604,'5465434365426818','online','70000');
select *  from payments;











