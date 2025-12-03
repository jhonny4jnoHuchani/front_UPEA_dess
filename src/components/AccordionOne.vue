<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                    >
                        Mision
                    </button>
                </h5>
                <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <div v-html="mision"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                    >
                        Visión
                    </button>
                </h5>
                <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <div v-html="vision"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                    >
                        Objetivos
                    </button>
                </h5>
                <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <div v-html="objetivos"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    mision: String,
    vision: String,
    objetivos: String,
});
</script>
