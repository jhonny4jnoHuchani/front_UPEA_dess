<script setup>
import RandomImage from "../../utils/RandomImage";

const { institucion } = defineProps(["institucion"]);
const logo = institucion.institucion_logo;
const img = RandomImage(institucion.portada);
const direccion = institucion.institucion_direccion;
const celular1 = institucion.institucion_celular1;
const celular2 = institucion.institucion_celular2;
const telefono1 = institucion.institucion_telefono1;
const telefono2 = institucion.institucion_telefono2;
const correo1 = institucion.institucion_correo1;
const correo2 = institucion.institucion_correo2;
const facebook = institucion.institucion_facebook;
const youtube = institucion.institucion_youtube;
const twitter = institucion.institucion_twitter;
</script>
<template>
    <section class="section-gap-equal contact-me-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <div class="contact-me">
                        <div class="inner">
                            <div class="thumbnail">
                                <div class="">
                                    <img
                                        src="/images/banner/upeaLogo.png"
                                        style="
                                            width: 550px;
                                            height: 590px;
                                            object-fit: cover;
                                            filter: drop-shadow(0px 0px 5px rgba(0,0,0.1));
                                        "
                                        alt="Contact Me"
                                    />
                                </div>
                                <ul class="shape-group">
                                    <MouseMove
                                        addClassName="shape-1"
                                        dataDepth="1.4"
                                        imgSrc="/images/about/shape-13.png"
                                    />
                                    <MouseMove
                                        addClassName="shape-2"
                                        dataDepth="-1.4"
                                        imgSrc="/images/counterup/shape-02.png"
                                    />
                                    <li class="shape-3">
                                        <img
                                            src="/images/about/shape-07.png"
                                            alt="Shape"
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div class="contact-us-info">
                                <h3 class="heading-title">
                                    Contactate con Nosotros
                                </h3>
                                <ul class="address-list">
                                    <li>
                                        <h5 class="title">Address</h5>
                                        <p>
                                            {{ direccion }}
                                        </p>
                                    </li>
                                    <li>
                                        <h5 class="title">Correos</h5>
                                        <p>
                                            <a
                                                :href="`mailto:${correo1}`"
                                                target="_blank"
                                                >{{ correo1 }}</a
                                            >
                                        </p>
                                        <p>
                                            <a
                                                :href="`mailto:${correo2}`"
                                                target="_blank"
                                                >{{ correo2 }}</a
                                            >
                                        </p>
                                    </li>
                                    <li>
                                        <h5 class="title">
                                            Celulares y Teléfonos
                                        </h5>
                                        <p>
                                            <a :href="`tel:+591${celular1}`"
                                                >(+591) {{ celular1 }}</a
                                            >
                                        </p>
                                        <p>
                                            <a :href="`tel:+591${celular2}`"
                                                >(+591) {{ celular2 }}</a
                                            >
                                        </p>
                                        <p>
                                            <a :href="`tel:+591${telefono1}`"
                                                >Tel. {{ telefono1 }}</a
                                            >
                                        </p>
                                        <p>
                                            <a :href="`tel:+591${telefono2}`"
                                                >Tel. {{ telefono2 }}</a
                                            >
                                        </p>
                                    </li>
                                </ul>

                                <ul class="social-share">
                                    <li>
                                        <a :href="facebook" target="_blank"
                                            ><i class="icon-facebook"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a :href="twitter" target="_blank"
                                            ><i class="icon-twitter"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a :href="youtube" target="_blank"
                                            ><i class="icon-youtube"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
