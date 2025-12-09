<script setup>
//importación de las categorías
import { useQuery } from "vue-query";
import { getLinksInstExtAll } from "../../api/institucionAPI";
import { CATEGORIAS } from "../../types/types";

const { isLoading: isLoadinLinks, data: links } = useQuery(
    "links",
    getLinksInstExtAll
);

const SERVICIOS_VIRTUALES = (links) => {
    return links.filter(link => link.tipo === CATEGORIAS.NAV_SERVICIOS_VIRTUALES)
}

const INTERACCION_SOCIAL = (links) => {
    return links.filter(link => link.tipo === CATEGORIAS.NAV_INTERACCION_SOCIAL)
}

const OFERTAS_ACADEMICAS = (links) => {
    return links.filter(link => link.tipo === CATEGORIAS.NAV_OFERTAS_ACADEMICAS)
}

const MEDIOS_DE_COMUNICACION = (links) => {
    return links.filter(link => link.tipo === CATEGORIAS.NAV_MEDIOS_DE_COMUNICACION)
}

const UNIDADES_ADMINISTRATIVAS = (links) => {
    return links.filter(link => link.tipo === CATEGORIAS.NAV_UNIDADES_ADMINISTRATIVAS)
}

const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
const api = import.meta.env.VITE_APP_ROOT_API

const getImagenLink = (img) => {
    return `${api}/InstitucionUpea/LinksExternos/${img}`
}
</script>
<template>
    <ul class="mainmenu" v-if="!isLoadinLinks">
        <li class="has-droupdown">
            <router-link to="">Inicio</router-link>
            <ul class="submenu">
                <li>
                    <router-link to="/SobreNosotros">Sobre Nosotros</router-link>
                </li>
                <li>
                    <router-link to="/Contacto">Contacto</router-link>
                </li>
            </ul>
        </li>

        <li class="">
            <router-link to="/Carreras">Areas y Carreras</router-link>
        </li>

        <li class="has-droupdown">
            <router-link to="">Avisos</router-link>
            <ul class="submenu">
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
        </li>

        <li class="has-droupdown">
            <router-link to="">Mas</router-link>
            <ul class="mega-menu">
                <li>
                    <h6 class="menu-title">Medios de Comunicación</h6>
                    <ul class="submenu">
                        <li v-for="link, index in MEDIOS_DE_COMUNICACION(links)" :key="index"><a :href="link.url_link"
                                target="_blank" v-if="link.estado === 1"><img :src="getImagenLink(link.imagen)" alt=""></a></li>
                    </ul>
                </li>
                <li>
                    <h6 class="menu-title">Interacción Social</h6>
                    <ul class="submenu">
                        <li v-for="link, index in INTERACCION_SOCIAL(links)" :key="index"><a :href="link.url_link"
                                target="_blank" v-if="link.estado === 1"><img :src="getImagenLink(link.imagen)" alt="img_link">{{ capitalizarPrimeraLetra(link.nombre) }}</a></li>
                    </ul>                    
                </li>
                <li>                    
                    <h6 class="menu-title">Servicios Virtuales</h6>
                    <ul class="submenu">
                        <li v-for="link, index in SERVICIOS_VIRTUALES(links)" :key="index"><a :href="link.url_link"
                                target="_blank" v-if="link.estado === 1">{{ capitalizarPrimeraLetra(link.nombre) }}</a></li>
                    </ul>
                    <h6 class="menu-title" style="margin-top: 3em;">Ofertas Académicas</h6>
                    <ul class="submenu">
                        <li v-for="link, index in OFERTAS_ACADEMICAS(links)" :key="index"><a :href="link.url_link"
                                target="_blank" v-if="link.estado === 1">{{ capitalizarPrimeraLetra(link.nombre) }}</a></li>
                    </ul>                    
                </li>
            </ul>
        </li>

        <li class="has-droupdown">
            <router-link to="">Unidades Administrativas</router-link>
            <ul class="submenu">
                <li v-for="link, index in UNIDADES_ADMINISTRATIVAS(links)" :key="index"><a :href="link.url_link"
                        target="_blank" v-if="link.estado === 1">{{ capitalizarPrimeraLetra(link.nombre) }}</a></li>
            </ul>
        </li>
    </ul>
</template>
