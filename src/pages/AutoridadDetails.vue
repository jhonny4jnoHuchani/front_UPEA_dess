<script setup>
import courseData from '../data/course.json';
import HeaderOne from "../components/header/HeaderOne.vue";
import BreadCrumbTwo from "../components/common/BreadCrumbTwo.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CourseTypeOne from "../components/course/CourseTypeOne.vue";
import FooterOne from "../components/footer/FooterOne.vue";
import { getInstitucion } from '../api/institucionAPI';
import { useQuery } from 'vue-query';
import { useRoute } from 'vue-router';
import CryptoJS from "crypto-js";
import { ref } from 'vue';
import { CATEGORIAS } from '../types/types';
import ConfigColorIcon from "../utils/ConfigColorIcon"

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
const clave_encryptacion = import.meta.env.VITE_APP_ENCRYPT
const dencrypted = (id) => {
    const bytes = CryptoJS.AES.decrypt(id, clave_encryptacion);
    const decryptedData = decodeURIComponent(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};
const route = useRoute();
const id = parseInt(dencrypted(route.params.id));
var autoridad = ref({
    "id_autoridad": 0,
    "foto_autoridad": "",
    "nombre_autoridad": "",
    "cargo_autoridad": "",
    "facebook_autoridad": "",
    "celular_autoridad": "",
    "twiter_autoridad": ""
})
const getAutoridad = (institucion) => {
    autoridad = institucion.autoridad.find((a) => a.id_autoridad == id);
}

const foto = (foto) => {
    if (!foto) return '/images/default-autoridad.jpg';
    return `http://200.105.169.11:1041${foto}`;
}
</script>

<template>
    {{ getAutoridad(institucion) }}
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">

        <!-- configuración del color -->
        {{ ConfigColorIcon(institucion, CATEGORIAS.CONTACTO) }}
        <!-- final de configuración del color -->

        <HeaderOne :institucion="institucion" :showHeaderTop="true" />

        <BreadCrumbTwo pageTitle='AUTORIDAD' title='AUTORIDAD' :institucion="institucion" />

        <div class="edu-team-details-area section-gap-equal" v-if="autoridad">
            <div class="container">
                <div class="row row--40">
                    <div class="col-lg-4">
                        <div class="team-details-thumb">
                            <div class="mb-4 img_icon_content">
                                <img :src="foto(autoridad.foto_autoridad)" alt="team">
                                <div class="img_icon">
                                    <img src="/images/banner/upea.png" alt="">
                                </div>
                            </div>

                            <ul class="social-share">
                                <li><a :href="autoridad.facebook_autoridad" target="_blank"><i
                                            class="icon-facebook"></i></a></li>
                                <li><a :href="autoridad.twiter_autoridad" target="_blank"><i
                                            class="icon-twitter"></i></a>
                                </li>
                                <li><a :href="`tel:+591${autoridad.celular_autoridad}`" target="_blank"><i
                                            class="icon-phone"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="team-details-content">
                            <div class="main-info">
                                <span class="subtitle">UPEA</span>
                                <h3 class="title">{{ autoridad.nombre_autoridad }}</h3>
                                <span class="designation" v-if="id === 127">"La educación es el motor del
                                    desarrollo"</span>
                                <span class="designation" v-if="id === 128">"La educación es un derecho, no un
                                    privilegio"</span>
                                <ul class="team-meta">
                                    <li><i class="icon-25"></i>{{ autoridad.cargo_autoridad }}</li>
                                    <li>
                                        <div class="rating">
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                        </div>
                                        <span class="rating-count"></span>
                                    </li>
                                </ul>
                            </div>
                            <!-- información Dr. Efrain Chambi Vargas PH. D.                                                       -->
                            <div class="bio-describe" v-if="id === 127">
                                <h4 class="title">Historia</h4>
                                <p>
                                    El Dr. Efraín Chambi Vargas es un educador y político boliviano. Actualmente se
                                    desempeña como vicerrector de la Universidad Pública de El Alto (UPEA).

                                    Nació en la ciudad de El Alto, Bolivia, el 20 de julio de 1969. Realizó sus estudios
                                    primarios y secundarios en la ciudad de El Alto. Luego, se trasladó a la ciudad de
                                    La
                                    Paz para estudiar en la Universidad Mayor de San Andrés (UMSA). En la UMSA, obtuvo
                                    el
                                    título de Licenciado en Ciencias de la Educación, con mención en Educación Superior.
                                    Posteriormente, obtuvo el título de Doctor en Educación, con mención en Educación
                                    Superior, en la Universidad de Granada, España.

                                    En el ámbito laboral, el Dr. Chambi ha trabajado como docente en la UMSA y en la
                                    UPEA.
                                    También ha trabajado como investigador en el Instituto de Investigaciones Sociales y
                                    Humanísticas de la UMSA.

                                    En el ámbito político, el Dr. Chambi fue elegido vicerrector de la UPEA en las
                                    elecciones de 2023. En su gestión como vicerrector, ha trabajado para fortalecer la
                                    calidad académica de la UPEA, promover la investigación científica y la proyección
                                    social de la universidad.

                                    El Dr. Chambi es un reconocido defensor de la educación superior pública. Ha
                                    participado
                                    en diversas conferencias y eventos internacionales sobre educación superior. También
                                    es
                                    miembro de la Asociación Boliviana de Educación Superior (ABES).</p>
                            </div>
                            <div class="bio-describe" v-if="id === 127">
                                <h4 class="title">Frases</h4>
                                <p>"La UPEA es una universidad comprometida con la excelencia académica, la
                                    investigación y
                                    la proyección social. Es una universidad que trabaja para formar profesionales
                                    competentes, investigadores comprometidos y ciudadanos solidarios."</p>
                                <p>"La educación superior es la llave que abre las puertas del desarrollo personal y
                                    social.
                                    Es la herramienta que nos permite transformar nuestras vidas y construir un futuro
                                    mejor
                                    para nosotros y para nuestros hijos."</p>
                            </div>
                            <!-- información Dr. Carlos Condori Titirico -->
                            <div class="bio-describe" v-if="id === 128">
                                <h4 class="title">Historia</h4>
                                <p>
                                    Carlos Condori Titirico, se define como un tipo sencillo, humilde y muy sincero,
                                    comprometido con su familia. Nació en Ancoraimes, provincia Omasuyos un dos de junio
                                    de
                                    1979. En su tiempo libre prefiere estar al lado de su familia, con los amigos y
                                    practicar deporte.

                                    Salió bachiller de la Unidad Educativa Ignacio Calderón de Tembladerani. Desde niño
                                    prefería la materia de Biología, era amante de la salud y los seres humanos. En
                                    1996,
                                    ingresó a la Carrera de Odontología en la Universidad Mayor de San Andrés (UMSA),
                                    también ha estudiado Prótesis Dental, carreras que necesitan demasiada empatía con
                                    la
                                    gente y tener mucha vocación de servicio.

                                    Actualmente dicta la materia de Histología en el Área de Salud en la UPEA, durante
                                    su
                                    época de universitario era auxiliar de docencia en Histología y Patología, UMSA.
                                    Desde
                                    el fondo de su corazón agradece al doctor Teodoro Alanoca, un verdadero mentor para
                                    su
                                    persona.

                                    "Aquí tienen un servidor. Soy un candidato salido de las bases. Me siento
                                    comprometido
                                    con los docentes y estudiantes de nuestra gloriosa Universidad", dijo el doctor
                                    Condori,
                                    quien aspira ser Rector de la UPEA.
                                </p>
                            </div>
                            <div class="bio-describe" v-if="id === 128">
                                <h4 class="title">Frases</h4>
                                <p>"Estamos haciendo historia en nuestra gestión, plasmando la titulación efectiva,
                                    generando elementos humanos que serán capaces de resolver las necesidades de la urbe
                                    alteña y la población boliviana."</p>
                                <p>"Desde la UPEA expresamos nuestro reconocimiento a todas esas generaciones que
                                    lucharon y
                                    continúan luchando en defensa de la Autonomía Universitaria."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterOne :institucion="institucion" />
    </div>
</template>
<style>
.img_icon_content {
    position: relative;
}

.img_icon {
    position: absolute;
    width: 100px;
    top: 5px;
    right: 5px;
}

.img_icon img {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, .2));
}
</style>