---
name: skill-architect
description: "Guides the creation of new Claude skills by codifying a structured skill-building workflow. Use this skill when initiating new skill development, scaffolding skill content, structuring SKILL.md files, planning bundled resources, or validating skill packages before delivery. Trigger whenever the user wants to build, design, or package a new skill from scratch."
---

# Skill Architect

This skill streamlines the creation of new Claude skills by providing a guided, step-by-step workflow aligned with Claude's skill system at `/mnt/skills/`.

> **Note**: For iterating on and evaluating existing skills (running evals, benchmarking, description optimization), also read the `skill-creator` skill at `/mnt/skills/examples/skill-creator/SKILL.md` — it covers the full test-evaluate-improve loop in depth. Skill Architect focuses on the *design and scaffolding* phase; skill-creator covers *iteration and validation*.

---

## Core Workflow: Building a New Skill

### Step 1: Understand the Skill with Concrete Examples

Before writing anything, clarify the skill's purpose. Ask:

- **Functionality**: What specific tasks or problems will this skill solve?
- **Trigger contexts**: What user phrases or scenarios should activate it?
- **Input/Output**: What does it take in, and what does it produce?
- **Examples**: Walk through 2–3 concrete usage scenarios with the user.

If the user says "turn this into a skill," extract the workflow from the current conversation first — tools used, sequence of steps, corrections made, formats observed.

---

### Step 2: Plan Reusable Skill Contents

Identify which bundled resources the skill needs. Claude skills support three resource types:

| Folder | Purpose | When to use |
|---|---|---|
| `scripts/` | Executable Python/Bash for deterministic tasks | File transforms, data processing, repetitive ops |
| `references/` | Docs loaded into context as needed | API docs, domain guidelines, large reference material |
| `templates/` | Boilerplate files for output | Report templates, code stubs, asset files |

Only create folders that are actually needed — empty folders add noise.

---

### Step 3: Scaffold the Skill Directory

Create the skill directory in a writable location. In Claude.ai, use `/home/claude/<skill-name>/`:

```bash
mkdir -p /home/claude/<skill-name>/{scripts,references,templates}
touch /home/claude/<skill-name>/SKILL.md
```

Remove any folders that won't be used.

---

### Step 4: Write the SKILL.md

Every skill requires a `SKILL.md` with YAML frontmatter and a Markdown body.

#### Frontmatter (required)

```yaml
---
name: skill-name
description: "When to trigger and what it does. Be specific about contexts. Lean slightly pushy to avoid undertriggering — e.g. 'Use this whenever the user mentions X, Y, or Z, even if they don't explicitly ask for a skill.'"
---
```

#### Body structure

- **Keep under 500 lines** — if longer, split content into `references/` files and link them clearly.
- **Lead with the core workflow** — numbered steps, concrete actions.
- **Reference bundled resources explicitly** — tell Claude when and why to read each file.
- **Use progressive disclosure** — front-load the most common path; edge cases go in references.

#### Progressive disclosure levels

1. **Metadata** (name + description) — always in context; ~100 words
2. **SKILL.md body** — in context when skill triggers; keep under 500 lines
3. **Bundled resources** — loaded as needed; unlimited size

---

### Step 5: Implement Bundled Resources

**Scripts** (`scripts/`): Write Python or Bash. Make them self-contained with clear CLI interfaces. Document usage in SKILL.md.

**References** (`references/`): Plain Markdown. For files over 300 lines, add a table of contents at the top. Tell Claude in SKILL.md exactly when to read each reference file.

**Templates** (`templates/`): Place boilerplate files here. Reference them in SKILL.md with copy instructions.

---

### Step 6: Validate Before Packaging

Do a quick self-check before packaging:

- [ ] `SKILL.md` has valid YAML frontmatter (`name` and `description` present)
- [ ] Description clearly states when to trigger AND what the skill does
- [ ] No placeholder or example content left in
- [ ] Unused resource folders removed
- [ ] SKILL.md body is under 500 lines (or references are used to offload content)
- [ ] Bundled resources are referenced explicitly in SKILL.md

---

### Step 7: Package and Deliver

Package the skill as a `.skill` file (a ZIP archive) from the skill folder:

```bash
cd /home/claude
zip -r <skill-name>.skill <skill-name>/
cp <skill-name>.skill /mnt/user-data/outputs/
```

Then present the file to the user with `present_files`.

---

## Skill Directory Layout Reference

```
skill-name/
├── SKILL.md              ← Required. YAML frontmatter + instructions.
├── scripts/              ← Optional. Executable code.
│   └── process.py
├── references/           ← Optional. Docs loaded on demand.
│   └── api_reference.md
└── templates/            ← Optional. Output boilerplate.
    └── report_template.md
```

---

## Where Skills Live in Claude

| Location | Purpose |
|---|---|
| `/mnt/skills/public/` | Official built-in skills |
| `/mnt/skills/examples/` | Example/reference skills (incl. `skill-creator`) |
| `/mnt/skills/user/` | User-installed custom skills |

Skills are read-only at `/mnt/skills/`. Always work in `/home/claude/` and copy outputs to `/mnt/user-data/outputs/` for delivery.

---

## Quick Reference: Good vs. Poor Descriptions

**Poor** (too vague, won't trigger reliably):
> "Helps with document tasks."

**Better** (specific triggers + action):
> "Creates formatted Word documents (.docx) from structured content. Use this whenever the user asks for a Word doc, report, memo, letter, or any formal document they want to download — even if they don't say 'Word' explicitly."
