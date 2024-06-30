/*
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value= evel(display.value);
    }
    catch(error){
        display.value="Error";
    }
}*/

// Function to append characters to the display
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the expression in the display
function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression); // Using eval for simplicity (not recommended for production due to security concerns)
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}