import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
    },
    {
        path: "/entry",
        name: "entry",
        component: () => import("@/views/entry/index.vue"),
        redirect: (to: Route) => {
            console.log(to);
            return {
                name:"blog"
            };
        },
        children: [
            {
                name: "blog",
                path: "blog",
                component: () => import("@/views/entry/blog/index.vue")
            },
            {
                name: "essay",
                path: "essay",
                component: () => import("@/views/entry/essay/index.vue")
            },
            {
                name: "analyze",
                path: "analyze",
                component: () => import("@/views/entry/analyze/index.vue")
            },
            {
                name: "about",
                path: "about",
                component: () => import("@/views/entry/about/index.vue")
            },
            {
                name:"detail",
                path:"detail",
                component: () => import("@/views/entry/detail/index.vue")
            }
        ]
    },
    {
        path: "*",
        redirect(to: any) {
            return {
                name: "home"
            };
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
