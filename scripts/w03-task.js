/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
    
}
function addNumbers (add1, add2) {
    let addnumber1 = Number(document.querySelector('#add1').value);
    let addnumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addnumber1, addnumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
    
}
function subtractNumbers (subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number5, number6) {
    return number5 * number6;
    
}
function multiplyNumbers (factor1, factor2) {
    let multiplynumber1 = Number(document.querySelector('#factor1').value);
    let multiplynumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplynumber1, multiplynumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (number7, number8) {
    return number7/number8;
    
}
function divideNumbers (dividend, divisor) {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
let today = new Date()
let currentYear = "";
currentYear = today.getFullYear();
document.querySelector('#year').textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
const arrayElement = document.getElementById("array");
arrayElement.textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map((number) => number * 2).reduce((sum, number) => sum + number);
finalsum;