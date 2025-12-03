<template>
    <div id="main-wrapper" class="main-wrapper" style="background: #f3f3f3;">
        <div class="edu-team-area team-area-2 edu-section-gap">
            <div class="container">
                <SectionTitle
                    :preTitle="iniciales"
                    title="Nuestras Autoridades"
                    alignment="section-center"
                />

                <div class="row g-5">
                    <div class="col-lg-2 col-md-6"></div>
                    <div
                        class="col-lg-4 col-md-6"
                        data-aos-delay="150"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        v-for="(autoridad, index) in autoridades"
                        :key="index"
                    >
                        <InstructorTwo :autoridad="autoridad" />
                    </div>
                    <div class="col-lg-2 col-md-6"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import SectionTitle from "../../components/common/SectionTitle.vue";
import InstructorTwo from "../../components/instructor/InstructorTwo.vue";

const { institucion } = defineProps(["institucion"])
const autoridades = ref(institucion.autoridad);
const iniciales = ref(institucion.institucion_iniciales);
</script>
