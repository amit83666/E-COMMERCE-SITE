import express from 'express';
import expressSession from 'express-session';
import cors from 'cors';

import userRoutes from './Router/user_router.js';
import orderRoutes from './Router/order_route.js';
import sellerRoutes from './Router/seller_router.js';
import productRoutes from './Router/product_router.js';
import categoryRoutes from './Router/category_router.js';
import orderDetailsRoutes from './Router/orderDetail_routes.js';
import paymentRoutes from './Router/payment_router.js';
import cartRoutes from './Router/cart_router.js';
//require('dotenv').config();
const app = express();
const oneDay = 1000 * 60 * 60 * 24;
var sessionMiddlware = expressSession({
    secret: 'foruserSessionandcart',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
});
app.use(cors());
app.use(sessionMiddlware);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

userRoutes(app);
orderRoutes(app);
sellerRoutes(app);
productRoutes(app);
categoryRoutes(app);
orderDetailsRoutes(app);
paymentRoutes(app);
cartRoutes(app);

app.listen(port, () => {
    console.log(`server is listening on port no. ${port}`);
})
