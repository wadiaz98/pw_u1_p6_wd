let operando1 = 0;
let operando2 = 0;
let operador = '';

function obtenerCantidad(num) {
    if (operador === '') {
        operando1 = operando1 + num;
        document.getElementById('idResultado').innerText = operando1;
    } else {
        operando2 = operando2 + num;
        document.getElementById('idResultado').innerText = operando2;
    }
}

function resetearVariables() {
    operando1 = 0;
    operando2 = 0;
    operador = '';
    document.getElementById('idResultado').innerText = '';
}


document.querySelectorAll('.calculadora button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.innerText === '=') {
            calcularResultado();
        } else if ('0123456789'.includes(e.target.innerText)) {
            obtenerCantidad(parseInt(e.target.innerText));
        } else {
            operador = e.target.innerText;
        }
    });
});

function calcularResultado() {
    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case 'X':
            resultado = operando1 * operando2;
            break;
        case '÷':
            resultado = operando1 / operando2;
            break;
    }
    document.getElementById('idResultado').innerText = resultado;
    resetearVariables();
}
