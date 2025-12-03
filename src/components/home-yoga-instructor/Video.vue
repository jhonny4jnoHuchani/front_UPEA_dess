<template>
    <div>
        <div class="video-area-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-gallery">
                            <div class="thumbnail">
                                <img :src="img" alt="Thumb" />
                                <span>
                                    <a
                                        @click="toggler = !toggler"
                                        class="video-play-btn video-popup-activation"
                                    >
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <ul class="shape-group">
                                <li class="shape-1">
                                    <img
                                        class="rotateit"
                                        src="/images/about/shape-19.png"
                                        alt="Shape"
                                    />
                                </li>
                                <li class="shape-2">
                                    <img src="/images/about/shape-16.png" alt="Shape" />
                                </li>
                                <li class="shape-3">
                                    <img
                                        class="rotateit"
                                        src="/images/about/shape-13.png"
                                        alt="Shape"
                                    />
                                </li>
                            </ul>
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
import MouseMove from "../animation/MouseMove.vue";
import { FsLightbox } from "fslightbox-vue";
const { institucion } = defineProps(["institucion"]);

const items = [
    {
        src: "https://www.youtube.com/watch?v=PICj5tr9hcc",
    },
];

let index = null;
/* DATOS A MOSTRAR */
const img = RandomImage(institucion.portada);
const video = ref(institucion.institucion_link_video_vision).value;
const toggler = ref(false);
//const frase = RandomFrase();
</script>
