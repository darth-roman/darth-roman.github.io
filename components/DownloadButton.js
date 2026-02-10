export class DownloadButton extends HTMLElement{

    connectedCallback(){
        const template = document.querySelector("#downloads-comp")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}

customElements.define("downloads-comp", DownloadButton)