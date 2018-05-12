import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Feather from 'vue-icon';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(Feather, 'v-icon');

import App from './components/App.vue';
import componentMineral from './components/Mineral.vue';
import componentNavbar from './components/Navbar.vue';
import componentList from './components/List.vue';
import componentMain from './components/Main.vue';

Vue.component('component-navbar', componentNavbar);
Vue.component('component-list', componentList);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/(step)?',
            name: 'step',
            component: componentMain
        },
        {
            path: '/mineral/:name',
            name: 'mineral',
            component: componentMineral,
            // beforeEnter: (to, from, next) => {
                // if (/^[0-9]+$/.test(to.params.name) && Number.isInteger(+to.params.id)) {
                //     next();
                // } else {
                //     next('/');
                // }
            // }
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
