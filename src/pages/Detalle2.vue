<script setup>
import HeaderOne from "../components/header/HeaderOne.vue";
import BreadCrumbOne from "../components/common/BreadCrumbOne.vue";
import BlogSidebarOne from "../components/sidebar/BlogSidebarOne.vue";
import CTAOne from "../components/cta/CTAOne.vue";
import FooterOne from "../components/footer/FooterOne.vue";
import blogData from "../data/blog.json";
import { useRoute } from "vue-router";
import CryptoJS from "crypto-js";
import {
    getInstitucion,
    getPublicaciones,
   // getPublicacion,
    getGacetas,
    getVideos,
    getEventos,
    //getEvento,
} from "../api/institucionAPI";
import { useQuery } from "vue-query";
import { CATEGORIAS } from "../types/types";
import ObtenerFraseRandom from "../utils/RandomFrase";
import VuePdfEmbed from "vue-pdf-embed";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import { ref, watch } from "vue";

const clave_encryptacion = import.meta.env.VITE_APP_ENCRYPT
const dencrypted = (id) => {
    const bytes = CryptoJS.AES.decrypt(id, clave_encryptacion);
    const decryptedData = decodeURIComponent(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};

// obtener datos de la url ----------------------------------------------
const route = useRoute();
var categoria = ref(route.params.categoria);
var id = ref(parseInt(dencrypted(route.params.id)));
var registro = ref({})

// carga de informacion de la api ---------------------------------------
const { isLoading: isLoadingInstitucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
const { isLoading: isLoadingPublicaciones, data: publicaciones } = useQuery(
    "publicaciones",
    getPublicaciones
);
const { isLoading: isLoadingEventos, data: eventos } = useQuery("eventos", getEventos);
const { isLoading: isLoadingVideos, data: videos } = useQuery("videos", getVideos);
const { isLoading: isLoadingGacetas, data: gacetas } = useQuery("gacetas", getGacetas);


const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];

    const día = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${día} de ${mes} de ${año}`;
};

const api = import.meta.env.VITE_APP_ROOT_API;
const frase = ObtenerFraseRandom();
const getFacebook = (institucion) => {
    return institucion.institucion_facebook;
};
const getYouTube = (institucion) => {
    return institucion.institucion_youtube;
};
const getTwitter = (institucion) => {
    return institucion.institucion_twitter;
};
const getLogo = (institucion) => {
    const img = institucion.institucion_logo;
    return `${api}/InstitucionUpea/${img}`;
};

const getPublicacionOne = (publicaciones, id) => {
    const dato = publicaciones.find((e) => e.publicaciones_id === id);
    console.log("publicacion encontrada",dato);
    return dato;
};

const getEventoOne = (eventos, id) => {
    const dato = eventos.find((e) => e.evento_id === id);
    return dato;
};

const getGacetaOne = (gacetas, id) => {
    const dato = gacetas.find((e) => e.gaceta_id === id);
    return dato;
};

const getVideoOne = (videos, id) => {
    const dato = videos.find((e) => e.video_id === id);
    return dato;
};

const getRecurso = (publicaciones,gacetas,eventos,videos,id) => {
    if(categoria.value === CATEGORIAS.PUBLICACIONES) registro.value = getPublicacionOne(publicaciones,id)
    if(categoria.value === CATEGORIAS.GACETAS) registro.value = getGacetaOne(gacetas,id)
    if(categoria.value === CATEGORIAS.EVENTOS) registro.value = getEventoOne(eventos,id)
    if(categoria.value === CATEGORIAS.VIDEOS) registro.value = getVideoOne(videos,id)
}
watch(
    () => [route.params.categoria, route.params.id],
    ([newCategoria, newId], [oldCategoria, oldId]) => {
        categoria.value = newCategoria;
        id.value = parseInt(dencrypted(newId));
    }
);
</script>
<template>
    <div id="main-wrapper" class="main-wrapper" v-if="
        !isLoadingInstitucion &&
        !isLoadingPublicaciones &&
        !isLoadingGacetas &&
        !isLoadingEventos &&
        !isLoadingVideos
    ">
        {{ getRecurso(publicaciones,gacetas,eventos,videos,id) }}
        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion, categoria) }}
        <!-- final de configuración del color -->

        <HeaderOne :institucion="institucion" />

        <BreadCrumbOne :pageTitle="categoria" :title="categoria" :institucion="institucion" />

        <div class="blog-details-area section-gap-equal">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <p>{{ categoria }}</p>
                        <p>{{ id }}</p>
                        <p v-if="registro!=null">{{ registro }}</p>
                    </div>

                    <div class="col-lg-4">
                        <BlogSidebarOne :blogItems="blogData.blogs" :categories="blogData.categories"
                            :archives="blogData.archives" :tags="blogData.tags" :publicaciones="publicaciones"
                            :gacetas="gacetas" :videos="videos" :eventos="eventos" :categoria="categoria"
                            :institucion="institucion" />
                    </div>
                </div>
            </div>
        </div>

        <CTAOne :institucion="institucion" />

        <FooterOne :institucion="institucion" />
    </div>
</template>
