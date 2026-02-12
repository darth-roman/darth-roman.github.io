export class ConnectPage extends HTMLElement {

    render(){
        const message = document.createElement("h1")
        message.textContent = "Connect Page"
        this.appendChild(message)
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("connect-page", ConnectPage)