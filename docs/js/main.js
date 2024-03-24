const btnDialog = document.querySelector("button.button-normal")
const btnConfirm = document.querySelector("button.button-confirm")
const btnPrompt = document.querySelector("button.button-prompt")

function mostrarMensajeCallback() {
    console.warn("Este es un mensaje CallBack que se dispara luego de pulsar ACEPTAR :)")
}

function mostrarTextoCapturado(texto) {
    console.log("Texto capturado: " + texto)
}

btnDialog.addEventListener("click", ()=> { 
    const dialogParams = {
        title: "Diálogo estándar",
        text: "Esto es un cuadro de diálogo estándar. Sé conciso con lo que quieres informar.",
        buttonText: "Aceptar",
    }
    Dialog.alert(dialogParams)
})

btnConfirm.addEventListener("click", ()=> {
    const confirmParams = {
        title: "Cuadro de Confirmación",
        text: "Este cuadro de diálogo de confirmación dispara una función enviada por referencia cuando se pulsa el botón 'ACEPTAR'.",
        defaultButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        callBackFn: mostrarMensajeCallback
    }
    Dialog.confirm(confirmParams)
})

btnPrompt.addEventListener("click", ()=> {
    const promptParams = {
        title: "Cuadro de Entrada",
        text: "Ingrese un valor en la siguiente caja de texto:",
        placeholderInput: "Esperando un valor...",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Deshacer",
        callBackFn: mostrarTextoCapturado
    }
    Dialog.prompt(promptParams)
})
