

function check(){
    let password = document.getElementById('userPassword');

    let confirmPassword = document.getElementById('confirmPassword');

    if (password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();

    }else{
        confirmPassword.setCustomValidity('');
        confirmPassword.reportValidity();

    }


}


