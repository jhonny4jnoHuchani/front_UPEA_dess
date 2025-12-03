<script setup>
import { ref, computed, onMounted } from "vue";
//importación de componentes --------------------------------------------------------
import HeaderTopTwo from "../header/HeaderTopTwo.vue";
import Navigation from "../header/Navigation.vue";
import ColorMode from "../common/ColorMode.vue";
import OffCanvasMobileMenuTwo from "../header/OffCanvasMobileMenuTwo.vue";

//definición de las props -----------------------------------------------------------
const { institucion, showHeaderTop } = defineProps(["institucion", "showHeaderTop"]);

//variables y métodos del componente ---------------------------------------------------

const isSticky = ref(false);
//const showHeaderTop = defineProps(["showHeaderTop"]);
const colorMode = computed(() => $colorMode.value);
onMounted(() => {
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 200;
    });
});
const mobileMenuOpen = (addRemoveClass, className) => {
    const el = document.querySelector("#offcanvas-menu");
    if (addRemoveClass === "addClass") {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};
</script>
<template>
    <header class="edu-header header-style-2">
        <HeaderTopTwo v-if="showHeaderTop" :institucion="institucion" />
        <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <router-link to="/">
                                <img
                                    class="logo-light"
                                    src="/images/logo/logodark.png"
                                    alt="Dark Logo"
                                    style="height: 70px"
                                />
                                <!-- <img
                                    class="logo-dark"
                                    src="/images/logo/logo-light-2.png"
                                    alt="Light Logo"
                                /> -->
                            </router-link>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <li class="icon light-dark-icon">
                                <ColorMode />
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button
                                    class="hamberger-button"
                                    @click="mobileMenuOpen('addClass', 'active')"
                                >
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <OffCanvasMobileMenuTwo />
    </header>
</template>
