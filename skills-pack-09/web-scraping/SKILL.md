---
name: web-scraping
description: "Scrapes data from websites using Python. Use this skill whenever the user wants to extract data from a website, pull tables or lists from a page, monitor a page for changes, scrape multiple pages or paginated results, or save web content to CSV/JSON/Excel. Trigger even for casual requests like 'grab the prices from this site' or 'get me a list of all the products on this page'."
---

# Web Scraping

Produces ready-to-run Python scripts for extracting data from websites. Uses `requests` + `BeautifulSoup` for static pages, and `playwright` for JavaScript-rendered pages.

## Workflow

1. **Identify the target** — get the URL and what data needs to be extracted
2. **Check if the page is static or dynamic** — read `references/static-vs-dynamic.md` if unsure
3. **Choose the right script** — static pages use `scrape_static.py`, JS-rendered use `scrape_dynamic.py`, paginated use `scrape_paginated.py`, monitoring use `monitor.py`
4. **Identify the CSS selectors** — ask the user to inspect the page or use the fetch tool to examine the HTML
5. **Adapt and run the script** — fill in the URL, selectors, and output format
6. **Save the output** — default to CSV; JSON and Excel also supported

> ⚠️ Always check a site's `robots.txt` and terms of service before scraping. Add delays between requests (`--delay` flag) to avoid overloading servers. Never scrape login-protected content without permission.

---

## Operations

### 1. Scrape a single static page
Read `scripts/scrape_static.py` — extracts data from a page using CSS selectors, outputs to CSV/JSON.

Key details to confirm:
- URL to scrape
- What data to extract (table, list, specific elements)
- CSS selectors for each field (or ask Claude to inspect the page first)
- Output format and filename

### 2. Scrape a JS-rendered page
Read `scripts/scrape_dynamic.py` — uses Playwright to render JavaScript before extracting.

Use when: the page content loads via JavaScript (blank page in view-source, React/Vue/Angular apps).

Requires: `pip install playwright && playwright install chromium`

### 3. Scrape paginated results
Read `scripts/scrape_paginated.py` — follows next-page links or increments URL page numbers across multiple pages.

Key details:
- Pagination type: URL parameter (`?page=2`) or next-button link
- Max pages to scrape (always set a sensible limit)

### 4. Monitor a page for changes
Read `scripts/monitor.py` — checks a page on a schedule, alerts when content changes.

Use for: price drops, stock availability, news updates, job listings.

### 5. Scrape a table
Use `scrape_static.py` with `--mode table` — finds HTML `<table>` elements and exports directly to CSV or Excel. Fastest path for tabular data.

---

## Choosing selectors

When the user provides a URL, use the `web_fetch` tool to retrieve the page HTML, then identify the right CSS selectors. Look for:
- Repeating elements with consistent class names (e.g. `.product-card`, `.listing-item`)
- `<table>` elements for tabular data
- `<ul>/<li>` for lists

Read `references/selector-guide.md` for CSS selector patterns and tips.

---

## Output formats

| Format | Flag | Notes |
|--------|------|-------|
| CSV | `--output data.csv` | Default, works everywhere |
| JSON | `--output data.json` | Better for nested data |
| Excel | `--output data.xlsx` | Requires `openpyxl` |

---

## Dependencies

```bash
# Static scraping
pip install requests beautifulsoup4 pandas openpyxl lxml

# Dynamic (JS) scraping
pip install playwright
playwright install chromium
```
