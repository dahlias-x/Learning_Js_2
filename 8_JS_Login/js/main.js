var modal = document.querySelector('.modal');
modal.style.display="none";

var loginform =  document.querySelector("#login-form");

loginform.addEventListener('submit',function(e){
    e.preventDefault();
})

function validateLogin(){
    var unameField = document.querySelector("#uname");
    var pwdField = document.querySelector('#pwd');
    
    if(unameField.value!="Admin"||pwdField.value!="123456"){
        modal.style.display="block";
    }

    else if (unameField.value=="Admin" ||pwdField.value=="123456")
    {
        alert("You are now logged in!");
        window.location.href = "index.html"

        
    }
}

function dismissModal (){
    modal.style.display="none";
}