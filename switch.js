// var
// switch(var){
//     case var == var:
//         aqui lo que sucede si es verdad;
//         break
//     case var == var:
//         aqui lo que sucede si es verdad
//         break
//     case var == var:
//         aqui lo que sucede si es verdad
//         break
//      default:
//         aqui sino se cumple ninguno
// }

var numero = 1;

switch(numero){
    case 1:
        console.log("correcto soy un 1");
        break
    case 10:
        console.log("correcto soy un 10");
        break
    default:
        console.log("no me has encontrado aun");
}



// ejemplo piedra papel o tijera

var opc = ["tijera", "piedra",  "papel"];

var opcMaquina = opc[ Math.floor((Math.random() * (3-0))+0) ];

var opcJugador = opc[ Math.floor((Math.random() * (3-0))+0) ];


function juego(opcMaquina, opcJugador){

    op = opcMaquina + opcJugador

    switch(op){

//casos en los que gana el player
        case  "piedrapapel":
            console.log("gana Jugador");
            break
        case  "papeltijera":
            console.log("gana Jugador");
            break
        case  "tijerapiedra":
            console.log("gana Jugador");
            break
//casos en lo que gana la maquina
        case  "tijerapapel":
            console.log("gana Maquina");
            break
        case  "piedratijera":
            console.log("gana Maquina");
            break
        case  "papelpiedra":
            console.log("gana Maquina");
            break
//opcion empate
        default:
            console.log("Empatados");
            break
    }

}

juego(opcMaquina, opcJugador);