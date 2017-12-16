import Vue from 'vue';
import axios from 'axios';
import App from './App.vue'
import router from './routes';
import VueRouter from "vue-router";

window.axios = axios.create({
    baseURL: 'http://laravel55.dev',
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
