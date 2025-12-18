<template>
    <div class="edu-course course-style-4 course-style-8" :class="extraClass" v-if="
        categoria === CATEGORIAS.PUBLICACIONES ||
        categoria === CATEGORIAS.SERVICIOS ||
        categoria === CATEGORIAS.NOTICIAS
    ">
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`">
                    <img :src="`/imagen-servicio${item.publicaciones_imagen}`" alt="item.publicaciones_imagen" style="width: 200px;">
                </router-link>
                <div class="time-top">
                    <span class="duration">{{ categoria }}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">UPEA | {{ categoria }}</div>
                <h6 class="title">
                    <router-link :to="`/Detalle/${categoria}/${encrypted(item.publicaciones_id)}`">{{ item.publicaciones_titulo}}</router-link>
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
                <p>{{ formatearFecha(item.publicaciones_fecha) }}</p>
                <ul class="course-meta">
                    <li><i class="icon-24"></i> {{ categoria }} </li>
                    <li><i class="icon-25"></i> UPEA </li>
                </ul>
            </div>
        </div>        
    </div>

    <div class="edu-course course-style-4 course-style-8" :class="extraClass" v-if="categoria === CATEGORIAS.EVENTOS">
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`">
                    <img :src="`/imagen-servicio${item.evento_imagen}`" alt="imagen" style="width: 200px;">
                </router-link>
                <div class="time-top">
                    <span class="duration">{{categoria}}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">UPEA | {{ categoria }}</div>
                <h6 class="title">
                    <router-link :to="`/Detalle/${categoria}/${encrypted(item.evento_id)}`">{{ item.evento_titulo }}</router-link>
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
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ categoria}}</li>
                    <li><i class="icon-25"></i>UPEA</li>
                </ul>
            </div>
        </div>        
    </div>

    <div class="edu-course course-style-4 course-style-8" :class="extraClass" v-if="categoria === CATEGORIAS.VIDEOS">
        <div class="inner">
            <div class="thumbnail">
                    <iframe
                    :src="item.video_enlace"
                    frameborder="0"
                    style="border-radius: 5px; width: 100%; height: 250px"
                />
                <div class="time-top">
                    <span class="duration">{{categoria}}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">UPEA | {{categoria}}</div>
                <h6 class="title">
                    <router-link :to="`/Detalle/${categoria}/${encrypted(item.video_id)}`">{{ item.video_titulo }}</router-link>
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
                <p>Universidad Pública de El Alto</p>                
            </div>
        </div>        
    </div>

    <div class="edu-course course-style-4 course-style-8" :class="extraClass" v-if="categoria === CATEGORIAS.GACETAS || categoria === CATEGORIAS.AUDITORIAS">
        <div class="inner">
            <div class="thumbnail">
                <router-link :to="`/Detalle/${categoria}/${encrypted(item.gaceta_id)}`">
                    <vue-pdf-embed
                        :source="`${api}${item.gaceta_documento}`"
                        :page="1"
                    />
                </router-link>
                <div class="time-top">
                    <span class="duration">{{categoria}}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">UPEA | {{categoria}}</div>
                <h6 class="title">
                    <router-link :to="`/Detalle/${categoria}/${encrypted(item.gaceta_id)}`">{{ item.gaceta_titulo }}</router-link>
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
                <p>Universidad Pública de El Alto</p>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{categoria}}</li>
                    <li><i class="icon-25"></i>UPEA</li>
                </ul>
            </div>
        </div>        
    </div>
</template>

<script setup>
import { CATEGORIAS } from "../../types/types";
import VuePdfEmbed from "vue-pdf-embed";
import CryptoJS from "crypto-js";
const { categoria, item } = defineProps(["categoria", "item"])

const api = import.meta.env.VITE_APP_API_URL_V1;

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

const clave_encrypted = import.meta.env.VITE_APP_ENCRYPT
const encrypted = (id) => {
    // Cifra el ID y luego codifica la cadena resultante
    const encryptedData = CryptoJS.AES.encrypt(id.toString(), clave_encrypted).toString();
    const encodedData = encodeURIComponent(encryptedData);
    return encodedData;
};

</script>