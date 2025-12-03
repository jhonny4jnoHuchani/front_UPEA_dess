<script setup>
// Importación de librerías necesarias -----------------
import { ref } from "vue";
import SectionTitle from "../../components/common/SectionTitle.vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";
import { FsLightbox } from "fslightbox-vue";

// Obtención de datos de las props -------------------------
const { institucion } = defineProps(["institucion"]);

// Datos ---------------------------------------------------
const iniciales = ref(institucion.institucion_iniciales);
const video = ref(institucion.institucion_link_video_vision).value;
const toggler = ref(false);
const aniversario = import.meta.env.VITE_APP_ANIVERSARIO_UNIVERSIDAD

// Imagen Aleatoria -----------------------------------------
const img = RandomImage(institucion.portada);
</script>
<template>    
    <div style="margin: 120px 0px 0px">
        <div class="gap-bottom-equal edu-about-area about-style-1">
            <div class="container edublink-animated-shape">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image-gallery">
                            <img
                                class="main-img-1"
                                src="/images/banner/upeaLogo.png"
                                alt="About Image"
                                style="
                                    width: 470px;
                                    height: 520px;
                                    object-fit: cover;
                                    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
                                "
                            />
                            <div class="video-box">
                                <div class="inner">
                                    <div class="thumb">
                                        <img
                                            :src="img"
                                            alt="About Image"
                                            style="
                                                width: 220px;
                                                height: 120px;
                                                object-fit: cover;
                                            "
                                        />
                                        <span>
                                            <a
                                                @click="toggler = !toggler"
                                                class="popup-icon video-popup-activation"
                                            >
                                                <i class="icon-18"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="loading-bar">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="award-status bounce-slide">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icon-21"></i>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">{{aniversario}}+</h6>
                                        <span class="subtitle">Años</span>
                                    </div>
                                </div>
                            </div>

                            <ul class="shape-group">
                                <MouseMove
                                    addClassName="shape-1"
                                    dataDepth="1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-36.png"
                                />
                                <MouseMove
                                    addClassName="shape-2"
                                    dataDepth="-1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-37.png"
                                />
                                <MouseMove
                                    addClassName="shape-3"
                                    dataDepth="1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-02.png"
                                />
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <SectionTitle
                                :preTitle="iniciales"
                                title='Desafiando barreras "La lucha imparable de la <span class="color-secondary">Universidad Pública de El Alto"</span>'
                                subTitle="La Universidad Pública de El Alto, ubicada en la ciudad de El Alto en Bolivia, ha sido una institución educativa que ha desafiado numerosas barreras a lo largo de su historia. Fundada en el año 2000, esta universidad ha sido un símbolo de lucha y perseverancia para la comunidad de El Alto y ha brindado oportunidades educativas a miles de estudiantes que de otro modo no hubieran tenido acceso a la educación superior."
                                alignment="section-left"
                            />

                            <ul
                                class="features-list"
                                data-aos-delay="150"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <li>Inclusión educativa para comunidades marginadas.</li>
                                <li>Valoración de la diversidad cultural y étnica.</li>
                                <li>
                                    Investigación científica y desarrollo local
                                    sostenible.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove
                        addClassName="shape-1 circle"
                        dataDepth="-2.3"
                        data-aos-delay="500"
                        data-aos="fade"
                        data-aos-duration="200"
                    />
                </ul>
            </div>
        </div>
        <FsLightbox :toggler="toggler" :sources="[video]" />
    </div>
</template>