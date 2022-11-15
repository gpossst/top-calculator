const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
let operator = [];
let outputs = [];

function selectAdd() {
    operator.unshift('add');
    console.log(operator);
}

function selectSubtract() {
    operator.unshift('subtract');
    console.log(operator);
}

function selectMultiply() {
    operator.unshift('multiply');
    console.log(operator);
}

function selectDivide() {
    operator.unshift('divide');
    console.log(operator);
}

function selectReturn() {
    let valueOne = document.getElementById('box-one').value
    let valueTwo = document.getElementById('box-two').value
    console.log(operator)
    if(operator[0] === 'add') {
        let output = +valueOne + +valueTwo;
        console.log(output);
    } else if (operator[0] === 'subtract') {
        let output = +valueOne - +valueTwo;
        console.log(output);
    } else if (operator[0] === 'multiply') {
        let output = +valueOne * +valueTwo;
        console.log(output);
    } else if (operator[0] === 'divide') {
        let output = +valueOne / +valueTwo;
        console.log(output);
    }
}

window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        selectReturn();
    }
})