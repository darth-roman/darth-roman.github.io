import { ConnectPage } from "../components/ConnectPage.js"
import { HomePage } from "../components/HomePage.js"
import { RandomsPage } from "../components/RandomPage.js"

export const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/randoms",
        component: RandomsPage
    },
    {
        path: "/connect",
        component: ConnectPage
    },
]