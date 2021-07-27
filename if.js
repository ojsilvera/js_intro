// Estructura de la sentencia if falso - verdadero, validacion en un solo paso

// if (la compracion){
//     lo que sucede si es verdad
// } else {
//      lo que sucede sino es verdad
// }

// Estructura de la sentencia if falso - verdadero, validacion en mas de un paso

// if (la compracion){
//     lo que sucede si es verdad
// } else if(segunda validacion){
//      lo que sucede si es verdad
// } else{
//     lo que secede si falla la validacion anterior
// }

//ejemplo

var edad = 18;

if (edad == 18){

    console.log( "puedes votar, bienvenido es tu primera vez");

} else if( edad >= 18){

    console.log( "puedes votar, bienvenido");
}
else {
    console.log( "regresa cuando tengas mas de 18 :)");

}

// estructura operador ternario

// condicion ? true : false;


var edad = 18

edad == 18 ? console.log( "puedes votar, bienvenido es tu primera vez") : console.log( "regresa cuando tengas mas de 18 :)");

// ejemplo piedra papel o tijera
// a la izquierda la elccion de la maquina y derecha el jugador

var opc = ["tijera", "piedra",  "papel"];

var opcMaquina = opc[ Math.floor((Math.random() * (3-0))+0) ];

var opcJugador = opc[ Math.floor((Math.random() * (3-0))+0) ];;

function juego(opcMaquina, opcJugador){

    if(opcMaquina == "piedra" && opcJugador == "papel" || opcMaquina == "papel" && opcJugador == "tijera" || opcMaquina == "tijera" && opcJugador == "piedra" )
    {
        // "piedra" vs "papel" = gana juagdor // "papel" vs "tijera" = gana jugador  // "tijera" vs "piedra" = gana jugador
        console.log("gana jugador")
    }
    else if(opcMaquina == "tijera" && opcJugador == "papel" || opcMaquina == "piedra" && opcJugador == "tijera" || opcMaquina == "papel" && opcJugador == "piedra" )
    {
        // "tijera" vs "papel" = gana maquina // "piedra" vs "tijera" = gana maquina // "papel" vs "piedra" = gana maguina
        console.log("gana maquina")
    }else if(opcMaquina == opcJugador)
    {
        // "piedra" vs "piedra" = empate // "tijera" vs "tijera" = empate // "papel" vs "papel" = empate
        console.log("Empate")
    }
}

juego(opcMaquina,opcJugador);