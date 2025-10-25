import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import pages from "vite-plugin-pages";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
      plugins: [
            vue(),
            vueDevTools(),
            pages(),
            sitemap({
                  hostname: "http://localhost:3000",
                  outDir: "dist",
                  routes: [
                        "/",
                        "/about",
                        "/blog",
                        "/contacts",
                        "/privacy",
                        // dinamic pages
                        "/service/1",
                        "/service/2",
                        "/article/1",
                        "/article/2",
                  ],
                  changefreq: "daily",
                  priority: 1.0,
            }),
      ],
      resolve: {
            alias: {
                  "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
      },
});
