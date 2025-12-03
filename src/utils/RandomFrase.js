/* ----------------------------------------------------------------
    DESCRIPCIÓN : la función retorna una frase de manera aleatoria.
---------------------------------------------------------------- */
const frases = [
    "La UPEA se compromete a brindar educación superior de calidad a todos los estudiantes, independientemente de su condición social, económica o cultural.",
    "La UPEA está comprometida con la lucha por la justicia social a través de la educación.",
    "La UPEA está comprometida con la construcción de un futuro mejor para Bolivia a través de la educación.",
    "La Universidad comprometida con la educación de calidad, la investigación científica y el desarrollo social.",
    "La UPEA es una universidad comprometida con el desarrollo sostenible, que trabaja para construir un futuro mejor para todos",
    "Es una universidad comprometida con el desarrollo sostenible, que trabaja para construir un futuro mejor para todos."
  ];  
  
const ObtenerFraseRandom = () => {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

export default ObtenerFraseRandom