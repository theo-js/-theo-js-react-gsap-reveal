import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactGsapReveal",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "gsap"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          gsap: "gsap",
        },
      },
    },
  },
});
