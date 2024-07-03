/*
Q1
Create a simple photo gallery like the following, 
and use opacity property to make each image fades out gradually 
(its opacity decreases to 0.3) when mouse is over it,
and fades in gradually (its opacity increases to 1 gradually) when mouse is a way.
*/

var images = document.getElementsByClassName('galary');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function() {
        this.style.opacity = 0.3;
    });
    images[i].addEventListener('mouseleave', function() {
        this.style.opacity = 1;
    });
}



/*
Q2
2-	Make an array of colors and set of spans and a button with the text change Color and Background 
colors and when click in this button change the color and the background color randomly
*/

var colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F3FF33'];
var spans =['span1','span2','span3']

function changeColor(){
    for (var i=0 ; i<spans.length;i++)
        {
            var span = document.getElementById(spans[i])
            span.style.backgroundColor = colors[Math.floor(Math.random()*5)]
            span.style.color = colors[Math.floor(Math.random()*5)]
        }
}

/*
Q3
3-	Make a password input and a button with the text switch beside it 
when click in the button convert the password to be readable (change type for it)
*/

var switchBtn = document.getElementById("toggle")
var passwordInput = document.getElementById("password")

switchBtn.addEventListener("click",function(){
    if(passwordInput.type === "password")
        {
            passwordInput.type = "text"
            switchBtn.textContent = "Hide"
        }
    else
        {
            passwordInput.type = "password"
            switchBtn.textContent = "switch"
        }
})

/*
Q4
4-	Make a bank of questions say 10 question and two buttons next and 
previous when click on the next navigate to the next question and 
when click on the previous one go to the previous question.
*/
var qLst = [
    "What is the difference between `let`, `const`, and `var` in JavaScript?",
    "How do you create a function in JavaScript?",
    "What is an arrow function, and how does it differ from a regular function?",
    "How do you declare an array in JavaScript, and how can you add an element to it?",
    "What is the purpose of the `this` keyword in JavaScript?",
    "How do you handle errors in JavaScript using try/catch?",
    "What are JavaScript promises, and how do they work?",
    "How can you manipulate the DOM using JavaScript?",
    "What is the difference between `==` and `===` in JavaScript?",
    "How do you make an asynchronous HTTP request in JavaScript?"
];

currntPosition = 0

var question = document.getElementById("question")
var next = document.getElementById("next")
var previous = document.getElementById("Previous")

function printQuestion(index){
    question.textContent = qLst[index]
}

next.addEventListener("click",function(){
    if(currntPosition < qLst.length - 1){
        currntPosition++
        printQuestion(currntPosition)
    }
})

previous.addEventListener("click",function(){
    if(currntPosition > 0 ){
        currntPosition--
        printQuestion(currntPosition)
    }
})

printQuestion(currntPosition)

/*
Q5
Make an array that contains collection of colors and 
then in page load make a color of three paragraphs randomly from the array.
*/

var colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF3333", "#33FFF5", "#8D33FF", "#FF8C33", "#FFD133", "#33FFD1"];

document.addEventListener("DOMContentLoaded", function() {
    var prags = document.getElementsByClassName("color");
    for (var i = 0; i < prags.length; i++) {
        prags[i].style.color = colors[Math.floor(Math.random() * 10)];
    }
});


