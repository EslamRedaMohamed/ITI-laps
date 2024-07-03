// Form validation:
// - Validates full name(more than 3 char) and password match on blur events.
// - Prevents form submission if validations fail.
// - Displays a submit error message if either validation fails.

document.addEventListener("DOMContentLoaded", function() {
    var myInput = document.getElementById("fullName");
    var errorMessageFullName = document.getElementById('error-message-fullName');
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeatPassword");
    var errorMessagePassword = document.getElementById("error-message-password");
    var submitError = document.getElementById("error-message-submit");
    var form = document.getElementById("registrForm");

    myInput.style.outline = "none";

    myInput.addEventListener("focus", function() {
        myInput.style.border = "1px solid blue";
    });

    myInput.addEventListener("blur", function() {
        validateFullName();
    });

    repeatPassword.addEventListener("blur", function() {
        validatePassword();
    });

    form.addEventListener("submit", function(event) {
        var isFullNameValid = validateFullName();
        var isPasswordValid = validatePassword();

        if (!isFullNameValid || !isPasswordValid) {
            event.preventDefault(); 
            submitError.style.display = 'inline'; 
        } else {
            submitError.style.display = 'none'; 
        }
    });

    function validateFullName() {
        var fullName = myInput.value.trim();

        if (fullName.length <= 3) {
            errorMessageFullName.style.display = 'inline';
            myInput.focus();
            myInput.select();
            myInput.style.border = "1px solid red";
            myInput.style.backgroundColor = 'gray';
            return false;
        } else {
            errorMessageFullName.style.display = 'none';
            myInput.style.border = "";
            myInput.style.backgroundColor = 'white';
            return true;
        }
    }

    function validatePassword() {
        var passwordValue = password.value.trim();
        var repeatPasswordValue = repeatPassword.value.trim();
        if (passwordValue !== repeatPasswordValue) {
            errorMessagePassword.style.display = 'inline';
            repeatPassword.focus();
            repeatPassword.style.border = "1px solid red";
            repeatPassword.style.backgroundColor = 'gray';
            return false;
        } else {
            errorMessagePassword.style.display = 'none';
            submitError.style.display = 'none';
            repeatPassword.style.border = "";
            repeatPassword.style.backgroundColor = 'white';
            return true;
        }
    }
});



