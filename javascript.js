let firstNumber
let secondNumber
let operator
let result

const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const pointBtn = document.querySelector(".point");
const equalsBtn = document.querySelector(".equals");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

function add(a,b) {
    return Math.round((a + b) * 100000000)/100000000;
};

function subtract(a,b) {
    return Math.round((a - b) * 100000000)/100000000;
};

function multiply(a,b) {
    return Math.round((a * b) * 100000000)/100000000;
};

function divide(a,b) {
    if (b === 0) {
        alert("Imagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get? See, it doesn't make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.");
        firstNumber = secondNumber = operator = result = display.textContent = undefined;
    } else {
        return Math.round((a / b) * 100000000)/100000000;
    }
};

function operate(num1,op,num2) {
    if (op === "+") {
        result = add(num1,num2);
    } else if (op === "-") {
        result = subtract(num1,num2);
    } else if (op === "*") {
        result = multiply(num1,num2);
    } else if (op === "/") {
        result = divide(num1,num2);
    };
};

function updateNumbers(num) {
    if (firstNumber === undefined) {
        firstNumber = num;
        display.textContent = firstNumber;
    } else if (firstNumber !== undefined && operator === undefined){
        firstNumber = Number("" + firstNumber + num);
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = num;
        display.textContent = secondNumber;
    } else {
        secondNumber = Number("" + secondNumber + num);
        display.textContent = secondNumber;
    };

};

function updateOperator(op) {
    if (firstNumber === undefined) {
        
    } else if (operator === undefined) {
        operator = op;
    } else if (operator !== undefined && secondNumber === undefined) {
        operator = op;
    } else {
        operate(firstNumber,operator,secondNumber);
        display.textContent = result;
        firstNumber = result;
        secondNumber = undefined;
        operator = op;
    };
}

zeroBtn.addEventListener("click", () => {updateNumbers(0)});
oneBtn.addEventListener("click", () => {updateNumbers(1)});
twoBtn.addEventListener("click", () => {updateNumbers(2)});
threeBtn.addEventListener("click", () => {updateNumbers(3)});
fourBtn.addEventListener("click", () => {updateNumbers(4)});
fiveBtn.addEventListener("click", () => {updateNumbers(5)});
sixBtn.addEventListener("click", () => {updateNumbers(6)});
sevenBtn.addEventListener("click", () => {updateNumbers(7)});
eightBtn.addEventListener("click", () => {updateNumbers(8)});
nineBtn.addEventListener("click",  () => {updateNumbers(9)});
clearBtn.addEventListener("click", () => firstNumber = secondNumber = operator = result = display.textContent = undefined);
addBtn.addEventListener("click", () => {updateOperator("+")});
subtractBtn.addEventListener("click", () => {updateOperator("-")});
multiplyBtn.addEventListener("click", () => {updateOperator("*")});
divideBtn.addEventListener("click", () => {updateOperator("/")});
equalsBtn.addEventListener("click", () => {
    if (firstNumber === undefined || secondNumber === undefined || operator === undefined) {

    } else {
    operate(firstNumber,operator,secondNumber);
    display.textContent = result;
    firstNumber = secondNumber = operator = result = undefined;
    };
});