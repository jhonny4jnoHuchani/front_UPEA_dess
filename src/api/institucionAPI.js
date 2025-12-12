import axios from "axios";

const institucionAPI = axios.create({
    baseURL: "https://serviciopagina.upea.bo/api",
});


//https://serviciopagina.upea.bo/api/UpeaCarrera/7

const institucionAPIv2 = axios.create({
  baseURL: "/api/v2",
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
      id_carrera: 0,
      slider: [],
    };

    return Descripcion;
};

export const getAreas = async () => {
    const res = await institucionAPI.get(
        "/area/"
    );
    return res.data;
};

//https://serviciopagina.upea.bo/api/UpeaCarrera
export const getCarreras = async () => {
    const res = await institucionAPI.get(
        "/UpeaCarrera/"
    );
    return res.data;
};

export const getCarrera = async (data) => {
    const res = await institucionAPI.get(
        "/InstitucionUPEA/"+data.queryKey[1]
    );
    return res.data.Descripcion;
};

// aqui se usan todos los links internos y externos de todas las carreras
export const getLinksInstExtAllOne = async (data) => {
    const res = await institucionAPI.get(
        "/linksIntExtAll/" + data.queryKey[1]
    );
    return res.data;
};
/*
NO SE USAN ESTAS FUNCIONES POR EL MOMENTO
export const getConvocatorias = async () => {
    const res = await institucionAPI.get(
        "/convocatoriasAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};

export const getCursos = async () => {
    const res = await institucionAPI.get(
        "/cursosAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};*/

export const getLinksInstExtAll = async () => {
    const res = await institucionAPIv2.get(
        `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/recursos`
    );
    return res.data.linksExternoInterno;
};
/*NO SE USA ESTA FUNCION
export const getServicios = async () => {
    const res = await institucionAPI.get(
        "/ServicioAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};

export const getOfertasAcademicas = async () => {
    const res = await institucionAPI.get(
        "/OfertasAcademicasAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};
*/
export const getPublicaciones = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/recursos`
  );
  // ⭐ Transformar la fecha a una fecha normal YYYY-MM-DD
  const publicacionesreturn = res.data.upea_publicaciones.map((pub) => ({
    ...pub,
    publicaciones_fecha: pub.publicaciones_fecha.split("T")[0],
  }));
  
  return publicacionesreturn;
};

/*
YA NO SE USA ESTA FUNCION queda redudante con getPublicaciones
export const getPublicacion = async (id) => {
    const res = await institucionAPI.get(
        "/publicaciones/" + id
    );
    console.log(res.data.Descripcion);
    return res.data.Descripcion;
};
*/

export const getGacetas = async () => {
  const res = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/gacetaEventos`
  );

  // Ordenar por fecha más reciente primero
  const gacetasOrdenadas = res.data.upea_gaceta_universitaria.sort((a, b) => {
    return new Date(b.gaceta_fecha) - new Date(a.gaceta_fecha);
  });

  console.log("gacetas ordenadas (más reciente primero):", gacetasOrdenadas);
  return gacetasOrdenadas;
};

export const getEventos = async () => {
  const res2 = await institucionAPIv2.get(
    `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/gacetaEventos`
  );
  // ⭐ REFACORIZACIÓN LIMPIA SIN CAMPOS ANTIGUOS
  const eventosRefactor = res2.data.upea_evento.map((ev) => ({
    evento_descripcion: ev.evento_descripcion,
    /////////////////////////////////////////////////
    evento_fecha: ev.evento_fecha,
    // la respuesta esta retrazada un dia en el fronted view
    evento_hora: ev.evento_hora,
    evento_id: ev.evento_id,
    evento_imagen: ev.evento_imagen,
    evento_lugar: ev.evento_lugar,
    evento_titulo: ev.evento_titulo,
    // renombrados:
    evento_galeria: ev.galeria,
    evento_tipo: ev.tipo_evento,
  }));
  return eventosRefactor;
};

/*
QUEDA REDUNDANTE CON getEventos
export const getEvento = async (id) => {
    const res = await institucionAPI.get(
        "/evento/" + id
    );
    return res.data.Descripcion;
};
*/

export const getVideos = async () => {
    const res = await institucionAPIv2.get(
      `/institucion/${import.meta.env.VITE_APP_ID_INSTITUCION}/contenido`
    );
    console.log("videos obtenidos API2 :",res.data.upea_videos);

    return res.data.upea_videos;
};
