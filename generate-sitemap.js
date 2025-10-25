import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "http://localhost:5173";

// Routelarni qo‘lda (router/index.js dagidek) yozamiz
const routes = [
      "/",
      "/about",
      "/blog",
      "/contacts",
      "/privacy",
      // dinamic pages
      // -service
      "/service/1",
      "/service/2",
      "/service/3",
      "/service/4",
      "/service/5",
      "/service/6",
      "/service/7",
      "/service/8",
      "/service/9",
      "/service/10",
      "/service/11",
      "/service/12",
      "/service/13",
      "/service/14",
      "/service/15",
      "/service/16",
      "/service/17",
      "/service/18",
      "/service/19",
      "/service/20",
      "/service/21",
      // -article
      "/article/1",
      "/article/2",
      "/article/3",
      "/article/4",
      "/article/5",
      "/article/6",
      "/article/7",
      "/article/8",
      "/article/9",
      "/article/10",
      "/article/11",
      "/article/12",
];

// Sitemap yaratish
const sitemapStream = new SitemapStream({ hostname });

routes.forEach((route) => {
      sitemapStream.write({
            url: route,
            changefreq: "daily",
            priority: 1.0,
      });
});

sitemapStream.end();

// XML faylga yozish
const distPath = path.resolve(__dirname, "dist");
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);

streamToPromise(sitemapStream).then((data) => {
      fs.writeFileSync(path.join(distPath, "sitemap.xml"), data.toString());
      console.log("✅ Sitemap muvaffaqiyatli yaratildi: dist/sitemap.xml");
});
