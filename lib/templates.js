import fs from "fs";
import path from "path";

export const templatesDirectory = path.join(process.cwd(), "templates");
export const templatesFilePaths = fs
  .readdirSync(templatesDirectory)
  .filter((path) => /\.html$/.test(path));

export function getTemplate(name) {
  const fullPath = path.join(templatesDirectory, `${name}.html`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
}
