<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "vue-query";
import {
  getInstitucion,
  getPublicaciones,
  getEventos,
  getVideos,
  getGacetas,
} from "../api/institucionAPI";
import { CATEGORIAS } from "../types/types";
import HeaderTwo from "../components/header/HeaderTwo.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import BreadCrumbTwo from "../components/common/BreadCrumbTwo.vue";
import CourseTypeTwo from "../components/course/CourseTypeTwo.vue";
import ConfigColorIcon from "../utils/ConfigColorIcon"
import HeaderOne from "../components/header/HeaderOne.vue";

const title = ref("");
const route = useRoute();
const searchTerm = ref("");
const showPublicaciones = ref(false);
const showNoticias = ref(false);
const showServicios = ref(false);
const showEventos = ref(false);
const showVideos = ref(false);
const showGacetas = ref(false);
const showAuditorias = ref(false);

const { isLoading: isLoadingInstitucion, data: institucion } = useQuery(
  "institucion",
  getInstitucion
);
const { isLoading: isLoadingPublicaciones, data: publicaciones } = useQuery(
  "publicaciones",
  getPublicaciones
);
const { isLoading: isLoadingEventos, data: eventos } = useQuery("eventos", getEventos);
const { isLoading: isLoadingVideos, data: videos } = useQuery("videos", getVideos);
const { isLoading: isLoadingGacetas, data: gacetas } = useQuery("gacetas", getGacetas);

const updateTitle = () => {
  title.value = route.params.categoria;

  // Determina si mostrar datos de publicaciones o eventos
  showPublicaciones.value = route.params.categoria === CATEGORIAS.PUBLICACIONES;
  showEventos.value = route.params.categoria === CATEGORIAS.EVENTOS;
  showVideos.value = route.params.categoria === CATEGORIAS.VIDEOS;
  showGacetas.value = route.params.categoria === CATEGORIAS.GACETAS;
  showAuditorias.value = route.params.categoria === CATEGORIAS.AUDITORIAS;
  showNoticias.value = route.params.categoria === CATEGORIAS.NOTICIAS;
  showServicios.value = route.params.categoria === CATEGORIAS.SERVICIOS;
};

const getGacetas_All = (gacetas) => {
  return gacetas.filter((g) => g.gaceta_tipo.toUpperCase() != CATEGORIAS.AUDITORIA_INTERNA.toUpperCase());
};

const getAuditorias = (auditorias) => {
  return auditorias.filter((g) => g.gaceta_tipo.toUpperCase() === CATEGORIAS.AUDITORIA_INTERNA.toUpperCase());
};

const getPublicaciones_All = (publicaciones) => {
  return publicaciones.filter(
    (s) =>
      s.publicaciones_tipo.toUpperCase() != CATEGORIAS.NOTICIA.toUpperCase() &&
      s.publicaciones_tipo.toUpperCase() != CATEGORIAS.SERVICIO.toUpperCase() 
  );
};

const getNoticias = (noticias) => {

  return noticias.filter((s) =>
    s.publicaciones_tipo.toUpperCase() === CATEGORIAS.NOTICIA.toUpperCase()
  );
};

const getServicios = (servicios) => {
  return servicios.filter((s) => s.publicaciones_tipo === CATEGORIAS.SERVICIO);
};

updateTitle();
// Usa watch para observar cambios en la ruta y actualizar el título
watch(
  () => route.params.categoria,
  () => {
    updateTitle();
  }
);

