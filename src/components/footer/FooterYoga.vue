<template>
  <footer class="edu-footer footer-light footer-for-yoga footer-style-5">
    <div class="footer-top">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <div class="edu-footer-widget">

              <div class="inner">
                <div class="logo" style="
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    ">
                                <router-link to="/">
                                    <img class="logo-light" :src="getLogo(logo)" alt="Dark Logo" width="150" />
                                </router-link>
                                <a href="https://sie.upea.bo/l" target="_blank">
                                    <img class="logo-light" src="/images/sie.png" alt="Dark Logo" width="170" />
                                </a>
                            </div>

                <p class="description">
                <h4 class="widget-title">Dirección</h4>
                {{ direccion }}
                </p>
                <div class="widget-information">
                  <ul class="information-list">
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="edu-footer-widget explore-widget">
              <h4 class="widget-title">Comunicados</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li>
                    <router-link :to="`/Recursos/${CATEGORIAS.PUBLICACIONES}`">Publicaciones</router-link>
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
                    <router-link to="/">Radio Upea</router-link>
                  </li>
                  <li>
                    <router-link to="/">Upea Tv</router-link>
                  </li>
                  <li>
                    <router-link to="/">Upea al Dia</router-link>
                  </li>
                  <li>
                    <router-link to="/">Biblioteca Upea</router-link>
                  </li>
                  <li>
                    <router-link to="/">Biblioteca Virtual</router-link>
                  </li>
                  <li>
                    <router-link to="/">Repositorio Upea</router-link>
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
                  Obtén mas información sobre nosotros con el siguiente enlace para mas información acerca de la Universidad Pública de el Alto
                </p>
                <div class="input-group footer-subscription-form">
                  <router-link to="/Contacto">
                    <button class="edu-btn btn-medium" type="button">
                    Contacte con nosotros<i class="icon-4"></i>
                  </button>
                  </router-link>
                </div>
                <ul class="social-share icon-transparent">
                  <li>
                    <a :href="facebook" target="_blank" class="color-fb"><i class="icon-facebook"></i></a>
                  </li>                  
                  <li>
                    <a :href="twitter" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a>
                  </li>
                  <li>
                    <a :href="youtube" target="_blank" class="color-yt"><i class="icon-youtube"></i></a>
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
                © UPEA - Universidad Pública de El Alto - Todos los derechos reservados <br><a href="https://sie.upea.bo/l" target="_blank">SIE</a> | By Developer
                <a href="https://www.linkedin.com/in/cristhian-vm" target="_blank">CristhianVM</a>.                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import mouseMove from "../../common/mouseMoveAnimation";
import ColorMode from "../common/ColorMode.vue";
//importación de las categorías ----------------------
import { CATEGORIAS } from "../../types/types";

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
</script>
