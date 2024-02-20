const valueDisplay = document.getElementById("value");
const clearButton = document.getElementById("clear");
const allClearButton = document.getElementById("ac");
const equalButton = document.getElementById("equal");
const plusButton = document.getElementById("plus");
const numberButtons = document.querySelectorAll(".keys span:not(#clear,#ac,#plus,#equal)");
const darkModeButton = document.querySelector(".dark-mode");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let isResult = false;

// Function to handle number button clicks
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (isResult) {
      valueDisplay.textContent = button.textContent;
      isResult = false;
    } else {
      valueDisplay.textContent += button.textContent;
    }
  });
});

// Function to handle operator button clicks
function handleOperator(op) {
  operator = op;
  firstOperand = valueDisplay.textContent;
  isResult = false;
}

plusButton.addEventListener("click", () => handleOperator("+"));

// Function to handle clear button clicks
clearButton.addEventListener("click", () => {
  valueDisplay.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  isResult = false;
});

// Function to handle all clear button clicks
allClearButton.addEventListener("click", () => {
  valueDisplay.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  isResult = false;
});

// Function to handle equal button clicks
equalButton.addEventListener("click", () => {
  secondOperand = valueDisplay.textContent;
  let result = eval(firstOperand + operator + secondOperand);
  valueDisplay.textContent = result;
  isResult = true;
});

// Function to handle dark mode button clicks
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

