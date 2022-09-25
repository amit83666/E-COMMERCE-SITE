const express= require('express');
const authRoutes = require('./Router/auth_router');
const userRoutes = require('./Router/user_router');
const orderRoutes= require('./Router/order_route');
const sellerRoutes = require('./Router/seller_router');
const productRoutes = require('./Router/product_router');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 3000;

authRoutes(app);
userRoutes(app);
orderRoutes(app);
sellerRoutes(app);
productRoutes(app);
app.listen(port,()=>{
    console.log(`server is listening on port no. ${port}`);
})
