<script setup>
const { link } = defineProps(["link"]);
//se tiene que camabiar la ruta de la imagen correspondiente al nuevo servicio
// en especial la ruta donde esta la parte de medios universitarios 
const api = import.meta.env.VITE_APP_ROOT_API;
</script>
<template>
    <div class="instagram-grid">
        <a :href="link.id_link" target="_blank">
            
            <img
                :src="api + '/InstitucionUpea/LinksExternos/' + link.imagen"
                :alt="link.id_link"
                style="border-radius: 50%"
            />
            <span class="user-info">
                <span class="icon"><i class="icon-link"></i></span>
                <span class="user-name">{{ link.nombre }}</span>
            </span>
        </a>
    </div>
</template>
