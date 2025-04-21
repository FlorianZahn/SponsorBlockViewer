import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  root: ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [tailwindcss(), vue()],
  server: {
    port: 5173,
    host: "localhost",
  },
  base: "/SponsorBlockViewer/",
});
