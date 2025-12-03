<script setup>
import { ref, onMounted } from "vue";
import HeaderTopOne from "./HeaderTopOne.vue";
import Category from "./Category.vue";
import Navigation from "./Navigation.vue";
import SearchPopUp from "./SearchPopUp.vue";
import ColorMode from "../common/ColorMode.vue";
import OffCanvasMobileMenuTwo from "../header/OffCanvasMobileMenuTwo.vue";

const isSticky = ref(false);
// definición de las props ----------------------------------------------------------
const { showHeaderTop, institucion } = defineProps(["showHeaderTop", "institucion"]);

// métodos y funciones del componente -----------------------------------------------
const mobileMenuOpen = (addRemoveClass, className) => {
    const el = document.querySelector("#offcanvas-menu");
    if (addRemoveClass === "addClass") {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};

const searchPopUpOpen = (addRemoveClass, className) => {
    const el = document.querySelector("#edu-search-popup");
    if (addRemoveClass === "addClass") {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};

onMounted(() => {
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        if (scrollPos >= 200) {
            isSticky.value = true;
        } else {
            isSticky.value = false;
        }
    });
});

const ADMIN = import.meta.env.VITE_APP_ADMIN_API;
</script>
<template>
    <header class="edu-header header-style-1 header-fullwidth no-topbar">
        <HeaderTopOne v-if="showHeaderTop" :institucion="institucion" />
        <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
            <div class="container-fluid">
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
                  src="/images/logo/logo-white.png"
                  alt="Light Logo"
                  v-if="$colorMode.value === 'dark'"
                /> -->
                            </router-link>
                        </div>

                        <!-- <Category /> -->
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">                            
                            <!-- <li class="icon search-icon">
                                <button
                                    class="search-trigger"
                                    @click="searchPopUpOpen('addClass', 'open')"
                                >
                                    <i class="icon-2"></i>
                                </button>
                            </li> -->
                            <li class="icon light-dark-icon">
                                <ColorMode />
                            </li>
                            <li class="header-btn">
                                <a :href="ADMIN" class="edu-btn btn-medium" target="_blank"
                                    >Ingresar <i class="icon-4"></i
                                ></a>
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

        <!-- <SearchPopUp /> -->

        <OffCanvasMobileMenuTwo />
    </header>
</template>
