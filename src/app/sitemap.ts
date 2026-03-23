import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// Function to synchronously read all markdown files in a directory
function getMarkdownFiles(dir: string, fileList: string[] = []): string[] {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        getMarkdownFiles(filePath, fileList);
      } else if (filePath.endsWith(".md")) {
        fileList.push(filePath);
      }
    }
  } catch (error) {
    console.warn("Could not read directory for sitemap:", error);
  }
  return fileList;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leadclash.com";

  // Static URLs
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamically generated blog URLs from markdown files
  const blogPostsDir = path.join(process.cwd(), "blog-posts");
  const markdownFiles = getMarkdownFiles(blogPostsDir);

  const blogUrls: MetadataRoute.Sitemap = markdownFiles.map((filePath) => {
    const fileName = path.basename(filePath, ".md");
    return {
      url: `${baseUrl}/blog/${fileName}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticUrls, ...blogUrls];
}
