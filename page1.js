// Get display element
const display = document.getElementById('display');
let currentInput = ''; // Store user input
let operator = '';     // Store current operator
let previousInput = ''; // Store previous input for calculations

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Get all buttons and add event listeners
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value;

        if (value === 'C') {
            // Clear the display and reset all values
            currentInput = '';
            operator = '';
            previousInput = '';
            updateDisplay(0);
        } else if (value === '=') {
            // Perform calculation
            if (previousInput && operator && currentInput) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                updateDisplay(currentInput);
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Handle operators
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            // Handle numbers and decimal point
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});
