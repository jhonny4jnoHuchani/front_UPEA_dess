<script setup>
import MouseMove from "../animation/MouseMove.vue";
import { ref } from "vue";
import RandomFrase from "../../utils/RandomFrase"

const { institucion } = defineProps(["institucion"]);
const institucion_nombre = institucion.institucion_nombre;
const institucion_iniciales = institucion.institucion_iniciales;

const videos = ["/video/upea.mp4", "/video/upea2.mp4"];

const randomIndex = Math.floor(Math.random() * videos.length);
const currentVideo = ref(videos[randomIndex]);
const frase = RandomFrase()
</script>
<template>
    <div class="hero-banner hero-style-6">
        <div class="container">
            <div class="row align-items-center">
                <div class="content-text"></div>
                <div class="col-lg-6">
                    <div class="banner-content">
                        <span style="color: var(--color-primary); font-size: 1.2em">{{
                            institucion_iniciales
                        }}</span>
                        <h1 class="title" style="color: #fff">
                            {{ institucion_nombre }}
                        </h1>
                        <p style="color: #fff">
                            {{frase}}
                        </p>
                        <div class="banner-btn">
                            <router-link to="/Carreras" class="edu-btn" style="background: var(--btn-gradient) !important;">Areas y Carreras<i class="icon-4"></i></router-link>
                        </div>
                    </div>
                </div>
                <video class="video-institucion" autoplay loop muted plays-inline>
                    <source :src="currentVideo" type="video/mp4">
                </video>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-12.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-13.png" />
            <MouseMove addClassName="shape-3" dataDepth="1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-14.png" />
        </ul>
    </div>
</template>

<style>
.video-institucion {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    margin-left: 20%;
    object-position: center;
}

.content-text::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,1), transparent 80%);
    top: 0;
    left: 0;
    z-index: 1;
}
</style>
