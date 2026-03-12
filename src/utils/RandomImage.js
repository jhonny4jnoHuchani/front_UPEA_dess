/* ----------------------------------------------------------------
    DESCRIPCIÓN : esta función retorna una imagen de manera 
        aleatoria siempre que se le pase un array de imágenes.
---------------------------------------------------------------- */
const RandomImage = (portada) => {
  if (!portada || portada.length === 0) return "";
  const api = import.meta.env.VITE_APP_API_URL_V1 || 'https://apiadministrador.upea.bo';
  const indiceAleatorio = Math.floor(Math.random() * portada.length);
  const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;

  // SIEMPRE usar proxy, sin importar el entorno
  return `${api}${imagenSeleccionada}`;
};

export default RandomImage;