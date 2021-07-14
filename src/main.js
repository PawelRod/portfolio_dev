import Vue from 'vue'
import App from './App.vue'
import VueRellax from 'vue-rellax'
import ResetInput from 'v-reset-input'

import{ init } from 'emailjs-com';
init("user_Leo469GHtjGmlZToPtAwi");

import AOS from "aos";
import "aos/dist/aos.css";

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

import "./styles/_variables.scss"

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');

Vue.use(VueRellax);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(AOS, ResetInput, VueAxios, axios, VueResource);

new Vue({
  created() {
    AOS.init({
      once: true
    });
  },
  render: h => h(App),
}).$mount('#app')