const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("nombre");
const boton = document.getElementById("botonSaludar");

boton.addEventListener("click", function() {

    const nombreUsuario = nombre.value;

    if (nombreUsuario === "") {
        mensaje.textContent = "Por favor, escribe tu nombre.";
        return;
    }

    titulo.textContent = "¡Hola " + nombreUsuario + "!";
    mensaje.textContent = "Bienvenido a mi página.";

    mensaje.style.color = "green";
});