/*
Q3
3-	Make JSON Object that holds Student data (ID, name, Age, Address, Skills (array),
IsLeader (Boolean), address). [Use JSON object and don’t use string in keys].
*/
var student ={
    id:1,
    name : "Eslam",
    age : 20,
    address: {
        street: "6 October",
        state : "Helwan"
    },
    skills: ["HTML","JS","CSS"],
    isleader : true
}

/*
Q4
4-	Make an array (of 3 students) of the previous student object, and print each student
name along with his skills (make the address null for one of the students).
*/

var students = [
    {
        id:1,
        name : "Eslam",
        age : 20,
        address: {
            street: "6 October",
            state : "Helwan"
        },
        skills: ["HTML","JS","CSS"],
        isleader : true
    },
    {
        id:2,
        name : "ahmed",
        age : 23,
        address: {
            street: null,
            state : null
        },
        skills: ["ML","AL","NLP"],
        isleader : false
    },
    {
        id:3,
        name : "mahmode",
        age : 30,
        address: {
            street: "salem",
            state : "cairo"
        },
        skills: ["UI","UX","FRONT END"],
        isleader : true
    }
]

for (var i=0;i<students.length;i++){
    console.log("Student Name: ",students[i].name)
    for(var j =0;j<students[i].skills.length;j++){
        console.log("Skills: ",students[i].skills[j])
    }
};

/*
Q5
5-	Use AJAX to retrieve user data, and display: First Name, 
Last name and user avatar image (show the user image in an <img> tag) 
from the following test web API: https://reqres.in/api/users/1 
*/
function getUserData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var convertedData = JSON.parse(this.responseText);
            var user = convertedData.data;
            document.getElementById("fullName").innerHTML = "Full Name: "+user.first_name+" "+user.last_name
            document.getElementById("image").setAttribute("src",user.avatar)
        };
    };
    xhttp.open("GET","https://reqres.in/api/users/1",true)
    xhttp.send();
}

/*
a.	Make a textbox where the user can enter user ID, and press display and then display the user with the given ID.
b.	Use this web API: https://reqres.in/api/users to return all users data, and make a dropdown list and fill it with students name returning form the API. (Loop on them and display all users).
c.	When user selects specific user (onchange event), display his data and image below the dropdown list.
*/
function sereachUsersData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var convertedData = JSON.parse(this.responseText);
            var users = convertedData.data;
            var searchedID = document.getElementById("userId").value;

            for(var i=0;i < users.length;i++)
                {
                    if(searchedID == users[i].id){
                        document.getElementById("idfullname").innerHTML = "Full Name: "+users[i].first_name+" "+users[i].last_name;
                        document.getElementById("idimage").setAttribute("src",users[i].avatar)
                        break;
                    }
                document.getElementById("idfullname").innerHTML = "User Not Founded";
                document.getElementById("idimage").setAttribute("src", "");
                }
        };
    };
    xhttp.open("GET","https://reqres.in/api/users",true)
    xhttp.send();
}


function getAllUsers(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var convertedData = JSON.parse(this.responseText);
            var users = convertedData.data;
            var selectList = document.getElementById("usersList")
            for(var i =0 ; i<users.length;i++){
                var userName = "Full Name: "+users[i].first_name+" "+users[i].last_name;
                var op = document.createElement("option");
                op.textContent = userName;
                op.value = users[i].id;
                selectList.appendChild(op);
            }
        };
    };
    xhttp.open("GET","https://reqres.in/api/users",true)
    xhttp.send();
    
}
getAllUsers()

function displayUserData(){
    var selectedUserId = document.getElementById("usersList").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var convertedData = JSON.parse(this.responseText);
            var users = convertedData.data;

            for(var i=0;i < users.length;i++)
                {
                    if(selectedUserId == users[i].id){
                        document.getElementById("selectedemail").innerHTML = "Email: "+users[i].email;
                        document.getElementById("selectedimage").setAttribute("src",users[i].avatar);
                    }
                }
        };
    };
    xhttp.open("GET","https://reqres.in/api/users",true)
    xhttp.send();
}


/*
1-Prompt user to enter his Full Name and email address, and use regular expression only (don't use string functions) to validate his input to make sure it is in correct format using these criteria: 
a.	Full Name should be characters only (without numbers or special characters) and has the following structure:
•	Characters (alphabetic only) more than 3.
•	Then one space.
•	And finally some other characters (alphabetic only) more than 3 
•	This pattern may be repeated, so it can contain other spaces but after each space must be 3 alphabetic characters at least (like full name, each part is 3 letters at least, and separated by a space).
•	And shouldn’t start or end with spaces or special characters.
b.	Email must be from Egypt (.eg domain), for example name@domain.com.eg (.com.eg, .net.eg, .edu.eg or .org.eg [.eg is a must], don’t allow any other domains).

*/
function checkValidation(){
    var fullName = prompt("Enter your full name, please");
    var fullNameReg = /^([a-zA-Z]{3,}\s?)+[a-zA-Z]{3,}$/
    if(fullNameReg.test(fullName)){
        alert("Right Full Name Pattern")
    }
    else
    {
        alert("Wrong Full Name Pattern")
    }

    
    var email = prompt("Enter your email, please")
    var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com|net|edu|org)\.eg$/
    if(emailReg.test(email)){
        alert("Right email Pattern")
    }
    else
    {
        alert("Wrong email Pattern")
    }


};

















