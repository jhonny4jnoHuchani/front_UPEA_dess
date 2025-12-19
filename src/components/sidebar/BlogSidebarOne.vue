<script setup>
import { CATEGORIAS } from "../../types/types";
import VuePdfEmbed from "vue-pdf-embed";
import CryptoJS from "crypto-js";
import { getLinksInstExtAll } from "../../api/institucionAPI";
import { useQuery } from "vue-query";


const {
    blogItems,
    tags,
    categories,
    archives,
    publicaciones,
    categoria,
    gacetas,
    videos,
    eventos,
    institucion,
} = defineProps([
    "blogItems",
    "tags",
    "categories",
    "archives",
    "publicaciones",
    "categoria",
    "gacetas",
    "videos",
    "eventos",
    "institucion",
]);

const nombre = institucion.institucion_nombre;
const iniciales = institucion.institucion_iniciales;
const getPublicaciones_All = (publicaciones) => {
    return publicaciones.filter(
        (s) =>
            s.publicaciones_tipo != CATEGORIAS.NOTICIA &&
            s.publicaciones_tipo != CATEGORIAS.SERVICIO
    );
};

const getNoticias = (noticias) => {
    return noticias.filter((s) => s.publicaciones_tipo === CATEGORIAS.NOTICIA);
};

const getServicios = (servicios) => {
    return servicios.filter((s) => s.publicaciones_tipo === CATEGORIAS.SERVICIO);
};

const getGacetas_All = (gacetas) => {
    return gacetas.filter((g) => g.gaceta_tipo != CATEGORIAS.AUDITORIA_INTERNA);
};

const getAuditorias = (auditorias) => {
    return auditorias.filter((g) => g.gaceta_tipo === CATEGORIAS.AUDITORIA_INTERNA);
};

const SERVICIOS_VIRTUALES = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_SERVICIOS_VIRTUALES)
}

const MEDIOS_DE_COMUNICACION = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_MEDIOS_DE_COMUNICACION)
}

const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

const { isLoading: isLoadinLinks, data: links } = useQuery(
    "links",
    getLinksInstExtAll
);

