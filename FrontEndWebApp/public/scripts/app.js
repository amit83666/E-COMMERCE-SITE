
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
        }
    });
}
var fetchData=()=>{
   // alert("button is clicked.....");
    let url="http://localhost:3000/api/product";

    //use Ajax mechanism to fetch data from  rest api

    //it is inbuilt function of jQuery Library
    $.ajax({
        dataType: "json",
        url: url,

        success: (data)=>{
            console.log("invokiking cvallbacjk function on oooo");
            console.log(data);
            let strData=JSON.stringify(data)
            //alert(strData);
           /* let para1=document.getElementById("para");
            para1.innerHTML=strData;
            */
            //DOM tree Manipulation Code at Client Side
            let productList=document.getElementById("productList");
            for(var i=0;i<data.length;i++){
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].title);
                node.appendChild(textnode);
                productList.appendChild(node);
            }  
        }
      });
    //on receive data dynamically append products names to existing HTML page
    //DOM Manipulation


    console.log("Button is Clicked......");
}