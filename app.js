// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAmigosHTML = document.getElementById("listaAmigos");


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
        enlazarListas();
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
        return false;           // retorna falso si no hay texto en la caja                                                      
    } else {
        return true;            // retorna verdadero si existe texto en la caja
    }
}

// Codigo de las listas

function crearElementosLI (elemento){
    let nuevoLI = document.createElement("li");
    nuevoLI.textContent = elemento;
    return nuevoLI;
}

function addtoListaHTML(elemento){
    listaAmigosHTML.appendChild(elemento);
}

function enlazarListas (){
    borrarAnteriorListaHTML();
    for (let i = 0; i < amigos.length; i++ ){
        addtoListaHTML(crearElementosLI(amigos[i]));
    }
}

function borrarAnteriorListaHTML (){
    listaAmigosHTML.innerHTML = "";
}

function generarNumeroAleatorio (){
    let indice = Math.floor(Math.random() * amigos.length);
    return indice;
}

function comprobarNulidadAmigos(){
    if (amigos.length === 0){
        return false;               // retorna falso si no hay elementos
    }else {
        return true;                // retorna verdadero si existen elementos
    }
}

function obtenerNombreSorteado(){
    return amigos[generarNumeroAleatorio()]    
}

function sortearAmigo() {
    //if (comprobarNulidadAmigos()){

    //}
}