---
name: marketing-swarm
description: Coordinates SEO Audit, Ad Campaign, Content Engine, Email Marketing, and Competitor Intel agents for complete marketing strategy launch
source_group: swarms
imported_from: marketing-swarm.md
swarm_name: marketing-swarm
agents: [seo-audit-agent, ad-campaign-agent, content-engine-agent, email-marketing-agent, competitor-intel-agent]
version: 1.0.0
---

# Marketing Swarm

## Overview
The Marketing Swarm orchestrates a complete go-to-market strategy by coordinating five specialized agents. It analyzes the competitive landscape, identifies content opportunities, builds paid and organic campaigns, and establishes email sequencesÃ¢â‚¬â€all working in concert to maximize customer acquisition and engagement.

**Use Case**: "Launch a complete marketing strategy for a new product"

**Timeline**: 4-6 weeks from start to full execution
**Effort**: Equivalent to 3-4 weeks of dedicated marketing team work
**Output**: Comprehensive launch playbook with 6 months of content + campaigns

## Agents in This Swarm

### 1. Competitor Intel Agent
**Role**: Intelligence gathering
**Produces**: Competitive landscape map, positioning strategy, opportunity identification
**Duration**: 1 week
**Output Files**:
- Competitive landscape report
- SWOT analysis
- Pricing comparison matrix
- Messaging differentiation angles

**Triggers Next**: Ad Campaign Agent (audience/messaging insights), Content Engine Agent (gap analysis)

### 2. SEO Audit Agent
**Role**: Technical + content analysis
**Produces**: Technical SEO baseline, content gaps, ranking opportunities
**Duration**: 1-2 weeks
**Output Files**:
- Current site technical audit
- Content gap analysis
- Keyword opportunity matrix
- 90-day SEO action plan

**Triggers Next**: Content Engine Agent (topics to create), Ad Campaign Agent (keyword bidding strategy)

### 3. Content Engine Agent
**Role**: Content strategy and production
**Produces**: Content calendar, pillar pages, blog series, lead magnets
**Duration**: 2-3 weeks
**Output Files**:
- 6-month content calendar (12 pillar pages + 36 blog posts)
- Content templates
- SEO optimized outlines
- Publishing checklist

**Triggers Next**: Email Marketing Agent (content for nurture), Ad Campaign Agent (landing page copy)

### 4. Ad Campaign Agent
**Role**: Paid media strategy and execution
**Produces**: Campaign structure, audience targeting, ad creative, budget allocation
**Duration**: 1-2 weeks
**Output Files**:
- Campaign structure (TOFU/MOFU/BOFU)
- Audience targeting strategy
- 30+ ad copy variations
- Budget allocation plan

**Triggers Next**: Email Marketing Agent (lead nurture sequences)

### 5. Email Marketing Agent
**Role**: Audience engagement and nurture
**Produces**: Email sequences, segmentation strategy, automation workflows
**Duration**: 1-2 weeks
**Output Files**:
- Welcome sequence (5 emails)
- Nurture sequences (weekly newsletter)
- Promotional sequences
- Segmentation strategy
- A/B test plan

## Orchestration Flow

```
Week 1: Foundation
Ã¢â€Å“Ã¢â€â‚¬ Competitor Intel Ã¢â€ â€™ [Report]
Ã¢â€â€Ã¢â€â‚¬ SEO Audit Ã¢â€ â€™ [Technical Report + Gap Analysis]

Week 2: Strategy
Ã¢â€Å“Ã¢â€â‚¬ Content Engine Agent Ã¢â€ â€™ [Content Plan]
Ã¢â€Å“Ã¢â€â‚¬ Ad Campaign Agent Ã¢â€ â€™ [Campaign Strategy + Creative]
Ã¢â€â€Ã¢â€â‚¬ Email Marketing Agent Ã¢â€ â€™ [Sequence Outlines]

Week 3-4: Production
Ã¢â€Å“Ã¢â€â‚¬ Content Engine Ã¢â€ â€™ [Create 4 pillar pages + 12 blog posts]
Ã¢â€Å“Ã¢â€â‚¬ Ad Campaign Ã¢â€ â€™ [Create landing pages + ad designs]
Ã¢â€â€Ã¢â€â‚¬ Email Marketing Ã¢â€ â€™ [Build sequences in platform]

Week 5-6: Launch & Integration
Ã¢â€Å“Ã¢â€â‚¬ Deploy all campaigns simultaneously
Ã¢â€Å“Ã¢â€â‚¬ Coordinate messaging across channels
Ã¢â€â€Ã¢â€â‚¬ Monitor metrics + optimize
```

