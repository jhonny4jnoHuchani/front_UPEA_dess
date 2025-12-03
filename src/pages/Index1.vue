<script setup>
// Importación de querys ------------------------------------------------
import { useQuery } from "vue-query";
import { getInstitucion } from "../api/institucionAPI";

// Importación de las categorías -----------------------------------------
import { CATEGORIAS } from "../types/types";

// Importación de componentes -------------------------------------------
import HeaderTwo from "../components/header/HeaderTwo.vue";
import Banner from "../components/home-university/Banner.vue";
import Features from "../components/home-university/Features.vue";
import About from "../components/home-main/About.vue";
import FAQ from "../components/home-online-academy/FAQ.vue";
import VideoSection from "../components/home-university/Video.vue";
import ContactInfo from "../components/home-university/ContactInfo.vue";
import Event from "../components/event/EventSectionOne.vue";
import CTA from "../components/cta/CTAOne.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import Autoridades from "../components/home-university/Autoridades.vue";
import MediosUniversitarios from "../components/common/MediosUniversitarios.vue";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import LoaderOne from "../components/loaders/loaderOne.vue";

// Obtención de la información de la institución --------------------------
const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>
<template>    
    <div v-if="loading_institucion">
    <LoaderOne />
    </div>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion,CATEGORIAS.PRINCIPAL) }}
        <!-- final de configuración del color -->

        <HeaderTwo showHeaderTop="true" :institucion="institucion" />

        <Banner :institucion="institucion" />

        <Features />

        <About :institucion="institucion" />

        <MediosUniversitarios :institucion="institucion"/>

        <VideoSection :institucion="institucion" />

        <FAQ :institucion="institucion" />

        <Autoridades :institucion="institucion" />

        <!-- noticias -->
        <Event
            title="Noticias"
            subTitle="Lo Ultimo de..."
            :categoria="CATEGORIAS.NOTICIAS"
            extraClass="event-area-1 gap-large-text"
        />

        <!-- publicaciones -->
        <Event
            title="Publicaciones"
            subTitle="Lo Ultimo de..."
            :categoria="CATEGORIAS.PUBLICACIONES"
            extraClass="event-area-1 gap-large-text"
        />

        <ContactInfo :institucion="institucion" style="margin-bottom: 50px" />

        <!-- eventos -->
        <Event
            title="Eventos"
            subTitle="Lo Ultimo de..."
            :categoria="CATEGORIAS.EVENTOS"
            extraClass="event-area-1 gap-large-text"
        />

        <CTA
            addClassName="university-cta-wrapper"
            btnClass="btn-secondary"
            :institucion="institucion"
        />        

        <!-- servicios -->
        <Event
            title="Servicios"
            subTitle="Lo Ultimo de..."
            :categoria="CATEGORIAS.SERVICIOS"
            extraClass="event-area-1 gap-large-text"
        />        

        <FooterThree :institucion="institucion" />
    </div>
</template>
