<script setup>
// Importación componentes ------------------------------------------
import Medio from "./Medio.vue";
import SectionTitle from "./SectionTitle.vue";

// IAportación de query y la consulta a la api -----------------------
import { useQuery } from "vue-query";
import { getLinksInstExtAll } from "../../api/institucionAPI";
import { CATEGORIAS } from "../../types/types";
import { ref } from "vue";

// Definición de las Props
const { institucion } = defineProps(["institucion"])

// Variables --------------------------------------------------------
const iniciales = ref(institucion.institucion_iniciales)
const { isLoading: isLoadingLinksExternos, data: links } = useQuery(
    "linksUniversitarios",
    getLinksInstExtAll
);

// Filtración de Medios --------------------------------------------
const getLinksMedios = (links) => {
    return links.filter((link) => link.ei_tipo === CATEGORIAS.MEDIOS);
};
</script>
<template>
    <div class="edu-instagram-area instagram-area-1" v-if="!isLoadingLinksExternos">
        <div class="container-fluid">
            <SectionTitle
                :preTitle="iniciales"
                title="Medios de Comunicación"
                alignment="section-center"
            />
            <p class="container">
                UPEA Digital, Radio UPEA y UPEA Televisión son iniciativas educativas y
                culturales de la Universidad Pública de El Alto (UPEA) en Bolivia. Ofrecen
                una experiencia emocionante y enriquecedora con recursos educativos en
                línea, programas de radio variados y contenido cultural en televisión.
                ¡Descubre una nueva dimensión de aprendizaje y entretenimiento con UPEA!
            </p>
            <div class="row g-3">
                
                <div
                    class="medios_universitarios col-xl-3 col-md-4 col-sm-6 container" 
                    v-for="link in getLinksMedios(links)"
                    :key="link.ei_id"
                >
                    <Medio class="medio_enlace" :link="link" />
                </div>
            </div>
        </div>

        <div style="height: 100px"></div>
    </div>
</template>
<style>
.medios_universitarios {
    padding: 5%;
}
.medio_enlace {
    border-radius: 50%;
    overflow: hidden;
}
</style>
