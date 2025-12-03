<template>
    <span v-observe-visibility="{ callback: visibilityChanged, once: true }">
        <countTo
            :startVal="startVal ? startVal : 0"
            :endVal="number"
            :duration="duration ? duration : 3000"
            :autoplay="true"
            :decimals="decimal ? decimal : null"
            v-if="isVisible"
        >
        </countTo>
        <span class="edu-vue-count-suffix" v-if="suffix">{{ suffix }}</span>
    </span>
</template>

<script setup>
import { ref } from "vue";
import countTo from "vue-count-to";

const isVisible = ref(false);

const { number, decimal, suffix, duration, startVal } = defineProps([
    "number",
    "decimal",
    "suffix",
    "duration",
    "startVal",
]);

const visibilityChanged = (isVisible) => {
    isVisible.value = isVisible;
};
</script>
