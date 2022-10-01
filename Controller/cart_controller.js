
exports.getCart=(req, res)=>{  
    if(req.session.cart){
       res.send(req.session.cart);
       res.end();
    }
    else{
       req.session.cart=[];
       res.send(req.session.cart);
       res.end();
   }
};

exports.addToCart = function(req,res){
   if(req.session.cart){
      let data={
         "id":req.params.id
      };
      let items=req.body;
      let amit = Object.assign(data, items);
      req.session.cart.push(amit);
      res.send(req.session.cart);
      res.end();
   }else{
      res.send("firstly create a cart then you can add ");
   }
   
}

exports.removefromcartById=function(req,res){ 
   req.session.cart=req.session.cart.filter((data)=>(data.id !=req.params.id))
   res.send(req.session.cart);
   res.end();
};

exports.checkout=function(req,res){
   req.session.destroy((err)=>{
       console.log( "session is destroyed");
       res.send("session is destroyed is explicitly");
       res.end();
   })
}