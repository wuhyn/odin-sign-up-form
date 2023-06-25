function signUp(){
    console.log("You signed up.");

    // Get password fields
    password = document.getElementById("password1");
    confirmPassword = document.getElementById("password2");

    // Get password field values
    passwordVal = password.value;
    confirmPasswordVal = confirmPassword.value;

    //Get id of password error notification tag
    warning = document.getElementById("password-error");

    if(passwordVal !== confirmPasswordVal){
        
        password.classList.add("form-password-error");
        confirmPassword.classList.add("form-password-error");

        warning.textContent = "* Passwords do not match";
    }

}