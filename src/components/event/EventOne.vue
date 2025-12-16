<script setup>
import { CATEGORIAS } from "../../types/types";
import CryptoJS from "crypto-js";

// Defunción de las Props -------------------------------------------------------------
const { item, categoria } = defineProps(["item", "categoria"]);

// Métodos del template ---------------------------------------------------------------
const obtenerDia = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.getDate();
};
const obtenerMes = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleString("default", { month: "short" });
};
const api = import.meta.env.VITE_APP_API_URL_V1;
const claveEncryptacion = import.meta.env.VITE_APP_ENCRYPT

// Método de Encryption -------------------------------------------------------------
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), claveEncryptacion).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};
</script>
<template>
    <div
        class="edu-event event-style-1"
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

                        :src="`/imagen-servicio${item.publicaciones_imagen}`"
                        alt="imagen"
                    />
                </router-link>
                <div class="event-time">
                    <span>{{ categoria }}</span>
                </div>
            </div>
            <div class="content">
                <div class="event-date">
                    <span class="day"> {{ obtenerDia(item.publicaciones_fecha) }} </span>
                    <span class="month">
                        {{ obtenerMes(item.publicaciones_fecha).toUpperCase() }}
                    </span>
                </div>
                <h5 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                    >
                        {{ item.publicaciones_titulo }}
                    </router-link>
                </h5>
                <p>{{ item.publicaciones_autor }}</p>
                <ul class="event-meta">
                    <li><i class="icon-40"></i>UPEA | {{ categoria }}</li>
                </ul>
                <div class="read-more-btn">
                    <router-link
                        class="edu-btn btn-small btn-secondary"
                        :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`"
                        >Más Detalles <i class="icon-4"></i
                    ></router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="edu-event event-style-1" v-if="categoria === CATEGORIAS.EVENTOS">
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`">
                    <img :src="`/imagen-servicio${item.evento_imagen}`" alt="imagen" />
                </router-link>
                <div class="event-time">
                    <span>{{ categoria }} </span>
                </div>
            </div>
            <div class="content">
                <div class="event-date">
                    <span class="day"> {{ obtenerDia(item.evento_fecha) }} </span>
                    <span class="month">
                        {{ obtenerMes(item.evento_fecha).toUpperCase() }}
                    </span>
                </div>
                <h5 class="title">
                    <router-link
                        :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                    >
                        {{ item.evento_titulo }}
                    </router-link>
                </h5>
                <p>UPEA | {{ categoria }}</p>
                <ul class="event-meta">
                    <li><i class="icon-40"></i> {{ item.evento_lugar }}</li>
                </ul>
                <div class="read-more-btn">
                    <router-link
                        class="edu-btn btn-small btn-secondary"
                        :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`"
                        >Más Detalles <i class="icon-4"></i
                    ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
