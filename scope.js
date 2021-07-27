// scope = alcance de una variable

// global

// la variable se declara para todo el documento y por lo tanto es accedida por cualquier elemento que la requiera

var nombre = "oscar";

// local

// la variable es declarada en la porcion de codigo que la puede usar

function miNombre(){

    var apellido = "silvera";
    miNombreEs = nombre + " " + apellido;
    return miNombreEs;
}


miNombre();


