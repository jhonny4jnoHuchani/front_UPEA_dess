// main.js
import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import router from "./router";
import App from "./App.vue";
import "./assets/scss/app.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import InlineSvg from 'vue-inline-svg';

const app = createApp(App);

app.component('inline-svg', InlineSvg);

app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");