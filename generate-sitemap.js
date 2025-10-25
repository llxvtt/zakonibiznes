import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "http://localhost:5173";

const routes = ["/", "/about", "/blog", "/contacts", "/privacy", "/service/1", "/service/2", "/article/1", "/article/2"];

const sitemapStream = new SitemapStream({ hostname });

routes.forEach((route) => {
      sitemapStream.write({
            url: route,
            changefreq: "daily",
            priority: 1.0,
      });
});

sitemapStream.end();

const distPath = path.resolve(__dirname, "dist");
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);

streamToPromise(sitemapStream).then((data) => {
      fs.writeFileSync(path.join(distPath, "sitemap.xml"), data.toString());
      console.log("✅ Sitemap muvaffaqiyatli yaratildi: dist/sitemap.xml");
});
