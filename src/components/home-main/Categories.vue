<template>
    <div class="edu-categorie-area categorie-area-2 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center" title="Categorias"
                subTitle="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" />

            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
                    v-for="(category, index) in categories" :key="index">
                    <router-link :to="`/Recursos/${category.link}`" style="width: 100%;">
                    <div class="categorie-grid categorie-style-2" :class="category.colorClass">                        
                        <div class="icon">
                            <i :class="category.iconClass + ' ' + category.extraClass"></i>
                        </div>
                        <div class="content">
                            <h5 class="title">{{ category.title }}</h5>
                        </div>
                    </div>
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CATEGORIAS } from "../../types/types";
import SectionTitle from "../common/SectionTitle.vue";

const categories = [
    {
        title: "Publicaciones",
        iconClass: "icon-16",
        colorClass: "color-extra05-style",
        extraClass: "computer-science",
        link: CATEGORIAS.PUBLICACIONES
    },
    {
        title: "Servicios",
        iconClass: "icon-15",
        colorClass: "color-extra06-style",
        extraClass: "business-finance",
        link: CATEGORIAS.SERVICIOS
    },
    {
        title: "Noticias",
        iconClass: "icon-11",
        colorClass: "color-extra01-style",
        extraClass: "personal-development",
        link: CATEGORIAS.NOTICIAS
    },
    {
        title: "Gacetas",
        iconClass: "icon-17",
        colorClass: "color-tertiary-style",
        extraClass: "video-photography",
        link: CATEGORIAS.GACETAS
    },
    {
        title: "Auditorias",
        iconClass: "icon-13",
        colorClass: "color-extra02-style",
        extraClass: "data-science",
        link: CATEGORIAS.AUDITORIAS
    },
    {
        title: "Eventos",
        iconClass: "icon-14",
        colorClass: "color-extra03-style",
        extraClass: "marketing",
        link: CATEGORIAS.EVENTOS
    },
    {
        title: "Videos",
        iconClass: "icon-15",
        colorClass: "color-extra04-style",
        extraClass: "business-finance",
        link: CATEGORIAS.VIDEOS
    },
];
</script>
