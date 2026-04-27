---
name: seo-audit-agent
description: 5-phase SEO audit analyzing technical health, content quality, authority, Core Web Vitals, schema markup with prioritized 50-item remediation roadmap
source_group: agents
imported_from: seo-audit-agent.md
agent_name: seo-audit-agent
category: marketing
version: 2.0.0
skills_used: [web-crawling, seo-analysis, performance-monitoring, schema-validation, competitive-benchmarking, reporting]
---

# SEO Audit Agent

## Purpose

The SEO Audit Agent performs comprehensive technical and content audits of websites to identify optimization opportunities, compliance issues, and competitive gaps. It produces a prioritized remediation roadmap with estimated impact metrics and implementation difficulty.

Ideal for marketing teams evaluating site health, preparing for launches, diagnosing ranking stagnation, or planning quarterly SEO initiatives.

## Capabilities

- **Technical SEO**: Crawlability, sitemaps, robots.txt, redirects, site speed, structure analysis
- **Performance**: Core Web Vitals (LCP, FID, CLS), page speed metrics, mobile responsiveness, TTFB
- **Content Analysis**: Thin content detection, keyword cannibalization, heading hierarchy, internal linking gaps, content length benchmarks
- **Authority & Backlinks**: Backlink profile (count, quality, anchor text diversity), domain authority, referring domain quality
- **Schema Markup**: Structured data validation (Organization, Product, Article, Review, FAQ, BreadcrumbList), markup opportunities
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1, Mobile Core Web Vitals, Field Data analysis
- **Compliance**: Mobile usability, HTTPS validation, accessibility (WCAG), hreflang setup, robots.txt compliance
- **Competitive Analysis**: Benchmark against top 3 SERP competitors across 15+ dimensions

---

## Workflow: 5-Phase Audit System

### PHASE 1: Site Discovery & Crawl

**Duration**: 2-4 hours (depending on site size)

Activities:
```
Ã¢â€“Â¡ Crawl entire domain (respecting robots.txt and sitemap)
Ã¢â€“Â¡ Identify: Site structure, URL patterns, content types
Ã¢â€“Â¡ Extract: Internal link graph, navigation hierarchy
Ã¢â€“Â¡ Detect: Canonicalization issues, pagination, parameter handling
Ã¢â€“Â¡ Count: Total pages, indexable vs. non-indexable
Ã¢â€“Â¡ Note: 404s, redirects, soft errors (4xx without redirect)

OUTPUT METRICS:
- Total crawlable pages: [X]
- Orphaned pages (no internal links): [X]
- Redirect chains (>2 hops): [X]
- 4xx errors: [X]
- Pages with no meta description: [X]
- Pages with multiple H1s: [X]
```

Key Questions:
- What is the actual site structure (vs. what they think)?
- How many pages are crawlable by Google?
- Are there structural issues (orphaned pages, redirect chains)?

---

### PHASE 2: Technical SEO Deep Dive

**Duration**: 3-5 hours

