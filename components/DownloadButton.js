export class DownloadButton extends HTMLElement{

    downloadResume(downloadLink){
        downloadLink.href = "../data/Chouchane_Louai_12_2025.pdf"
        downloadLink.download = "Chouchane_Louai_12_2025.pdf"
    }

    render(){
        const downloadLink = this.querySelector("#downloads a")
        this.downloadResume(downloadLink)
    }

    connectedCallback(){
        const template = document.querySelector("#downloads-comp")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
        this.render()
        
    }

}

customElements.define("downloads-comp", DownloadButton)