<template>
    <div class="section-gap-large edu-about-area about-style-7">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-content">
                        <SectionTitle
                            :preTitle="iniciales"
                            :title="`La historia de la ${nombre}`"
                            subTitle="<h5>Trazando un camino hacia la excelencia</h5>"
                            alignment="section-left"
                        />

                        <p
                            ref="textElement"
                            class="limited-height"
                            v-html="historia"
                        ></p>
                        <button class="edu-btn btn-medium" @click="toggleText">
                            {{ showFullText ? "Mostrar menos" : "Leer más" }}
                        </button>

                        <ul
                            class="features-list"
                            data-aos-delay="150"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <li>
                                Intercultural: La UPEA es una universidad
                                intercultural, lo que significa que está
                                comprometida con la educación de las personas de
                                todas las culturas y nacionalidades de Bolivia.
                            </li>
                            <li>
                                Innovadora: La UPEA se centra en la
                                investigación y la innovación, lo que la
                                convierte en un centro de conocimiento y
                                desarrollo para la región.
                            </li>
                            <li>
                                Comprometida: La UPEA está comprometida con la
                                comunidad, lo que significa que trabaja para
                                mejorar la vida de las personas de El Alto y de
                                la región.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <img
                            class="main-img-1"
                            :src="img"
                            alt="About Image"
                            style="width: 520px;height: 370px;object-fit: :cover;"
                        />
                        <img
                            class="main-img-2"
                            :src="img2"
                            data-aos-delay="150"
                            data-aos="fade-down"
                            data-aos-duration="800"
                            alt="About Image"
                            style="width: 220px;height: 270px;object-fit: :cover;"
                        />
                        <ul class="shape-group">
                            <MouseMove
                                addClassName="shape-1"
                                dataDepth="2"
                                imgSrc="/images/about/shape-38.png"
                                data-aos-delay="500"
                                data-aos="fade"
                                data-aos-duration="200"
                            />
                            <MouseMove
                                addClassName="shape-2"
                                dataDepth="-2"
                                imgSrc="/images/about/shape-37.png"
                                data-aos-delay="500"
                                data-aos="fade"
                                data-aos-duration="200"
                            />
                            <MouseMove
                                addClassName="shape-3"
                                dataDepth="-1.8"
                                imgSrc="/images/about/shape-04.png"
                                data-aos-delay="500"
                                data-aos="fade"
                                data-aos-duration="200"
                            />
                            <li
                                class="shape-4 scene"
                                data-aos-delay="500"
                                data-aos="fade"
                                data-aos-duration="200"
                            >
                                <img
                                    src="/images/counterup/shape-02.png"
                                    alt="Shape"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li
                class="shape-1"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            ></li>
        </ul>
    </div>
</template>

<script setup>
import SectionTitle from "../common/SectionTitle.vue";
import MouseMove from "../animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";
import { ref } from "vue";
const { institucion } = defineProps(["institucion"]);

const showFullText = ref(false);
const textElement = ref(null);

const toggleText = () => {
    showFullText.value = !showFullText.value;
    textElement.value.style.height = showFullText.value ? "auto" : "200px";
};

const iniciales = institucion.institucion_iniciales;
const nombre = institucion.institucion_nombre;
const img = RandomImage(institucion.portada);
const img2 = RandomImage(institucion.portada);
const historia = institucion.institucion_historia;
</script>

<style scoped>
.limited-height {
    height: 400px; /* Altura máxima del texto */
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
