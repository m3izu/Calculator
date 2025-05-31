let first = document.getElementById("input1");
let second = document.getElementById("input2");
let addButt = document.getElementById("addition");
let subButt = document.getElementById("subtraction");
let mulButt = document.getElementById("multiplication");
let divButt = document.getElementById("division");

function addition() {
    let sum = Number(first.value) + Number(second.value);
    console.log(sum);
}

function subtraction() {
    let diff = Number(first.value) - Number(second.value);
    console.log(diff);
}

function multiplication() {
    let product = Number(first.value) * Number(second.value);
    console.log(product);
}   

function division() {
    let quotient = Number(first.value) / Number(second.value);
    console.log(quotient);
}

function getNumber() {
    const numdis = document.getElementById("numdis");
}

function operate(operator) {
    switch (operator) {
        case '+':
            addition();
            break;
        case '-':
            subtraction();
            break;
        case '*':
            multiplication();
            break;
        case '/':
            division();
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}

addButt.addEventListener("click", addition);
subButt.addEventListener("click", subtraction);
mulButt.addEventListener("click", multiplication);
divButt.addEventListener("click", division);