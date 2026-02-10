export class Intro extends HTMLElement {

    connectedCallback(){    
        const cssStyle = this.style

        const template = document.querySelector("#intro-comp")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
        
        cssStyle.display = "flex"
        cssStyle.flexDirection = "row"
        cssStyle.justifyContent = "center"
        cssStyle.alignItems = "ceenter"
        cssStyle.width = "100%"
        cssStyle.margin = "1rem"
    }
}

customElements.define("intro-comp", Intro)