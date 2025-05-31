const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const equals = document.getElementById('equals');
const opeInput = document.getElementById('op');
const clear = document.getElementById('clear');

let activeInput = input1;



document.getElementById('addition').addEventListener('click', () => opeInput.value = '+');
document.getElementById('subtraction').addEventListener('click', () => opeInput.value = '-');
document.getElementById('multiplication').addEventListener('click', () => opeInput.value = '*');
document.getElementById('division').addEventListener('click', () => opeInput.value = '/');

document.getElementById("numButtons").addEventListener("click", function(event) {
    if (event.target.matches("button.num")) {
        const value = event.target.getAttribute('data-value');
        activeInput.value += value;
    }});
   
input1.addEventListener("focus", () => activeInput = input1);
input2.addEventListener("focus", () => activeInput = input2);

function operate() {
    const op = opeInput.value;
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);

    if (isNaN(value1) || isNaN(value2) || !op) {
        alert('Please enter valid numbers and select an operation.');
        return;
    }
    let result;
    switch (op) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = value1 / value2;
            break;
        default:
            return 'Invalid operation bro';
    }
    input1.value = '';
    input2.value = '';
    opeInput.value = '';
    input1.value = result;
    activeInput = input1; 
}


console.log(equals.addEventListener('click', operate));
clear.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    opeInput.value = '';
});