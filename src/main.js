import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueResource, VueRouter, VueAxios, axios, VueLocalStorage)


new Vue({
  el: '#app',
  render: h => h(App)
});




