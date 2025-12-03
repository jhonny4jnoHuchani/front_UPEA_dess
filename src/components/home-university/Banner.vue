<script setup>
import { ref } from "vue";
//definición de componentes ------------------------------------------
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";
import RandomFrase from "../../utils/RandomFrase";

//definición de propiedades
const { institucion } = defineProps(["institucion"]);

//variables y métodos del componente
const institucion_nombre = ref(institucion.institucion_nombre);
const institucion_iniciales = ref(institucion.institucion_iniciales);
const img = RandomImage(institucion.portada);
const frase = RandomFrase();
</script>

<template>
    <div
        class="hero-banner hero-style-3 bg-image"
        :style="{ backgroundImage: `url(${img})`, backgroundAttachment: 'fixed' }"
    >
        <div class="container edublink-animated-shape">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="banner-content">
                        <span class="subtitle">{{ institucion_iniciales }}</span>
                        <h1 class="title">
                            {{ institucion_nombre }}
                        </h1>
                        <p>
                            {{ frase }}
                        </p>
                        <div class="banner-btn">
                            <router-link
                                to="/Carreras"
                                class="edu-btn btn-secondary"
                                >Areas Y Carreras <i class="icon-4"></i
                            ></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove
                    addClassName="shape-1"
                    dataDepth="2"
                    data-aos-delay="200"
                    data-aos="fade"
                    data-aos-duration="200"
                    imgSrc="/images/others/shape-10.png"
                />
                <MouseMove
                    addClassName="shape-2"
                    dataDepth="-3"
                    data-aos-delay="200"
                    data-aos="fade"
                    data-aos-duration="200"
                    imgSrc="/images/others/shape-11.png"
                />
                <li class="shape-3">
                    <img src="/images/others/shape-25.png" alt="Shape" />
                </li>
            </ul>
        </div>
    </div>
</template>
