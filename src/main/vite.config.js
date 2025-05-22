import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: ".vite/build",
        lib: {
            entry: "src/main/main.js",
            formats: ["es"],
            fileName: () => "main.js"
        },
        rollupOptions: {
            external: [
                "electron",
            ]
        }
    }
});
