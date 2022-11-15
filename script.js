const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const outputContainer = document.querySelector('.outputs')
let outputList = document.querySelector('#output-list')
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
        outputs.unshift(+valueOne + +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'subtract') {
        outputs.unshift(+valueOne - +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'multiply') {
        outputs.unshift(+valueOne * +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'divide') {
        outputs.unshift(+valueOne / +valueTwo);
        console.log(outputs[0]);
    }
    addOut();
}

window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        selectReturn();
    }
})

function addOut(oot){
    let div = document.createElement('div');
    div.classList.add('oots');
    div.textContent = outputs[0];
    outputContainer.insertBefore(div, outputContainer.firstChild);
}