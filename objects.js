// objeto su estructura es clave: valor

var auto = {
    año: 2020,
    modelo: "corola",
    marca: "toyota",
    detalles: function(){
        console.log("Auto" + " " + this.modelo + " " + this.marca)
    }
}

//acceder al objeto
//nombredelobjeto.clave y trae el valor

auto.año

//constructor

function auto(marca, modelo, anio){
    this.marca = marca,
    this.anio = anio,
    this.modelo = modelo
}

var nuevoAuto = new auto("toyota", "pickup", 2020);
var nuevoAuto2 = new auto("mazda", "deportivo", 2021);
var nuevoAuto3 = new auto("renault", "familiar", 2019);

//el nuevo objeto se llama por su nombre

nuevoAuto


//creando objetos aleatorios

var modelo = ["pickup", "deportivo", "familiar"];
var anio = [2019, 2020, 2021];
var marca = ["toyota","mazda","raneult"];

function auto(marca, modelo, anio){
    this.marca = marca,
    this.anio = anio,
    this.modelo = modelo
}


var cItems = 10

while (cItems > 0){

    //genero datos entre los disponibles en los arreglos preestableciados

    var fab = marca[ Math.floor((Math.random() * (3-0))+0) ];
    var model = modelo[ Math.floor((Math.random() * (3-0))+0) ];
    var year = anio[ Math.floor((Math.random() * (3-0))+0) ];

    // asigno un nombre para la nueva varriable
    var varName = "carNew" + cItems;

    // widow propiedad que maneja las variable
    window[varName] = new auto(fab, model, year);

    cItems = cItems - 1
}
