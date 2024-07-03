/*
Q1
1-	Create array that contain some tips about JavaScript (Array of 10 strings, each string is tip about JS),
and show random tip for the user each time he opens the page "Tip of the day". 
*/


var jsTips = ["Use Array Filter",
    "Using String replace function to replace all the values",
    "Use breakpoints and Console for Debugging",
    "Convert to floating number without killing performance",
    " Using length to delete empty in an array",
    "Merging arrays without causing server load",
    "Use splice  to delete array elements",
    "hecking values in an Object",
    " Cache the variable",
    " Use switch case instead of if/else"];

    todayTip = jsTips[Math.floor(Math.random()*10)];
    
    document.getElementById("tip").innerHTML = todayTip;

/*
Q2
2-	Make a button that display the current date and time in local format on the page.
*/
function showDate()
{
    var d = new Date();
    document.getElementById("date").innerHTML = d;
};

/*
Q3
3-	Use Try catch to handle any errors in your page.
*/
try
{
    documen.getElementById("error").innerHTML = "catch error, if you can";
}
catch(ex)
{
    document.getElementById("error").innerHTML = ex.message;
}
finally
{
    console.log("procces termenated");
}

console.log("///////////////////////////////////////////")

/*
Q4
4-	Show prompt that ask user to enter the date of today and tell user to enter the date in the following format (DD – MM – YYYY) ex.
22–01–1999,and then create function that take user input as a parameter and ensure that the string is entered in this format 
(that user entered string is 10 characters and contains (-) after the second character and after fifth character).
If the user input was correct: make the function create new date object, and initialize it with Day, Month,
year values (using date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format.
If user input wasn't correct,show alert saying "Wong Date Format".
Create button “show date” that calls the function. (use string functions).
*/

function creatNewDate(date)
{
    var year= +date.slice(6,10)
    var month= +date.slice(3,5)
    var day= +date.slice(0,2)
    var newDate = new Date(year,month-1,day)
    alert(newDate.toLocaleString())
}

function checkFormat(date)
{
    if(date.length == 10 && date[2] == "-" && date[5] == "-")
        {
            alert("Right Date Format")
            creatNewDate(date)
        }
    else
        {
            alert("Wrong Date Format")
        }

}

function getTodayDate()
{
    var date = prompt("please, Enter Today Date in following format  (DD – MM – YYYY)")
    checkFormat(date)
}

/*
Q5
5-	Make a function that accepts array and number and return how many times this number found in the array
*/
var arr = [1,1,2,2,3,3,3,4]
var num = 4
var count = 0 
function foundTimes(arr,num)
{
    for (i=0;i<arr.length;i++)
        if(num == arr[i])
            {
                count++
            }
console.log("Number ",num," founded in array ",count," times.")
}
foundTimes(arr,num)

console.log("///////////////////////////////////////////")

/*
Q6
6-	Make a function that accept array and character then remove this character from the array
*/

var charArr = ["a","b","c","b"]
var char = "c"
function removeChar(charArr,char){
    for(var i=0;i<charArr.length;i++)
        if(char==charArr[i])
            {
                console.log("char founded in Array in index",i)
                charArr.splice(i,1)
            }
        else
            {
                console.log("char NOT founded in Array in index",i)
            }
console.log("charArray: ",charArr,"after remove char:",char)
}
removeChar(charArr,char)
console.log("///////////////////////////////////////////")
/*
Q7
7-	Make function that accepts array and return the maximum number in the array.
*/

var maxArr = [10,20,80,40,50]
var maxNum = maxArr[0]

function maximumNumber(maxArr)
{
    for(var i=0;i<maxArr.length;i++)
        {
            if(maxArr[i]>maxNum)
            {
                maxNum = maxArr[i]
            }
        }
    console.log("maximum number in the array = ",maxNum)
}
maximumNumber(maxArr)








