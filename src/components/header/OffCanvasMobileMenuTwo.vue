<script setup>
import MobileMenu from "../header/MobileMenu.vue";
import ColorMode from "../common/ColorMode.vue";
import { ref } from "vue";

const mobileMenuClose = (triggerRemoveClass, className) => {
    const el = document.querySelector("#offcanvas-menu");
    if (triggerRemoveClass === "addClass") {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};
</script>

<template>
    <div id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
        <div
            class="mobile-menu-overlay"
            @click="mobileMenuClose('removeClass', 'active')"
        ></div>
        <div class="inner">
            <div class="header-top" style="display: flex;justify-content: center;align-items: center;">
                <div class="logo">
                    <img
                            class="logo-light"
                            src="/images/banner/upea.png"
                            alt="Dark Logo"
                            style="filter: drop-shadow(0px 0px 15px rgba(0,0,0,.3));"
                        />
                    
                </div>                
                <span style="font-weight: bold;padding: 20px 0px;text-transform: uppercase;">Universidad Pública de El Alto</span>    
                <div class="close-menu">
                    <button
                        class="close-button"
                        @click="mobileMenuClose('removeClass', 'active')"
                    >
                        <i class="icon-73"></i>
                    </button>
                </div>
            </div>
            <MobileMenu />
        </div>
    </div>
</template>
