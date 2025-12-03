import { createRouter, createWebHistory } from "vue-router";
// importación de los componente principales (paginas)
import Principal from "../pages/Principal.vue";
import SobreNosotros from "../pages/SobreNosotros.vue";
import Contacto from "../pages/Contacto.vue";
import Recursos from "../pages/Recursos.vue";
import RecursosList from "../pages/RecursosList.vue"
import Detalle from "../pages/Detalle.vue"
import Detalle2 from "../pages/Detalle2.vue"
import CarrerasAll from "../pages/CarrerasAll.vue"
import CarreraDetalle from "../pages/CarreraDetails.vue"
import AutoridadesDetalle from "../pages/AutoridadDetails.vue"
/* ----------------------------------------------------------------
    DESCRIPCIÓN : todas la rutas disponibles para la aplicación.
---------------------------------------------------------------- */
const routes = [
    { path: "/", component: Principal },
    { path: "/SobreNosotros", component: SobreNosotros },
    { path: "/Contacto", component: Contacto },
    { path: "/Recursos/:categoria", component: Recursos },
    { path: "/RecursosList/:categoria", component: RecursosList },
    { path: "/Detalle/:categoria/:id", component: Detalle },
    { path: "/Detalle2/:categoria/:id", component: Detalle2 },
    { path: "/Carreras", component: CarrerasAll },
    { path: "/CarreraDetalle/:id", component: CarreraDetalle},
    { path: "/AutoridadDetalle/:id", component: AutoridadesDetalle}
];

/* ----------------------------------------------------------------
    DESCRIPCIÓN : creación de las rutas.
---------------------------------------------------------------- */

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Si hay una posición guardada, utiliza esa posición
        if (savedPosition) {
          return savedPosition;
        } else {
          // De lo contrario, desplázate hacia arriba
          return { top: 0 };
        }
      },
});

export default router;
