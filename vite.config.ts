import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { "process.env": process.env },
  // base: "/starWarsTest/",
  build: { outDir: path.resolve(__dirname, "dist") },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@variables": path.resolve(__dirname, "src/helpers/_variables.scss"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
      "@slices": path.resolve(__dirname, "src/components/redux/slices"),
      "@selectors": path.resolve(__dirname, "src/components/redux/selectors"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@header": path.resolve(__dirname, "src/components/header"),
      "@card": path.resolve(__dirname, "src/components/exchange-card"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
