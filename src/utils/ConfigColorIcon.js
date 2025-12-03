/* ----------------------------------------------------------------
    DESCRIPCIÓN : la función configura los colores y el icon de 
        aplicación.
---------------------------------------------------------------- */
export default function ConfigColorIcon(institucion,title) {
    // Supongamos que aquí estableces los estilos en función de la información de la institución
    document.documentElement.style.setProperty(
        "--color-primary",
        institucion.colorinstitucion[0].color_secundario
    );
    document.documentElement.style.setProperty(
        "--color-secondary",
        institucion.colorinstitucion[0].color_primario
    );
    document.documentElement.style.setProperty(
        "--color-tertiary",
        institucion.colorinstitucion[0].color_terciario
    );   

    // Establece el ícono en el encabezado
    const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${
        institucion.institucion_logo
    }`;
    document.getElementsByTagName("head")[0].appendChild(link);
    document.title =
        institucion.institucion_iniciales +
        " | " + title;
}