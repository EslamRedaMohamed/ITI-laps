/*
Q1
On a page, Make a button (Start clock), 
that displays clock with current time in local format 
(time only without date) updated every second.
*/

function startClock(){
    setInterval(function(){
        var date = new Date()
        document.getElementById("clock").innerHTML = date.toLocaleTimeString()
    },1000)
}

/*
Q2
Make a link that on its onClick event opens new advertising window after 3 seconds,
and write long paragraphs on it. Also, make another link that closes this page. 
(Note that the browser may block the opening of the new window; 
make sure that you allow this page to open popups in your browser). 
*/
function openWindow(){
    Advertise=setTimeout(function(){
        advertiseWindow = open("/Advertise.html")
    },3000)
}

function closeWindow(){
    advertiseWindow.close()
}

/*
Q3
3-Create a login form that redirect to another page when user submit the form, and put in this form textbox (user name) and password field (password) [textboxes must have name attribute] and button (login). User name text has default text “Enter your user name here”,
when user clicks login he will be redirected to another page (the page given in the form action), use get method and on the other page get the user name (from the browser URL) and write on the page welcome + User Name in bold and big font letters.
*/

window.onload = function()
{
    const params = new URLSearchParams(window.location.search)
    const username = params.get('username')
    document.getElementById("welcom").innerHTML = "welcom, "+username
}
/*
Q4
Make a new page with long text that’s self-scrolling vertically (scrolls vertically automatically every half second).
*/


// window.onload =setInterval(function(){
//         window.scrollBy(0, 10); 
//     },500)



/*
Q5
Make a valid email format and phone format using regular expression.
*/

var gmailReg = /^[A-Za-z0-9._]+@gmail+.com$/
var phoneReg = /^01[0125][0-9]{8}/


