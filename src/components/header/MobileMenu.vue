<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for="(link, i) in menus" :key="i">
            <router-link :to="link.url">
                {{ link.title }}
            </router-link>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for="(link, i) in link.submenu" :key="i" class="title">
                    <router-link :to="link.url"> {{ link.title }} </router-link>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span>
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for="(link, i) in link.submenu" :key="i">
                            <router-link :to="link.url">
                                {{ link.title }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>            
        </li>
        <li >
            <router-link to="">
                Medios de Comunicación
            </router-link>
            <span class="submenu-toggle">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="!isLoadinLinks">
                <li v-for="link, index in MEDIOS_DE_COMUNICACION(links)" :key="index" class="title"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1"><img :src="getImagenLink(link.ei_imagen)" alt=""></a></li>
            </ul>            
        </li>
        <li >
            <router-link to="">
                Interacción Social 
            </router-link>
            <span class="submenu-toggle">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="!isLoadinLinks">
                <li v-for="link, index in INTERACCION_SOCIAL(links)" :key="index" class="title"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1"><img :src="getImagenLink(link.ei_imagen)" alt="">{{ capitalizarPrimeraLetra(link.ei_nombre) }}</a></li>
            </ul>            
        </li>
        <li >
            <router-link to="">
                Servicios Virtuales
            </router-link>
            <span class="submenu-toggle">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="!isLoadinLinks">
                <li v-for="link, index in SERVICIOS_VIRTUALES(links)" :key="index" class="title"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1">{{ capitalizarPrimeraLetra(link.ei_nombre) }}</a></li>
            </ul>            
        </li>
        <li >
            <router-link to="">
                Ofertas Académicas
            </router-link>
            <span class="submenu-toggle">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="!isLoadinLinks">
                <li v-for="link, index in OFERTAS_ACADEMICAS(links)" :key="index" class="title"><a :href="link.ei_link"
                                target="_blank" v-if="link.ei_estado === 1">{{ capitalizarPrimeraLetra(link.ei_nombre) }}</a></li>
            </ul>            
        </li>
        <li >
            <router-link to="/Contacto">
                Contacto
            </router-link>            
        </li>

    </ul>
</template>

<script setup>
import { useQuery } from "vue-query";
import { getLinksInstExtAll } from "../../api/institucionAPI";
import mobileMenuResponsive from "../../common/mobileMenuResponsive";
import { CATEGORIAS } from "../../types/types";
import { onMounted } from 'vue';

const { isLoading: isLoadinLinks, data: links } = useQuery(
    "links",
    getLinksInstExtAll
);

const getImagenLink = (img) => {
    return `${api}/InstitucionUpea/LinksExternos/${img}`
}

const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

const api = import.meta.env.VITE_APP_ROOT_API

const SERVICIOS_VIRTUALES = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_SERVICIOS_VIRTUALES)
}

const INTERACCION_SOCIAL = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_INTERACCION_SOCIAL)
}

const OFERTAS_ACADEMICAS = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_OFERTAS_ACADEMICAS)
}

const MEDIOS_DE_COMUNICACION = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_MEDIOS_DE_COMUNICACION)
}

const UNIDADES_ADMINISTRATIVAS = (links) => {
    return links.filter(link => link.ei_tipo === CATEGORIAS.NAV_UNIDADES_ADMINISTRATIVAS)
}


const menus = [
  {
    url: "/",
    title: "Principal",
    submenu: [
      { url: "/SobreNosotros", title: "Sobre Nosotros" },
      { url: "/Contacto", title: "Contacto" },
    ],
  },
  {
    url: "/Carreras",
    title: "Areas y Carreras",    
  },
  {
    url: "",
    title: "Avisos",
    submenu: [
      { url: `/Recursos/${CATEGORIAS.PUBLICACIONES}`, title: "Publicaciones" },
      { url: `/Recursos/${CATEGORIAS.SERVICIOS}`, title: "Servicios" },
      { url: `/Recursos/${CATEGORIAS.NOTICIAS}`, title: "Noticias" },
      { url: `/Recursos/${CATEGORIAS.GACETAS}`, title: "Gacetas" },
      { url: `/Recursos/${CATEGORIAS.AUDITORIAS}`, title: "Auditorias" },
      { url: `/Recursos/${CATEGORIAS.EVENTOS}`, title: "Eventos" },
      { url: `/Recursos/${CATEGORIAS.VIDEOS}`, title: "Videos" },
    ],
  },   
];

onMounted(() => {
  mobileMenuResponsive();
});
</script>
