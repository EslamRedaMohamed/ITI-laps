var currentInput = "";

function appendNumber(num){
    currentInput += num;
    updateDisplay();
}

function performOperation(op){
    currentInput += op;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("display").value = currentInput;
}

function clearDisplay(){
    currentInput = "";
    updateDisplay();
}

function calculateResult(){
    try{
        var exp = document.getElementById("display").value
        var result = eval(exp);
        currentInput = result;
        updateDisplay();
    }
    catch(ex){
        currentInput = "Math Error";
        updateDisplay();
    }
    finally{
        console.log("calculate Done")
    }

}