<script setup>
import SectionTitle from "../../components/common/SectionTitle.vue";
import EventOne from "../../components/event/EventOne.vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import { getEventos, getPublicaciones } from "../../api/institucionAPI";
import { useQuery } from "vue-query";
import { CATEGORIAS } from "../../types/types";

// Definición de las Props ----------------------------------------------------
const { extraClass, title, subTitle, categoria } = defineProps([
    "extraClass",
    "title",
    "subTitle",
    "categoria",
]);

//Definición de las variables --------------------------------------------------
const { isLoading: isLoadingPublicaciones, data: publicaciones } = useQuery(
    "publicaciones",
    getPublicaciones
);
const { isLoading: isLoadingEventos, data: eventos } = useQuery("eventos", getEventos);

// Variables de filtrado de publicaciones ----------------------------------------
const normalizeTipo = (() => {
    const cache = new Map();

    return (tipo) => {
        if (!tipo || typeof tipo !== 'string') return '';

        // Usar caché si ya calculamos este valor
        if (cache.has(tipo)) {
            return cache.get(tipo);
        }

        const normalizado = tipo.trim().toUpperCase();
        cache.set(tipo, normalizado);

        return normalizado;
    };
})();

// Todas las funciones con normalización consistente
const getPublicaciones_All = (publicaciones) => {
    if (!publicaciones || !Array.isArray(publicaciones)) return [];

    return publicaciones.filter(s => {
        const tipo = normalizeTipo(s.publicaciones_tipo);
        return tipo !== CATEGORIAS.NOTICIA && tipo !== CATEGORIAS.SERVICIO;
    });
};

const getNoticias = (noticias) => {
    if (!noticias || !Array.isArray(noticias)) return [];
    return noticias.filter(s => normalizeTipo(s.publicaciones_tipo) === CATEGORIAS.NOTICIA);
};

const getServicios = (servicios) => {
    if (!servicios || !Array.isArray(servicios)) return [];
    return servicios.filter(s => normalizeTipo(s.publicaciones_tipo) === CATEGORIAS.SERVICIO);
};

</script>
<template>
    <div class="edu-event-area" :class="extraClass">
        <div class="container edublink-animated-shape">
            <SectionTitle :preTitle="subTitle" :title="title" alignment="section-center" />
            <div class="row g-5" v-if="categoria === CATEGORIAS.PUBLICACIONES">
                <div v-if="!isLoadingPublicaciones" class="col-lg-4 col-md-6" data-aos-delay="100" data-aos="fade-up"
                    data-aos-duration="800" v-for="(item, index) in getPublicaciones_All(publicaciones).slice(-3)"
                    :key="index">
                    <EventOne :item="item" :categoria="categoria" />
                </div>
            </div>
            <div class="row g-5" v-if="categoria === CATEGORIAS.NOTICIAS">
                <div v-if="!isLoadingPublicaciones" class="col-lg-4 col-md-6" data-aos-delay="100" data-aos="fade-up"
                    data-aos-duration="800" v-for="(item, index) in getNoticias(publicaciones).slice(-3)" :key="index">
                    <EventOne :item="item" :categoria="categoria" />
                </div>
            </div>
            <div class="row g-5" v-if="categoria === CATEGORIAS.SERVICIOS">
                <div v-if="!isLoadingPublicaciones" class="col-lg-4 col-md-6" data-aos-delay="100" data-aos="fade-up"
                    data-aos-duration="800" v-for="(item, index) in getServicios(publicaciones).slice(-3)" :key="index">
                    <EventOne :item="item" :categoria="categoria" />
                </div>
            </div>
            <div class="row g-5" v-if="categoria === CATEGORIAS.EVENTOS">
                <div v-if="!isLoadingEventos" class="col-lg-4 col-md-6" data-aos-delay="100" data-aos="fade-up"
                    data-aos-duration="800" v-for="(evento, index) in eventos.slice(-3)" :key="index">
                    <EventOne :item="evento" :categoria="categoria" />
                </div>
            </div>
            <div class="event-view-all-btn" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <h6 class="view-text">
                    Lo ultimo de {{ title }}
                    <router-link :to="`/Recursos/${categoria}`" class="btn-transparent">Ver Todo <i
                            class="icon-4"></i></router-link>
                </h6>
            </div>

            <ul class="shape-group">
                <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                    <img class="rotateit" src="/images/about/shape-13.png" alt="Shape" />
                </li>
                <MouseMove addClassName="shape-2" dataDepth=".9" data-aos-delay="500" data-aos="fade"
                    data-aos-duration="200" />
            </ul>
        </div>
    </div>
</template>
