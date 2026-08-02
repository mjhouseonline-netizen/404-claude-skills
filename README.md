# Claude Skills Library

A searchable Skill & Soul Studio library containing 417 reusable Claude skills.

The website lets visitors:

- search all 417 skills by name, task, description, or topic
- filter skills by category
- download one Claude-ready ZIP file at a time
- review the source folder before installing
- follow current installation and safety guidance

## Install a skill in Claude

1. Download one skill ZIP from the library.
2. Leave the downloaded file zipped.
3. In Claude, open **Customize > Skills**.
4. Click **+ > Create skill > Upload a skill**.
5. Select the ZIP file.
6. Enable the skill and test it with a task that matches its purpose.

## Repository structure

- `app/`: website interface and generated skill metadata
- `public/downloads/`: generated individual skill ZIP files
- `skills-pack-01` through `skills-pack-09`: source skill folders
- `scripts/build-skill-library.mjs`: rebuilds metadata and ZIP downloads from the source folders

## Run locally

```bash
npm install
npm run dev
```

## Rebuild the library files

After adding or editing a skill, run:

```bash
node scripts/build-skill-library.mjs .
```

Then confirm the reported count before committing the regenerated metadata and downloads.

## Validation

```bash
npm run lint
npm run build
```

## Important notice

This collection has been organised into Claude skill folders, but it has not received a complete security, licensing, or editorial review.

Skills may contain instructions or scripts. Review the source before installing, install only skills you trust, and never place passwords, API keys, private credentials, or sensitive personal information inside a skill.
