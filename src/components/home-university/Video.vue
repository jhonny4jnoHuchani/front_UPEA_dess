<template>
    <div>
        <div class="video-area-2 bg-image--14 bg-image"
            :style="{ backgroundImage: `url(${img})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-8">
                        <div class="video-banner-content">
                            <div class="video-btn">
                                <span>
                                    <a @click="toggler = !toggler" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <h2 class="title">
                                {{ frase }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FsLightbox :toggler="toggler" :sources="[video]" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import RandomImage from "../../utils/RandomImage";
import RandomFrase from "../../utils/RandomFrase";
import { FsLightbox } from "fslightbox-vue";

// Definición de las Props
const { institucion } = defineProps(["institucion"])

// Variables de la plantilla -------------------------------------------
const video = ref(institucion.institucion_link_video_vision).value;
const toggler = ref(false);

// Imagen y Frase Aleatorias --------------------------------------------
const img = RandomImage(institucion.portada);
const frase = RandomFrase();
</script>
