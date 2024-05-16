const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const sumar1 = () => {

}
const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
function agregarElemento() {
    /*inner HTML es para los elementos que dentro de su contenido aceptan un elemento*/
    document.getElementById("idDivision").innerHTML = "<button>Nuevo</button>";

}
function quitarElemento() {
    /*inner HTML es para los elementos que dentro de su contenido aceptan un elemento*/
    document.getElementById("idDivision").innerHTML = "";

}
function conceptosJS() {
    /*TIPOS DE DATOS JAVA SCRIPT */
    /*let,var,const para almecenar tipos de datos*/
    /*Const se usa para datos que no van a ser modificados*/
    const IVA = 15;
    console.log(IVA);

    /*var tipo de dato sirve para modificar aunque esta quedando en des uso porque
    el let maneja de mejor manera la memoria */
    var nombre = "Renato";
    console.log(nombre);
    nombre = "Dillan";
    console.log(nombre)
    var apellido = "Coloma";
    console.log(apellido);
    apellido = "Pozo";
    console.log(apellido)

    //Declaración de Arrglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[5]);//En java Script siempre algo que no existe sale indefined o cuando algo valga nulo da ese valor
    diasSemana[5] = "Sabado";
    console.log(diasSemana)

    //El push coloca al final del arreglo
    diasSemana.push("Domingo")
    console.log(diasSemana)
    //El push coloca al inicio del arreglo
    diasSemana.unshift("dias")
    console.log(diasSemana)

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosCompletos = numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    //Sentencias
    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === "Viernes") {//Se compara con tres Iguales
            console.log("Por fin llego el fin de Semana, San Viernes");
        }
    }

    if (diasSemana[8] === undefined) {
        console.log("No existe")
    } else {
        console.log("Si tiene valor")
    }

    //MANEJO DE OBJETOS EN JAVA SCRIPT:

    //Se declara de la siguiente manera, se usa el formato del archivo JSON
    //{cada valor que quiero poner su estructura es llave-Valor
    // nombre:"Edison"}

    //Se lo declara con const por que es un objeto y no se va a cambiar
    //se lo puede manipular solo para visualizar
    const estudiante = {
        nombre: "Dillan",
        apellido: "Coloma",
        edad: 25,
        genero: "masculino",
        ciudadNacimiento: "Quito"
    }
    console.log(estudiante);
    console.log(estudiante.apellido);
    estudiante.nombre = "Renato";
    console.log(estudiante);

    //Se pude usar objetos con atributos compuestos/ complejos
    const profesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 34,
        genero: "masculino",
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "Av América",
            callerSecundaria: "La Gasca",
            numeracion: "E4103",
            barrio: "Belisario Quevedo"
        }
    }
    console.log(profesor);
    console.log(profesor.direccion.barrio = "Eplicachima");

    //ARREGLOS DE OBJETOS
    const estu1 = {
        nombre: "Andres",
        apellido: "Caiza"
    }
    const estu2 = {
        nombre: "Daniel",
        apellido: "Comas"
    }
    const estu3 = {
        nombre: "Henry",
        apellido: "Perez"
    }
    const estu4 = {
        nombre: "María",
        apellido: "Caiza"
    }

    const estudiantes = [estu1, estu2, estu3, estu4];
    console.log(estudiantes);
    console.table(estudiantes);
    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);
    estudiantes[1].apellido = "Cambiar Apellido"
    console.table(estudiantes);


    const profesores=[{nombre:"Edison",edad:34},{nombre:"Andrea", edad:32}];
    console.table(profesores);

    //Arreglo cuando quiero seguir usando elementos de mi arreglo con el método POP
    //este me va elimando elementos de una lista, y si quiero puedo irles sacando
    //en una lista
    var prof=profesores.pop();
   console.log(prof);
   console.table(profesores);

   //Desesctructuración  de Arreglos
   //Desarmar el arreglo
   const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
   const [dia1,dia2,dia3,dia4]= diasSemana2;//Aquí desarmo el arreglo
   console.log(dia2);
   console.log(dia4);
 
   console.table(diasSemana2);
   const [d1,d2,d3,d4,d5]= ["lunes-1","martes-2","Miercoles-3","Jueves-4","Viernes-5"];
   console.log(d4);
   console.log(d5);

   //Desesctructuración de Objetos:

   const vehiculo={
    marca:"Toyota",
    modelo:"Prius",
    anio:"2018"
   }

// cuando hago objetos lo hago con llaves, no puedo hacer con alias, debo poner 
//los nombres del objeto que deseo desarmar ejm:
   const {anio,marca}=vehiculo;
   console.log(marca);
   console.log(anio);

   const {modelo}={
    marca:"Ford",
    modelo:"Edge",
    anio:"2020"
   }
   console.log(modelo);

   //Desectructuracion de un objeto tenga un atributo compuesto, de los pricipales
   //como de los secundarios
   const profesor1 = {
    nombre2: "Edison",
    apellido2: "Cayambe",
    edad2: 34,
    genero2: "masculino",
    ciudadNacimiento: "Quito",
    direccion: {
        callePrincipal: "Av América",
        callerSecundaria: "La Gasca",
        numeracion: "E4103",
        barrio: "Belisario Quevedo"
    }
}
/*const {nombre2,apellido2,direccion}=profesor1
console.log(direccion);
const{callePrincipal,barrio}=direccion;
console.log(barrio)*/
const{nombre2,apellido2,direccion:{callePrincipal,barrio}}=profesor1;
console.log(barrio);


}