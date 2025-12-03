<script setup>
import RandomImage from '../../utils/RandomImage';

const {institucion} = defineProps(["institucion"])
const img = RandomImage(institucion.portada)
</script>
<template>
    <div :style="`background: url(${img});background-attachment: fixed;background-repeat: no-repeat;background-size: cover; `" class="img_intermedio">

    </div>
</template>
<style>
.img_intermedio{    
    width: 100%;
    height: 300px;
}
</style>