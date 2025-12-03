<template>
    <button class="edublink-vue-light-dark-switcher" @click="toggleTheme()">
        <ColorScheme placeholder="">
            <span v-if="true">
                <inline-svg src="/images/light-dark/sun.svg" alt="light icon" />
            </span>
            <span v-else>
                <inline-svg src="/images/light-dark/moon.svg" alt="dark icon" />
            </span>
        </ColorScheme>
    </button>
</template>

<script setup>
import { computed } from "vue";

const toggleTheme = () => {
    $colorMode.preference = $colorMode.preference !== "dark" ? "dark" : "light";
};
</script>