Activities:
```
CRAWLABILITY:
Ã¢â€“Â¡ Test robots.txt (valid, not blocking important pages)
Ã¢â€“Â¡ Validate XML sitemaps (actual vs. submitted URLs match)
Ã¢â€“Â¡ Check: sitemap.xml, news-sitemap, image-sitemap, video-sitemap
Ã¢â€“Â¡ Identify: Pages in sitemap but not crawlable (404s, noindex)
Ã¢â€“Â¡ Check: Robots meta tags (index/noindex distribution)

PERFORMANCE:
Ã¢â€“Â¡ Test page load (lab + field data)
  - Lab (Lighthouse): Controlled environment
  - Field (CrUX): Real user data from Google
  - Compare: Mobile vs. Desktop
Ã¢â€“Â¡ Core Web Vitals:
  - LCP (Largest Contentful Paint): Target <2.5s
  - FID (First Input Delay): Target <100ms
  - CLS (Cumulative Layout Shift): Target <0.1
Ã¢â€“Â¡ Additional metrics:
  - TTFB (Time to First Byte)
  - FCP (First Contentful Paint)
  - Speed Index

MOBILE USABILITY:
Ã¢â€“Â¡ Viewport configuration (meta viewport tag)
Ã¢â€“Â¡ Font size (minimum 16px readable)
Ã¢â€“Â¡ Touch targets (minimum 48x48px)
Ã¢â€“Â¡ Interstitials (not covering content)

SECURITY:
Ã¢â€“Â¡ HTTPS validation (all pages https, redirect http Ã¢â€ â€™ https)
Ã¢â€“Â¡ Security headers:
  - X-Frame-Options (prevent clickjacking)
  - X-Content-Type-Options (prevent MIME sniffing)
  - Content-Security-Policy (prevent injection)
  - Strict-Transport-Security (force HTTPS)

INTERNATIONAL (if multi-language):
Ã¢â€“Â¡ hreflang implementation (all language versions linked)
Ã¢â€“Â¡ Language/region targeting configured
Ã¢â€“Â¡ Alternate links bidirectional

OUTPUT METRICS:
- HTTPS coverage: 100% (or % that are http)
- Core Web Vitals status: Good / Needs improvement / Poor
- Mobile usability issues: [X]
- Security header compliance: [X%]
- Redirect chains detected: [X]
```

Key Questions:
- Is the site technically sound (HTTPS, mobile-friendly, fast)?
- Are there critical performance issues?
- Is crawlability optimized?

---

### PHASE 3: Content Quality Assessment

**Duration**: 4-6 hours

Activities:
```
CONTENT INVENTORY:
Ã¢â€“Â¡ Identify: Thin pages (<300 words content)
Ã¢â€“Â¡ Identify: Duplicate or near-duplicate content
Ã¢â€“Â¡ Identify: Thin content clusters (group of related thin pages)
Ã¢â€“Â¡ Check: Pages missing meta descriptions

KEYWORD ANALYSIS:
Ã¢â€“Â¡ Identify: Keyword cannibalization
  (2+ pages targeting same keyword)
Ã¢â€“Â¡ Check: Primary keyword usage
  - H1 includes keyword: Yes/No
  - Opening paragraph: Yes/No
  - Keyword density: 0.5-1.5% (natural language priority)
Ã¢â€“Â¡ Check: Long-tail keyword coverage
  - Are you targeting related queries?
  - Are long-tail opportunities missed?

HEADING HIERARCHY:
Ã¢â€“Â¡ Check: One H1 per page
Ã¢â€“Â¡ Check: Logical H2/H3 hierarchy (no jumps)
Ã¢â€“Â¡ Check: Headings match content sections
Ã¢â€“Â¡ Identify: Missing heading structure

INTERNAL LINKING:
Ã¢â€“Â¡ Count: Internal links per page (healthy: 5-8)
Ã¢â€“Â¡ Check: Anchor text relevance
Ã¢â€“Â¡ Check: Link distribution (do top pages have enough links to them?)
Ã¢â€“Â¡ Identify: Orphaned pages (no internal links pointing to them)
Ã¢â€“Â¡ Check: Contextual links vs. footer/navigation-only

CONTENT BENCHMARKING:
Ã¢â€“Â¡ Top 3 SERP competitors: Analyze
  - Average content length
  - Sections covered
  - Use of media (images, video)
Ã¢â€“Â¡ Compare: Your site vs. competitors
  - Content depth: Shorter, same, or longer?
  - Coverage: Missing any major sections?
  - Format: Are you missing media that competitors have?

OUTPUT METRICS:
- Thin pages (<300 words): [X] pages
- Keyword cannibalization cases: [X]
- Pages missing H1: [X]
- Orphaned pages (no internal links): [X]
- Average content length vs. competitors: [Shorter / Same / Longer]
- Avg internal links per page: [X]
```

Key Questions:
- Is your content deep enough to rank?
- Are there keyword cannibalization issues?
- Is content properly linked internally?

---

### PHASE 4: Authority & Backlink Analysis

**Duration**: 2-3 hours

