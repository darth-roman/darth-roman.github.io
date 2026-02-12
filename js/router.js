import { routes } from "./routes.js";

export const router = {
    init: () => {
        document.addEventListener("popstate", (e) => {
            router.goTo(location.pathname, false)
        })

        // document.querySelectorAll(".main-nav a").forEach(link => {
        //     link.addEventListener("click", e => {
        //         e.preventDefault()
        //         const href = link.getAttribute("href")
        //         router.goTo(href)
        //     })
        // })

        document.querySelectorAll(".main-nav a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                const href = link.getAttribute("href")
                router.goTo(href)
            })
        })

        router.goTo(location.pathname)
    },
    goTo: (route, addToHistory=true) => {
        if(addToHistory){
            history.pushState(null, "", route)
        }

        let pageElement = null
        for (const r of routes){
            console.log(route===location.pathname);
            if(route === r.path){
                pageElement = new r.component()
                
                break
            }
        }
        console.log(pageElement);

        console.log(location.pathname);
        

        if(pageElement == null){
            pageElement = document.createElement("h2")
            pageElement.textContent = "Page Not Found"
        }


        // const oldPage = document.querySelector("main").firstElementChild
        // if(oldPage) oldPage.style.viewTransitionName = "old"
        // oldPage.style.viewTransitionName = "new"

        document.querySelector("main").innerHTML = ""
        document.querySelector("main").appendChild(pageElement)
        // document.startViewTransition(() => {
        // })
    }
}

