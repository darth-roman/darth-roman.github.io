const codeblock = document.querySelector("code")
const spans = document.querySelectorAll("code span")
let RANDOMS = 0

for(let i=0; i<spans.length; i++){
    spans[i].style.animation = `fadeIn 500ms ${0.2*i}s 1 forwards`
}

async function fetchRandoms() {
    const response = await fetch("../data/data.json")
    const results = await response.json()
    return results.randoms
}

async function fetchSocials() {
    const response = await fetch("../data/data.json")
    const results = await response.json()
    return results.socials
}



async function appendRandoms(container, renderCount){
    const randoms = await fetchRandoms()

    RANDOMS = randoms.length

    if(renderCount>randoms.length) renderCount = randoms.length

    const renderedRandoms = randoms.slice(0, renderCount)
    container.innerHTML = ""

    renderedRandoms.forEach((random) => {
        container.innerHTML += 
        `<div class="random-item">
            <h2>
                ${random.title}
            </h2>
            <small>
                <p class="highlight bg-gold"><b>${random.techs_used}</b></p>
                <p class="highlight bg-olive status"><b>${random.status}</b></p>
            </small>
            <div>
                <a href="${random.link}" target="_blank">Click me</a>
                ${random.readme_link ? `<a href="${random.readme_link}" target="_blank">Read me</a>` : ""}
            </div>
        </div>`
    });
    
}

function whatsLeftComponent(total, sliceIndex){
    const whatsLeft = document.querySelector("#whats-left")
    let whatsLeftCount = total - sliceIndex

    if(whatsLeftCount < 0) {
        whatsLeft.textContent = `(${0}) left`
        return whatsLeft
    }
    whatsLeft.textContent = `(${whatsLeftCount}) left`
    
    return whatsLeft
}


async function appendSocials(container){
    const socials = await fetchSocials()
    console.log(socials);
    
    socials.forEach((social) => {
        container.innerHTML += 
        `<div class="social-link ${social.class}">
            <p>${social.name}: </p>
            <a href="${social.link}">${social.short}</a>
        </div>`
    });
}

window.addEventListener("DOMContentLoaded", async function(){

    
    
    if(window.location.pathname === "/pages/randoms.html"){
        const laodMore = this.document.querySelector("#loadmore")
        laodMore.attributeStyleMap.set("display", "block")

        const randomsContainter = this.document.querySelector(".randoms-container")
        
        let defaultSLice = 3

        laodMore.addEventListener("click", async function(){
            defaultSLice += 3
            await appendRandoms(randomsContainter, defaultSLice)
            whatsLeftComponent(RANDOMS, defaultSLice)

            if(RANDOMS-defaultSLice<0) {
                whatsLeftComponent(RANDOMS, defaultSLice)
                return
            }
            return
        })
        await appendRandoms(randomsContainter, defaultSLice)
        whatsLeftComponent(RANDOMS, defaultSLice)
    }

    if(window.location.pathname === "/pages/connect.html"){
        const socialsContainter = document.querySelector(".socials")
        await appendSocials(socialsContainter)
    }
}
)