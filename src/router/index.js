import { createRouter, createWebHistory } from "vue-router";


import GameView from "../views/GameView.vue";
import FightView from "../views/FightView.vue";
import ShopView from "../views/ShopView.vue";
import OptionsView from "../views/OptionsView.vue";
import ExitView from "../views/ExitView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "game",
            component: GameView,
        },
        {
            path: "/fight",
            name: "fight",
            component: FightView,
        },
        {
            path: "/shop",
            name: "shop",
            component: ShopView
        },
        {
            path: "/options",
            name: "options",
            component: OptionsView,
        },
        {
            path: "/exit",
            name: "exit",
            component: ExitView,
        }
    ],
})

export default router