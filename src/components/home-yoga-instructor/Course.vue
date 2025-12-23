<script setup>
import SectionTitle from "../common/SectionTitle.vue";
import CourseTypeEight from "../course/CourseTypeEight.vue";
import courseData from "../../data/course.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CATEGORIAS } from "../../types/types";
import { getEventos, getPublicaciones } from "../../api/institucionAPI";
import { useQuery } from "vue-query";
const { extraClass, title, subTitle, categoria } = defineProps([
    "extraClass",
    "title",
    "subTitle",
    "categoria",
]);
const { isLoading: isLoadingPublicaciones, data: publicaciones } = useQuery(
    "publicaciones",
    getPublicaciones
);

const { isLoading: isLoadingEventos, data: eventos } = useQuery("eventos", getEventos);

const getPublicaciones_All = (publicaciones) => {
    return publicaciones.filter(
        (s) =>
            s.publicaciones_tipo != CATEGORIAS.NOTICIA &&
            s.publicaciones_tipo != CATEGORIAS.SERVICIO
    );
};

const getNoticias = (noticias) => {
    return noticias.filter((s) => s.publicaciones_tipo.toUpperCase() === CATEGORIAS.NOTICIA.toUpperCase());
};

const getServicios = (servicios) => {
    return servicios.filter((s) => s.publicaciones_tipo.toUpperCase()  === CATEGORIAS.SERVICIO.toUpperCase());
};

const getSlidesPerView = () => {
  if (window.innerWidth >= 1200) {
    return 3;
  } else if (window.innerWidth >= 992) {
    return 2;
  } else if (window.innerWidth >= 768) {
    return 1;
  } else {
    return 1
  }
};
</script>
<template>
    <div class="edu-course-area course-area-6 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle :preTitle="subTitle" preTitleClass="pre-textsecondary" :title="title"
                alignment="section-center" />

            <swiper :slidesPerView="getSlidesPerView()" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="course-activation swiper" v-if="categoria === CATEGORIAS.PUBLICACIONES">
                <swiper-slide v-if="!isLoadingPublicaciones" v-for="(item, index) in getPublicaciones_All(publicaciones)
                    .slice(-6)
                    .reverse()" :key="index" class="swiper-slide">
                    <CourseTypeEight :item="item" :categoria="categoria" />
                </swiper-slide>
            </swiper>

            <swiper :slidesPerView="getSlidesPerView()" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="course-activation swiper" v-if="categoria === CATEGORIAS.NOTICIAS">
                <swiper-slide v-if="!isLoadingPublicaciones" v-for="(item, index) in getNoticias(publicaciones)
                    .slice(-6)
                    .reverse()" :key="index" class="swiper-slide">
                    <CourseTypeEight :item="item" :categoria="categoria" />
                </swiper-slide>
            </swiper>

            <swiper :slidesPerView="getSlidesPerView()" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="course-activation swiper" v-if="categoria === CATEGORIAS.SERVICIOS">
                <swiper-slide v-if="!isLoadingPublicaciones" v-for="(item, index) in getServicios(publicaciones)
                    .slice(-6)
                    .reverse()" :key="index" class="swiper-slide">
                    <CourseTypeEight :item="item" :categoria="categoria" />
                </swiper-slide>
            </swiper>

            <swiper :slidesPerView="getSlidesPerView()" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="course-activation swiper" v-if="categoria === CATEGORIAS.EVENTOS">
                <swiper-slide v-if="!isLoadingEventos" v-for="(evento, index) in eventos.slice(-6).reverse()" :key="index"
                    class="swiper-slide">
                    <CourseTypeEight :item="evento" :categoria="categoria" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style lang="scss">
.course-area-6 {
    .swiper-pagination {
        position: absolute;
        width: 100%;
        text-align: center;
        left: 0;
        bottom: 120px;
    }
}
</style>
