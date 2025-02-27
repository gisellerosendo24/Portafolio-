
//definimos la constante que recibira los nombres de los amigos 
const amigos = [];
//definimos la funcion que evitara que se agrege un campo vacio a la lista
function mostrarError(mensaje) {
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.innerText = mensaje;
    mensajeError.style.display = "block";

    // Oculta el mensaje de error después de 3 segundos
    setTimeout(() => {
        mensajeError.style.display = "none";
    }, 3000);
}
//definimos la funcion que nos permitira agregar valores
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();
    
    if (!nombre) {
        mostrarError("Debe ingresar un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    document.getElementById("amigo").value = "";
}
//definimos la funcion para que la lista se vaya actualizando segun los elemntos agregados
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//definimos la funcion que permitira sortear a un amigo de esa lista.
function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerText = `El amigo secreto sorteado es: ${amigoSorteado}`;
    } else {
        mostrarError("Agrega al menos un amigo para sortear.");
    }
}