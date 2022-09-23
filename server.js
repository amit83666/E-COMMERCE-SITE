const express= require('express');
const routes = require('./Router/auth_router')
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 3000;

routes(app);
app.listen(port,()=>{
    console.log(`server is listening on port no. ${port}`);
})
