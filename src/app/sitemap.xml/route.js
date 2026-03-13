import { NextResponse } from "next/server";

export async function GET() {

  const baseUrl = "https://nexcoreinstitute.org";

  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { path: "", priority: "1.0", changefreq: "weekly" },

    // main pages
    { path: "about", priority: "0.9", changefreq: "monthly" },
    { path: "courses", priority: "0.9", changefreq: "monthly" },
    { path: "placements", priority: "0.8", changefreq: "monthly" },
    { path: "gallery", priority: "0.8", changefreq: "monthly" },
    { path: "contact", priority: "0.8", changefreq: "monthly" },

    // programs
    { path: "bvoc-ai-machine-learning", priority: "0.9", changefreq: "monthly" },
    { path: "bvoc-graphic-animation-vfx", priority: "0.9", changefreq: "monthly" },

    // optional future SEO pages
    { path: "admissions", priority: "0.8", changefreq: "monthly" },
    { path: "faculty", priority: "0.7", changefreq: "monthly" }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls
  .map(
    ({ path, priority, changefreq }) => `
<url>
  <loc>${baseUrl}/${path}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`
  )
  .join("")}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}