<script setup>
// Importacion de querys ---------------------------------------------------
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "vue-query";

// Importacion de componentes -----------------------------------------------
import HeaderOne from "../components/header/HeaderOne.vue";
import About from "../components/home-yoga-instructor/About.vue";
import Banner from "../components/home-yoga-instructor/Banner.vue";
import FooterYoga from "../components/footer/FooterYoga.vue";
import WhyChoose from "../components/home-yoga-instructor/WhyChoose.vue";
import Instructor from "../components/home-yoga-instructor/Instructor.vue";
import VideoSection from "../components/home-yoga-instructor/Video.vue";
import Carreras from "../components/home-yoga-instructor/Carreras.vue";
import MediosUniversitarios from "../components/common/MediosUniversitarios.vue";
import Course from "../components/home-yoga-instructor/Course.vue";
import { CATEGORIAS } from "../types/types";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import CTA from "../components/cta/CTAOne.vue";
import Intermedio from "../components/intermedio/Intermedio.vue"
import LoaderOne from "../components/loaders/loaderOne.vue";

// Obtención de datos de la institucion -----------------------------------
const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
console.log("institucion en Index3.vue :");
</script>
<template>
    <div v-if="loading_institucion">
        <LoaderOne />
    </div>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion, CATEGORIAS.PRINCIPAL) }}
        <!-- final de configuración del color -->


        <HeaderOne showHeaderTop="true" :institucion="institucion" />

        <Banner :institucion="institucion" />

        <Carreras />

        <About :institucion="institucion" />

        <Instructor :institucion="institucion" style="padding-bottom: 120px;background: #f3f3f3;" />

        <MediosUniversitarios :institucion="institucion" style="padding-top: 120px;" />

        <Course title="Noticias" subTitle="Lo Ultimo de..." :categoria="CATEGORIAS.NOTICIAS" style="background: #f1f1f1;" />

        <WhyChoose :institucion="institucion" style="margin-bottom: 80px;" />

        <Course title="Publicaciones" subTitle="Lo Ultimo de..." :categoria="CATEGORIAS.PUBLICACIONES"
            style="background: #f1f1f1;" />

        <VideoSection :institucion="institucion" style="padding-top: 180px;padding-bottom: 0px;" />

        <Course title="Eventos" subTitle="Lo Ultimo de..." :categoria="CATEGORIAS.EVENTOS" style="background: #f1f1f1;" />

        <Intermedio :institucion="institucion" />

        <Course title="Servicios" subTitle="Lo Ultimo de..." :categoria="CATEGORIAS.SERVICIOS"
            style="background: #f1f1f1;" />

        <CTA addClassName="university-cta-wrapper" btnClass="btn-secondary" :institucion="institucion" />

        <FooterYoga :institucion="institucion" />
    </div>
</template>
