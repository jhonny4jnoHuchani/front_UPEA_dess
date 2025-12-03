// importación de recursos para la aplicación.
import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import router from "./router";
import App from "./App.vue";
import "./assets/scss/app.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

//creación de la app
const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");

/* ----------------------------------------------------------------
    DESCRIPCIÓN : inicio de la aplicación, juntamente con las rutas
        y las querys.
---------------------------------------------------------------- */