import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Feather from 'vue-icon';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Feather, 'v-icon');

import App from './components/App.vue';
import Navbar from './components/Navbar.vue';
import componentMain from './components/Main.vue';

Vue.component('component-navbar', Navbar);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: componentMain
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
