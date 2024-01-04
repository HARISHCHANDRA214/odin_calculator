// let a="9"
// console.log(typeof(parseFloat(a))==="number")
let lastKeyPressed="";
let firstNumber="";
let secondNumber="";
let isFirstNumber=true;
let isFirstOperand=true;
let operator="";
let currentDisplay="";
let currentNumber="firstNumber";
let isDecimalNumber=true;
function clearDisplay(){
    firstNumber="";
    secondNumber="";
    isFirstNumber=true;
    isFirstOperand=true;
    isDecimalNumber=true;
    document.getElementById("display").innerHTML=0;
}

function numberPressed(e){
    if(isFirstNumber){
        firstNumber+=e.value;
        document.getElementById("display").innerHTML=firstNumber;
        currentNumber="firstNumber";
    }else{
        currentNumber="secondNumber";
        secondNumber+=e.value;
        document.getElementById("display").innerHTML=secondNumber;
    }
    lastKeyPressed="number";
}
function decimalPressed(){
    if(isDecimalNumber){
        isDecimalNumber=false;
        if(isFirstNumber){
            firstNumber+=".";
            document.getElementById("display").innerHTML=firstNumber;
        }else{
            secondNumber+=".";
            document.getElementById("display").innerHTML=secondNumber;
        }
    }
}
function operation(operator){
    switch(operator){
        case "-": 
            firstNumber=parseFloat(firstNumber)-parseFloat(secondNumber);
            secondNumber="";
            document.getElementById("display").innerHTML=firstNumber;
            break;
        case "+":
            firstNumber=parseFloat(firstNumber)+parseFloat(secondNumber);
            secondNumber="";
            document.getElementById("display").innerHTML=firstNumber;
            break;
        case "*":
            firstNumber=parseFloat(firstNumber)*parseFloat(secondNumber);
            secondNumber="";
            document.getElementById("display").innerHTML=firstNumber;
            break;
        case "/":
            firstNumber=parseFloat(firstNumber)/parseFloat(secondNumber);
            secondNumber="";
            document.getElementById("display").innerHTML=firstNumber;
            break;
    }
}
function operatorPressed(e){
    if(e.value=="+/-"){
        if(firstNumber==""){
            console.log("Entered");
            firstNumber=""+(parseFloat(currentDisplay)*-1);
            document.getElementById("display").innerHTML=firstNumber;
            return;
        }
        if(currentNumber=="firstNumber"){
            firstNumber=""+(parseFloat(firstNumber)*-1);
            document.getElementById("display").innerHTML=firstNumber;
        }else{
            secondNumber=""+(parseFloat(secondNumber)*-1);
            document.getElementById("display").innerHTML=secondNumber;
        }
        return;
    }else if(e.value=="%"){
        firstNumber=parseFloat(firstNumber)/100;
        document.getElementById("display").innerHTML=firstNumber;
    }else if(lastKeyPressed=="operator"){
        secondNumber=firstNumber;
    }else if(isFirstOperand){
        isFirstNumber=false;
        isFirstOperand=false;
        operator=e.value;
    }else{
        operation(operator);
        operator=e.value;
    }
    isDecimalNumber=true;
    lastKeyPressed="operator";
}
function equals(){
    lastKeyPressed="equals";
    operation(operator);
    currentDisplay=firstNumber;
    firstNumber="";
    secondNumber="";
    isFirstNumber=true;
    isFirstOperand=true;
    isDecimalNumber=true;
}