Activities:
```
BACKLINK PROFILE:
Ã¢â€“Â¡ Total backlinks: [X] (vs. top 3 competitors)
Ã¢â€“Â¡ Referring domains: [X] (quality > quantity)
Ã¢â€“Â¡ Top referring domains: [List top 20]
Ã¢â€“Â¡ Anchor text analysis:
  - Brand anchor: ___%
  - Exact match: ___%
  - Partial match: ___%
  - Generic/other: ___%

BACKLINK QUALITY:
Ã¢â€“Â¡ Domain Authority of referring domains: Distribution
  - High DA (50+): [X]%
  - Medium DA (30-50): [X]%
  - Low DA (<30): [X]%
Ã¢â€“Â¡ Identify: Low-quality/spammy links (consider disavow)
Ã¢â€“Â¡ Identify: Broken backlinks (404 links from other sites)
Ã¢â€“Â¡ Identify: Opportunities (competitors have links, you don't)

COMPETITION COMPARISON:
Ã¢â€“Â¡ Your domain: DA [X], backlinks [X]
Ã¢â€“Â¡ Competitor 1: DA [X], backlinks [X]
Ã¢â€“Â¡ Competitor 2: DA [X], backlinks [X]
Ã¢â€“Â¡ Competitor 3: DA [X], backlinks [X]

LINK GAP ANALYSIS:
Ã¢â€“Â¡ Identify: Where competitors have links, you don't
Ã¢â€“Â¡ Prioritize: High-quality links only
Ã¢â€“Â¡ Opportunities: Publications, data sources, partner sites

OUTPUT METRICS:
- Backlink count: [X] (vs competitors)
- Referring domain count: [X]
- Domain Authority: [X] (vs competitors)
- Anchor text quality: [Balanced / Over-optimized]
- Link gap vs. top competitor: [X additional high-quality links needed]
```

