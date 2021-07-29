var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 },
    {nombre: "Audifonos", cosot: 1700 },
];


// Filtrado de objetos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//contiene el resultado del filtro
articulosFiltrados

//Mapea un objeto y obtienes una de sus proiedades
var articulosNombre = articulos.map(function(articulo){
    return articulo.nombre
});

articulosNombre

// encuentra un objeto
var articulosNombre = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});

// listado de articulos por campo
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some genera true o false al encontrar concincidencias
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});


