import tailwindcss from "@tailwindcss/vite";

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        form: resolve(__dirname, "form.html"),
        result: resolve(__dirname, "result.html"),
      },
    },
  },
});
