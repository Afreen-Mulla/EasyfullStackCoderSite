function myFunction() {
    alert("Please Login.....");
    
  }
function validation() 
{
    console.log("welcome")
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    // window.location.pathname="/Home.html";
    
    if(username=="admin" && password=="admin@123")
    {
      window.open("Home.html");
      console.log("success")
    }
    else{
        alert("login fail");
        console.log("index.html");
    }
   
  }