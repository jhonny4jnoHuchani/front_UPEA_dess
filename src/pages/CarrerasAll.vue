<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion, CATEGORIAS.CARRERAS) }}
        <!-- final de configuración del color -->

        <HeaderOne :institucion="institucion" :showHeaderTop="true"/>

        <BreadCrumbOne pageTitle='Areas y Carreras' title='Areas Y Carreras' :institucion="institucion" />

        <div class="edu-team-area team-area-2 edu-section-gap" v-if="!isLoadingCarreras" v-for="area, index in areas">
            <div class="container">
                <SectionTitle preTitle='Area' :title='area.area' alignment='section-center' :institucion="institucion" />

                <div class="row g-5">
                    <div class="col-lg-4 col-md-6" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800"
                        v-for="(carrera, index) in area.carreras">
                        <div>
                            <AreasyCarreas :carrera="carrera" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne :institucion="institucion" />
    </div>
</template>

<script setup>
import AreasyCarreas from "../components/areas y carreras/AreasyCarreras.vue"
import HeaderOne from '../components/header/HeaderOne.vue';
import BreadCrumbOne from '../components/common/BreadCrumbOne.vue';
import SectionTitle from '../components/common/SectionTitle.vue';
import FooterOne from '../components/footer/FooterOne.vue';
import { getAreas, getInstitucion } from '../api/institucionAPI';
import { useQuery } from 'vue-query';
import ConfigColorIcon from "../utils/ConfigColorIcon"
import { CATEGORIAS } from "../types/types";

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);

const { isLoading: isLoadingCarreras, data: areas } = useQuery(
    "areas",
    getAreas
);
</script>
