import VueRouter from "vue-router";

let routes = [
    {
        path: '/',
        component: require("./components/Welcome.vue").default
    },
    {
        path: '/counter',
        component: require("./components/Counter.vue").default
    },
    {
        path: '/projects',
        component: require("./components/Project.vue").default
    },
    {
        path: '/skills',
        component: require("./components/Skills.vue").default
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});