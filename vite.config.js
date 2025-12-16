import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const getBaseUrl = () => {

    if (env.VITE_APP_API_URL_V1) {
      return env.VITE_APP_API_URL_V1; 
    }
    const apiUrl =
      env.VITE_APP_API_URL || "https://serviciotest.upea.edu.bo/api/v2/";
    return apiUrl.replace(/\/api\/v2\/?$/, "");
  };

  const baseUrl = getBaseUrl();

  return {
    plugins: [vue()],
    server: {
      proxy: {
        "/api/v2": {
          target: baseUrl,
          changeOrigin: true,
          secure: false,
        },
        "/imagen-servicio": {
          target: baseUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/imagen-servicio/, ""),
        },
      },
    },
  };
});
