// declarativas

function miFuncion() {

    return 3;

}


//expresión son anonimas, no se establece un nombre para la funcion y se llaman por el nombre de la variable.

var miFuncion = function(a,b) {

    return a + b;

}

//interpolacion de textos 'texto ${variable}'

function saludar(estudiante){
    console.log('hola ${estudiante}');
}

saludar("oscar")

//salida

// hola oscar

// obtener rsultado de una funcion a traves de una variable

function suma(a, b){
    var resultado = a + b;
    return resultado; // retorna el valor de la sumatoria
}

suma(1, 2);


function suma(a, b){

    return ra + b; // retorna el valor de la sumatoria
}

suma(1, 2);