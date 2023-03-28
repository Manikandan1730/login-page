function myfunction(){
    var x = document.getElementById("pass");
    

    if(x.type ==="password"){
        x.type = "text";
    }
    else{
        x.type= "password";
    }

    }

    function validate(){
        var password =document.getElementById("pass")
        var length=document.getElementById("length")

        if(password.value.length >=8){
        document.write("Login Successful")
     return false
   }
   if(password.value=="" && user.value==""){
    alert("username and password empty!")
   }
else if(user.value==""){
    alert("username is empty")
}
else if(password.value==""){
    alert("password is empty")
}
else if(password.value.length<=8){
    alert("Password invalid")
}
    else{
            document.write("Login Failed")
        }

        
        }


    
   

