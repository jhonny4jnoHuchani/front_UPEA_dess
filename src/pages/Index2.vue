<script setup>
// Importación de las querys --------------------------------------------
import { useQuery } from "vue-query";
import { getInstitucion } from "../api/institucionAPI";

// Importación de los componentes ---------------------------------------
import HeaderOne from "../components/header/HeaderOne.vue";
import Banner from "../components/home-main/Banner.vue";
import Features from "../components/home-main/Features.vue";
import Categories from "../components/home-main/Categories.vue";
import About from "../components/home-university/About.vue";
import Course from "../components/home-main/Course.vue";
import { CATEGORIAS } from "../types/types";
import FooterTwo from "../components/footer/FooterTwo.vue";
import Instructor from "../components/home-main/Instructor.vue";
import MediosUniversitarios from "../components/common/MediosUniversitarios.vue";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import CTA from "../components/cta/CTAOne.vue";
import LoaderOne from "../components/loaders/loaderOne.vue";

// Obtención de los datos de la institucion
const { isLoading: isLoadingInstitucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
// console.log("institucion en Index2.vue :");
</script>
<template>
    <div v-if="isLoadingInstitucion">
        <LoaderOne />
    </div>
    <div id="main-wrapper" class="main-wrapper" v-if="!isLoadingInstitucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion,CATEGORIAS.PRINCIPAL) }}
        <!-- final de configuración del color -->

        <HeaderOne showHeaderTop="true" :institucion="institucion" />

        <Banner :institucion="institucion" />

        <Features />        

        <About :institucion="institucion" />
        
        <Instructor
            title="Autoridades"
            subTitle="Nuestras..."
            :institucion="institucion"
        />  

        <Categories />        
        <!-- servicios
         se debe cambiar la ruta para las imagenes en Medio.vue  -->
        <MediosUniversitarios :institucion="institucion" style="margin-top: 120px;"/>                

        <!-- publicaciones -->
        <Course
            title="Publicaciones"
            subTitle="lo Ultimo de..."
            :categoria="CATEGORIAS.PUBLICACIONES"
        />        

        <!-- servicios -->
        <Course
            title="Servicios"
            subTitle="lo Ultimo de..."
            :categoria="CATEGORIAS.SERVICIOS"
        />        

        <!-- noticias -->
        <Course
            title="Noticias"
            subTitle="lo Ultimo de..."
            :categoria="CATEGORIAS.NOTICIAS"
        />

        <!-- eventos -->
        <Course
            title="Eventos"
            subTitle="lo Ultimo de..."
            :categoria="CATEGORIAS.EVENTOS"
        />

        <CTA
            addClassName="university-cta-wrapper"
            btnClass="btn-secondary"
            :institucion="institucion"
        />        

        <FooterTwo :institucion="institucion" />
    </div>
</template>