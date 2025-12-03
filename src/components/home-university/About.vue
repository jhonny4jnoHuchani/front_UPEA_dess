<script setup>
import { ref } from "vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";

// Definición de las Props
const { institucion } = defineProps(["institucion"]);

// Variables del template
const iniciales = ref(institucion.institucion_iniciales);
const mision = ref(institucion.institucion_mision);
const vision = ref(institucion.institucion_vision);
const objetivos = ref(institucion.institucion_objetivos);

// Imágenes Aleatorias
const img = RandomImage(institucion.portada);
</script>
<template>
  <div class="edu-about-area about-style-3" style="background: #f1f1f1;margin-bottom: 120px;">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div
          class="col-lg-6"
          data-aos-delay="50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div class="about-content">
            <div class="section-title section-left">
              <span class="pre-title">{{ iniciales }}</span>
              <h2 class="title">
                Desafiando barreras "La lucha imparable de la
                <span class="color-primary">Universidad Pública de El Alto</span>"
              </h2>
              <span class="shape-line"><i class="icon-19"></i></span>
            </div>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#about-edu"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Mision
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#about-mission"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Visión
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#about-vision"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Objetivos
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="about-edu" role="tabpanel">
                <div v-html="mision"></div>
                <ul class="features-list">
                  <li>Inclusión educativa para comunidades marginadas.</li>
                  <li>Valoración de la diversidad cultural y étnica.</li>
                </ul>
              </div>
              <div class="tab-pane fade" id="about-mission" role="tabpanel">
                <div v-html="vision"></div>
                <ul class="features-list">
                  <li>Investigación científica y desarrollo local sostenible.</li>
                  <li>Acceso equitativo a la educación</li>
                </ul>
              </div>
              <div class="tab-pane fade" id="about-vision" role="tabpanel">
                <div v-html="objetivos"></div>
                <ul class="features-list">
                  <li>Enfoque en la investigación y la excelencia académica</li>
                  <li>Vínculo con la comunidad y responsabilidad socia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-image-gallery">
            <img
              class="main-img-1"
              data-aos-delay="100"
              data-aos="fade-up"
              data-aos-duration="800"
              :src="img"
              style="width: 390px; height: 390px; object-fit: cover"
              alt="About Image"
            />
            <img
              class="main-img-2"
              data-aos-delay="100"
              data-aos="fade-left"
              data-aos-duration="800"
              src="/images/banner/upea.png"
              style="width: 330px; height: 330px; object-fit: cover"
              alt="logo"
            />
            <ul class="shape-group">
              <MouseMove
                addClassName="shape-1"
                dataDepth="2"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
                imgSrc="/images/about/shape-13.png"
              />
              <MouseMove
                addClassName="shape-2"
                dataDepth="-2"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
                imgSrc="/images/about/shape-39.png"
              />
              <MouseMove
                addClassName="shape-3"
                dataDepth="2"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
                imgSrc="/images/about/shape-07.png"
              />
              <li
                class="shape-4"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              >
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ul class="shape-group">
      <li class="shape-1">
        <img class="rotateit" src="/images/about/shape-13.png" alt="Shape" />
      </li>
      <li class="shape-2 scene">
        <span></span>
      </li>
    </ul>
  </div>
</template>
