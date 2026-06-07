let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

const display = document.querySelector(".display");
const allClearBtn = document.querySelector(".all-clear");
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
    return Math.round((Number(a) + Number(b)) * 100000000)/100000000;
};

function subtract(a,b) {
    return Math.round((Number(a) - Number(b)) * 100000000)/100000000;
};

function multiply(a,b) {
    return Math.round((Number(a) * Number(b)) * 100000000)/100000000;
};

function divide(a,b) {
    if (Number(b) === 0) {
        alert("Imagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get? See, it doesn't make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.");
        firstNumber = secondNumber = operator = result = display.textContent = undefined;
    } else {
        return Math.round((Number(a) / Number(b)) * 100000000)/100000000;
    };
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
    if (firstNumber === "") {
        firstNumber += num;
        display.textContent = firstNumber;
    } else if (firstNumber !== "" && operator === ""){
        firstNumber += num;
        display.textContent = firstNumber;
    } else if (secondNumber === "") {
        secondNumber += num;
        display.textContent = secondNumber;
    } else {
        secondNumber += num;
        display.textContent = secondNumber;
    };

};

function updateOperator(op) {
    if (firstNumber === "") {
        
    } else if (operator === "") {
        operator = op;
    } else if (operator !== "" && secondNumber === "") {
        operator = op;
    } else {
        operate(firstNumber,operator,secondNumber);
        display.textContent = result;
        firstNumber = result.toString();
        secondNumber = "";
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
allClearBtn.addEventListener("click", () => firstNumber = secondNumber = operator = result = display.textContent = "");
clearBtn.addEventListener("click", () => {
    if (firstNumber === "" && secondNumber === "") {
        
    } else if (operator !== "" && secondNumber === ""){
        
    } else if (secondNumber === "") {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber;
    };
});
addBtn.addEventListener("click", () => {updateOperator("+")});
subtractBtn.addEventListener("click", () => {updateOperator("-")});
multiplyBtn.addEventListener("click", () => {updateOperator("*")});
divideBtn.addEventListener("click", () => {updateOperator("/")});
equalsBtn.addEventListener("click", () => {
    if (firstNumber === "" || secondNumber === "" || operator === "") {

    } else {
    operate(firstNumber,operator,secondNumber);
    display.textContent = result;
    firstNumber = secondNumber = operator = result = "";
    };
});
pointBtn.addEventListener("click", () => {
    if (firstNumber === "" && operator === "" && secondNumber === "") {
        firstNumber = "0.";
        display.textContent = firstNumber;
    } else if (firstNumber.includes(".") && operator === "" && secondNumber === "") {

    } else if (operator === "" && secondNumber === "") {
        firstNumber += ".";
        display.textContent = firstNumber;
    } else if (secondNumber === "") {
        secondNumber = "0.";
        display.textContent = secondNumber;
    } else if (secondNumber.includes(".")) {

    } else if (secondNumber !== "") {
        secondNumber += ".";
        display.textContent = secondNumber;
    };
});

document.addEventListener("keydown", (e) => {
    if (event.defaultPrevented) {
        return;
    };
    
    switch (e.key){
        case "0":
            updateNumbers(0);
            break;
        case "1":
            updateNumbers(1);
            break;
        case "2":
            updateNumbers(2);
            break;
        case "3":
            updateNumbers(3);
            break;
        case "4":
            updateNumbers(4);
            break;
        case "5":
            updateNumbers(5);
            break;
        case "6":
            updateNumbers(6);
            break;
        case "7":
            updateNumbers(7);
            break;
        case "8":
            updateNumbers(8);
            break;
        case "9":
            updateNumbers(9);
            break;
        case "Escape":
            firstNumber = secondNumber = operator = result = display.textContent = "";
            break;
        case "Backspace":
            if (firstNumber === "" && secondNumber === "") {
        
            } else if (operator !== "" && secondNumber === ""){
        
            } else if (secondNumber === "") {
                firstNumber = firstNumber.slice(0, -1);
                display.textContent = firstNumber;
            } else {
                secondNumber = secondNumber.slice(0, -1);
                display.textContent = secondNumber;
            };
            break;
        case "+":
            updateOperator("+");
            break;
        case "-":
            updateOperator("-");
            break;
        case "*":
            updateOperator("*");
            break;
        case "/":
            updateOperator("/");
            break;
        case "=":
            if (firstNumber === "" || secondNumber === "" || operator === "") {

            } else {
                operate(firstNumber,operator,secondNumber);
                display.textContent = result;
                firstNumber = secondNumber = operator = result = "";
            };
            break;
        case ".":
            if (firstNumber === "" && operator === "" && secondNumber === "") {
                firstNumber = "0.";
                display.textContent = firstNumber;
            } else if (firstNumber.includes(".") && operator === "" && secondNumber === "") {

            } else if (operator === "" && secondNumber === "") {
                firstNumber += ".";
                display.textContent = firstNumber;
            } else if (secondNumber === "") {
                secondNumber = "0.";
                display.textContent = secondNumber;
            } else if (secondNumber.includes(".")) {

            } else if (secondNumber !== "") {
                secondNumber += ".";
                display.textContent = secondNumber;
            };
            break;
    };

    event.preventDefault();
},true);