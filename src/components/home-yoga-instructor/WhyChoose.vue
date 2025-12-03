<template>
  <div class="why-choose-area-1 gap-top-text">
    <div class="container">
      <div class="row g-5 row--45">
        <div class="col-lg-6">
          <div class="why-choose-content">
            <SectionTitle
              preTitle="Upea"
              preTitleClass="pre-textsecondary"
              title="UNIVERSIDAD PÚBLICA DE EL ALTO"
              subTitle="La Universidad Pública de El Alto es una institución académica comprometida con la excelencia educativa, la inclusión social y el desarrollo regional. A través de su enfoque integral, busca formar profesionales competentes y éticos que contribuyan al progreso de la sociedad boliviana."
              alignment="section-left"
            />

            <div
              class="features-list"
              data-aos-delay="150"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div
                class="features-box color-secondary-style"
              >
                <div class="icon">
                  <i class="icon-81"></i>
                </div>
                <div class="content">
                  <h5 class="title">Misión</h5>
                  <div v-html="mision"></div>
                </div>
              </div>
              <div
                class="features-box color-primary-style"
              >
                <div class="icon">
                  <i class="icon-82"></i>
                </div>
                <div class="content">
                  <h5 class="title">Visión</h5>
                  <div v-html="vision"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="why-choose-gallery">
            <div class="gallery-thumbnail">
              <div class="thumbnail thumbnail-1">
                <img :src="img" style="width: 370px;height: 470px;object-fit: cover;" alt="Why Choose" />
              </div>
              <div
                class="thumbnail thumbnail-2 rellax"
                data-rellax-speed="0.7"
                data-rellax-xs-speed="0.7"
                data-rellax-mobile-speed="0.5"
                data-rellax-tablet-speed="0.5"                
              >
                <img src="/images/banner/upeaLogo.png" alt="Why Choose" style="width: 300px;height: 370px;object-fit: cover;background: transparent;"/>
              </div>
            </div>
            <ul class="shape-group">
              <li
                class="shape-1"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              >
                <img src="/images/about/shape-15.png" alt="Shape Images" />
              </li>
              <li
                class="shape-2"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              >
                <img src="/images/about/shape-03.png" alt="Shape Images" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import parallaxAnimation from "../../common/parallaxAnimation";
import SectionTitle from "../common/SectionTitle.vue";
import RandomImage from "../../utils/RandomImage";

const { institucion } = defineProps(["institucion"])
const img = RandomImage(institucion.portada)
const mision = institucion.institucion_mision;
const vision = institucion.institucion_vision;
const features = [
  {
    class: "color-secondary-style",
    iconClass: "icon-81",
    title: "Misión",
    details: mision,
  },
  {
    class: "color-primary-style",
    iconClass: "icon-82",
    title: "Visión",
    details:
      vision
  },
  {
    class: "color-extra05-style",
    iconClass: "icon-83",
    title: "Objetivos",
    details: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

onMounted(() => {
  parallaxAnimation();
});
</script>

<style lang="scss">
.why-choose-gallery {
  @media only screen and (max-width: 767px) {
    padding-bottom: 75px;
  }
  .thumbnail.thumbnail-2 {
    margin-top: -85px;
  }
  .shape-group li.shape-2 {
    bottom: 85px;
    right: 65px;
  }
}
</style>
