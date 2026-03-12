/* ----------------------------------------------------------------
    DESCRIPCIÓN : la función configura los colores y el icon de 
        aplicación.
---------------------------------------------------------------- */
export default function ConfigColorIcon(institucion, title) {
    // ✅ VALIDACIÓN CLAVE - Si no hay datos, salir sin error
    if (!institucion || !institucion.colorinstitucion || !institucion.colorinstitucion[0]) {
        console.log("⏳ Datos de institución aún no disponibles, esperando...");
        return; // No hace nada, espera al próximo ciclo
    }

    // ✅ A partir de acá, es seguro acceder
    const colores = institucion.colorinstitucion[0];
    
    document.documentElement.style.setProperty(
        "--color-primary",
        colores.color_secundario
    );
    document.documentElement.style.setProperty(
        "--color-secondary", 
        colores.color_primario
    );
    document.documentElement.style.setProperty(
        "--color-tertiary",
        colores.color_terciario
    );
    
    // Definir la URL base desde variable de entorno
    const apiUrl = import.meta.env.VITE_APP_API_URL_V1 || 'https://apiadministrador.upea.bo';
    
    // Establece el ícono en el encabezado
    const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = `${apiUrl}${institucion.institucion_logo}`;
    document.getElementsByTagName("head")[0].appendChild(link);
    document.title =
        institucion.institucion_iniciales +
        " | " + title;
}