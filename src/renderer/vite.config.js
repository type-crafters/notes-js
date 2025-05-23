import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        host: "localhost",
        port: 5173
    },
    publicDir: path.join(import.meta.dirname, "public")
});