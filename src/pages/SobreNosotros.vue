<script setup>
import HeaderTwo from "../components/header/HeaderTwo.vue";
import BreadCrumbOne from "../components/common/BreadCrumbOne.vue";
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "vue-query";
import About from "../components/about-us-one/About.vue";
import WhyChoose from "../components/about-us-one/WhyChoose.vue";
import Autoridades from "../components/home-university/Autoridades.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import { CATEGORIAS } from "../types/types";

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>

<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

         <!-- configuración del color -->
         {{ ConfigColorIcon(institucion,CATEGORIAS.SOBRE_NOSOTROS) }}
        <!-- final de configuración del color -->

        <HeaderTwo :institucion="institucion" showHeaderTop="true" />

        <BreadCrumbOne
            pageTitle="Sobre Nosotros"
            title="Sobre Nosotros"
            :institucion="institucion"
        />

        <About :institucion="institucion" />

        <WhyChoose :institucion="institucion" />

        <Autoridades :institucion="institucion" />

        <FooterThree :institucion="institucion" />
    </div>
</template>
