
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

// exports.addToCart=function(req,res){
//    let item={"productid": req.params.id, quantity:1};
//    req.session.cart.push(item);
//    res.send(req.session.cart);
//    res.end();
// };

// productId 
// title 
// description
// quantity ,unitprice 
// categoryId
// sellerId 

exports.addToCart = function(req,res){
   let items=req.body;
   req.session.cart.push(items);
   res.send(req.session.cart);
   res.end();
}

// exports.addtoCartByID=function(req,res){
//    let 
// }

exports.removefromcartById=function(req,res){ 
   req.session.cart=req.session.cart.filter((data)=>(data.productid !=req.params.id))
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