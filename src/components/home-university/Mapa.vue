<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const { institucion } = defineProps(["institucion"]);

// Coordenadas fijas para la ubicación deseada
const coords = {
    lat: -16.491777192033886,
    lng: -68.19371725511684
};

const mapContainer = ref(null);

onMounted(() => {
    // Crear mapa con las coordenadas fijas
    const map = L.map(mapContainer.value).setView(
        [coords.lat, coords.lng],
        16
    );

    // Capa satelital Esri (similar a Google Maps)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 19
    }).addTo(map);

    // Capa de etiquetas (nombres de calles)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap',
        maxZoom: 19
    }).addTo(map);

    // Marcador
    L.marker([coords.lat, coords.lng]).addTo(map)
        .bindPopup(`
            <b>${institucion?.institucion_nombre || 'UPEA'}</b><br>
            ${institucion?.institucion_direccion || ''}
        `)
        .openPopup();
});
</script>

<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
.map-container {
    width: 100%;
    height: 450px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>