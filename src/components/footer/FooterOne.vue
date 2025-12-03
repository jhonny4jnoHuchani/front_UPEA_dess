<script setup>
//importación de las categorías ----------------------
import { CATEGORIAS } from "../../types/types";
import RandomFrase from "../../utils/RandomFrase"

//definición de props -------------------------------
const { institucion } = defineProps(["institucion"]);

//datos de la institución ----------------------------
const logo = institucion.institucion_logo;
const direccion = institucion.institucion_direccion;
const celular = institucion.institucion_celular1;
const correo = institucion.institucion_correo1;
const facebook = institucion.institucion_facebook;
const youtube = institucion.institucion_youtube;
const twitter = institucion.institucion_twitter;

//obtención del logo ---------------------------------
const getLogo = (img) => {
    return `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${img}`;
};
const frase = RandomFrase()
</script>
<template>
    <footer class="edu-footer footer-dark bg-image footer-style-2">
        <div class="footer-top footer-top-2">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo" style="display: grid;place-items: center;">
                                <n-link to="/">
                                    <img class="logo-dark" :src="getLogo(logo)" width="140" alt="Light Logo" />
                                </n-link>
                            </div>
                            <p class="description">
                                {{ frase }}
                            </p>
                            <div class="widget-information">
                                <ul class="information-list">
                                    <li><span>Dirección:</span>{{ direccion }}</li>
                                    <li>
                                        <span>Celular:</span><a :href="`tel:+591${celular}`">+591 {{ celular }}</a>
                                    </li>
                                    <li>
                                        <span>Correo:</span><a :href="`mailto:${correo}`" target="_blank">{{ correo }}</a>
                                    </li>
                                </ul>
                            </div>
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
                                        <router-link to="/gallery-grid">Repositorio Institucional</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/blog/blog-standard">Disbec</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/privacy-policy">Mi Biblioteca Upea</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/my-account">Radio Upea</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact-us">Tv Upea</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">Contacto</h4>
                            <div class="inner">
                                <p class="description">
                                    Para comunicarte con Nosotros puede ingresar al siguiente enlace para mas información
                                    acerca de la institucion.
                                </p>
                                <div class="input-group footer-subscription-form">
                                    <router-link to="/SobreNosotros">
                                        <button class="edu-btn btn-medium" type="button">
                                            Sobre Nosotros <i class="icon-4"></i>
                                        </button>
                                    </router-link>
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
                                &copy; Universidad Pública de El Alto
                                {{ new Date().getFullYear() }} |
                                <a href="https://sie.upea.bo/l" target="_blank">SIE</a> -
                                Web Developer
                                <a
                                    href="https://www.linkedin.com/in/cristhian-vm"
                                    target="_blank"
                                    >CristhianVM</a
                                >
                                - Todos los Derechos Reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
