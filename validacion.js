const inputName = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputSubject = document.getElementById("asunto");
const inputMessage = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");
const resultado = document.getElementById("resultado");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    limpiarMensajeError();

    const myName = inputName.value.trim();
    const myEmail = inputEmail.value.trim();
    const mySubject = inputSubject.value.trim();
    const myMessage = inputMessage.value.trim();

    if (validar(myName, myEmail, mySubject, myMessage)) {
        resultado.innerHTML = "Mensaje enviado con éxito !!!";
        contactForm.reset()
        setTimeout(() => {
            resultado.innerHTML = "";
        }, 3000);
    }
});

function limpiarMensajeError() {
    errorNombre.innerHTML = "";
    errorEmail.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
}

function validar(name, mail, subject, message) {
    let datosOk = true;
    const validacionName = /[a-zA-Z]+/;
    const validacionTexto = /[a-zA-Z0-9]+/;
    const validacionMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!validacionName.test(name)) {
        errorNombre.innerHTML = 'El nombre es requerido';
        datosOk = false;
    }
    if (!validacionMail.test(mail)) {
        errorEmail.innerHTML = 'El mail no es válido';
        datosOk = false;
    }
    if (!validacionTexto.test(subject)) {
        errorAsunto.innerHTML = 'El asunto es requerido';
        datosOk = false;
    }
    if (!validacionTexto.test(message)) {
        errorMensaje.innerHTML = 'El mensaje es requerido';
        datosOk = false;
    }
    return datosOk;
}
