<template>
    <section class="why-choose-area-2 section-gap-large">
        <div class="container edublink-animated-shape">
            <SectionTitle
                :preTitle="iniciales"
                title="Dirección Estratégica y Objetivos"
                alignment="section-center"
            />

            <div class="row g-5">
                <div
                    class="col-lg-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div
                        class="why-choose-box features-box color-primary-style"
                    >
                        <div class="icon">
                            <i class="icon-45"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Misión</h4>
                            <p v-html="mision" style="text-align: justify"></p>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div
                        class="why-choose-box features-box color-secondary-style"
                    >
                        <div class="icon">
                            <i class="icon-46"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Visión</h4>
                            <p v-html="vision" style="text-align: justify"></p>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div
                        class="why-choose-box features-box color-extra08-style"
                    >
                        <div class="icon">
                            <i class="icon-47"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Objetivos</h4>
                            <p
                                ref="textElement"
                                class="limited-height"
                                v-html="objetivos"
                                style="text-align: justify"
                            ></p>
                            <button
                                class="edu-btn btn-medium"
                                @click="toggleText"
                            >
                                {{
                                    showFullText ? "Mostrar menos" : "Leer más"
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <li
                    class="shape-5"
                    data-aos-delay="500"
                    data-aos="fade"
                    data-aos-duration="200"
                >
                    <span></span>
                </li>
            </ul>
        </div>
        <ul class="shape-group">
            <MouseMove
                addClassName="shape-1"
                dataDepth="1"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            />
            <MouseMove
                addClassName="shape-2"
                dataDepth="-2"
                imgSrc="/images/about/shape-13.png"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            />
            <MouseMove
                addClassName="shape-3"
                dataDepth="-1"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            />
            <MouseMove
                addClassName="shape-4"
                dataDepth="2"
                imgSrc="/images/about/shape-40.png"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            />
        </ul>
    </section>
</template>

<script setup>
import { ref } from "vue";
import MouseMove from "../animation/MouseMove.vue";
import SectionTitle from "../common/SectionTitle.vue";

const { institucion } = defineProps(["institucion"]);

const iniciales = institucion.institucion_iniciales;
const mision = institucion.institucion_mision;
const vision = institucion.institucion_vision;
const objetivos = institucion.institucion_objetivos;
const showFullText = ref(false);
const textElement = ref(null);

const toggleText = () => {
    showFullText.value = !showFullText.value;
    textElement.value.style.height = showFullText.value ? "auto" : "200px";
};
</script>

<style scoped>
.limited-height {
    height: 295px; /* Altura máxima del texto */
    overflow: hidden; /* Oculta el exceso de texto */
    position: relative;
}

.limited-height::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        white 50%
    ); /* Agrega un degradado al final del texto para suavizar el corte */
    pointer-events: none; /* Evita que el degradado sea interactivo */
}
</style>