## Example Workflow: "Launch Product X"

### Step 1: Run Competitor Intel Agent
**Input**:
- Product: [Name]
- Competitors: [List 5]
- Key differentiators: [Features A, B, C]

**Output**:
- Competitive positioning: "Only solution with [feature X]"
- Pricing strategy: Position at $[X]/month (higher than [Comp], lower than [Comp])
- Messaging angle: "For [persona], the fastest way to [outcome]"

**Decision**: Use insight to inform all downstream agents

### Step 2: Run SEO Audit Agent (Current Site)
**Input**:
- Domain: [yoursite.com]
- Target: [Product launch page]

**Output**:
- Top ranking opportunities: [Keywords with low difficulty]
- Content gaps vs. competitors: [Topics they rank for, you don't]
- Technical issues: [Fix these before launch]

**Decision**: Content Engine Agent will target these keywords and gaps

### Step 3: Run Content Engine Agent (Build Content)
**Input** (from Competitor Intel + SEO Audit):
- Pillar topic: [Product benefit]
- Keywords to target: [From SEO Audit]
- Positioning: [From Competitor Intel]
- Audience: [Specific personas]

**Output**:
- Pillar page: [Product benefit comprehensive guide]
- Cluster articles (4): [Related subtopics]
- Blog posts (12): [Keyword-rich educational content]
- Resource pages: [Whitepapers, templates, etc.]

**Decision**: Use content in ad campaigns and email sequences

### Step 4: Run Ad Campaign Agent (Build Ads)
**Input** (from Competitor Intel + Content):
- Positioning: [From Competitor Intel]
- Landing pages: [From Content Engine]
- Audience: [From Content Engine personas]
- Budget: $[X]/month

**Output**:
- Campaign structure: TOFU (awareness) Ã¢â€ â€™ MOFU (consideration) Ã¢â€ â€™ BOFU (conversion)
- Ad copy (30+): [Variations by stage + audience]
- Landing pages: [High-converting designs]
- Audience targeting: [Behavioral, interest, lookalike]

**Decision**: Use landing pages and messaging in email sequences

### Step 5: Run Email Marketing Agent (Build Sequences)
**Input** (from all above):
- Product: [Name]
- Landing page: [URL from Content Engine]
- Positioning: [From Competitor Intel]
- Goal: [Signup / Trial / Demo]

**Output**:
- Welcome sequence: [5 emails over 2 weeks]
- Nurture sequence: [Weekly email with content]
- Promotional sequence: [For launch period]
- Webinar sequence: [If applicable]

**Decision**: Email supports paid campaigns, nurtures organic traffic

### Step 6: Integration & Launch
**Coordinate Timing**:
- Day 1: Blog launches (organic baseline)
- Day 1: Email campaign starts (nurture begins)
- Day 5: Paid ads launch (reach audience)
- Week 2: Webinar/event (further engagement)
- Ongoing: Weekly blog + email content

**Messaging Coordination**:
- All channels use consistent messaging (from Competitor Intel)
- Email ladder complements ad campaigns
- Blog content supports both organic and paid
- CTAs aligned across channels

## When to Use This Swarm

**Scenarios**:
- New product launch (SaaS, tools, digital products)
- Market entry (new geography, new customer segment)
- Brand refresh (need fresh positioning and campaigns)
- Content at scale (need efficient production + distribution)
- Seasonal campaigns (holiday, back-to-school, etc.)

**Success Indicators**:
- Ã¢Å“â€œ Coordinated messaging across 5+ channels
- Ã¢Å“â€œ Content production 10-15x more efficient than manual
- Ã¢Å“â€œ Paid campaigns driving 2-3x more leads than pre-swarm
- Ã¢Å“â€œ Organic traffic increasing 5-10% weekly as content publishes
- Ã¢Å“â€œ Email nurture converting 10-15% of leads

## Resource Requirements

| Agent | Effort | Owner | Tools Needed |
|-------|--------|-------|--------------|
| Competitor Intel | 1 week | [Marketing lead] | SEMrush, Ahrefs, [Ad tool] |
| SEO Audit | 1-2 weeks | [SEO specialist] | Screaming Frog, Google Search Console |
| Content Engine | 2-3 weeks | [Writers + Designer] | Wordpress / Webflow, Grammarly, Canva |
| Ad Campaign | 1-2 weeks | [Paid media specialist] | Google Ads, Meta Ads Manager, Figma |
| Email Marketing | 1-2 weeks | [Email marketer] | Mailchimp / ConvertKit, Figma |

**Total Effort**: 6-10 weeks (vs. 12-15 weeks manual)
**Cost Savings**: 40-50% reduction in labor hours

## Success Metrics

### By Phase
**Phase 1 (Foundation)**: Competitive positioning clarity
- Ã¢Å“â€œ Clear differentiation identified
- Ã¢Å“â€œ Messaging tested with [N] customers
- Ã¢Å“â€œ Positioning agreed by team

**Phase 2 (Execution)**: Content + campaigns live
- Ã¢Å“â€œ Content published on schedule
- Ã¢Å“â€œ Campaigns running with budget allocated
- Ã¢Å“â€œ Email sequences live and testing

**Phase 3 (Results - 30 days)**:
- Blog traffic: [N] daily organic visitors
- Paid reach: [N] impressions, [X]% CTR
- Email engagement: [X]% open rate, [Y]% conversion
- Lead generation: [N] leads from all channels

**Phase 4 (Optimization - 90 days)**:
- CPA from paid: $[X] (target: $[Y])
- Email revenue: $[X]/month
- Organic leads: [N]/week (increasing)
- Overall marketing ROI: [X]:1

## Handoffs & Dependencies

```
Competitor Intel Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Content Engine (topic selection)
      Ã¢â€ â€œ                    Ã¢â€ â€œ
      Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Ad Campaign (messaging) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Email (copy)
      Ã¢â€â€š
SEO Audit Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Content Engine (keywords) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Ad Campaign
```

**Critical Path**:
1. Competitor Intel (1 week) Ã¢â‚¬â€ blocks everything else
2. SEO Audit (parallel with #1) Ã¢â‚¬â€ informs Content
3. Content Engine (2-3 weeks) Ã¢â‚¬â€ must complete before Ads
4. Ad Campaign (parallel with Content) Ã¢â‚¬â€ uses Content outputs
5. Email (1-2 weeks) Ã¢â‚¬â€ final phase, uses all outputs

**Slack**: Email can start final week while Content/Ads still in progress

## Troubleshooting

**If SEO Audit finds many technical issues**:
- Prioritize top 3 (highest impact)
- Fix before campaign launch
- Plan remaining fixes for post-launch (quarterly)

**If Content Engine timeline slips**:
- Reduce pillar page count from 4 to 2
- Launch with blog content only
- Add pillar pages in month 2

**If Ad Campaign needs different landing pages**:
- Content Engine creates 2-3 variants per page
- Ad Campaign A/B tests which converts best
- Winner becomes canonical page

**If Email sequences aren't performing**:
- Email Agent runs A/B tests (subject, send time, copy)
- Optimize after first 2-3 sends
- Use learnings for future sequences

## Launch Checklist

- [ ] Competitor Intel report reviewed (team aligned on positioning)
- [ ] SEO Audit findings prioritized (technical fixes scheduled)
- [ ] Content calendar approved (all topics assigned)
- [ ] Content pieces completed (80% of Month 1 content)
- [ ] Ad campaigns created (all copy variations)
- [ ] Landing pages built (matching ad messaging)
- [ ] Email sequences configured (all flows tested)
- [ ] Analytics set up (tracking enabled)
- [ ] Team trained (everyone knows the plan)
- [ ] Launch communication ready (email, Slack announcement)

## Next Steps

1. **Run Competitor Intel Agent** to establish positioning
2. **Share findings** with team (20-min alignment meeting)
3. **Run remaining agents** in parallel
4. **Weekly sync** to monitor progress, resolve blockers
5. **Launch week**: Deploy all channels simultaneously
6. **Post-launch**: Daily monitoring, weekly optimization

---

**Estimated ROI**: 3-5x return on swarm execution effort within 90 days
