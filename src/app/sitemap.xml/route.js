import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://nexcoreinstitute.org";
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = [
    { path: "", priority: "1.0" },
    { path: "whychooseus", priority: "0.9" },
    { path: "learn-grow", priority: "0.9" },
    { path: "opportunities", priority: "0.9" },
    { path: "infrastructure", priority: "0.8" },
    { path: "eligibility-criteria", priority: "0.8" },
    { path: "fees-policy", priority: "0.7" },
    { path: "internship-policy", priority: "0.7" },
    { path: "placement-policy", priority: "0.7" },
    { path: "scholarship-policy", priority: "0.6" },
    { path: "selection-policy", priority: "0.6" },
    { path: "contact", priority: "0.6" },
  ];

  const programs = ["ai-ml", "data-science", "software-development"];
  const programUrls = programs.map((slug) => ({
    path: `bvoc/${slug}`,
    priority: "0.8",
  }));

  const urls = [...staticUrls, ...programUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ path, priority }) => {
    const loc = path ? `${baseUrl}/${path}` : baseUrl;
    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
