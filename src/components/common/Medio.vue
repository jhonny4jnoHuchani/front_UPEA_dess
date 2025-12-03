<script setup>
const { link } = defineProps(["link"]);
const api = import.meta.env.VITE_APP_ROOT_API;
</script>
<template>
    <div class="instagram-grid">
        <a :href="link.ei_link" target="_blank">
            <img
                :src="api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen"
                :alt="link.ei_id"
                style="border-radius: 50%"
            />
            <span class="user-info">
                <span class="icon"><i class="icon-link"></i></span>
                <span class="user-name">{{ link.ei_nombre }}</span>
            </span>
        </a>
    </div>
</template>
