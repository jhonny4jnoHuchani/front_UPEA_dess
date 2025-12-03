<template>
    <div
        class="section-title"
        :class="alignment"
        data-aos-delay="150"
        data-aos="fade-up"
        data-aos-duration="800"
    >
        <span
            class="pre-title"
            :class="preTitleClass"
            v-html="preTitle"
            v-if="preTitle"
        ></span>
        <h2 class="title" v-html="title"></h2>
        <span class="shape-line" v-if="!disableMark"
            ><i class="icon-19"></i
        ></span>
        <p v-html="subTitle" v-if="subTitle"></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
const { preTitle, preTitleClass, title, subTitle, alignment, disableMark } =
    defineProps([
        "preTitle",
        "preTitleClass",
        "title",
        "subTitle",
        "alignment",
        "disableMark",
    ]);
</script>
