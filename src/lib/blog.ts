import fs from "fs";
import path from "path";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tags: string[];
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Extract metadata block using regex
      const metadataMatch = fileContents.match(
        /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/
      );

      let metadata: Partial<BlogPost> = {};
      if (metadataMatch) {
        try {
          const objText = metadataMatch[1];
          
          const title = objText.match(/title:\s*["']([^"']+)["']/)?.[1] || "";
          const date = objText.match(/date:\s*["']([^"']+)["']/)?.[1] || "";
          const description = objText.match(/description:\s*["']([^"']+)["']/)?.[1] || "";
          const coverImage = objText.match(/coverImage:\s*["']([^"']+)["']/)?.[1] || "";
          
          const tagsMatch = objText.match(/tags:\s*\[([\s\S]*?)\]/);
          const tags = tagsMatch
            ? tagsMatch[1]
                .split(",")
                .map((t) => t.replace(/["'\s]/g, ""))
                .filter(Boolean)
            : [];

          metadata = { title, date, description, coverImage, tags };
        } catch (e) {
          console.error("Failed to parse metadata for", fileName, e);
        }
      }

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || "",
        description: metadata.description || "",
        coverImage: metadata.coverImage || "",
        tags: metadata.tags || [],
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
