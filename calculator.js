let display = document.getElementById('display');
let currentInput = '';

function appendDigit(digit) {
    currentInput += digit;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    currentInput += operator;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
