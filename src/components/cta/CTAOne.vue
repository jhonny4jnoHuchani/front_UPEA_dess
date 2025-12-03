<script setup>
import { ref } from "vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";

// Variables del template -----------------------------------------------------
const title = ref(
    'La <span class="color-secondary">UNIVERSIDAD</span> del Pueblo y para el Pueblo'
);
const buttonText = ref("Sobre Nosotros");
const buttonLink = ref("/SobreNosotros");
const addClassName = ref("home-one-cta-wrapper");
const btnClass = ref();
const { institucion } = defineProps(["institucion"]);

// Imagen Aleatoria. ---------------------------------------------------------
const img = RandomImage(institucion.portada);
</script>
<template>
    <div
        class="edu-cta-banner-area banner-style2"
        :style="{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }"
        :class="addClassName"
    >
        <div class="container">
            <div class="edu-cta-banner">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div
                            class="section-title section-center"
                            data-aos-delay="150"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <h2 class="title" v-html="title" style="color: #fff"></h2>
                            <router-link
                                :to="buttonLink"
                                class="edu-btn"
                                :class="btnClass"
                                >{{ buttonText }} <i class="icon-4"></i
                            ></router-link>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove
                        addClassName="shape-01"
                        dataDepth="2.5"
                        imgSrc="/images/cta/shape-10.png"
                    />
                    <MouseMove
                        addClassName="shape-02"
                        dataDepth="-2.5"
                        imgSrc="/images/cta/shape-09.png"
                    />
                    <MouseMove
                        addClassName="shape-03"
                        dataDepth="-2"
                        imgSrc="/images/cta/shape-08.png"
                    />
                    <MouseMove
                        addClassName="shape-04"
                        dataDepth="2"
                        imgSrc="/images/about/shape-13.png"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
.banner-style2::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
}
h2 {
    color: #fff;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}
</style>
