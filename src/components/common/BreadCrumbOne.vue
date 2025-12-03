<template>
    <div
        class="edu-breadcrumb-area breadcrumb-style-2 bg-image"
        :style="{ backgroundImage: `url(${img})`, backgroundAttachment: 'fixed' }"
    >
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="page-title">
                    <h1 class="title">{{ title }}</h1>
                </div>
                <ul class="edu-breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="breadcrumb-item"
                            >PRINCIPAL</router-link
                        >
                    </li>
                    <li class="separator"><i class="icon-angle-right"></i></li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ pageTitle }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import RandomImage from "../../utils/RandomImage";

const { title, pageTitle, institucion } = defineProps([
    "title",
    "pageTitle",
    "institucion",
]);

const img = RandomImage(institucion.portada);
</script>
