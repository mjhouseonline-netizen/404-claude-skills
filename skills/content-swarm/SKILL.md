---
name: content-swarm
description: Coordinates Content Engine, Video Content, SEO Audit, Social Media, and Documentation agents for 360-degree content strategy
source_group: swarms
imported_from: content-swarm.md
swarm_name: content-swarm
agents: [content-engine-agent, video-content-agent, social-media-manager-agent, documentation-agent, market-research-agent]
version: 1.0.0
---

# Content Swarm

## Overview
The Content Swarm creates comprehensive content strategies and executes them across channels. It plans editorial calendars, produces written and video content, optimizes for search and social, documents products, and manages distribution across platforms.

**Use Case**: "Launch comprehensive content marketing program and drive 50% organic traffic growth in 6 months"

**Timeline**: 2-3 months to full execution, 6 months to see results
**Effort**: Equivalent to 2-3 full-time content creators + 1 video editor
**Output**: 100+ pieces of content (blog, video, docs), 50% traffic growth, 20%+ organic conversion rate

## Agents in This Swarm

### 1. Market Research Agent
**Role**: Audience insights and opportunity identification
**Produces**: Content opportunity map (what to write about)
**Duration**: Initial 4 weeks, quarterly refresh
**Output Files**:
- Audience needs analysis (what questions do they ask?)
- Keyword opportunity matrix (high-volume, low-competition)
- Competitive content analysis (what they're ranking for)
- Content gaps (what nobody's covering)

**Triggers Next**: Content Engine Agent (what to write), Video Content Agent (what to video), Documentation Agent (what to document)

### 2. Content Engine Agent
**Role**: Strategic planning and content production
**Produces**: 12 pillar pages + 36 blog posts (6-month plan)
**Duration**: Ongoing
**Output Files**:
- Editorial calendar (topics, publish dates)
- SEO-optimized outlines (word count, keywords, structure)
- Draft content (ready for editing/publishing)
- Content templates (repurpose across formats)

**Triggers Next**: Video Content Agent (convert blog to video), Social Media Agent (create clips for social)

### 3. Video Content Agent
**Role**: Video production and optimization
**Produces**: 12 long-form videos (YouTube), 36 short clips (TikTok/Reels)
**Duration**: Ongoing
**Output Files**:
- Video scripts (based on blog content)
- Storyboards (shot lists, pacing)
- Edited videos (YouTube, TikTok, LinkedIn)
- Thumbnail designs (optimized for CTR)
- Transcripts (for accessibility + SEO)

**Triggers Next**: Social Media Manager (promote clips), Documentation Agent (embed in docs)

### 4. Social Media Manager Agent
**Role**: Community engagement and distribution
**Produces**: Daily social posts, engagement metrics, growth
**Duration**: Ongoing
**Output Files**:
- Content calendar (what to post, when, platform)
- Social clips extracted (from long-form videos)
- Engagement strategy (how to grow followers)
- Analytics dashboard (reach, engagement, conversions)

**Triggers Next**: Market Research Agent (quarterly audience shift analysis)

### 5. Documentation Agent
**Role**: Product docs and SEO-friendly guides
**Produces**: API docs, tutorials, architecture guides
**Duration**: Ongoing (as products evolve)
**Output Files**:
- API documentation (all endpoints documented)
- Getting Started guide (quick onboarding)
- How-to guides (common use cases)
- Architecture docs (system design explanation)

**Triggers Next**: Content Engine Agent (feature announcements based on docs)

## Orchestration Flow

```
Week 1-2: Foundation
Ã¢â€Å“Ã¢â€â‚¬ Market Research Ã¢â€ â€™ [Audience needs + keyword analysis]
Ã¢â€Å“Ã¢â€â‚¬ Documentation Agent Ã¢â€ â€™ [Audit existing docs]
Ã¢â€â€Ã¢â€â‚¬ Content Engine Ã¢â€ â€™ [Build content calendar]

Week 3-4: Planning & Production
Ã¢â€Å“Ã¢â€â‚¬ Content Engine Ã¢â€ â€™ [Write 3 pillar pages + 9 blog posts]
Ã¢â€Å“Ã¢â€â‚¬ Video Content Ã¢â€ â€™ [Film/edit 3 videos]
Ã¢â€â€Ã¢â€â‚¬ Documentation Agent Ã¢â€ â€™ [Update product docs]

Week 5-6: Publishing & Distribution
Ã¢â€Å“Ã¢â€â‚¬ Content Engine Ã¢â€ â€™ [Publish 3 pillar + 9 blog (weekly schedule)]
Ã¢â€Å“Ã¢â€â‚¬ Video Content Ã¢â€ â€™ [Publish 3 YouTube videos + 9 TikTok clips]
Ã¢â€Å“Ã¢â€â‚¬ Social Media Ã¢â€ â€™ [Daily posts, promote content]
Ã¢â€â€Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Publish updated docs]

Week 7-12: Scaling & Optimization
Ã¢â€Å“Ã¢â€â‚¬ Content Engine Ã¢â€ â€™ [Continuous production (1 pillar + 3 blogs/week)]
Ã¢â€Å“Ã¢â€â‚¬ Video Content Ã¢â€ â€™ [1 video/week + clips daily]
Ã¢â€Å“Ã¢â€â‚¬ Social Media Ã¢â€ â€™ [Growth, engagement optimization]
Ã¢â€Å“Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Keep in sync with product changes]
Ã¢â€â€Ã¢â€â‚¬ Market Research Ã¢â€ â€™ [Monthly analytics review, adjust topics]
```

## Example Workflow: "Build Content Series on Data Privacy"

### Step 1: Market Research Agent (Week 1)
**Input**: Audience is B2B SaaS companies, concerned about GDPR/CCPA compliance
**Analysis**:
- Search volume: "GDPR compliance" (5,400/month), "CCPA explained" (2,200/month)
- Competition: High (well-established sites ranking)
- Opportunity: Specific angles (CCPA + SaaS, GDPR + remote work) = lower competition
- Questions customers ask: "Is my app GDPR compliant?" "What is CCPA?"

**Output**:
- Content pillar: "Data Privacy Compliance for SaaS"
- Cluster topics: GDPR guide, CCPA guide, Data breach response, Privacy policy template
- Blog posts: 12 related topics (niche angles)
- Keyword targets: "GDPR SaaS" (800/mo, easier to rank), "CCPA checklist" (300/mo)

### Step 2: Content Engine Agent (Weeks 2-3)
**Production**:
- Pillar page: "Complete Guide to GDPR for SaaS" (4,000 words)
  - What is GDPR, requirements, implementation, resources
  - Internal linking to 4 cluster articles

- Cluster articles (1,500 words each):
  - "CCPA Compliance Checklist"
  - "Data Breach Notification in 72 Hours"
  - "Privacy Policy Template"
  - "GDPR Penalties Explained"

- Blog posts (800-1,000 words each):
  - "GDPR Article 32: Technical & Organizational Measures"
  - "DPA (Data Processing Agreement): What You Need to Know"
  - "GDPR Fines: Real-World Examples"
  - [9 more posts on related topics]

**Output**:
- Pillar page outline (approved by legal)
- 12 article outlines (keywords, structure, CTA)
- Editorial calendar (publish 1 pillar + 3 blogs per week)

### Step 3: Video Content Agent (Weeks 2-3)
**Scripts**: Convert top 3 blog posts to videos
- "GDPR Explained in 5 Minutes" (YouTube, 5 min)
- "CCPA Checklist for Startups" (YouTube, 8 min)
- "Data Breach? Here's What to Do" (YouTube, 7 min)

**Production**:
- Film 3 YouTube videos (screen recording + voiceover)
- Extract short clips (15-30s) for TikTok/Reels
- Create thumbnails (GDPR icon + contrasting colors)
- Write captions (auto + manual review)

**Output**:
- 3 YouTube videos (optimized titles, descriptions, timestamps)
- 9 TikTok clips (one per video, trending audio)
- 3 LinkedIn videos (professional tone)

### Step 4: Documentation Agent (Week 2)
**Task**: Add privacy section to product docs
- API endpoint for data deletion (right-to-be-forgotten)
- GDPR-compliant data export endpoint
- Security & compliance page
- Data retention policy page

**Output**:
- Updated docs (published on day 1 of content series)
- Compliance checklist (embedded in product docs)

### Step 5: Content Engine & Social Media Agent (Weeks 4-6)
**Publishing Schedule**:
- Week 4:
  - Monday: Pillar page launched (blog + email)
  - Wednesday: Video 1 on YouTube (shared on LinkedIn, Twitter)
  - Daily: TikTok clip (1 of 9)

- Week 5:
  - Tuesday: Blog post 1 published (social promotion)
  - Thursday: Blog post 2 published
  - Saturday: Blog post 3 published
  - Daily: 1 TikTok clip per day

- Week 6: Repeat blog schedule, introduce video 2

**Social Promotion** (by Social Media Manager):
- Pillar page: 5 posts (different angles, platforms)
- Each blog: 2-3 posts (LinkedIn, Twitter, TikTok)
- Each video: YouTube share + 3 social clips

**Results (Month 1)**:
- Organic traffic: +25% (pillar page ranking for main keyword)
- Video views: 2K-5K per video
- Social followers: +200 (engaged audience)
- Email signups: +50 (from blog CTAs)

### Step 6: Market Research Agent (Monthly Check-in)
**Analysis** (after month 1):
- Which topics got traction? (CCPA more popular than GDPR)
- Which keywords ranking? (focus future content on similar topics)
- Engagement rates? (video outperforming blog)
- Customer feedback? (what questions still unanswered?)

**Adjustment** (Month 2):
- 60% of new content on CCPA angle
- Increase video production (proven higher engagement)
- Create webinar series (capitalize on interest)

## When to Use This Swarm

**Scenarios**:
- Launching product (need to educate market)
- Building SEO/organic channel (long-term strategy)
- Scaling content team (operationalize production)
- Repositioning brand (new messaging, new content pillars)
- Entering new market (localized content + videos)

**Success Indicators**:
- Ã¢Å“â€œ 2-3x organic traffic growth (6-12 months)
- Ã¢Å“â€œ 50+ pieces of content shipped/month
- Ã¢Å“â€œ 10-20% of leads from organic (vs. 2-5% baseline)
- Ã¢Å“â€œ 30%+ of video viewers convert to leads
- Ã¢Å“â€œ Social following 5x growth

## Resource Requirements

| Agent | Effort | Owner | Tools |
|-------|--------|-------|-------|
| Market Research | 20 hrs/mo | Content strategist | SEMrush, SurveyMonkey |
| Content Engine | 60 hrs/mo | 2 writers | WordPress, Grammarly |
| Video Content | 40 hrs/mo | 1 video creator | CapCut, Descript |
| Social Media | 20 hrs/mo | 1 social manager | Buffer, Later |
| Documentation | 15 hrs/mo | Tech writer | Docs platform |

**Total**: 155 hrs/month = 1 FTE + freelance

## Success Metrics

**Traffic**:
- Organic visitors: 1000 Ã¢â€ â€™ 5000/month (6 months)
- Organic conversion: 1% Ã¢â€ â€™ 3% (improved targeting)
- Session duration: 2min Ã¢â€ â€™ 4min (better content)

**Content**:
- Published per month: 12 pieces (blogs + videos)
- Average blog ranking position: Page 2 Ã¢â€ â€™ Page 1 (4-6 months)
- Video views/month: 5K Ã¢â€ â€™ 50K+ (growth)

**Engagement**:
- Social followers: +1000/month
- Email list: +500/month
- Repeat visitors: 30% of traffic

**Conversion**:
- Leads from organic: +200/month
- CAC from organic: $50 (vs. $200 from paid)
- Content-influenced deals: 40% of sales

## Handoffs

```
Market Research Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Keyword + Topic Matrix]
     Ã¢â€ â€œ
Content Engine Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Blog posts + Outlines]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Video Content Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [YouTube + TikTok]
     Ã¢â€â€š         Ã¢â€ â€œ
     Ã¢â€â€š    Social Media Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Promotion]
     Ã¢â€â€š
     Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Documentation Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Product + How-to docs]
```

## Launch Checklist

- [ ] Audience research complete (keywords, interests, pain points)
- [ ] 6-month content calendar drafted (topics, dates, formats)
- [ ] Core 3 pillar pages planned (main topics)
- [ ] 9 blog posts outlined (keywords, structure)
- [ ] 3 videos scripted (YouTube, TikTok, LinkedIn)
- [ ] Documentation updated (product features documented)
- [ ] Social calendar prepped (promotion schedule)
- [ ] Publishing workflow tested (from draft to live)
- [ ] Analytics tracked (GA4, YouTube, social metrics)
- [ ] Team trained (roles, timeline, quality standards)

## Next Steps

1. **Run Market Research Agent** (identify content opportunities)
2. **Build content calendar** (6-month plan)
3. **Hire freelance writer** (blog post production)
4. **Hire video creator** (YouTube + TikTok production)
5. **Publish first pillar page** (big bang launch)
6. **Weekly publishing cadence** (consistency = algorithm boost)
7. **Monthly analytics review** (adjust topics based on performance)

---

**Estimated ROI**: 5-10x return within 12 months (organic leads at 80% lower CAC than paid)
