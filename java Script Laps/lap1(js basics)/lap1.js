/*  Q1
On your page, show alert for the user that say “Welcome to my site”, then show him 
prompt ask him to enter his name and write to the page  “ welcome + his name”.
(Remark what happen to the home page after writing welcome page).*/

alert("Welcome to my site");
var Name = prompt("Please, Enter your name");
document.getElementById("welcom").innerText = "welcome, " + Name;

/*  Q2
2-	Make a function in external JS file, that takes 2 parameters and return sum of them(function return the result, don't alert or print it),
and in your page make a button that ask the user to enter 2 numbers, 
call the function, and display the result returned by the function.
*/

function sum(num1,num2)
{
    result = +num1 + +num2;
    return result;
}

function getNumbersSum()
{
    var number1 = prompt("Enter the first number:");
    var number2 = prompt("Enter the second number:");
    document.getElementById("result").innerText = "result= " + sum(number1,number2);
}


/*  Q5
5-	Make a button that when click on it show prompt to the user please enter a string then 
show another prompt please enter a word and search 
if this word is existing in the string if not print not found if exists print its position.
*/

function searchWord(){
    var string = prompt("please enter a string")
    var word = prompt("please enter a word to search for it in string")
    var position = string.search(word);
    if(position == -1)
        {
            document.getElementById("search").innerText = "not found";
        }
    else
        {
            document.getElementById("search").innerText = "exists, in position: "+ position;
        }
}


/*  Q6
6-	Write a JavaScript function to convert temperatures from Celsius, to Fahrenheit 
[ Formula : c/5 = (f-32)/9] 
[where c = temperature in Celsius and f = temperature in Fahrenheit]
*/

function convertTemp(tempINC)
{
    tempINF = (tempINC*9 / 5) + 32
    return tempINF;
}

function getTempINC()
{
    var tempINC = prompt("Enter temperatures in Celsius")
    document.getElementById("temp").innerText = "temperatures in Fahrenheit is: "+convertTemp(tempINC);
}






