import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/web-to-lead": {
        target: "https://webto.salesforce.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/web-to-lead/,
            "/servlet/servlet.WebToLead?encoding=UTF-8"
          ),
      },
    },
  },
});
