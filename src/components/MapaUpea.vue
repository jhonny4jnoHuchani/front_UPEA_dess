<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Props para personalizar el mapa
const props = defineProps({
    latitud: {
        type: Number,
        default: -16.5 // Coordenadas aproximadas UPEA
    },
    longitud: {
        type: Number,
        default: -68.15
    },
    zoom: {
        type: Number,
        default: 16
    },
    titulo: {
        type: String,
        default: 'Universidad Pública de El Alto'
    },
    direccion: {
        type: String,
        default: 'AV. SUCRE A/S/N ZONA VILLA ESPERANZA, EL ALTO'
    }
});

const mapContainer = ref(null);

onMounted(() => {
    // 1. Crear el mapa
    const map = L.map(mapContainer.value).setView(
        [props.latitud, props.longitud],
        props.zoom
    );

    // 2. Agregar capa satelital de Esri (MUY similar a Google Maps)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri — Fuente: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, y la comunidad GIS',
        maxZoom: 19
    }).addTo(map);

    // 3. Opcional: Agregar capa de etiquetas (nombres de calles)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        maxZoom: 19
    }).addTo(map);

    // 4. Crear un ícono personalizado (opcional)
    const customIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // 5. Agregar marcador
    const marker = L.marker([props.latitud, props.longitud], { icon: customIcon }).addTo(map);
    
    // 6. Agregar popup con información
    marker.bindPopup(`
        <b>${props.titulo}</b><br>
        ${props.direccion}<br>
        <i>Hacé clic para más info</i>
    `).openPopup();

    // 7. Opcional: Agregar un círculo para resaltar el área
    L.circle([props.latitud, props.longitud], {
        color: '#1E40AF',
        fillColor: '#3B82F6',
        fillOpacity: 0.2,
        radius: 200
    }).addTo(map);
});
</script>

<style scoped>
.map-container {
    height: 450px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>