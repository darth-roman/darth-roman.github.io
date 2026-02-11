export class Footer extends HTMLElement {
    connectedCallback(){
        const template = document.querySelector("#footer-comp")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}

customElements.define("footer-comp", Footer)