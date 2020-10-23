require('./bootstrap');

import './bootstrap';
import Vue from 'vue';
import router from './router';
import App from './App'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import store from './store';

import auth from './auth/auth';
import VueAuth from '@websanova/vue-auth';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);

Vue.use(VueAuth, auth);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
