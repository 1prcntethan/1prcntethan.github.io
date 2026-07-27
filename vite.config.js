import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  assetsInclude: ["**/*.onnx"],

  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});