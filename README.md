# curso de introduccion a js

- Interpretado.
- Orientado a objetos.
- Dinamico.
- Debilmente tipado.

## tipos de datos:

- STRING: Cadenas de texto.
- NUMBER: Valores numéricos.
- BOOLEAN: Representa una entidad lógica y puede tener dos valores: true y false.
- NULL: Es un valor asignado tiene el valor de “no valor”.
- UNDEFINED:Una variable a la que no se le ha asignado ningún valor tiene el valor undefined.
- SYMBOL: Nuevo en ECMAScript 2015.
- OBJECT: Un valor en memoria al que podemos acceder por un identificador.

Estos tipos se dividen en dos grupos, Primitivos y de Objeto.

## Tipos Primitivos.

Los valores primitivos son inmutables, no pueden ser cambiados.

String, Number, Boolean, null, undefined y Symbol son tipos primitivos.

Los tipos primitivos no tienen métodos ni propiedades, aunque en los string, numbers y booleans podemos
acceder a ellas grácias a los wrappers objects.

## Tipos de Objeto.

Un Objeto es un valor en memoria al que podemos acceder por un identificador.

En JavaScript los objetos pueden ser vistos como una colección de propiedades.

Un Objeto en notación literal tiene este aspecto:

var persona = { nombre: “Marcel”, edad: “38”, ciudad: “Alaior” }.

# Nota con la sentencia TYPEOF mas el dato, no da que tipo de dato es por ejemplo: TYPEOF 40, no devolvera number
