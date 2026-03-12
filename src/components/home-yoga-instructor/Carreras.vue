<script setup>
import { ref } from 'vue';
import { useQuery } from 'vue-query';
import { getAreas } from '../../api/institucionAPI';
import { Swiper, SwiperSlide } from 'swiper/vue';

// 👇 IMPORTAR MÓDULOS DIRECTAMENTE (nueva sintaxis)
import { Autoplay } from 'swiper/modules';

// 👇 IMPORTAR ESTILOS
import 'swiper/css';
import 'swiper/css/autoplay';  // Estilos específicos para autoplay

const { isLoading: isLoadingAreas, data: areas } = useQuery(
    "Areas",
    getAreas
);
const api = import.meta.env.VITE_APP_API_URL_V1 || 'https://apiadministrador.upea.bo';
const getLogo = (img) => {
    if (!img) return '/default-logo.png';
    return `${api}${img}`;
};

const getCarrerasLogo = (areas) => {
    var carrerasLogo = []
    for (const area of areas) {
        for (const carrera of area.carreras) {
            const logo = carrera.institucion_logo
            carrerasLogo.push(logo)
        }
    }
    return carrerasLogo
}

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

const onSlideChange = () => {
    swiperInstance.value.autoplay.start();
};

const getSlidesPerView = () => {
  if (window.innerWidth >= 1200) {
    return 10;
  } else if (window.innerWidth >= 992) {
    return 6;
  } else if (window.innerWidth >= 768) {
    return 4;
  } else {
    return 2
  }
};

</script>

<template>
    <div class="" v-if="!isLoadingAreas">
        <div class="carreras_slider" style="background: #f2f2f2">
            <swiper 
                :slides-per-view="getSlidesPerView()" 
                :space-between="50" 
                :autoplay="{ delay: 1500, disableOnInteraction: false }"
                :modules="[Autoplay]"
                @swiper="onSwiper" 
                @slideChange="onSlideChange" 
                style="padding: 30px 0;">
                <swiper-slide v-for="img, index in getCarrerasLogo(areas)" :key="index" style="display: inline;">
                    <img :src="getLogo(img)" alt="" style="filter: drop-shadow(0px 0px 10px rgba(0,0,0,.3));">
                </swiper-slide>
            </swiper>            
        </div>        
    </div>
</template>
<style>

</style>