<script setup>
import { ref } from "vue";
import RandomImage from "../../utils/RandomImage";
import MouseMove from "../animation/MouseMove.vue";
import RandomFrase from "../../utils/RandomFrase"

// Definición de las Props ----------------------------------------
const { institucion } = defineProps(["institucion"]);

// Variables del template -----------------------------------------
const nombre = ref(institucion.institucion_nombre);
const iniciales = ref(institucion.institucion_iniciales);
const api = import.meta.env.VITE_APP_ROOT_API
const getLogo = (img) => {
  return `${api}/InstitucionUpea/${img}`;
};

// Imagen y Frase Aleatoria --------------------------------------
const img = RandomImage(institucion.portada);
const frase = RandomFrase()
</script>
<template>
  <div class="hero-banner hero-style-1 bg-image bg-image--11 bg-upea-index2"
    :style="`background: url(${img});background-attachment:fixed;background-repeat:no-repeat;background-size:cover`">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="banner-content">
            <h1 class="title" style="color: #fff;">
              <div style="margin: 0;padding: 0;">
                <span class="color-secondary" style="font-size: 0.5em;color: var(--color-tertiary);">{{ iniciales
                }}</span>
              </div>
              {{ nombre }}
            </h1>
            <p style="color: #fff;">{{ frase }}</p>
            <div class="banner-btn">
              <router-link to="/Carreras" class="edu-btn">
                Areas y Carreras <i class="icon-4"></i>
              </router-link>
            </div>
            <ul class="shape-group">
              <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade"
                data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="banner-thumbnail">
            <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
              <img src="/images/banner/upeaLogo.png" class="img_banner_two" style="
                          width: 100%;
                          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
                        " alt="Girl Image" />
            </div>
            <ul class="shape-group">
              <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <img src="/images/about/shape-15.png" alt="Shape" />
              </li>

              <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <img src="/images/counterup/shape-02.png" alt="Shape" />
              </li>

              <MouseMove addClassName="shape-2" dataDepth="-1.5" data-aos-delay="1000" data-aos="fade"
                data-aos-duration="1000" imgSrc="/images/about/shape-16.png" />

              <MouseMove addClassName="shape-3 circle-shape" dataDepth="3" data-aos-delay="1000" data-aos="fade"
                data-aos-duration="1000" />

              <MouseMove addClassName="shape-5" dataDepth="1.5" data-aos-delay="1000" data-aos="fade"
                data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />

              <MouseMove addClassName="shape-6" dataDepth="-2" data-aos-delay="1000" data-aos="fade"
                data-aos-duration="1000" imgSrc="/images/about/shape-18.png" />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-7">
      <img src="/images/about/h-1-shape-01.png" alt="Shape" />
    </div>
  </div>
</template>
<style>
.hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape {
  width: 41px;
  height: 41px;
  background: var(--color-tertiary);
  border-radius: 100%;
}

.bg-upea-index2 {
  position: relative;
}

.bg-upea-index2::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, .5), transparent);
}


@media screen and (max-width: 970px) {
  .img_banner_two {
    display: none;
  }
}
</style>
