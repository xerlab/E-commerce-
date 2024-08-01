import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@logo": path.resolve(__dirname, "src/assets/Logo"),
      "@images": path.resolve(__dirname, "src/assets/Images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
    },
  },
});
