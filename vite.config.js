import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // Obtener URL base de la API desde .env o usar la por defecto
  const apiUrl = env.VITE_APP_API_URL || "http://200.105.169.11:1041/api/v2";

  // Extraer la parte base (sin /api/v2)
  const baseUrl = apiUrl.replace("/api/v2", "");

  return {
    plugins: [vue()],
    server: {
      proxy: {
        "/api/v2": {
          target: baseUrl, // ← Usa la URL del .env
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
