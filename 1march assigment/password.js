function verifyPassword()
{
    var pass=document.getElementById("pass-word").value;
    var re_pass=document.getElementById("re-pass").value;
    if(pass===re_pass)
    {
        alert("register suceesfully")
    }
    else{
        alert("matching password is incorrect,please re-enter your confirm password")
       
    }

   
}