import {join} from "path";
import fs from "node:fs";

const entryDirectory = join(process.cwd(), "contents")

interface EntryScheme {
  name: string;
  duration: string;
  at: string;
}

export function getEntries(name: string) {
  return JSON.parse(getRawEntries(name)) as EntryScheme[];
}

export function getRawEntries(name: string) {
  const fullPath = join(entryDirectory, `${name}.json`);
  return fs.readFileSync(fullPath, "utf-8");
}