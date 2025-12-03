<template>
    <div class="edu-section-gap edu-about-area about-style-5">
        <div class="container">
            <SectionTitle
                :preTitle="iniciales"
                preTitleClass="pre-textsecondary"
                title='Desafiando barreras "La lucha imparable de la <span class="color-secondary">Universidad Pública de El Alto"</span>'
                alignment="section-center"
            />

            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <img
                            class="main-img-1"
                            :src="img"
                            style="width: 540px; height: 400px; object-fit: cover"
                            data-aos-delay="150"
                            data-aos="fade"
                            data-aos-duration="800"
                            alt="About Image"
                        />
                        <ul class="shape-group">
                            <li
                                class="shape-1"
                                data-aos-delay="500"
                                data-aos="fade"
                                data-aos-duration="200"
                            >
                                <img
                                    class="rotateit"
                                    src="/images/others/shape-10.png"
                                    alt="Shape"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div
                        class="about-content"
                        data-aos-delay="150"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <p>
                            La Universidad Pública de El Alto, ubicada en la ciudad de El
                            Alto en Bolivia, ha sido una institución educativa que ha
                            desafiado numerosas barreras a lo largo de su historia.
                            Fundada en el año 2000, esta universidad ha sido un símbolo de
                            lucha y perseverancia para la comunidad de El Alto y ha
                            brindado oportunidades educativas a miles de estudiantes que
                            de otro modo no hubieran tenido acceso a la educación
                            superior.
                        </p>
                        <ul class="features-list">
                            <li>Inclusión educativa para comunidades marginadas.</li>
                            <li>Valoración de la diversidad cultural y étnica.</li>
                            <li>
                                Investigación científica y desarrollo local sostenible.
                            </li>
                        </ul>
                        <router-link to="/SobreNosotros" class="edu-btn"
                            >Historia de la Universidad <i class="icon-4"></i
                        ></router-link>
                    </div>
                </div>
            </div>
        </div>

        <ul class="shape-group">
            <li
                class="shape-1"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
            >                
            </li>
        </ul>
    </div>
</template>

<script setup>
import RandomImage from "../../utils/RandomImage";
import SectionTitle from "../common/SectionTitle.vue";
const { institucion } = defineProps(["institucion"]);
const img = RandomImage(institucion.portada);
const iniciales = institucion.institucion_iniciales;
</script>

<style lang="scss">
.about-style-5 {
    .map-shape-dark {
        display: none;
    }
}
</style>
