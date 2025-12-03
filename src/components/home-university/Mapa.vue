<script setup>
const { institucion } = defineProps(["institucion"]);
const mapa = institucion.institucion_api_google_map;
</script>
<template>
    <div class="google-map-area">
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe
                    id="gmap_canvas"
                    :src="mapa"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
            </div>
        </div>
    </div>
</template>
