import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "_site");
const downloads = path.join(output, "downloads");

const categoryRules = [
  ["AI & Automation", /(^ai-|agent|automation|llm|prompt|mcp|machine-learning|chatbot|rag|gemini|claude)/i],
  ["Marketing & Sales", /(ads|advert|affiliate|campaign|marketing|sales|seo|content|social|email|brand|copywriting|landing|conversion|growth)/i],
  ["Business & Productivity", /(business|planning|productivity|project|notion|airtable|asana|workflow|operations|strategy|customer|crm|meeting|calendar)/i],
  ["Creative & Media", /(image|design|creative|art|video|audio|music|writing|story|presentation|thumbnail|photography)/i],
  ["Data & Analytics", /(data|analytics|sql|database|reporting|statistics|warehouse|spark|kafka|airflow|search)/i],
  ["Security", /(security|attack|abuse|auth|vulnerability|malware|reverse|penetration|threat)/i],
  ["Cloud & Infrastructure", /(azure|aws|cloud|docker|kubernetes|terraform|ansible|devops|deployment|infrastructure|monitor|observability)/i],
  ["Development", /(api|angular|react|typescript|javascript|python|java|dotnet|rust|android|ios|code|developer|architecture|testing|github|web)/i],
  ["Finance", /(finance|financial|invest|account|bookkeep|revenue|budget|payment|pricing|tax)/i],
];

function titleFromSlug(slug) {
  const acronyms = new Set(["ai", "api", "aws", "crm", "css", "csv", "gpt", "html", "ios", "llm", "mcp", "seo", "sql", "ui", "ux"]);
  return slug.split("-").map((part) => acronyms.has(part.toLowerCase()) ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function cleanText(value) {
  return value.replace(/Ã¢â‚¬â€|â€”/g, "-").replace(/Ã¢â‚¬â„¢|â€™/g, "'").replace(/Ã¢â‚¬Å“|Ã¢â‚¬Â|â€œ|â€/g, '"').replace(/Ã¢â€°Â¥/g, ">=").replace(/\s+/g, " ").trim();
}

function descriptionFrom(markdown, fallback) {
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (frontmatter) {
    const lines = frontmatter[1].split("\n");
    const start = lines.findIndex((line) => /^description:\s*/.test(line));
    if (start >= 0) {
      const parts = [lines[start].replace(/^description:\s*>?\s*/, "").trim()];
      for (let index = start + 1; index < lines.length; index += 1) {
        if (/^[a-zA-Z_][\w-]*:\s*/.test(lines[index])) break;
        if (lines[index].trim()) parts.push(lines[index].trim());
      }
      const description = cleanText(parts.join(" ")).replace(/^['"]|['"]$/g, "");
      if (description.length > 20) return description;
    }
  }
  const body = markdown.replace(/^---[\s\S]*?---/, "");
  const paragraph = body.split(/\n\s*\n/).map((item) => cleanText(item.replace(/^#+\s+.*$/gm, "").replace(/[`*_>#|]/g, ""))).find((item) => item.length > 30);
  return paragraph || fallback;
}

await rm(output, { recursive: true, force: true });
await mkdir(downloads, { recursive: true });
await cp(path.join(root, "docs"), output, { recursive: true });

const packs = (await readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory() && entry.name.startsWith("skills-pack-")).sort((a, b) => a.name.localeCompare(b.name));
const skills = [];

for (const pack of packs) {
  const packPath = path.join(root, pack.name);
  const folders = (await readdir(packPath, { withFileTypes: true })).filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
  for (const folder of folders) {
    let markdown;
    try { markdown = await readFile(path.join(packPath, folder.name, "SKILL.md"), "utf8"); } catch { continue; }
    const title = titleFromSlug(folder.name);
    const description = descriptionFrom(markdown, `Reusable Claude skill for ${title.toLowerCase()}.`);
    execFileSync("zip", ["-q", "-r", path.join(downloads, `${folder.name}.zip`), folder.name], { cwd: packPath });
    skills.push({
      id: folder.name,
      title,
      description: description.length > 240 ? `${description.slice(0, 237).trim()}...` : description,
      category: categoryRules.find(([, pattern]) => pattern.test(folder.name))?.[0] || "More Skills",
      pack: pack.name.replace("skills-pack-", "Pack "),
      download: `downloads/${folder.name}.zip`,
      source: `https://github.com/mjhouseonline-netizen/404-claude-skills/tree/main/${pack.name}/${folder.name}`,
    });
  }
}

skills.sort((a, b) => a.title.localeCompare(b.title));
await writeFile(path.join(output, "skills-data.json"), JSON.stringify(skills));
await writeFile(path.join(output, ".nojekyll"), "");
console.log(`Static library built with ${skills.length} downloadable skills.`);
