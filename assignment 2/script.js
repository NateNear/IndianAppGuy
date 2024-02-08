let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function calculatePercent() {
    try {
        displayValue = eval(displayValue + '/100');
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function toggleSign() {
    if (displayValue !== '0' && displayValue !== 'Error') {
        displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
        updateDisplay();
    }
}

updateDisplay();
