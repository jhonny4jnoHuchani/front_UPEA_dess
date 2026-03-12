<script setup>
import { ref } from "vue";
import { CATEGORIAS } from "../../types/types";
import RandomFrase from "../../utils/RandomFrase"

// Definición de props -------------------------------
const { institucion } = defineProps(["institucion"]);

// Variables del template ------------------------------------
const logo = ref(institucion.institucion_logo);
const direccion = ref(institucion.institucion_direccion);
const celular = ref(institucion.institucion_celular1);
const correo = ref(institucion.institucion_correo1);
const facebook = ref(institucion.institucion_facebook);
const youtube = ref(institucion.institucion_youtube);
const twitter = ref(institucion.institucion_twitter);

const api = import.meta.env.VITE_APP_API_URL_V1 || 'https://apiadministrador.upea.bo';
// Obtención del logo -------------------------------------
const getLogo = (img) => {
    if (!img) return '/default-logo.png';
    return `${api}${img}`;
};

// Frase Aleatoria -----------------------------------------
const frase = RandomFrase()
</script>
<template>
    <footer class="edu-footer footer-dark bg-image footer-style-3">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo" style="
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    ">
                                <router-link to="/">
                                    <img class="logo-light" :src="getLogo(logo)" alt="Dark Logo" width="150" />
                                </router-link>
                                <a href="https://utic.upea.bo/" target="_blank">
                                    <img src="/images/logo_utic_cir.png" width="150" alt="UTIC Logo" </a>
                            </div>
                            <p class="description">
                                <span class="color-primary">
                                    LA UNIVERSIDAD PÚBLICA DEL EL ALTO </span> {{ frase }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title">Avisos</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <router-link
                                            :to="`/Recursos/${CATEGORIAS.PUBLICACIONES}`">Publicaciones</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.SERVICIOS}`">Servicios</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.NOTICIAS}`">Noticias</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.GACETAS}`">Gacetas</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.AUDITORIAS}`">Auditorias</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.EVENTOS}`">Eventos</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="`/Recursos/${CATEGORIAS.VIDEOS}`">Videos</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title">Mas</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <a href="https://repositorio.upea.bo/" target="_blank" rel="noopener noreferrer">
                                            Repositorio Institucional
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://disbedc.upea.bo/" target="_blank" rel="noopener noreferrer">
                                            Disbec
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://biblioteca.upea.bo/" target="_blank" rel="noopener noreferrer">
                                            Mi Biblioteca Upea
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/radioupea/" target="_blank" rel="noopener noreferrer">
                                            Radio Upea
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tv.upea.bo/" target="_blank" rel="noopener noreferrer">
                                            Tv Upea
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">Comunícate con Nosotros</h4>
                            <div class="inner">
                                <p class="description">
                                <div class="widget-information">
                                    <ul class="information-list">
                                        <li><span>Dirección:</span>{{ direccion }}</li>
                                        <li>
                                            <span>Celular:</span><a :href="`tel:+591${celular}`" target="_blank">+591 {{
                                                celular }}</a>
                                        </li>
                                        <li>
                                            <span>Correo:</span><a :href="`mailto:${correo}`" target="_blank">{{
                                                correo
                                                }}</a>
                                        </li>
                                    </ul>
                                </div>
                                </p>
                                <div class="input-group footer-subscription-form">
                                    <router-link to="Contacto" class="edu-btn btn-secondary btn-medium">Mas Informacion
                                        <i class="icon-4"></i></router-link>
                                </div>
                                <ul class="social-share icon-transparent">
                                    <li>
                                        <a :href="facebook" target="_blank" class="color-fb"><i
                                                class="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a :href="twitter" target="_blank" class="color-twitter"><i
                                                class="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a :href="youtube" target="_blank" class="color-yt"><i
                                                class="icon-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>
                                &copy; Universidad Pública de El Alto {{ new Date().getFullYear() }}
                                | <a href="https://utic.upea.bo/" target="_blank">UTIC</a> - Web Developer
                                <a href="https://www.linkedin.com/in/cristhian-vm" class="link_footer"
                                    target="_blank">CristhianVM</a>
                                | Support by
                                <a href="https://www.linkedin.com/in/jhonny-ajno-huchani-6545903a2/"
                                    target="_blank">JhonnyAH</a>
                                - Todos
                                los Derechos Reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
.link_footer {
    color: var(--color-primary) !important;
}

.link_footer:hover {
    color: var(--color-tertiary) !important;
}
</style>