const api = import.meta.env.VITE_APP_ROOT_API;

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
const clave_encryptacion = import.meta.env.VITE_APP_ENCRYPT
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), clave_encryptacion).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};
</script>
<template>
    <div class="edu-blog-sidebar">
        <div class="edu-blog-widget widget-latest-post">
            <div class="inner">
                <h4 class="widget-title">Lo Ultimo de {{ categoria }}</h4>
                <!-- publicaciones -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.PUBLICACIONES"
                >
                    <div
                        class="latest-post"
                        v-for="publicacion in getPublicaciones_All(publicaciones).slice(
                            -3
                        )"
                        :key="publicacion.publicaciones_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">
                                <img
                                    :src="`/imagen-servicio${publicacion.publicaciones_imagen}`"
                                    style="width: 80px; height: 80px; object-fit: cover"
                                    :alt="categoria"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">{{
                                    publicacion.publicaciones_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(publicacion.publicaciones_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- noticias -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.NOTICIAS"
                >
                    <div
                        class="latest-post"
                        v-for="publicacion in getNoticias(publicaciones).slice(-3)"
                        :key="publicacion.publicaciones_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">
                                <img
                                    :src="`/imagen-servicio${publicacion.publicaciones_imagen}`"
                                    style="width: 80px; height: 80px; object-fit: cover"
                                    :alt="categoria"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">{{
                                    publicacion.publicaciones_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(publicacion.publicaciones_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- servicios -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.SERVICIOS"
                >
                    <div
                        class="latest-post"
                        v-for="publicacion in getServicios(publicaciones).slice(-3)"
                        :key="publicacion.publicaciones_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">
                                <img
                                    :src="`/imagen-servicio${publicacion.publicaciones_imagen}`"
                                    style="width: 80px; height: 80px; object-fit: cover"
                                    :alt="categoria"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(publicacion.publicaciones_id)}`">{{
                                    publicacion.publicaciones_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(publicacion.publicaciones_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- eventos -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.EVENTOS"
                >
                    <div
                        class="latest-post"
                        v-for="evento in eventos.slice(-3)"
                        :key="evento.evento_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(evento.evento_id)}`">
                                <img
                                    :src="`/imagen-servicio${evento.evento_imagen}`"
                                    style="width: 80px; height: 80px; object-fit: cover"
                                    :alt="categoria"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(evento.evento_id)}`">{{
                                    evento.evento_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(evento.evento_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- servicios -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.VIDEOS"
                >
                    <div
                        class="latest-post"
                        v-for="video in videos.slice(-3)"
                        :key="video.video_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(video.video_id)}`">
                                <iframe
                                    :src="video.video_enlace"
                                    frameborder="0"
                                    style="border-radius: 5px; width: 80px; height: 80px"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(video.video_id)}`">{{
                                    video.video_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i>{{ "UPEA" }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- gacetas -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.GACETAS"
                >
                    <div
                        class="latest-post"
                        v-for="gaceta in getGacetas_All(gacetas).slice(-3)"
                        :key="gaceta.gaceta_id"
                    >
                        <div class="thumbnail">
                            <router-link :to="`/Detalle/${categoria}/${encrypted(gaceta.gaceta_id)}`">
                                <vue-pdf-embed
                                    :source="`${api}/Gaceta/${gaceta.gaceta_documento}`"
                                    :page="1"
                                    width="80"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link :to="`/Detalle/${categoria}/${encrypted(gaceta.gaceta_id)}`">{{
                                    gaceta.gaceta_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(gaceta.gaceta_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- auditorias -->
                <div
                    class="content latest-post-list"
                    v-if="categoria === CATEGORIAS.AUDITORIAS"
                >
                    <div
                        class="latest-post"
                        v-for="gaceta in getAuditorias(gacetas).slice(-3)"
                        :key="gaceta.gaceta_id"
                    >
                        <div class="thumbnail">
                            <router-link to="/blog/blog-details">
                                <vue-pdf-embed
                                    :source="`${api}/Gaceta/${gaceta.gaceta_documento}`"
                                    :page="1"
                                    width="80"
                                />
                            </router-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <router-link to="/blog/blog-details">{{
                                    gaceta.gaceta_titulo
                                }}</router-link>
                            </h6>
                            <ul class="blog-meta">
                                <li style="font-size: 0.8em">
                                    <i class="icon-27"></i
                                    >{{ formatearFecha(gaceta.gaceta_fecha) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-categories">
            <div class="inner">
                <h4 class="widget-title">Categorias</h4>
                <div class="content">
                    <ul class="category-list">
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.PUBLICACIONES}`">
                                Publicaciones
                                <span>
                                    ({{
                                        getPublicaciones_All(publicaciones).length
                                    }})</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.SERVICIOS}`">
                                Servicios
                                <span> ({{ getServicios(publicaciones).length }})</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.NOTICIAS}`">
                                Noticias
                                <span> ({{ getNoticias(publicaciones).length }})</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.GACETAS}`">
                                Gacetas
                                <span> ({{ getGacetas_All(gacetas).length }})</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.AUDITORIAS}`">
                                Auditorias
                                <span> ({{ getAuditorias(gacetas).length }})</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.EVENTOS}`">
                                Eventos
                                <span> ({{ eventos.length }})</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/Recursos/${CATEGORIAS.VIDEOS}`">
                                Videos
                                <span> ({{ videos.length }})</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-action">
            <div class="inner">
                <h4 class="title">
                    {{ nombre }} <span>{{ iniciales }}</span>
                </h4>
                <span class="shape-line"><i class="icon-19"></i></span>
                <p>una universidad que construye el futuro de Bolivia.</p>
                <router-link to="/SobreNosotros" class="edu-btn btn-medium"
                    >Historia<i class="icon-4"></i
                ></router-link>
            </div>
        </div>

        <div class="edu-blog-widget widget-categories">
            <div class="inner">
                <h4 class="widget-title">Repositorios</h4>
                <div class="content">
                    <ul class="category-list" v-if="!isLoadinLinks">
                        <li v-for="link, index in SERVICIOS_VIRTUALES(links)" :key="index"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1">{{ capitalizarPrimeraLetra(link.ei_nombre) }}</a></li>                      
                    </ul>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-tags">
            <div class="inner">
                <h4 class="widget-title">Medios de Comunicación</h4>
                <div class="content">
                    <div class="tag-list" v-if="!isLoadinLinks">
                        <span v-for="link, index in MEDIOS_DE_COMUNICACION(links)" :key="index"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1">{{ link.ei_nombre }}</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
