// calculator.js
let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let operand1 = null;
let operand2 = null;

function appendToDisplay(value) {
    // Prevent multiple dots
    if (value === '.' && currentInput.includes('.')) return; 
    currentInput += value;
    display.innerText = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    operand1 = null;
    operand2 = null;
    display.innerText = '0';
}

function calculate() {
    if (currentInput === '' || currentOperation === '' || operand1 === null) return;

    operand2 = parseFloat(currentInput);
    let result = 0;

    switch (currentOperation) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            return; // If operation is not valid
    }

    display.innerText = result;
    currentInput = result.toString();
    currentOperation = '';
    operand1 = result;
}

function setOperation(operation) {
    if (currentInput === '') return;
    operand1 = parseFloat(currentInput);
    currentOperation = operation;
    currentInput = '';
}

document.querySelector('.buttons').addEventListener('click', event => {
    const value = event.target.innerText;

    // Check if the clicked element is a button
    if (event.target.classList.contains('btn')) {
        // Handle number and dot input
        if (!isNaN(value) || value === '.') {
            appendToDisplay(value);
        }
        // Handle operations
        else if (['+', '-', '*', '/'].includes(value)) {
            setOperation(value);
        }
        // Handle equal sign
        else if (value === '=') {
            calculate();
        }
        // Handle clear button
        else if (value === 'C') {
            clearDisplay();
        }
    }
});
