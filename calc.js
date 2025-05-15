let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousValue = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousValue !== null) {
        calculate();
    }
    previousValue = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousValue = null;
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    if (operator === null || previousValue === null) return;
    let result;
    const currentValue = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = previousValue + currentValue;
            break;
        case '-':
            result = previousValue - currentValue;
            break;
        case '*':
            result = previousValue * currentValue;
            break;
        case '/':
            if (currentValue === 0) {
                display.value = 'Error';
                return;
            }
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    currentInput = String(result);
    operator = null;
    previousValue = null;
    display.value = currentInput;
}