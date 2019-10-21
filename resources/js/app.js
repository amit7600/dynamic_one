/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery'
import { globalMixin } from './globalMixin'
import { store } from './store.js'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import VueSession from 'vue-session'



Vue.use(VueSession)
Vue.use(CxltToastr)


Vue.mixin(globalMixin)

const app = new Vue({
    el: '#app',
    mode: 'history',
    router,
    store
});
