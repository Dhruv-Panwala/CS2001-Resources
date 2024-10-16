
function validation(event){
    let name=document.getElementById("name");
    // if (name.value=="") {
    //     alert("Name field cannot be empty");
    //     name.focus();
    //     return false;
    // }
    // let email=document.getElementById("email");
    // if (email.value=="") {
    //     alert("Email field cannot be empty");
    //     email.focus();
    //     return false;
    // }
    // let emailPattern=new RegExp('^[^@]+@\.[^@]+');
    // if (!emailPattern.test(email.value)) {
    //     alert("Email not valid");
    //     email.focus();
    //     return false;
    // }
    // let password=document.getElementById("password");
    // let confirmpass=document.getElementById("confirmpass");
    // if(password.value=="")
    // {
    //     alert("Password cannot be empty");
    //     password.focus();
    //     return false;
    // }
    // if(password.value.length<8)
    // {
    //     alert("Password length should be greater than 7");
    //     password.focus();
    //     return false;
    // }
    // if (confirmpass.value=="") {
        
    //     alert("Confirm Password cannot be empty");
    //     confirmpass.focus();
    //     return false;
    // }
    // if(confirmpass.value!=password.value)
    // {
    //     alert("Password and confirmpassword does not match");
    //     confirmpass.focus();
    //     return false;
    // }
    // let buyer=document.getElementById("buyer");
    // let seller=document.getElementById("seller");
    // console.log(buyer.checked);
    // if(!buyer.checked && !seller.checked)
    // {
    //     alert("Atleast one checkbox should be ticked");
    //     return false;
    // }
    // let terms=document.getElementById("Terms");
    // if(!terms.checked)
    // {
    //     alert("Confirm Terms");
    //     return false;
    // }
    let details=document.getElementById("hiddenParagraph");
    details.textContent=" registered";
    return false;   
}