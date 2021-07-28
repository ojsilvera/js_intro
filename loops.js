var estudiantes = ["oscar", "diego", "maryluz", "franchesca"]

function saludar(estudiante){
    console.log("Hola", + " " + estudiante);
}


// for
for(var i=0; i < estudiantes.length; i++){

    saludar(estudiantes[i]);
}

for(var estudiante of estudiantes){

    saludar(estudiante);

}

// while

var estudiantes = ["oscar", "diego", "maryluz", "franchesca"]

function saludar(estudiante){
    console.log("Hola", + " " + estudiante);
}

while(estudiantes.length > 0){

    estudiante = estudiantes.shift();
    saludar(estudiante);
}
