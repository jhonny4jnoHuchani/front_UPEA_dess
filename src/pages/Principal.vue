<template>    
    <!-- pagina aleatoria -->
    <!-- <LoaderOne v-if="showLoader"/> -->
    <component :is="selectedComponent" />        
</template>

<script setup>
// componente y funciones importadas ---------------------------------------------------------------
import { ref, markRaw } from "vue"; // 👈 Importa markRaw
import Index1 from "./Index1.vue";
import Index2 from "./Index2.vue";
import Index3 from "./Index3.vue";
import LoaderOne from "../components/loaders/loaderOne.vue";

// ✅ SOLUCIÓN: Usa markRaw para evitar que los componentes se vuelvan reactivos
const components = [
    markRaw(Index1),  // 👈 Envuelve cada componente con markRaw
    markRaw(Index2),  // 👈
    markRaw(Index3)   // 👈
];

const selectedComponent = ref(null);

const selectRandomComponent = () => {
    const randomIndex = Math.floor(Math.random() * components.length);
    selectedComponent.value = components[randomIndex]; // ✅ Ahora es seguro
};

// Llama a la función para seleccionar un componente cuando se carga la página----------------------
selectRandomComponent();

const showLoader = ref(true);
// Oculta el loader después de 3 segundos
setTimeout(() => {
  showLoader.value = false;
}, 1200);
</script>