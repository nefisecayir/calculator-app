const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');
<<<<<<< HEAD

let displayValue = '0';

let firstValue = null;
let operator = null;
let waitingForSecVal = false;

updateDisplay();


function updateDisplay() {
    display.value = displayValue;
}


keys.addEventListener('click', function(e) {
    const element = e.target;
    const value = element.value;

    if (!element.matches('button')) return;

    switch(value) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
        case 'xʸ':
        case 'sqrt':
            handleOperator(value);
            break;
        case '.':
            inputDecimal();
            break;
        case 'clear':
            clear();
            break;   
        default:
            inputNumber(element.value);
        
    }

    // console.log('number', (element.value));
    updateDisplay();

});


=======

let displayValue = '0';
    //* without pressing any number buttons, calculator is going to show us the 0 number on its display.

let firstValue = null;
let operator = null;
let waitingForSecVal = false;


updateDisplay();
    

function updateDisplay() {
    display.value = displayValue;
}
    //* with using this function we are updating the value on calculator display.


keys.addEventListener('click', function(e) {
    const element = e.target;
    const value = element.value;

    if (!element.matches('button')) return;
        //* if clicked key hasn't a 'button' value, return the function

    switch(value) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
        case 'xʸ':
        case 'sqrt':
            handleOperator(value);
                //* if clicked button have these values we call this func here to calculate
            break;
        case '.':
            inputDecimal();
            break;
        case 'clear':
            clear();
            break;   
        default:
            inputNumber(element.value);
                //* if it's not like the others, its a number that we choose on calculator keys
        
    }

    // console.log('number', (element.value));
    updateDisplay();
        //* each time we calculate something it shows it on calculator display

});
    //* click event calculator's keys

    
>>>>>>> a199ed5 (calculator app explained with english (if its not good don't blame me))


function handleOperator(nextOperator) {
     const value = parseFloat(displayValue);

     if (operator && waitingForSecVal) {
         operator = nextOperator;
         return;
     }

<<<<<<< HEAD
     if (firstValue === null) {
         firstValue = value;
     } else if (operator){
         const result = calculate(firstValue, value, operator);

         displayValue = `${parseFloat(result.toFixed(3))}`;
         firstValue = result;
     }

     waitingForSecVal = true;
     operator = nextOperator;
     

    //console.log(displayValue, firstValue, operator, waitingForSecVal);
}






=======
function handleOperator(nextOperator) {
     const value = parseFloat(displayValue);

     if (operator && waitingForSecVal) {
         operator = nextOperator;
            //* update new operator if we want to continue calculating with different operator
         return;
     }

     if (firstValue === null) {
         firstValue = value;
            //* if there's no value in firstValue add the value we selected in it
     } else if (operator){
         const result = calculate(firstValue, value, operator);
            //* calculate the value's when we clicked the operators
         displayValue = `${parseFloat(result.toFixed(3))}`;
            //* only show result's 3 num after '.' on the display
         firstValue = result;
            //* keep result in firstValue to continue to calculating
     }

     waitingForSecVal = true;
     operator = nextOperator;
     

    //console.log(displayValue, firstValue, operator, waitingForSecVal);
}






    //* calculating the numbers with using operators;
>>>>>>> a199ed5 (calculator app explained with english (if its not good don't blame me))
function calculate(first, sec, operator) {
    if (operator === '+'){
        return first + sec;
    } else if (operator === '-'){
        return first - sec;
    } else if (operator === 'x'){
        return first * sec;
    } else if (operator === '/'){
        return first / sec;
    } else if (operator === 'xʸ') {
        return first ** sec;
    } else if (operator === 'sqrt') {
        return Math.sqrt(displayValue);
    }

    return sec;
}



<<<<<<< HEAD
function sqrtOperator(){
    var sayi = displayValue;
    displayValue = Math.sqrt(sayi);
    
    // console.log(Math.sqrt(sayi));
}


    


function inputNumber(num) {
    if(waitingForSecVal){
        displayValue = num;
        waitingForSecVal = false;
    } else {
        displayValue = displayValue === '0'? num: displayValue + num;
    }
    //console.log(displayValue, firstValue, operator, waitingForSecVal);
}

function inputDecimal(){
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    
}

function clear() {
    displayValue = '0';
}
=======
    //* square root operator is extractioning the value on display;
function sqrtOperator(){
    var sayi = displayValue;
    displayValue = Math.sqrt(sayi);
    
    // console.log(Math.sqrt(sayi));
}
    


    


function inputNumber(num) {
    if(waitingForSecVal){
        displayValue = num;
            //* after waiting for second val only show the number we clicked on the display 
        waitingForSecVal = false;

    } else {
        displayValue = displayValue === '0'? num: displayValue + num;
            //* is 0 showing on display? if it's not, allow to add another number next to number we selected before.
    }
    //console.log(displayValue, frstValue, operator, waitingForSecVal);
}




function inputDecimal(){
    if (!displayValue.includes('.')) {
        displayValue += '.';
            //* if '.' is already added on the display another '.' is not allowed to show on calculator display
    }
    //* when . button has clicked, inputDecimal func is defined to add . next to any number on it's display
    
}



    //* clear func is defined to show 0 on it's display;
function clear() {
    displayValue = '0';
}
    
>>>>>>> a199ed5 (calculator app explained with english (if its not good don't blame me))
