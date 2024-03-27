const btnDialog = document.querySelector("button.button-normal")
const btnConfirm = document.querySelector("button.button-confirm")
const btnPrompt = document.querySelector("button.button-prompt")

function mostrarMensajeCallback() {
    console.warn("A callback message fired after Ok button is pressed :)")
}

function mostrarTextoCapturado(texto) {
    console.log("Typed text: " + texto)
}

btnDialog.addEventListener("click", ()=> { 
    const dialogParams = {
        title: "Standard dialog",
        text: "This is a standar dialog. Be simple with the message.",
        buttonText: "Aceptar",
    }
    Dialog.alert(dialogParams)
})

btnConfirm.addEventListener("click", ()=> {
    const confirmParams = {
        title: "Confirm dialog",
        text: "This confirm dialog fires a function specified by reference when you press Ok button.",
        defaultButtonText: "Ok",
        cancelButtonText: "Cancel",
        callBackFn: mostrarMensajeCallback
    }
    Dialog.confirm(confirmParams)
})

btnPrompt.addEventListener("click", ()=> {
    const promptParams = {
        title: "Input dialog",
        text: "Add a text into the input box:",
        placeholderInput: "Waiting for a value...",
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
        callBackFn: mostrarTextoCapturado
    }
    Dialog.prompt(promptParams)
})
