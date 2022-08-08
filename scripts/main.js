var validEmail = false;

function formReset(){
    document.getElementById('contactFormName').value = "";
    document.getElementById('contactFormEmail').value = "";
    document.getElementById('contactFormComments').value = ""; 
}

function isEmailValid(email){
    const emailParts = email.split('@');

    if(emailParts.length !== 2){
        return false;
    }else{
        const domainParts = emailParts[0]
        return true;
    }
}

function validateEmail() {
    const inputEmail = document.getElementById('contactFormEmail');
  
    if(isEmailValid(inputEmail.value)){ 
        validEmail = true;
        inputEmail.style.color = "green";
    }else{  
        validEmail = false;
        inputEmail.style.color = "red";        
    }  
}

function sendForm(){
    if(!validEmail){
        alert("Please, enter a valid Email address.");
        return false;
    }else{
        return true;
    }
}