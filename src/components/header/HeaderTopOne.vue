<script setup>
const { institucion } = defineProps(["institucion"]);
const celular = institucion.institucion_celular1;
const correo = institucion.institucion_correo1;
const facebook = institucion.institucion_facebook;
const twitter = institucion.institucion_twitter;
const youtube = institucion.institucion_youtube;
</script>
<template>
    <div class="header-top-bar">
        <div class="container-fluid">
            <div class="header-top">
                <div class="header-top-left">
                    <!-- <div class="header-notify">
                            Universidad Pública de El Alto
                            <router-link to="/">Upea</router-link>
                        </div> -->
                </div>
                <div class="header-top-right">
                    <ul class="header-info">
                        <li>
                            <router-link to="SobreNosotros">Sobre Nosotros</router-link>
                        </li>
                        <li><router-link to="Contacto">Contacto</router-link></li>
                        <li>
                            <a :href="`tel:+591${celular}`"><i class="icon-phone"></i>Celular: (+591)
                                {{ celular }}</a>
                        </li>
                        <li>
                            <a :href="`mailto:${correo}`" target="_blank"><i class="icon-envelope"></i>Correo: {{ correo
                            }}</a>
                        </li>
                        <li class="social-icon">
                            <a :href="facebook" target="_blank"><i class="icon-facebook"></i></a>
                            <a :href="twitter" target="_blank"><i class="icon-twitter"></i></a>
                            <a :href="youtube" target="_blank"><i class="icon-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
