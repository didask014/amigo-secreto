// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];



function ingresarAmigos (nombre){
    amigos.push(nombre);
    return mostrarLista();
}

function mostrarLista(){
    console.log(`La lista de amigos es: ${amigos}`);
}

function agregarAmigo(){
    if (validarEntrada() === true) {
        let cajaEntrada = document.getElementById("amigo").value;
        ingresarAmigos(cajaEntrada);
        borrarCajaInput();
    } else {
        alert(`Por favor, inserte un nombre`);
    }
    
    
}

function borrarCajaInput(){
    let cajaEntrada = document.querySelector("#amigo");
    cajaEntrada.value = "";
}

function validarEntrada(){
    if (cajaEntrada = document.getElementById("amigo").value === ""){
        return false;
    } else {
        return true;
    }
}

