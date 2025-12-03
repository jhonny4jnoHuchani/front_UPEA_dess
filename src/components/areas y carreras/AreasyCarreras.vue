<template>
    <div class="edu-team-grid team-style-2">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <router-link :to="`/CarreraDetalle/${encrypted(carrera.institucion_id)}`">
                        <img :src="getLogo(logo)" alt="autoridad" />
                    </router-link>
                </div>                
            </div>
            <div class="content">
                <h5 class="title">
                    <router-link to="/instructor/instructor-profile">{{ carrera.carrera }}</router-link>
                </h5>
                <span class="designation">{{ carrera.nombre_simple }}</span>
                <div>
                    <router-link :to="`/CarreraDetalle/${encrypted(carrera.institucion_id)}`" class="edu-btn btn-medium" style="width: 100%;">Mas Información<i class="icon-4"></i></router-link>
                </div>
                <div class="faq-accordion" id="faq-accordion">
                    <div class="accordion">
                        <div class="accordion-item">
                            <h5 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#${textoSinEspacios(carrera.nombre_simple)}`" aria-expanded="false">
                                    Enlaces
                                </button>
                            </h5>
                            <div :id="textoSinEspacios(carrera.nombre_simple)" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div class="accordion-body" >                                                                        
                                    <div v-if="!isLoadingOneCarreraLinks" v-for="link, index in OneCarreraLinks">
                                        <a :href="link.ei_link" class="edu-btn btn-medium" target="_blank" style="width: 100%;">{{ link.ei_nombre }} <i class="icon-4"></i></a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useQuery } from 'vue-query';
import CryptoJS from "crypto-js";
import { getAreas, getCarrera, getLinksInstExtAllOne } from '../../api/institucionAPI';

const { carrera } = defineProps(["carrera"]);
const id = carrera.institucion_id;
const logo = carrera.institucion_logo;
const getLogo = (img) => {
    return `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${img}`;
};
const textoSinEspacios = (textoConEspacios) => {
    return textoConEspacios.replace(/\s/g, "");
}

const { isLoading: isLoadingOneCarreraLinks, data: OneCarreraLinks } = useQuery(
    ['OneCarreraLinks',id],
    getLinksInstExtAllOne
);

const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), "TodoBien").toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};

</script>
