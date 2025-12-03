<template>
    <div
        class="edu-course course-style-1 hover-button-bg-white"
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
                <div class="time-top">
                    <span class="duration">{{ categoria }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">UPEA | {{ categoria }}</span>
                <h6 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                        >{{ item.publicaciones_titulo }}</router-link
                    >
                </h6>

                <div class="course-price">
                    {{ formatearFecha(item.publicaciones_fecha) }}
                </div>
                <ul class="course-meta">
                    <li>
                        <i class="icon-24"></i>
                        {{ item.publicaciones_documento }}
                    </li>
                    <li><i class="icon-25"></i> {{ item.publicaciones_autor }}</li>
                </ul>
            </div>
        </div>
        <div class="course-hover-content-wrapper">
            <button class="wishlist-btn"><i class="icon-22"></i></button>
        </div>
        <div class="course-hover-content">
            <div class="content">
                <span class="course-level">{{ categoria }}</span>
                <h6 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                    >
                        {{ item.publicaciones_titulo }}
                    </router-link>
                </h6>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count"> </span>
                </div>
                <div class="course-price">
                    {{ formatearFecha(item.publicaciones_fecha) }}
                </div>
                <ul class="course-meta">
                    <li>
                        <i class="icon-24"></i>
                        {{ item.publicaciones_documento }}
                    </li>
                    <li><i class="icon-25"></i> {{ item.publicaciones_autor }}</li>
                </ul>
                <router-link
                    :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                    class="edu-btn btn-secondary btn-small"
                    >Ver Mas Detalles<i class="icon-4"></i
                ></router-link>
            </div>
        </div>
    </div>

    <div
        class="edu-course course-style-1 hover-button-bg-white"
        :class="extraClass"
        v-if="categoria === CATEGORIAS.EVENTOS"
    >
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`">
                    <img :src="`${api}/Eventos/${item.evento_imagen}`" alt="imagen" />
                </router-link>
                <div class="time-top">
                    <span class="duration">{{ categoria }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level"> UPEA | {{ categoria }} </span>
                <h6 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                    >
                        {{ item.evento_titulo }}</router-link
                    >
                </h6>
                <div class="course-price">
                    {{ formatearFecha(item.evento_fecha) }}
                </div>
                <ul class="course-meta">
                    <li><i class="icon-24"></i> {{ item.evento_tipo }}</li>
                    <li><i class="icon-25"></i>{{ item.evento_lugar }}</li>
                </ul>
            </div>
        </div>
        <div class="course-hover-content-wrapper">
            <button class="wishlist-btn"><i class="icon-22"></i></button>
        </div>
        <div class="course-hover-content">
            <div class="content">
                <span class="course-level">{{ categoria }}</span>
                <h6 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                    >
                        {{ item.evento_titulo }}
                    </router-link>
                </h6>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                </div>
                <div class="course-price">
                    {{ formatearFecha(item.evento_fecha) }}
                </div>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ item.evento_tipo }}</li>
                    <li><i class="icon-25"></i>{{ item.evento_lugar }}</li>
                </ul>
                <router-link
                    :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                    class="edu-btn btn-secondary btn-small"
                    >Ver Mas Detalles <i class="icon-4"></i
                ></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CATEGORIAS } from "../../types/types";
import CryptoJS from "crypto-js";
const { extraClass, item, categoria } = defineProps(["extraClass", "item", "categoria"]);
const api = import.meta.env.VITE_APP_ROOT_API;
const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];

    const día = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${día} de ${mes} de ${año}`;
};
const clave_encryptacion = import.meta.env.VITE_APP_ENCRYPT
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), clave_encryptacion).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};
</script>
