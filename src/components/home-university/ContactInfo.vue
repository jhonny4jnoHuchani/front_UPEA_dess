<template>
    <div class="cta-area-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="edu-cta-box cta-style-2 bg-image bg-image--9">
                        <div class="inner">
                            <div class="content text-end">
                                <span class="subtitle"
                                    >Ponerse en contacto:</span
                                >
                                <h3 class="title">
                                    <a
                                        :href="`mailto:${correo}`"
                                        target="_blank"
                                        >{{ correo }}</a
                                    >
                                </h3>
                            </div>
                            <div class="sparator">
                                <span>o</span>
                            </div>
                            <div class="content">
                                <span class="subtitle">Llámanos vía:</span>
                                <h3 class="title">
                                    <a
                                        :href="`tel:+591${celular}`"
                                        target="_blank"
                                        >+591 {{ celular }}</a
                                    >
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    institucion: Object,
});
const celular = ref(props.institucion.institucion_celular1);
const correo = ref(props.institucion.institucion_correo1);
</script>
