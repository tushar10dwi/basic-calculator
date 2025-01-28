function sum(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let decimalEntered = 0;

const display = document.querySelector(".displayMonitor");

const num = document.querySelectorAll(".num");

let term1, term2, op, backend;
let termCount = 0;

num.forEach((button) => {
    button.addEventListener('click', numPress = function() {
        display.textContent += button.textContent;

    })
})

const operator = document.querySelectorAll(".operator");
let lastButton;

operator.forEach((button) => {
    button.addEventListener('click', symbolPress = function() {

        if(['+','-','/','x'].includes(display.textContent.charAt(display.textContent.length-1))){
            display.textContent = display.textContent.slice(0,display.textContent.length-1);
            termCount = 0;
        }
    

        if (termCount === 0) {
            term1 = display.textContent;
            console.log(term1);
            termCount++;
        }
        
        else if(termCount === 1) {
            term2 = display.textContent.replace(term1+lastButton,'');
            console.log(term2);
            termCount++;
        }

        if (termCount === 2) {
            display.textContent = calculate(parseFloat(term1),parseFloat(term2),op);
            term1 = calculate(parseFloat(term1),parseFloat(term2),op);
            termCount = 1;
        }
        
        display.textContent += button.textContent;
        op = button.textContent;
        lastButton = button.textContent;
        console.log(display.textContent.slice(0,display.textContent.length-1));
    })
})

function calculate(first,second,oper) {
    switch(oper) {
        case '+':
            return sum(first,second);
            break;
        case '-':
            return minus(first,second);
            break;
        case 'x':
            return multiply(first,second);
            break;
        case '/':
            if(divide(first,second) == Infinity) {
                return "Cannot divide by 0";
            }
            else return divide(first,second);
            break;
    }
}

const evaluate = document.querySelector(".evaluate");

evaluate.addEventListener('click', () => {
    if(['+','-','/','x'].includes(display.textContent.charAt(display.textContent.length-1))){
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
        termCount = 0;
    }

    if(termCount === 1) {
        term2 = display.textContent.replace(term1+lastButton,'');
        console.log(term2);
        termCount++;
    }

    if (termCount === 2) {
        display.textContent = calculate(parseFloat(term1),parseFloat(term2),op);
        term1 = calculate(parseFloat(term1),parseFloat(term2),op);
        termCount = 0;
    }
});

const clearButton = document.querySelector(".clearButton");
const deleteButton = document.querySelector(".deleteButton");

clearButton.addEventListener('click', () => {
    display.textContent = '';
    termCount = 0;
})

deleteButton.addEventListener('click', () => {
    if(['+','-','/','x'].includes(display.textContent.charAt(display.textContent.length-1))){
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
        termCount = 0;
    }
    else display.textContent = display.textContent.slice(0,display.textContent.length-1);
    
});

