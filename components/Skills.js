export class Skills extends HTMLElement {
    
    connectedCallback(){
        const template = document.querySelector("#skills-comp")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}

customElements.define("skills-comp", Skills)