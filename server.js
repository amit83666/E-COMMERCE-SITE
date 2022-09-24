const express= require('express');
const authRoutes = require('./Router/auth_router');
const userRoutes = require('./Router/user_router');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 3000;

authRoutes(app);
userRoutes(app);
app.listen(port,()=>{
    console.log(`server is listening on port no. ${port}`);
})
