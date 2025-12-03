<template>
  <div class="edu-team-area team-area-1 gap-tb-text">
    <div class="container">
      <SectionTitle :preTitle="subTitle" :title="title" alignment="section-center" />
      <div class="row g-5">
        <div class="col-lg-2 col-sm-6 col-12"></div>
        <div class="col-lg-4 col-sm-6 col-12" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
          v-for="(autoridad, key) in autoridades" :key="key">
          <InstructorOne :autoridad="autoridad" />
        </div>
        <div class="col-lg-2 col-sm-6 col-12"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from "../common/SectionTitle.vue";
import InstructorOne from "../instructor/InstructorOne.vue";
const { title, subTitle, institucion } = defineProps([
  "title",
  "subTitle",
  "institucion",
]);
const autoridades = institucion.autoridad;
</script>
