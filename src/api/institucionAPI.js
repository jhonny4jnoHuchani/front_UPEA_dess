import axios from "axios";

// ✅ URL completa — sin proxy, funciona en desarrollo Y producción
const institucionAPIv2 = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || "https://apiadministrador.upea.bo/api/v2/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN || ""}`,
  },
});

/* DATOS OBTENIDOS DESDE LA API ================== */
export const getInstitucion = async () => {
  const INSTITUCION_ID = import.meta.env.VITE_APP_ID_INSTITUCION;
  const [basica, contenido] = await Promise.all([
    institucionAPIv2.get(`/institucionesPrincipal/${INSTITUCION_ID}`),
    institucionAPIv2.get(`/institucion/${INSTITUCION_ID}/contenido`),
  ]);
  const Descripcion = {
    ...(basica.data.Descripcion || basica.data),
    ...contenido.data,
    id_carrera: 1,
    slider: [],
  };
  return Descripcion;
};

export const getAreas = async () => {
  const res = await institucionAPIv2.get(`public/area/carreras`);
  return res.data;
};

export const getCarrera = async (data) => {
  const carreraId = data.queryKey[1];
  const [basica, contenido] = await Promise.all([
    institucionAPIv2.get(`/institucionesPrincipal/${carreraId}`),
    institucionAPIv2.get(`/institucion/${carreraId}/contenido`),
  ]);
  const Descripcion = {
    ...(basica.data.Descripcion || basica.data),
    ...contenido.data,
    id_carrera: carreraId,
    slider: [],
  };
  return Descripcion;
};

export const getLinksInstExtAllOne = async (data) => {
  const res2 = await institucionAPIv2.get(
    `/institucion/${data.queryKey[1]}/recursos`
  );
  let datosTransformados = [];
  if (res2.data && res2.data.linksExternoInterno) {
    datosTransformados = res2.data.linksExternoInterno.map((item) => ({
      ei_id: item.id_link,
      ei_imagen: item.imagen,
      ei_nombre: item.nombre,
      ei_link: item.url_link,
      ei_estado: item.estado,
      ei_tipo: item.tipo,
    }));
  }
  return datosTransformados;
};

export const getLinksInstExtAll = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/recursos`
  );
  return res.data.linksExternoInterno;
};

export const getPublicaciones = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/recursos`
  );
  const publicacionesreturn = res.data.upea_publicaciones.map((pub) => ({
    ...pub,
    publicaciones_fecha: pub.publicaciones_fecha.split("T")[0],
  }));
  return publicacionesreturn;
};

export const getGacetas = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/gacetaEventos`
  );
  const gacetasOrdenadas = res.data.upea_gaceta_universitaria.sort((a, b) => {
    return new Date(b.gaceta_fecha) - new Date(a.gaceta_fecha);
  });
  return gacetasOrdenadas;
};

export const getEventos = async () => {
  const res2 = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/gacetaEventos`
  );
  const eventosRefactor = res2.data.upea_evento.map((ev) => ({
    evento_descripcion: ev.evento_descripcion,
    evento_fecha: ev.evento_fecha,
    evento_hora: ev.evento_hora,
    evento_id: ev.evento_id,
    evento_imagen: ev.evento_imagen,
    evento_lugar: ev.evento_lugar,
    evento_titulo: ev.evento_titulo,
    evento_galeria: ev.galeria,
    evento_tipo: ev.tipo_evento,
  }));
  return eventosRefactor;
};

export const getVideos = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/contenido`
  );
  return res.data.upea_videos;
};