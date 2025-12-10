<template>
    <div class="edu-team-grid team-style-4">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <router-link :to="`/AutoridadDetalle/${encrypted(autoridad.id_autoridad)}`">
                        <img :src="foto(autoridad.foto_autoridad)" alt="autoridad" />
                    </router-link>
                </div>
                <ul class="team-share-info">
                    <li>
                        <a
                            aria-label="Facebook"
                            target="_blank"
                            :href="autoridad.facebook_autoridad"
                        >
                            <i class="icon-facebook"></i>
                        </a>
                        <a
                            aria-label="Twitter"
                            target="_blank"
                            :href="autoridad.twiter_autoridad"
                        >
                            <i class="icon-twitter"></i>
                        </a>
                        <a
                            aria-label="Telefono"
                            target="_blank"
                            :href="autoridad.celular_autoridad"
                        >
                            <i class="icon-phone"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <h5 class="title">
                    <router-link :to="`/AutoridadDetalle/${encrypted(autoridad.id_autoridad)}`">{{
                        autoridad.nombre_autoridad
                    }}</router-link>
                </h5>
                <span class="designation">{{ autoridad.cargo_autoridad }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import CryptoJS from "crypto-js";
const { autoridad } = defineProps(["autoridad"]);
const api = import.meta.env.VITE_APP_API_URL_V1
const foto =(foto) => {
    return `${api}${foto}`;
}

const clave_encryptacion = import.meta.env.VITE_APP_ENCRYPT
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), clave_encryptacion).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};
</script>