watch(
  () => searchTerm.value,
  () => {
    console.log("el valor del input es ", searchTerm.value);
  }
);
</script>
<template>
  <div id="main-wrapper" class="main-wrapper" v-if="!isLoadingInstitucion">

    <!-- configuración del color -->
    {{ ConfigColorIcon(institucion, title) }}
    <!-- final de configuración del color -->

    <HeaderOne :institucion="institucion" :showHeaderTop="true"/>
    <BreadCrumbTwo :title="title" :institucion="institucion" />

    <div class="edu-course-area course-area-1 gap-tb-text">
      <div class="container">
        <div class="edu-sorting-area">
          <div class="sorting-left">
            <h6 class="showing-text" v-if="showPublicaciones && !isLoadingPublicaciones">
              Encontramos {{ getPublicaciones_All(publicaciones).length }} Publicaciones
              disponibles para ti
            </h6>
            <h6 class="showing-text" v-if="showServicios && !isLoadingPublicaciones">
              Encontramos {{ getServicios(publicaciones).length }} Servicios disponibles
              para ti
            </h6>
            <h6 class="showing-text" v-if="showNoticias && !isLoadingPublicaciones">
              Encontramos {{ getNoticias(publicaciones).length }} Noticias disponibles
              para ti
            </h6>
            <h6 class="showing-text" v-if="showEventos && !isLoadingEventos">
              Encontramos {{ eventos.length }} Eventos disponibles para ti
            </h6>
            <h6 class="showing-text" v-if="showVideos && !isLoadingVideos">
              Encontramos {{ videos.length }} Videos disponibles para ti
            </h6>
            <h6 class="showing-text" v-if="showGacetas && !isLoadingGacetas">
              Encontramos {{ getGacetas_All(gacetas).length }} Gacetas disponibles para ti
            </h6>
            <h6 class="showing-text" v-if="showAuditorias && !isLoadingGacetas">
              Encontramos {{ getAuditorias(gacetas).length }} Auditoria disponibles para
              ti
            </h6>
          </div>
          <div class="sorting-right">
                <div class="layout-switcher">
                  <label>Grid</label>
                  <ul class="switcher-btn">
                    <li><router-link :to="`/Recursos/${title}`" class="active"><i class="icon-53"></i></router-link></li>
                    <li><router-link :to="`/RecursosList/${title}`"><i class="icon-54"></i></router-link></li>
                  </ul>
                </div>
                <!-- Input para el término de búsqueda -->
              <!-- <input v-model="searchTerm" placeholder="Buscar..." /> -->
                <!-- <div class="edu-sorting">
                  <div class="icon"><i class="icon-55"></i></div>
                  <select class="edu-select">
                    <option>Filters</option>
                    <option>Low To High</option>
                    <option>High Low To</option>
                    <option>Last Viewed</option>
                  </select>
                </div> -->
              </div>
        </div>

        <div v-if="showPublicaciones">
          <div v-if="isLoadingPublicaciones">Cargando datos de publicaciones...</div>
          <div v-else>

            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(publicacion, index) in getPublicaciones_All(publicaciones)"
                :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.PUBLICACIONES" :item="publicacion" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showServicios">
          <div v-if="isLoadingPublicaciones">Cargando datos de servicios...</div>
          <div v-else>

            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(publicacion, index) in getServicios(publicaciones)" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.SERVICIOS" :item="publicacion" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showNoticias">
          <div v-if="isLoadingPublicaciones">Cargando datos de noticias...</div>
          <div v-else>

            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(publicacion, index) in getNoticias(publicaciones)" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.NOTICIAS" :item="publicacion" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showEventos">
          <div v-if="isLoadingEventos">Cargando datos de eventos...</div>
          <div v-else>

            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(evento, index) in eventos" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.EVENTOS" :item="evento" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showVideos">
          <div v-if="isLoadingVideos">Cargando datos de videos...</div>
          <div v-else>
            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(video, index) in videos" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.VIDEOS" :item="video" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showGacetas">
          <div v-if="isLoadingGacetas">Cargando datos de gacetas...</div>
          <div v-else>
            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(gaceta, index) in getGacetas_All(gacetas)" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.GACETAS" :item="gaceta" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="showAuditorias">
          <div v-if="isLoadingGacetas">Cargando datos de gacetas...</div>
          <div v-else>
            <div class="row g-5">
              <div class="col-md-6 col-lg-4" v-for="(gaceta, index) in getAuditorias(gacetas)" :key="index">
                <CourseTypeTwo extraClass="course-box-shadow" :categoria="CATEGORIAS.AUDITORIAS" :item="gaceta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterThree :institucion="institucion" />
  </div>
</template>
