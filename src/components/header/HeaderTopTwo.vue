<template>
    <div class="header-top-bar">
        <div class="container">
            <div class="header-top">
                <div class="header-top-left">
                    <ul class="header-info">
                        <li>
                            <a :href="`tel:+591${celular}`" target="_blank"
                                ><i class="icon-phone"></i>Celular : (+591)
                                {{ celular }}
                            </a>
                        </li>
                        <li>
                            <a :href="`mailto:${correo}`" target="_blank"
                                ><i class="icon-envelope"></i>Correo Electrónico :
                                {{ correo }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="header-top-right">
                    <ul class="header-info">
                        <li>
                            <router-link to="/SobreNosotros">Sobre Nosotros</router-link>
                        </li>
                        <li>
                            <router-link to="/Contacto">Contacto</router-link>
                        </li>
                        <li class="header-btn">
                            <a
                                :href="btn_admin"
                                target="_blank"
                                class="edu-btn btn-secondary btn-medium"
                                >Ingresar <i class="icon-4"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    institucion: Object,
});

const celular = ref(props.institucion.institucion_celular1);
const correo = ref(props.institucion.institucion_correo1);
const btn_admin = import.meta.env.VITE_APP_ADMIN_API;
</script>
