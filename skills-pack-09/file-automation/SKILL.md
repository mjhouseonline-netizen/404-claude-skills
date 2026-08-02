---
name: file-automation
description: "Automates file and folder tasks using Python scripts and PowerShell. Use this skill whenever the user wants to rename files in bulk, organise files into folders by type/date/name, convert file formats, find and delete duplicate files, or batch move/copy files. Trigger even if they just describe the problem casually — e.g. 'my downloads are a mess' or 'I need to sort these photos'."
---

# File Automation

Produces ready-to-run Python scripts (cross-platform) and PowerShell equivalents (Windows) for file and folder automation tasks. Always confirm the target folder and any destructive operations before running.

## Workflow

1. **Clarify the task** — identify which operation is needed (see operations below)
2. **Confirm key details** — target folder, naming patterns, filters, destructive ops
3. **Choose the right script** — read from `scripts/` and adapt to the user's specifics
4. **Preview before acting** — always run in dry-run mode first, show what will change
5. **Execute** — run the confirmed script via `bash_tool`
6. **Report** — summarise what was done (files moved, renamed, deleted, etc.)

> ⚠️ For any destructive operation (delete, overwrite), always show a dry-run preview and get explicit confirmation before proceeding.

---

## Operations

### 1. Organise into folders
Read `scripts/organise.py` — sorts files by extension, date modified, or name prefix into subfolders.

Key parameters to confirm with user:
- Target folder path
- Organise by: `type` (extension), `date` (year/month), or `prefix` (first N chars of filename)
- What to do with files that don't match any rule

### 2. Rename files in bulk
Read `scripts/rename.py` — supports pattern-based renaming: add prefix/suffix, sequential numbering, find-and-replace in filename, date stamping.

Key parameters:
- Target folder and file filter (e.g. `*.jpg`)
- Rename pattern (prefix, suffix, numbering format, replace what→with)
- Whether to recurse into subfolders

### 3. Convert file formats
Read `scripts/convert.py` — handles common conversions: images (PNG↔JPG↔WEBP), documents (CSV↔JSON↔Excel), text encoding fixes.

Key parameters:
- Source format and target format
- Input folder and output folder (default: same folder, new extension)
- Quality/compression settings for images

### 4. Find & delete duplicates
Read `scripts/dedupe.py` — finds duplicate files by content hash (MD5), groups them, keeps one copy, optionally deletes or moves the rest.

Key parameters:
- Folder to scan (recursive by default)
- Strategy: keep newest / keep oldest / keep shortest path
- Action: list only / move to trash folder / delete

### 5. Batch move or copy
Read `scripts/batch_move.py` — moves or copies files matching a filter from one or more source folders to a destination.

Key parameters:
- Source folder(s) and file filter (e.g. `*.pdf`, files older than N days)
- Destination folder
- Conflict resolution: skip / overwrite / rename with suffix

---

## PowerShell equivalents

For Windows users who prefer not to run Python, read `references/powershell.md` for equivalent one-liner and script versions of each operation above.

---

## Safety rules

- Never delete without a dry-run preview first
- Always report the count of files affected before and after
- If a script would overwrite existing files, warn explicitly
- Suggest running on a test subfolder first for large operations
