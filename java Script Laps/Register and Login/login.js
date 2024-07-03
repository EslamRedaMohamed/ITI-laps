// welcom message
/*
•	Register button, which redirects to another page saying: “Thank you, Full Name for registering in our website”.
*/

var nameParame = new URLSearchParams(location.search);
var fullName = nameParame.get("fullName");
document.getElementById("message").innerHTML = "Thank you, "+fullName+" for registering on our website.";

/////////////////////////////////////////////////
/*
1-	Make login form, use local storage to save user name and password in the prev.assignment,
when user press login button,and retrieve them on page load and write them to the textboxes.
*/

/*
function savedata() {
    localStorage.setItem("fullName", document.getElementById("username").value);
    localStorage.setItem("password", document.getElementById("password").value);
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("username").value = localStorage.getItem("fullName") || "";
    document.getElementById("password").value = localStorage.getItem("password") || "";
});
*/


/*
2-	In the previous Assignment, add “remember me” check box, 
and save user name and password only if the user checked this checkbox, and if the user didn’t check it,
remove the saved user name and password from local storage if they saved before.
*/



var checkBox = document.getElementById("remember");
checkBox.addEventListener("change",function(){
    if(this.checked){
        localStorage.setItem("fullName", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }
    else{
        localStorage.removeItem("fullName");
        localStorage.removeItem("password");
    }
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("username").value = localStorage.getItem("fullName") || "";
    document.getElementById("password").value = localStorage.getItem("password") || "";
});






