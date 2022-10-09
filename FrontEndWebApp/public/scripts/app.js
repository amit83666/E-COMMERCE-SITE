
//Javascript Code
//Client Side Javascript Code
var onLogin=()=>{
    let userEmail=document.getElementById("email").value;
    let userPassword=document.getElementById("password").value;
    let credential={};
    credential.userEmail=userEmail;
    credential.userPassword=userPassword;
    console.log("credential ", credential);
    let loginUrl="http://localhost:3000/api/user/login";
    $.ajax({
        url: loginUrl,
        type:"POST",
        data:credential,
        success: (data, status)=>{
            console.log("on successfull login");
            console.log(status);
            console.log(data);
            localStorage.setItem("receivedtoken",data);  //browsers cache memory
            window.location.href = "http://localhost:7000";
        }
    });
}
var forSignup=()=>{
    let userEmail=document.getElementById("email").value;
    let userPassword=document.getElementById("password").value;
    let userFullName=document.getElementById("fullname").value;
    let userContact=document.getElementById("contact").value;
    let userAddress=document.getElementById("address").value;
    let userRole=document.getElementById("role").value;
    let signupcred={};
    signupcred.userEmail=userEmail;
    signupcred.userPassword=userPassword;
    signupcred.userFullName=userFullName;
    signupcred.userContact=userContact;
    signupcred.userAddress=userAddress;
    signupcred.userRole=userRole;
    console.log("signupcred ", signupcred );
    let loginUrl="http://localhost:3000/api/user/register";
    $.ajax({
        url: loginUrl,
        type:"POST",
        data:signupcred,
        success: (data, status)=>{
            console.log("on successfull signup");
            console.log(status);
            console.log(data);
           window.location.href = "http://localhost:7000";
        }
    });}
var fetchData=()=>{
   // alert("button is clicked.....");
    let url="http://localhost:3000/api/product";

    //use Ajax mechanism to fetch data from  rest api

    //it is inbuilt function of jQuery Library
    $.ajax({
        dataType: "json",
        url: url,
        success: (data)=>{
            console.log(data);
            let strData=JSON.stringify(data);
            let productList=document.getElementById("productList");
            for(var i=0;i<data.length;i++){
                const node = document.createElement("tr");
                const textnodeID = document.createTextNode(data[i].productId);
                const textnodeTitle = document.createTextNode(data[i].title);
                const textnodeDescription = document.createTextNode(data[i].description);
                const textnodequantity = document.createTextNode(data[i].quantity);
                const textnodeUnitPrice = document.createTextNode(data[i].unitprice);
                const textnodecategoryID = document.createTextNode(data[i].categoryId);
                
                node.appendChild(textnodeID);
                node.appendChild(textnodeTitle);
                node.appendChild(textnodeDescription);
                node.appendChild(textnodequantity);
                node.appendChild(textnodeUnitPrice);
                node.appendChild(textnodecategoryID);
                productList.appendChild(node);
            }  
        }
      });
    //on receive data dynamically append products names to existing HTML page
    //DOM Manipulation


    console.log("Button is Clicked......");
}