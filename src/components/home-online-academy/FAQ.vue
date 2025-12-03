<template>
    <div class="edu-faq-area faq-style-2 bg-image bg-image--10">
        <div class="container">
            <div class="row g-5 row--45">
                <div
                    class="col-lg-6"
                    data-aos-delay="50"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div class="edu-faq-content">
                        <SectionTitle
                            :preTitle="iniciales"
                            :title="nombre"
                            alignment="section-left"
                            subTitle="La Universidad Pública de El Alto es una institución académica comprometida con la excelencia educativa, la inclusión social y el desarrollo regional. A través de su enfoque integral, busca formar profesionales competentes y éticos que contribuyan al progreso de la sociedad boliviana."
                        />

                        <AccordionOne
                            :mision="mision"
                            :vision="vision"
                            :objetivos="objetivos"
                        />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="edu-faq-gallery">
                        <div class="row g-5">
                            <div
                                class="col-6"
                                data-aos-delay="50"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                            >
                                <div class="faq-thumbnail thumbnail-1">
                                    <img
                                        :src="img1"
                                        alt="Faq Images"
                                        style="
                                            width: 255px;
                                            height: 440px;
                                            object-fit: cover;
                                            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
                                        "
                                    />
                                </div>
                            </div>
                            <div
                                class="col-6"
                                data-aos-delay="50"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div class="faq-thumbnail thumbnail-2">
                                    <img
                                        :src="img2"
                                        alt="Faq Images"
                                        style="
                                            width: 255px;
                                            height: 370px;
                                            object-fit: cover;
                                            box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.3);
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove
                                addClassName="shape-1"
                                dataDepth="2"
                                imgSrc="/images/faq/shape-06.png"
                            />
                            <MouseMove
                                addClassName="shape-3"
                                dataDepth="2"
                                imgSrc="/images/faq/shape-16.png"
                            />
                            <MouseMove
                                addClassName="shape-4"
                                dataDepth="-2"
                                imgSrc="/images/banner/shape-03.png"
                            />
                            <MouseMove
                                addClassName="shape-5"
                                dataDepth="-2"
                                imgSrc="/images/faq/shape-08.png"
                            />
                            <MouseMove
                                addClassName="shape-6"
                                dataDepth="1.7"
                                imgSrc="/images/faq/shape-09.png"
                            />
                            <li class="shape-2">
                                <img src="/images/faq/shape-04.png" alt="Shape Images" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Importación de componente y métodos del componente -----------------------
import { ref } from "vue";
import AccordionOne from "../AccordionOne.vue";
import SectionTitle from "../common/SectionTitle.vue";
import MouseMove from "../animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";

const { institucion } = defineProps(["institucion"]);

// Variables del componente ----------------------------------------
const iniciales = ref(institucion.institucion_iniciales);
const nombre = ref(institucion.institucion_nombre);
const mision = ref(institucion.institucion_mision);
const vision = ref(institucion.institucion_vision);
const objetivos = ref(institucion.institucion_objetivos);

// Imagen Aleatoria -------------------------------------------------
const img1 = RandomImage(institucion.portada);
const img2 = RandomImage(institucion.portada);
</script>
