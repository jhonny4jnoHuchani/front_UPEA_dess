<script setup>
import { ref } from 'vue';
import { useQuery } from 'vue-query';
import { getAreas } from '../../api/institucionAPI';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

const { isLoading: isLoadingAreas, data: areas } = useQuery(
    "Areas",
    getAreas
);
const getLogo = (img) => {
    return `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${img}`;
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
    // Guardar la instancia de Swiper para poder acceder a ella más tarde
    swiperInstance.value = swiper;
};

const onSlideChange = () => {
    // Reanudar la reproducción automática después de que se complete el cambio de diapositiva
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
            <swiper :slides-per-view="getSlidesPerView()" :space-between="50" :autoplay="{ delay: 1500, disableOnInteraction: false }"
                @swiper="onSwiper" @slideChange="onSlideChange" style="padding: 30px 0;">
                <swiper-slide v-for="img, index in getCarrerasLogo(areas)" :key="index" style="display: inline;">
                    <img :src="getLogo(img)" alt="" style="filter: drop-shadow(0px 0px 10px rgba(0,0,0,.3));">
                </swiper-slide>
            </swiper>            
        </div>        
    </div>
</template>
<style>

</style>
