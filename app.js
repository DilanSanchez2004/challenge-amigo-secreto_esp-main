// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = "";
let lista_Personas = [];

function limpiarCampos() {
    document.getElementById('amigo').value = "";
}
// Función para agregar un amigo
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

// Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento listaAmigos
    lista.style.color = "Black";
    lista.style.fontWeight = "normal";
    
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = ""; 

    for (let i = 0; i < lista_Personas.length; i++) {
        let li = document.createElement("li");
        li.textContent = lista_Personas[i];
        lista.appendChild(li);
    }
}
// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si la lista de amigos está vacía
    if (lista_Personas.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }
    else{
        //Sortea aleatoriamente un amigo de la lista
        let amigoSorteado = lista_Personas[Math.floor(Math.random() * lista_Personas.length)];
        let lista = document.getElementById("listaAmigos");
        lista.textContent = "El amigo seleccionado es: " + amigoSorteado; // Cambiar el texto de la lista
        lista.style.color = "green"; // Cambiar el color del texto a verde
        lista.style.fontWeight = "bold"; // Cambia la fuente a negrita
    }

}