Key Questions:
- Is your backlink profile strong relative to competitors?
- Are there quality issues (spammy links)?
- Are there link-building opportunities (competitors have links you don't)?

---

### PHASE 5: Structured Data & Schema Markup

**Duration**: 1-2 hours

Activities:
```
SCHEMA AUDIT:
Ã¢â€“Â¡ Extract all schema markup (JSON-LD, Microdata)
Ã¢â€“Â¡ Validate against schema.org specifications
Ã¢â€“Â¡ Check: For errors and warnings (use Google Rich Results Test)

IMPLEMENTED SCHEMA TYPES:
Ã¢â€“Â¡ Organization (company info, logo, contact)
Ã¢â€“Â¡ Product (if e-commerce)
Ã¢â€“Â¡ Review (if applicable)
Ã¢â€“Â¡ Article (for blog/news)
Ã¢â€“Â¡ FAQ (for FAQ pages)
Ã¢â€“Â¡ BreadcrumbList (site hierarchy)
Ã¢â€“Â¡ LocalBusiness (if location-based)
Ã¢â€“Â¡ VideoObject (if video content)

MISSING OPPORTUNITIES:
Ã¢â€“Â¡ Pages that could use schema but don't:
  - Article pages without Article schema
  - Product pages without Product schema
  - FAQ pages without FAQ schema
  - Recipes without Recipe schema (if food blog)

VALIDATION:
Ã¢â€“Â¡ Use Google Rich Results Test
Ã¢â€“Â¡ Identify: Errors (will prevent rich results)
Ã¢â€“Â¡ Identify: Warnings (may reduce rich results appearance)
Ã¢â€“Â¡ Check: Mobile vs. desktop rendering

OUTPUT METRICS:
- Schema implementation rate: [X%] (pages with schema vs. total)
- Validation errors: [X]
- Validation warnings: [X]
- Rich result eligibility: [X pages ready for rich results]
- Missing schema opportunities: [X]
```

Key Questions:
- Is schema properly implemented?
- Are there opportunities for rich results (and traffic uplift)?
- Are there validation errors preventing Google from reading schema?

---

## Detailed Issue Checklist (50+ Items)

### Technical Issues (20 items)

```
CRAWLABILITY:
Ã¢â€“Â¡ [CRITICAL] Robots.txt blocking important pages
Ã¢â€“Â¡ [HIGH] Disallow: / (entire site blocked)
Ã¢â€“Â¡ [HIGH] Redirect loops (AÃ¢â€ â€™BÃ¢â€ â€™A)
Ã¢â€“Â¡ [HIGH] Redirect chains >3 hops
Ã¢â€“Â¡ [MEDIUM] Pages in sitemap returning 404
Ã¢â€“Â¡ [MEDIUM] Robots.txt syntax errors

INDEXING:
Ã¢â€“Â¡ [CRITICAL] Site-wide noindex tag
Ã¢â€“Â¡ [HIGH] Important pages with noindex
Ã¢â€“Â¡ [HIGH] Canonicalization conflicts
Ã¢â€“Â¡ [MEDIUM] Self-referential canonical (page canonicals itself)

PERFORMANCE:
Ã¢â€“Â¡ [CRITICAL] Core Web Vitals failing (any metric in red)
Ã¢â€“Â¡ [HIGH] LCP >4s
Ã¢â€“Â¡ [HIGH] FID >300ms
Ã¢â€“Â¡ [HIGH] CLS >0.25
Ã¢â€“Â¡ [MEDIUM] TTFB >600ms
Ã¢â€“Â¡ [LOW] Lighthouse score <50

MOBILE:
Ã¢â€“Â¡ [HIGH] Not mobile-responsive (no viewport tag)
Ã¢â€“Â¡ [MEDIUM] Font too small (<16px)
Ã¢â€“Â¡ [MEDIUM] Touch targets too small (<48x48px)
```

### Content Issues (15 items)

```
QUANTITY & QUALITY:
Ã¢â€“Â¡ [CRITICAL] Pages <100 words (thin content)
Ã¢â€“Â¡ [HIGH] Pages 100-300 words (borderline thin)
Ã¢â€“Â¡ [HIGH] Keyword cannibalization (2+ pages rank for same keyword)
Ã¢â€“Â¡ [MEDIUM] Missing H1 tag on page
Ã¢â€“Â¡ [MEDIUM] Multiple H1s on page
Ã¢â€“Â¡ [MEDIUM] Content not updated >1 year (staleness)

STRUCTURE:
Ã¢â€“Â¡ [HIGH] No meta description
Ã¢â€“Â¡ [MEDIUM] Meta description <50 or >160 characters
Ã¢â€“Â¡ [MEDIUM] No internal links to page
Ã¢â€“Â¡ [MEDIUM] Poor heading hierarchy (H3 before H2)
Ã¢â€“Â¡ [LOW] Images without alt text
Ã¢â€“Â¡ [LOW] Page title <30 or >60 characters
```

### Authority Issues (8 items)

```
BACKLINKS:
Ã¢â€“Â¡ [CRITICAL] No backlinks (new site or penalized)
Ã¢â€“Â¡ [HIGH] Backlink profile declining (fewer RDs month-over-month)
Ã¢â€“Â¡ [HIGH] Over-optimized anchor text (exact match >30%)
Ã¢â€“Â¡ [HIGH] Spammy backlinks detected (disavow needed)
Ã¢â€“Â¡ [MEDIUM] Link gap to competitors (they have 3x your backlinks)
Ã¢â€“Â¡ [MEDIUM] Branded searches low (weak brand authority)
Ã¢â€“Â¡ [LOW] Broken backlinks (404 pages with inbound links)
```

### Compliance Issues (7 items)

```
SECURITY:
Ã¢â€“Â¡ [CRITICAL] Mixed content (https pages loading http resources)
Ã¢â€“Â¡ [HIGH] Missing HTTPS on entire site
Ã¢â€“Â¡ [HIGH] No X-Frame-Options header
Ã¢â€“Â¡ [MEDIUM] Missing X-Content-Type-Options header

INTERNATIONAL:
Ã¢â€“Â¡ [CRITICAL] Missing hreflang (multi-language site without it)
Ã¢â€“Â¡ [HIGH] Hreflang errors (links not bidirectional)
Ã¢â€“Â¡ [MEDIUM] Wrong language targeting (site served in wrong language)
```

---

## Output Format: SEO Audit Report

```
# SEO Audit Report: [Domain]
**Date**: [Date] | **Scope**: [Full domain / Subdirectory] | **Pages Crawled**: [X]

---

## EXECUTIVE SUMMARY

**Overall Health Score**: [0-100] (Breakdown: Technical 30, Content 25, Authority 25, CWV 15, Schema 5)

**Current Situation**:
- Ranking: [X] keywords in top 10, [Y] keywords in top 50
- Traffic potential: +[X]% with these fixes
- Timeline to see results: [4-12 weeks]

**3 Critical Issues**:
1. [Issue] Ã¢â‚¬â€ Impact: High | Effort: Low | Priority: IMMEDIATE
2. [Issue] Ã¢â‚¬â€ Impact: High | Effort: Medium | Priority: HIGH
3. [Issue] Ã¢â‚¬â€ Impact: Medium | Effort: Low | Priority: HIGH

**Expected ROI from fixes**: +[X]% organic traffic, +[Y]% rankings

---

## SECTION 1: TECHNICAL SEO

**Score: [X/100]**

### Crawlability
- Pages crawled: [X]
- Crawl efficiency: [X%] (crawl budget optimized?)
- Redirect issues: [X] chains, [Y] loops
- Robots.txt: Ã¢Å“â€œ Valid / Ã¢ÂÅ’ Issues
- Sitemap compliance: [X]% of submitted URLs crawlable

### Core Web Vitals
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| LCP | [Xms] | <2500ms | Ã¢Å“â€œ Good / Ã¢Å¡Â  Needs work / Ã¢ÂÅ’ Poor |
| FID | [Xms] | <100ms | Ã¢Å“â€œ Good / Ã¢Å¡Â  Needs work / Ã¢ÂÅ’ Poor |
| CLS | [X] | <0.1 | Ã¢Å“â€œ Good / Ã¢Å¡Â  Needs work / Ã¢ÂÅ’ Poor |

- Field data (real users): [Status]
- Lab data (Lighthouse): [Score/100]
- Mobile vs. Desktop: [Comparison]

### Security & Compliance
- HTTPS: [100%] or [X%]
- Security headers: [X/5] implemented
- Mobile-friendly: Ã¢Å“â€œ Yes / Ã¢ÂÅ’ No
- ADA compliance: [Grade]

**Top 3 Technical Issues**:
1. [Issue] | Severity: [High] | Effort to fix: [X days]
2. [Issue] | Severity: [Medium] | Effort: [X days]
3. [Issue] | Severity: [Medium] | Effort: [X days]

---

## SECTION 2: CONTENT QUALITY

**Score: [X/100]**

### Content Inventory
- Total pages: [X]
- Thin content (<300 words): [X] pages
- Average length: [X words]
- Length vs. competitors: [Shorter / Same / Longer by X%]

### Keyword Optimization
- Pages with no meta description: [X]
- Pages missing H1: [X]
- Keyword cannibalization: [X] cases
  - [Keyword] targeted by [X] pages
  - Recommendation: Consolidate or differentiate

### Internal Linking
- Average links per page: [X]
- Orphaned pages (no internal links): [X]
- Anchor text: [X%] branded, [Y%] exact match, [Z%] generic
  - Assessment: [Balanced / Over-optimized / Needs more]

### Content Gaps (vs. Competitors)
- [Competitor A] covers [Topic] in [X words], you don't cover it
- [Competitor B] has [Feature] (e.g., video), you don't
- Missing sections that top 3 competitors all have: [List]

**Top 3 Content Issues**:
1. [Issue] | Severity: [High] | Opportunity: +[X%] traffic potential
2. [Issue] | Severity: [Medium] | Opportunity: +[X%] traffic
3. [Issue] | Severity: [Medium] | Opportunity: +[X%] traffic

---

## SECTION 3: AUTHORITY & BACKLINKS

**Score: [X/100]**

### Backlink Profile
| Metric | Your Site | Competitor 1 | Competitor 2 | Competitor 3 |
|--------|-----------|--------------|--------------|--------------|
| Total Backlinks | [X] | [X] | [X] | [X] |
| Referring Domains | [X] | [X] | [X] | [X] |
| Domain Authority | [X] | [X] | [X] | [X] |

### Link Quality
- High DA (50+): [X]%
- Medium DA (30-50): [X]%
- Low DA (<30): [X]%
- Assessment: [Healthy / Needs improvement / Too many low-quality]

### Anchor Text
- Brand: [X]%
- Exact match: [X]%
- Partial match: [X]%
- Generic: [X]%
- Assessment: [Natural / Over-optimized]

### Link Gaps
- [Competitor A] has links from [Publication], you don't
- [Competitor B] is mentioned in [Industry List], you aren't
- Estimated high-quality link opportunities: [X]

**Top 3 Authority Issues**:
1. [Issue] | Impact: [High] | Fix: [Link-building campaign to X sites]
2. [Issue] | Impact: [Medium] | Fix: [Brand awareness building]
3. [Issue] | Impact: [Medium] | Fix: [Guest post outreach]

---

## SECTION 4: STRUCTURED DATA & SCHEMA

**Score: [X/100]**

### Schema Implementation
- Organization schema: Ã¢Å“â€œ Yes / Ã¢ÂÅ’ No
- Article schema: Ã¢Å“â€œ Implemented on [X%] of blog posts / Ã¢ÂÅ’ Missing
- Product schema: Ã¢Å“â€œ Yes / Ã¢ÂÅ’ No (if e-commerce)
- FAQ schema: Ã¢Å“â€œ Yes / Ã¢ÂÅ’ No (if FAQ pages exist)
- BreadcrumbList: Ã¢Å“â€œ Yes / Ã¢ÂÅ’ No

### Validation Results
- Validation errors: [X] (will prevent rich results)
- Validation warnings: [X] (may reduce appearance)
- Rich result eligibility: [X] pages ready

### Opportunities
- [X] blog posts could use Article schema
- [X] FAQ sections could use FAQ schema
- [X] product pages missing review/rating schema

---

## SECTION 5: COMPETITIVE BENCHMARK

### Keyword Rankings
| Keyword | Your Rank | Competitor 1 | Competitor 2 | Competitor 3 | Opportunity |
|---------|-----------|--------------|--------------|--------------|-------------|
| [KW1] | [X] | [X] | [X] | [X] | Win with [action] |
| [KW2] | [X] | [X] | [X] | [X] | [Opportunity] |

### Domain-Level Metrics
| Metric | Your Site | Top Competitor |
|--------|-----------|---|
| Domain Authority | [X] | [X] |
| Backlinks | [X] | [X] |
| Organic keywords | [X] | [X] |
| Monthly organic traffic (est.) | [X] | [X] |

---

## TOP 50 ACTION ITEMS (Prioritized by Impact vs. Effort)

### PHASE 1: QUICK WINS (Do this week | Effort: 1-2 days | Impact: Medium-High)

1. **Fix Core Web Vitals**
   - Issue: LCP [Xms] exceeds 2.5s target
   - Impact: +[X%] rankings potential
   - Effort: 1-2 days (image optimization, lazy loading)
   - Action: [Specific steps]

2. **Remove redirect chains**
   - Issue: [X] chains >2 hops found
   - Impact: Improves crawl efficiency, slight ranking boost
   - Effort: 0.5 days
   - Action: Audit all redirects, consolidate chains

3. **Fix thin content on [X] pages**
   - Issue: [X] pages <300 words
   - Impact: +5-10% ranking potential
   - Effort: 1-2 days (expand each page by 300+ words)
   - Action: Expand with sections competitors cover

4. **Add meta descriptions**
   - Issue: [X] pages missing meta description
   - Impact: Increases CTR by ~5-10%
   - Effort: 0.5 days
   - Action: Write descriptions for all missing pages

5. **Resolve keyword cannibalization**
   - Issue: [Keyword] targeted by [X] pages
   - Impact: Consolidate authority, rank higher
   - Effort: 1 day
   - Action: Merge pages or differentiate (target long-tail variants)

### PHASE 2: HIGH-IMPACT (Do this month | Effort: 3-7 days | Impact: High)

6. **Build 5 high-quality backlinks**
   - Issue: [X fewer backlinks than top competitor]
   - Impact: +[X%] ranking potential
   - Effort: 5-7 days (identify prospects, outreach)
   - Action: Create link-building list, pitch [X] publications

7. **Update underperforming content**
   - Issue: [X] pages ranking 4-10 have potential
   - Impact: +[X%] traffic from improved rankings
   - Effort: 3 days (refresh, optimize, expand)
   - Action: Choose top 3 pages, add sections competitors have

8. **Implement schema markup**
   - Issue: Missing Article, FAQ, or Product schema
   - Impact: Eligible for rich results (increases CTR)
   - Effort: 2 days
   - Action: Add JSON-LD schema to [page types]

9. **Fix mobile usability**
   - Issue: [X] mobile usability issues found
   - Impact: Improves mobile ranking, user experience
   - Effort: 2-3 days
   - Action: [Specific fixes]

10. **Build internal linking strategy**
    - Issue: [X] orphaned pages, poor link distribution
    - Impact: Better crawl efficiency, authority flow
    - Effort: 2 days
    - Action: Audit link graph, add 5-8 internal links per page

### PHASE 3: ONGOING (Work on monthly | Effort: Continuous | Impact: Compounding)

[Items 11-50: Link building, content updates, new content targeting gaps, etc.]

---

## IMPLEMENTATION ROADMAP (Quarterly)

### Q1 (Next 12 weeks)
- Week 1-2: Fix critical technical issues (CWV, redirects)
- Week 3-4: Content audit, update thin pages
- Week 5-6: Schema implementation
- Week 7-8: Initial link building (5 high-quality links)
- Week 9-12: Measure, iterate

### Q2
- Content gap analysis: Create 5-10 new pages in key areas
- Competitive link-building: 10 more high-quality links
- Update top-performing pages (refresh, expand)
- Monitor rankings for improvements

### Q3-Q4
- Scale content: Create pillar + cluster structure
- Build brand authority (PR, partnerships)
- Continuous optimization based on data

---

## Measurement & Success Metrics

**Baseline (Today)**:
- [X] keywords in top 10
- [Y] keywords in top 50
- [Z] monthly organic traffic

**3-Month Target** (after Phase 1 fixes):
- [X+N] keywords in top 10 (+N%)
- [Y+M] keywords in top 50 (+M%)
- [Z+P%] monthly organic traffic (+P%)

**12-Month Target**:
- Double baseline keywords in top 10
- [Double] top 50 keywords
- [+150%] organic traffic

---

## Tools & Resources

- GSC (Google Search Console): Monitor rankings, fix issues
- Screaming Frog: Crawl site, identify technical issues
- Ahrefs/SEMrush: Backlink analysis, competitor comparison
- Lighthouse/PageSpeed Insights: Core Web Vitals
- Google Rich Results Test: Schema validation
```

---

## Best Practices

1. **Run baseline first**: Do initial audit before any changes (creates benchmark)
2. **Competitors matter**: Always include top 3 SERP competitors for realistic analysis
3. **Prioritize impact**: Focus on items with 10%+ traffic potential first
4. **Mobile-first**: Google now uses mobile index. Prioritize mobile CWV fixes
5. **Content gaps**: Identify what top competitors cover that you don't
6. **Regular audits**: Run quarterly (site changes, algorithm updates)
7. **Fix, measure, verify**: After fixes, rerun audit 4+ weeks later
8. **Track trends**: Maintain spreadsheet of audit scores over time

---

## Delivery

Provide:
1. Full audit report (as above)
2. Prioritized action items spreadsheet (5-phase)
3. Implementation guidance for top 20 items
4. Monthly monitoring dashboard (KPI tracking)
5. Re-audit scheduled for 12 weeks post-launch
