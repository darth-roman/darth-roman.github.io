const codeblock = document.querySelector("code")
const spans = document.querySelectorAll("code span")

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

async function appendRandoms(container){
    const randoms = await fetchRandoms()
    
    randoms.forEach((random) => {
        container.innerHTML += 
        `<div class="random-item">
            <h2>
                ${random.title}
            </h2>
            <a href="${random.link}" target="_blank">Click me</a>
        </div>`
    });
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

window.addEventListener("load", async function(){

    if(window.location.pathname === "/pages/randoms.html"){
        const randomsContainter = this.document.querySelector(".randoms-container")
        await appendRandoms(randomsContainter)
    }

    if(window.location.pathname === "/pages/connect.html"){
        const socialsContainter = document.querySelector(".socials")
        await appendSocials(socialsContainter)
    }
}
)