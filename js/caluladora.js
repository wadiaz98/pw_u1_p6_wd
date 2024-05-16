/* esta forma es más generica*/
function sumar(idNum1, idnNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idnNum2).value);

    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}
/**los id son quemado en esta forma */
function sumar2() {
    var num1 = document.getElementById("idnumero1").value;
    var num1 = document.getElementById("idnumero2").value;
}
function multiplicar(idNum1, idnNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idnNum2).value);

    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta

}
function restar(idNum1, idnNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idnNum2).value);

    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}
function dividir(idNum1, idnNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idnNum2).value);

    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}
