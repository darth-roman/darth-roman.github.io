import {Intro} from "./Intro.js"
import {Skills} from "./Skills.js"
import {DownloadButton} from "./DownloadButton.js"


export class HomePage extends HTMLElement {

    render(){
        document.querySelector("main").appendChild(new Intro())
        document.querySelector("main").appendChild(new Skills())
        document.querySelector("main").appendChild(new DownloadButton())
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("home-page", HomePage)