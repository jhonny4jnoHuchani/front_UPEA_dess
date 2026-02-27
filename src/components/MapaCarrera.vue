<script setup>
import { ref, onMounted, computed } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const props = defineProps({
    coordenadas: {
        type: String,
        default: ''
    },
    titulo: {
        type: String,
        default: 'Ubicación'
    }
});

const mapContainer = ref(null);

// Extraer coordenadas de la URL de Google Maps
const coords = computed(() => {
    const url = props.coordenadas;
    let lat = -16.491777;
    let lng = -68.193717;
    
    if (url) {
        // Buscar !3d-16.491777!4d-68.193717
        const latMatch = url.match(/!3d(-?\d+\.?\d*)/);
        const lngMatch = url.match(/!4d(-?\d+\.?\d*)/);
        
        if (latMatch && lngMatch) {
            lat = parseFloat(latMatch[1]);
            lng = parseFloat(lngMatch[1]);
        }
    }
    
    return { lat, lng };
});

onMounted(() => {
    const map = L.map(mapContainer.value).setView([coords.value.lat, coords.value.lng], 16);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 19
    }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap',
        maxZoom: 19
    }).addTo(map);

    L.marker([coords.value.lat, coords.value.lng]).addTo(map)
        .bindPopup(props.titulo)
        .openPopup();
});
</script>

<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
.map-container {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
}
</style>