let currentInput = "";
let operador = "";
let currentResult = null;

const obtenerCantidad = (input) => {
  const display = document.getElementById("idResultado");

  if (input === "R") {
    resetearVariables();
    return;
  }

  if (input === "=") {
    if (currentInput !== "" && operador !== "") {
      currentResult = calcularResultado(currentResult, parseFloat(currentInput), operador);
      display.innerText = currentResult;
      currentInput = "";
      operador = "";
    }
    return;
  }

  if (["+", "-", "X", "÷"].includes(input)) {
    if (currentInput !== "") {
      if (currentResult === null) {
        currentResult = parseFloat(currentInput);
      } else {
        currentResult = calcularResultado(currentResult, parseFloat(currentInput), operador);
      }
      operador = input;
      currentInput = "";
      display.innerText = currentResult + " " + operador;
    } else if (currentResult !== null) {
      operador = input;
      display.innerText = currentResult + " " + operador;
    }
    return;
  }


  if (input === "." && currentInput.includes(".")) {
    return; 
  }
  currentInput += input;
  display.innerText += input;
};

const calcularResultado = (x, y, operador) => {
  switch (operador) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "X":
      return x * y;
    case "÷":
      return x / y;
    default:
      return y;
  }
};

const resetearVariables = () => {
  currentInput = "";
  operador = "";
  currentResult = null;
  document.getElementById("idResultado").innerText = "0";
};

const borrarUltimo = () => {
  const display = document.getElementById("idResultado");
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    display.innerText = display.innerText.slice(0, -1);
  } else if (operador !== "") {
    operador = "";
    display.innerText = display.innerText.slice(0, -1);
  } else if (currentResult !== null) {
    currentResult = null;
    display.innerText = "";
  }
};
