import { join } from "path";
import * as fs from "node:fs";
import {remark} from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "contents")

export async function getMarkdown(name: string) {
  const rawMarkdown = getRawMarkdown(name);
  return markdownToHtml(rawMarkdown);
}

export function getRawMarkdown(name: string) {
  const fullPath = join(postsDirectory, `${name}.md`);
  return fs.readFileSync(fullPath, "utf-8");
}

export async function markdownToHtml(markdown: string) {
  return (await remark().use(html).process(markdown)).toString();
}