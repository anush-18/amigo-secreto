// Declarar variable de tipo array para los nombre de los amigos ingresados
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
// Capturar el valor de entrada
let amigoIngresado = document.querySelector("input").value;
// validar la entrada asegurandose que el campo no este vacío
if (amigoIngresado.trim() === "") {
    alert ("Por favor, inserte un nombre.");
} else {
    // Actualizar array de amigos
    amigos.push(amigoIngresado);
    // Actualizar la lista
    actualizarLista();
    // Limpuar el campo de entrada
    document.querySelector("input").value = "";
}
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente para que no haya duplicados
    lista.innerHTML = "";
    //Iterar sobre el arreglo 
    for (let i=0; i < amigos.length; i++) {
        // Agregar elementos a la lista
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


// Función para sortear amigos
function sortearAmigo() {
    // Comprobar el que el array no este vacío
    if (amigos.length === 0) {
        console.log("El array está vacío");
        return;
    } 
        // Generar un índice aleatorio
        let indice = Math.floor(Math.random()*amigos.length);
        // Obtener el nombre sorteado
        amigoSorteado = amigos[indice];
        // Mostrar el resultado
        let resultado = document.getElementById('resultado');
        resultado.textContent = `El nombre del amigo secreto sorteado es: ${amigoSorteado}`;
}