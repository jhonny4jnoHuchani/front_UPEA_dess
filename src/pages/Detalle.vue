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
  //  getEvento,
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
//es necesario hacer un cambio completo en la logica para obtener el recurso desde la nueva API
const apiv2=import.meta.env.VITE_APP_API_URL_V1;
//toma en cuenta que si se elimina la otra constante toda la vista se cae 
//SE TIENE QUE VOLVER A SUBIR LAS IMAGENES A LA NUEVA API
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
    if(categoria.value === CATEGORIAS.PUBLICACIONES || categoria.value === CATEGORIAS.SERVICIOS || categoria.value === CATEGORIAS.NOTICIAS) registro.value = getPublicacionOne(publicaciones,id)
    if(categoria.value === CATEGORIAS.GACETAS || categoria.value === CATEGORIAS.AUDITORIAS) registro.value = getGacetaOne(gacetas,id)
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
                        <!-- noticias -->
                        <div class="blog-details-content" v-if="
                            (categoria === CATEGORIAS.NOTICIAS ||
                                categoria === CATEGORIAS.PUBLICACIONES ||
                                categoria === CATEGORIAS.SERVICIOS) &&
                                registro !=null
                        ">
                            <div class="entry-content">
                                <span class="category">{{ categoria }} | Upea</span>
                                <h3 class="title">
                                    {{ registro.publicaciones_titulo }}
                                </h3>
                                <ul class="blog-meta">
                                    <li>
                                        <i class="icon-27"></i>{{
                                            formatearFecha(
                                                registro.publicaciones_fecha
                                            )
                                        }}
                                    </li>
                                    <li><i class="icon-28"></i>{{ "UPEA" }}</li>
                                </ul>
                                <div class="thumbnail">
                                    <img :src="`${api}/Publicaciones/${registro.publicaciones_imagen}`"
                                        style="width: 750px" alt="Blog Image" />
                                </div>
                            </div>
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />
                            <div v-html="registro.publicaciones_descripcion"></div>
                            <hr />
                            <h5>DATOS DE LA PUBLICACIÓN</h5>
                            <hr />
                            <ul>
                                <li>
                                    <b>Fecha de Publicación</b> :
                                    {{ formatearFecha(registro.publicaciones_fecha) }}
                                </li>
                                <li>
                                    <b>Autor</b> :
                                    {{ registro.publicaciones_autor }}
                                </li>
                                <li>
                                    <b>Documento</b> :
                                    {{ registro.publicaciones_documento }}
                                </li>
                            </ul>
                        </div>

                        <!-- eventos -->
                        <div class="blog-details-content" v-if="
                            categoria === CATEGORIAS.EVENTOS &&
                            registro !=null
                        ">
                            <div class="entry-content">
                                <span class="category">{{ categoria }} | Upea</span>
                                <h3 class="title">
                                    {{ registro.evento_titulo }}
                                </h3>
                                <ul class="blog-meta">
                                    <li>
                                        <i class="icon-27"></i>{{ formatearFecha(registro.evento_fecha) }}
                                    </li>
                                    <li><i class="icon-28"></i>{{ "UPEA" }}</li>
                                </ul>
                                <div class="thumbnail">
                                    <img :src="`${api}/Eventos/${registro.evento_imagen}`" style="width: 750px"
                                        alt="Blog Image" />
                                </div>
                            </div>
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />
                            <div v-html="registro.evento_descripcion"></div>
                            <hr />
                            <h5>DATOS DE LA EVENTO</h5>
                            <hr />
                            <ul>
                                <li>
                                    <b>Fecha de Evento</b> :
                                    {{ formatearFecha(registro.evento_fecha) }}
                                </li>
                                <li>
                                    <b>Hora del Evento</b> :
                                    {{ registro.evento_hora }}
                                </li>
                                <li>
                                    <b>Lugar de Evento</b> :
                                    {{ registro.evento_lugar }}
                                </li>
                            </ul>
                        </div>

                        <!-- gacetas -->
                        <div class="blog-details-content" v-if="
                            (categoria === CATEGORIAS.GACETAS ||
                            categoria === CATEGORIAS.AUDITORIAS) && 
                            registro !=null

                        ">
                            <div class="entry-content">
                                <span class="category">{{ categoria }} | Upea</span>
                                <h3 class="title">
                                    {{ registro.gaceta_titulo }}
                                </h3>
                                <ul class="blog-meta">
                                    <li>
                                        <i class="icon-27"></i>{{ formatearFecha(registro.gaceta_fecha) }}
                                    </li>
                                    <li><i class="icon-28"></i>{{ "UPEA" }}</li>
                                </ul>
                                <div class="thumbnail">
                                    <vue-pdf-embed :source="`${apiv2}${registro.gaceta_documento}`" :page="1" />
                                </div>
                            </div>
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />
                            <a :href="`${apiv2}${registro.gaceta_documento}`" class="edu-btn btn-medium"
                                target="_blank">Descargar PDF</a>
                            <hr />
                            <h5>DATOS DE LA GACETA</h5>
                            <hr />
                            <ul>
                                <li>
                                    <b>Fecha de Evento</b> :
                                    {{ formatearFecha(registro.gaceta_fecha) }}
                                </li>
                            </ul>
                        </div>

                        <!-- videos -->
                        <div class="blog-details-content" v-if="categoria === CATEGORIAS.VIDEOS && registro != null"
                        >
                            <div class="entry-content">
                                <span class="category">{{ categoria }} | Upea</span>
                                <h3 class="title">
                                    {{ registro.video_titulo }}
                                </h3>
                                <ul class="blog-meta">
                                    <li><i class="icon-28"></i>{{ "UPEA" }}</li>
                                </ul>
                                <div class="thumbnail">
                                    <iframe :src="registro.video_enlace" frameborder="0" style="
                                                    border-radius: 5px;
                                                    width: 100%;
                                                    height: 400px;
                                                " />
                                </div>
                            </div>
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />
                            <div v-html="registro.video_breve_descripcion"></div>
                        </div>

                        <div class="blog-author">
                            <div style="
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                        ">
                                <img :src="getLogo(institucion)" style="width: 100px; height: 100px" alt="Author Images" />
                            </div>
                            <div class="author-content">
                                <h5 class="title">Upea</h5>
                                <p>
                                    {{ frase }}
                                </p>
                                <ul class="social-share icon-transparent">
                                    <li>
                                        <a :href="getFacebook(institucion)" target="_blank"><i
                                                class="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a :href="getTwitter(institucion)" target="_blank"><i class="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a :href="getYouTube(institucion)" target="_blank"><i class="icon-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

        <FooterOne institucion="institucion" />
    </div>
</template>
