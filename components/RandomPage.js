export class RandomsPage extends HTMLElement {

    render(){
        const message = document.createElement("h1")
        message.textContent = "Randoms Page"
        this.appendChild(message)
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("random-page", RandomsPage)