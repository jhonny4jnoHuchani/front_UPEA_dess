<template>
    <button class="edublink-vue-light-dark-switcher" @click="toggleTheme()">
        <!-- Reemplazamos ColorScheme por un div simple -->
        <div v-if="!isDark">
            <inline-svg src="/images/light-dark/sun.svg" alt="light icon" />
        </div>
        <div v-else>
            <inline-svg src="/images/light-dark/moon.svg" alt="dark icon" />
        </div>
    </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>