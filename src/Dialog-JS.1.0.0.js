class Dialog {
    static alert(config) {
        const { title, text, buttonText } = config
        const dialogo = document.createElement("dialog")
        dialogo.setAttribute("id", "myDialog")
        let contenidoTemplate = `<h2>${title}</h2>
                                 <p>${text}</p>
                                 <div class="button-container">
                                    <button class="button button-primary" id="dialogDefaultButton">${buttonText}</button>
                                 </div>`
        dialogo.innerHTML = contenidoTemplate
        dialogo.querySelector("button#dialogDefaultButton").addEventListener("click", ()=> dialogo.remove())
        document.querySelector('body').insertAdjacentElement('afterbegin', dialogo)
        dialogo.showModal()
    }
    static confirm(config) {
        const { title, text, defaultButtonText, cancelButtonText, callBackFn } = config
        const dialogo = document.createElement("dialog")
        dialogo.setAttribute("id", "myDialog")
        let contenidoTemplate = `<h2>${title}</h2>
                                 <p>${text}</p>
                                 <div class="button-container">
                                    <button class="button button-secondary" id="confirmCancelButton">${cancelButtonText}</button>
                                    <button class="button button-primary" id="confirmDefaultButton">${defaultButtonText}</button>
                                 </div>`
        dialogo.innerHTML = contenidoTemplate
        callBackFn && dialogo.querySelector("button#confirmDefaultButton").addEventListener("click", ()=> {
            callBackFn()
            dialogo.querySelector("button#confirmCancelButton").click()
        })
        dialogo.querySelector("button#confirmCancelButton").addEventListener("click", ()=> dialogo.remove())
        document.querySelector('body').insertAdjacentElement('afterbegin', dialogo)
        dialogo.showModal()
    }
    static prompt(config) {
        const { title, text, placeholderInput, confirmButtonText, cancelButtonText, callBackFn } = config
        const myPrompt = document.createElement("dialog")
        myPrompt.setAttribute("id", "myDialog")
        let contenidoTemplate = `<h2>${title}</h2>
                                 <p>${text}</p>
                                 <input id="dialogInputElement" type="text" placeholder="${placeholderInput}" autocomplete="off"></input>
                                 <div class="button-container">
                                    <button class="button button-secondary" id="promptCancelButton">${cancelButtonText}</button>
                                    <button class="button button-primary" id="promptConfirmButton">${confirmButtonText}</button>
                                 </div>`
        myPrompt.innerHTML = contenidoTemplate
        document.querySelector('body').insertAdjacentElement('afterbegin', myPrompt)
        myPrompt.showModal()

        callBackFn && myPrompt.querySelector("button#promptConfirmButton").addEventListener("click", ()=> {
            let inputElementData = document.querySelector("input#dialogInputElement").value || ""
                callBackFn(inputElementData)
                myPrompt.remove()
        })
        myPrompt.querySelector("button#promptCancelButton").addEventListener("click", ()=> myPrompt.remove())
    }
    static aboutDialogJS() {
        this.alert({title: "About Dialog-JS",
                         text: `<strong>Copyright © 2024 - Fernando Omar Luna 🇦🇷</strong>.<br>Another simple but effective JS library to complement our web developments. <br><strong>Follow me at (X) @mobilepadawan</strong> to say hi or to send me comments about Dialog-JS.`,
                         buttonText: "Close me"
                        })
    }
}