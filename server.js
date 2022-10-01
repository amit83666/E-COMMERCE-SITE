const express= require('express');
const expressSession=require('express-session');

const authRoutes = require('./Router/auth_router');
const userRoutes = require('./Router/user_router');
const orderRoutes= require('./Router/order_route');
const sellerRoutes = require('./Router/seller_router');
const productRoutes = require('./Router/product_router');
const categoryRoutes = require('./Router/category_router');
const orderDetailsRoutes = require('./Router/orderDetail_routes');
const paymentRoutes = require('./Router/payment_router');
const cartRoutes = require('./Router/cart_router');

const app=express();
const oneDay = 1000 * 60 * 60 * 24;
var sessionMiddlware=expressSession({
    secret:'foruserSessionandcart',
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
});
app.use(sessionMiddlware);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 3000;


authRoutes(app);
userRoutes(app);
orderRoutes(app);
sellerRoutes(app);
productRoutes(app);
categoryRoutes(app);
orderDetailsRoutes(app);
paymentRoutes(app);
cartRoutes(app);

app.listen(port,()=>{
    console.log(`server is listening on port no. ${port}`);
})
