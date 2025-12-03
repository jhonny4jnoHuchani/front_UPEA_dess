<script setup>
import HeaderOne from '../components/header/HeaderOne.vue';
import BreadCrumbTwo from '../components/common/BreadCrumbTwo.vue';
import CourseTypeSix from '../components/course/CourseTypeSix.vue';
import FooterOne from "../components/footer/FooterOne.vue"
import courseData from '../data/course.json';
import { ref, computed, watch } from 'vue';
import { getEventos, getGacetas, getInstitucion, getPublicaciones, getVideos } from '../api/institucionAPI';
import { useQuery } from 'vue-query';
import { CATEGORIAS } from '../types/types';
import { useRoute } from 'vue-router';
import ConfigColorIcon from "../utils/ConfigColorIcon"

const title = ref("");
const route = useRoute();
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
    return gacetas.filter((g) => g.gaceta_tipo != CATEGORIAS.AUDITORIA_INTERNA);
};

const getAuditorias = (auditorias) => {
    return auditorias.filter((g) => g.gaceta_tipo === CATEGORIAS.AUDITORIA_INTERNA);
};

const getPublicaciones_All = (publicaciones) => {
    return publicaciones.filter(
        (s) =>
            s.publicaciones_tipo != CATEGORIAS.NOTICIA &&
            s.publicaciones_tipo != CATEGORIAS.SERVICIO
    );
};

const getNoticias = (noticias) => {
    return noticias.filter((s) => s.publicaciones_tipo === CATEGORIAS.NOTICIA);
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

const currentPage = ref(1);
const perPage = ref(9);

const getItems = computed(() => {
    let start = (currentPage.value - 1) * perPage.value;
    let end = currentPage.value * perPage.value;
    return courseData.courses.slice(start, end);
});

const getPaginateCount = computed(() => {
    return Math.ceil(courseData.courses.length / perPage.value);
});

const paginateClickCallback = (page) => {
    currentPage.value = Number(page);
};
</script>
<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!isLoadingInstitucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion, title) }}
        <!-- final de configuración del color -->

        <HeaderOne :institucion="institucion" />

        <BreadCrumbTwo :title='title' :institucion="institucion" />

        <div class="edu-course-area course-area-1 section-gap-equal">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3">
                        <CourseSidebarOne :institucion="institucion" />
                    </div>

                    <div class="col-lg-12 col-pl--35">
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
                                        <li><router-link :to="`/Recursos/${title}`" ><i
                                                    class="icon-53"></i></router-link></li>
                                        <li><router-link :to="`/RecursosList/${title}`" class="active"><i
                                                    class="icon-54"></i></router-link></li>
                                    </ul>
                                </div>
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
                            <div v-if="isLoadingPublicaciones">Cargando Datos de Publicaciones</div>
                            <div class="edu-course-six-each-item" v-for="(publicacion, index) in getPublicaciones_All(publicaciones)" :key="index" >
                                <CourseTypeSix :categoria="CATEGORIAS.PUBLICACIONES" :item="publicacion" />
                            </div>
                        </div>
                        
                        <div v-if="showServicios">
                            <div v-if="isLoadingPublicaciones">Cargando Datos de Servicios</div>
                            <div class="edu-course-six-each-item" v-for="(publicacion, index) in getServicios(publicaciones)" :key="index" >
                                <CourseTypeSix :categoria="CATEGORIAS.SERVICIOS" :item="publicacion" />
                            </div>
                        </div>

                        <div v-if="showNoticias">
                            <div v-if="isLoadingPublicaciones">Cargando Datos de Noticias</div>
                            <div class="edu-course-six-each-item" v-for="(publicacion, index) in getNoticias(publicaciones)" :key="index" >
                                <CourseTypeSix :categoria="CATEGORIAS.NOTICIAS" :item="publicacion" />
                            </div>
                        </div>

                        <div v-if="showEventos">
                            <div v-if="isLoadingEventos">Cargando Datos de Eventos</div>
                            <div class="edu-course-six-each-item" v-for="(evento, index) in eventos" :key="index" >
                                <CourseTypeSix :categoria="CATEGORIAS.EVENTOS" :item="evento" />
                            </div>
                        </div>

                        <div v-if="showVideos">
                            <div v-if="isLoadingVideos">Cargando Datos de Videos</div>
                            <div class="edu-course-six-each-item" v-for="(video, index) in videos" :key="index" >
                                <CourseTypeSix :categoria="CATEGORIAS.VIDEOS" :item="video" />
                            </div>
                        </div>

                        <div v-if="showGacetas">
                            <div v-if="isLoadingGacetas">Cargando Datos de Gacetas</div>
                            <div class="edu-course-six-each-item" v-for="(gaceta, index) in getGacetas_All(gacetas)" :key="index">
                                <CourseTypeSix :categoria="CATEGORIAS.GACETAS" :item="gaceta" />
                            </div>
                        </div>

                        <div v-if="showAuditorias">
                            <div v-if="isLoadingGacetas">Cargando Datos de Gacetas</div>
                            <div class="edu-course-six-each-item" v-for="(gaceta, index) in getAuditorias(gacetas)" :key="index">
                                <CourseTypeSix :categoria="CATEGORIAS.AUDITORIAS" :item="gaceta" />
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <FooterOne :institucion="institucion" />
    </div>
</template>