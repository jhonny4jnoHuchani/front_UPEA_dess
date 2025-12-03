<template>
    <div
        class="edu-course course-style-6"
        :class="extraClass"
        v-if="
            categoria === CATEGORIAS.PUBLICACIONES ||
            categoria === CATEGORIAS.SERVICIOS ||
            categoria === CATEGORIAS.NOTICIAS
        "
    >
        <div class="inner">
            <div class="thumbnail">
                <router-link
                    :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                >
                    <img
                        :src="`${api}/Publicaciones/${item.publicaciones_imagen}`"
                        alt="imagen"
                    />
                </router-link>
                <div class="course-price price-round" style="font-size: 1em">
                    {{ obtenerDia(item.publicaciones_fecha) }}
                    {{ obtenerMes(item.publicaciones_fecha).toUpperCase() }}
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ categoria }} | UPEA</span>
                <h5 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                    >
                        {{ item.publicaciones_titulo }}</router-link
                    >
                </h5>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ item.publicaciones_autor }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div
        class="edu-course course-style-6"
        :class="extraClass"
        v-if="categoria === CATEGORIAS.EVENTOS"
    >
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`">
                    <img :src="`${api}/Eventos/${item.evento_imagen}`" alt="imagen" />
                </router-link>
                <div class="course-price price-round" style="font-size: 1em">
                    {{ obtenerDia(item.evento_fecha) }}
                    {{ obtenerMes(item.evento_fecha).toUpperCase() }}
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ categoria }} | UPEA</span>
                <h5 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                    >
                        {{ item.evento_titulo }}</router-link
                    >
                </h5>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ item.evento_lugar }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import CryptoJS from "crypto-js";
import { CATEGORIAS } from "../../types/types";
const { extraClass, item, categoria } = defineProps(["extraClass", "item", "categoria"]);
const api = import.meta.env.VITE_APP_ROOT_API;
const obtenerDia = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.getDate();
};

const obtenerMes = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleString("default", { month: "short" });
};

const clave_encrypted = import.meta.env.VITE_APP_ENCRYPT
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), clave_encrypted).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};
</script>
