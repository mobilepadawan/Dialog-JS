function showDialog(config) {
    const { title, text, buttonText } = config
    const dialogo = document.createElement("dialog")
    dialogo.setAttribute("id", "miDialogo")
    let contenidoTemplate = `
                                <h2>${title}</h2>
                                <p>${text}</p>
                                <button id="dialogConfirmButton">${buttonText}</button>
                            `
    dialogo.innerHTML = contenidoTemplate
    dialogo.querySelector("button#dialogConfirmButton").addEventListener("click", ()=> dialogo.remove())
    document.body.appendChild(dialogo)
    dialogo.showModal()
}

// const dialogConf = {
//     title: "Diálogo estándar",
//     text: "Esto es un cuadro de diálogo estándar.",
//     buttonText: "Aceptar",
// }

// showDialog(dialogConf)

function showConfirm(config) {
    const { title, text, defaultButtonText, cancelButtonTExt, callBackFn } = config
    const dialogo = document.createElement("dialog")
    dialogo.setAttribute("id", "miDialogo")
    let contenidoTemplate = `
                                <h2>${title}</h2>
                                <p>${text}</p>
                                <button id="dialogConfirmButton">${defaultButtonText}</button>
                                <button id="dialogCancelButton">${cancelButtonTExt}</button>
                            `

    dialogo.innerHTML = contenidoTemplate
    callBackFn && dialogo.querySelector("button#dialogConfirmButton").addEventListener("click", ()=> {
        callBackFn()
        dialogo.querySelector("button#dialogCancelButton").click()
    })
    dialogo.querySelector("button#dialogCancelButton").addEventListener("click", ()=> dialogo.remove())

    document.body.appendChild(dialogo)
    dialogo.showModal()
}

function mostrarMensajeCallback() {
    console.warn("Este es un mensaje CallBack que se dispara luego de pulsar ACEPTAR :)")
}

const confirmConf = {
    title: "Cuadro de Confirmación",
    text: "Este cuadro de diálogo de confirmación dispara una función enviada por referencia cuando se pulsa el botón 'ACEPTAR'.",
    defaultButtonText: "Aceptar",
    cancelButtonTExt: "Cancelar",
    callBackFn: mostrarMensajeCallback
}

showConfirm(confirmConf)

function showPrompt(config) {
    const { text, typeOfInput, placeholderInput, defaultButtonText, cancelButtonText, callBackFn } = config
    const myPrompt = document.createElement("dialog")
    myPrompt.setAttribute("id", "miDialogo")
    let contenidoTemplate = `
                                <p>${text}</p>
                                <input type="${typeOfInput}" placeholder="${placeholderInput}"></input>
                                <button id="promptConfirmButton">${defaultButtonText}</button>
                                <button id="promptCancelButton">${cancelButtonText}</button>
                            `

    myPrompt.innerHTML = contenidoTemplate
    callBackFn && myPrompt.querySelector("button#promptConfirmButton").addEventListener("click", ()=> {
        callBackFn()
        myPrompt.querySelector("button#promptCancelButton").click()
    })
    myPrompt.querySelector("button#promptCancelButton").addEventListener("click", ()=> myPrompt.remove())

    document.body.appendChild(myPrompt)
    myPrompt.showModal()
}

// const promptConf = {
//     text: "Ingrese un valor en la siguiente caja de texto:",
//     typeOfInput: "search",
//     placeholderInput: "Esperando un valor...",
//     defaultButtonText: "Confirmar",
//     cancelButtonText: "Deshacer",
//     callBackFn: mostrarMensajeCallback
// }

// showPrompt(promptConf)