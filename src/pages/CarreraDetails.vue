<template>
    <div >
        <LoaderOne v-if="showLoader"/>
    </div>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion && !isLoadingOneCarrera">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion,CATEGORIAS.CARRERA_DETALLE) }}
        <!-- final de configuración del color -->

        <HeaderOne :institucion="institucion" :showHeaderTop="true"/>

        <div class="edu-breadcrumb-area breadcrumb-style-4 banner-style-carrera" :style="`background: url(${portada(institucion)});background-attachment: fixed;background-repeat: no-repeat;background-size: cover;`">
            <div class="container" >
                <div class="breadcrumb-inner" style="display: flex; justify-content: center;align-items: center;">
                    <div class="page-title">                        
                        <img :src="getLogo(institucion.institucion_logo)" style="margin-bottom: 30px;filter: drop-shadow(0 4px 8px rgba(0,0,0,.7));">
                        <h1 class="" style=";text-shadow: 0px 0px 10px rgba(0,0,0,.5);color: #fff;z-index: 100;">{{ OneCarrera.institucion_nombre.toUpperCase() }}</h1>                        
                    </div>                                        
                </div>
            </div>

            <ul class="shape-group">
                <li class="shape-1">
                    <span></span>
                </li>
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-13.png" />
                <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <li class="shape-4">
                    <span></span>
                </li>
                <li class="shape-5"><img src="/images/about/shape-07.png" alt="shape"></li>
            </ul>
        </div>

        <section class="event-details-area edu-section-gap">
            <div class="container">
                <div class="event-details">
                    <div class="main-thumbnail" style="position: relative;">
                        <img :src="OneCarrera.portada.length > 1?portada(OneCarrera) : portada(institucion)" style="width: 1170px;height: 420px;object-fit: cover;" alt="Event">
                        <div
                            style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;background-color: rgba(0,0,0,.5);">
                            <img :src="getLogo(OneCarrera.institucion_logo)"
                                style="filter: drop-shadow(0 4px 8px rgba(0,0,0,.7));" width="350" alt="">
                        </div>

                    </div>
                    <div class="row row--30">
                        <div class="col-lg-8">
                            <div class="details-content">
                                <h3>Historia</h3>
                                <div v-html="OneCarrera.institucion_historia"></div>
                                <div class="faq-accordion" id="faq-accordion" style="margin-bottom: 50px;">
                                    <div class="accordion">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true">
                                                    Misión
                                                </button>
                                            </h5>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <div v-html="OneCarrera.institucion_mision"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false">
                                                    Sobre la Institucion
                                                </button>
                                            </h5>
                                            <div id="collapseFour" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <div v-html="OneCarrera.institucion_sobre_ins"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false">
                                                    Visión
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <div v-html="OneCarrera.institucion_vision"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false">
                                                    Objetivos
                                                </button>
                                            </h5>
                                            <div id="collapseThree" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <div v-html="OneCarrera.institucion_objetivos"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                                          
                                <div class="event-speaker">
                                    <h3 class="heading-title">Autoridades</h3>
                                    <div class="row g-5 mb-5">
                                        <div class="col-lg-6 col-sm-6 col-12" data-aos-delay="50" data-aos="fade-up"
                                            data-aos-duration="800" v-for="(autoridad, index) in OneCarrera.autoridad"
                                            :key="index">
                                            <InstructorTwo :autoridad="autoridad" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Ubicación</h3>
                                <ul class="event-meta">
                                    <li><i class="icon-40"></i>{{ OneCarrera.institucion_direccion }}</li>
                                    <li><i class="icon-71"></i>Cel : <a :href="`tel:+591${OneCarrera.institucion_celular1}`"
                                            target="_blank">(+591){{
                                                OneCarrera.institucion_celular1 }}</a></li>
                                </ul>
                                <div class="gmap_canvas">
                                    <iframe id="gmap_canvas" :src="OneCarrera.institucion_api_google_map" frameborder="0"
                                        scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="course-sidebar-3">
                                <div class="edu-course-widget widget-course-summery">
                                    <div class="inner">
                                        <div class="content">
                                            <h4 class="widget-title">Contacto</h4>
                                            <ul class="course-item mb-4">
                                                <li>
                                                    <span class="value price"><a
                                                            :href="`mailto:${OneCarrera.institucion_correo1}`"
                                                            target="_blank">{{
                                                                OneCarrera.institucion_correo1 }}</a></span>
                                                </li>
                                                <li>
                                                    <span class="value price"><a
                                                            :href="`mailto:${OneCarrera.institucion_correo2}`"
                                                            target="_blank">{{
                                                                OneCarrera.institucion_correo2 }}</a></span>
                                                </li>
                                            </ul>

                                            <h4 class="widget-title">Redes Sociales</h4>
                                            <ul class="social-share icon-transparent" style="display: flex;justify-content: center;">
                                                <li style="list-style: none;">
                                                    <a :href="OneCarrera.institucion_facebook" target="_blank"
                                                        class="color-fb"><i class="icon-facebook" style="font-size: 1.5em;"></i></a>
                                                </li>

                                                <li style="list-style: none;">
                                                    <a :href="OneCarrera.institucion_twitter" target="_blank"
                                                        class="color-twitter"><i class="icon-twitter" style="font-size: 1.5em;"></i></a>
                                                </li>
                                                <li style="list-style: none;">
                                                    <a :href="OneCarrera.institucion_youtube" target="_blank"
                                                        class="color-yt"><i class="icon-youtube" style="font-size: 1.5em;"></i></a>
                                                </li>
                                            </ul>

                                            <div class="read-more-btn">
                                                <router-link to="/Carreras" class="edu-btn"> <span style="font-size: 2em;">&larr;</span> Areas y Carreras </router-link>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterOne :institucion="institucion" />
    </div>
</template>

<script setup>
import HeaderOne from '../components/header/HeaderOne.vue';
import InstructorTwo from '../components/instructor/InstructorTwo.vue';
import FooterOne from '../components/footer/FooterOne.vue';
import MouseMove from '../components/animation/MouseMove.vue';
import CryptoJS from "crypto-js";
import { useRoute } from 'vue-router';
import { getCarrera, getInstitucion } from '../api/institucionAPI';
import { useQuery } from 'vue-query';
import RandomImage from '../utils/RandomImage';
import ConfigColorIcon from "../utils/ConfigColorIcon"
import { CATEGORIAS } from '../types/types';
import LoaderOne from '../components/loaders/loaderOne.vue';
import { ref } from 'vue';

const dencrypted = (id) => {
    const bytes = CryptoJS.AES.decrypt(id, "TodoBien");
    const decryptedData = decodeURIComponent(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};
const route = useRoute();
const id = parseInt(dencrypted(route.params.id));

const { isLoading: isLoadingOneCarrera, data: OneCarrera } = useQuery(
    ['OneCarrera', id],
    getCarrera
);

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);

const portada = (institucion) => {
    return RandomImage(institucion.portada)
}

const getLogo = (img) => {
    return `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${img}`;
};

const showLoader = ref(true);
// Oculta el loader después de 3 segundos
setTimeout(() => {
  showLoader.value = false;
}, 1000);
</script>

<style>
.banner-style-carrera::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
    z-index: -1;
}
</style>