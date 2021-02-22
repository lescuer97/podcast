import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";
import { Items } from "./types";
const postsDirectory: string = path.join(process.cwd(), "content");

export function getFileName(): string[] {
  return fs.readdirSync(postsDirectory);
}

// return only one post
export function getPostfromFileName(
  fileName: string,
  fields: string[] = []
): Items {
  const realSlug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

// fields is the wanted fields inside the markdown files
export function getAllPosts(fields: string[] = []): Items[] {
  // reads all file names in directory
  const slugs = getFileName();

  // loops the names to grab all the posts
  const posts: Items[] = slugs
    .map((slug) => {
      return getPostfromFileName(slug, fields);
    })
    .sort((post1, post2) => (post1.id < post2.id ? 1 : -1));
  return posts;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
