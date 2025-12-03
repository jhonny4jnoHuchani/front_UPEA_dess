<script setup>
import RandomImage from "../../utils/RandomImage";
import MouseMove from "../animation/MouseMove.vue";

const { title, pageTitle, institucion } = defineProps([
    "title",
    "pageTitle",
    "institucion",
]);
const img = RandomImage(institucion.portada);
</script>
<template>
    <div
        class="edu-breadcrumb-area banner-style3"
        :style="{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }"
    >
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="page-title">
                    <h1 class="title" style="color: #fff">
                        {{ pageTitle ? pageTitle : title }}
                    </h1>
                </div>
                <ul class="edu-breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" style="color: #fff">PRINCIPAL</router-link>
                    </li>
                    <li class="separator">
                        <i class="icon-angle-right" style="color: #fff"></i>
                    </li>
                    <li
                        class="breadcrumb-item active"
                        aria-current="page"
                        style="color: #fff"
                    >
                        {{ title }}
                    </li>
                </ul>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1">
                <span></span>
            </li>
            <MouseMove
                addClassName="shape-2"
                dataDepth="2"
                imgSrc="/images/about/shape-13.png"
            />
            <MouseMove
                addClassName="shape-3"
                dataDepth="-2"
                imgSrc="/images/about/shape-15.png"
            />
            <li class="shape-4">
                <span></span>
            </li>
            <li class="shape-5">
                <img src="/images/about/shape-07.png" alt="shape" />
            </li>
        </ul>
    </div>
</template>

<style>
.banner-style3::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
    z-index: -1;
}
h1 {
    color: #fff;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}
</style>
