<script setup>
import BreadCrumbTwo from "../components/common/BreadCrumbTwo.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import HeaderTwo from "../components/header/HeaderTwo.vue";
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "vue-query";
import Mapa from "../components/home-university/Mapa.vue";
import InfoContacto from "../components/home-university/InfoContacto.vue";
import { CATEGORIAS } from "../types/types";
import ConfigColorIcon from "../utils/ConfigColorIcon"

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>
<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion,CATEGORIAS.CONTACTO) }}
        <!-- final de configuración del color -->

        <HeaderTwo :institucion="institucion" showHeaderTop="true" />

        <BreadCrumbTwo title="Contacto" :institucion="institucion" />

        <InfoContacto :institucion="institucion" />

        <Mapa :institucion="institucion" />

        <FooterThree :institucion="institucion" />
    </div>
</template>
