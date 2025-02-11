// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = "";
let lista_Personas = [];

function limpiarCampos() {
    document.getElementById('amigo').value = "";
}

function agregarAmigo() {
    nombre = document.getElementById('amigo').value.trim();
    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return;
    }
    
    lista_Personas.push(nombre);
    console.log(lista_Personas);
    
    limpiarCampos();
    actualizarLista(); // Llamar la función para actualizar la lista visualmente
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = ""; 

    for (let i = 0; i < lista_Personas.length; i++) {
        let li = document.createElement("li");
        li.textContent = lista_Personas[i];
        lista.appendChild(li);
    }
}


