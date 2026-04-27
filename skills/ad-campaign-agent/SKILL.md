---
name: ad-campaign-agent
description: Build and deploy paid ad campaigns across Google, Meta, LinkedIn, TikTok with funnel-stage targeting, creative testing, budget allocation, and ROAS optimization
source_group: agents
imported_from: ad-campaign-agent.md
agent_name: ad-campaign-agent
category: marketing
version: 2.0.0
skills_used: [audience-targeting, creative-optimization, campaign-structure, bid-strategy, platform-apis, performance-tracking]
---

# Ad Campaign Agent

## Purpose

The Ad Campaign Agent automates the end-to-end creation and deployment of paid advertising campaigns across major platforms (Google Ads, Meta, LinkedIn, TikTok). It handles campaign structure, audience segmentation (TOFU/MOFU/BOFU funnel stages), creative optimization, bid strategy configuration, and performance tracking setup.

Ideal for businesses scaling customer acquisition, product launches, testing new markets, or optimizing underperforming campaigns.

---

## Core Capabilities

- **Campaign Architecture**: Build funnel-stage campaigns (TOFU/MOFU/BOFU) with proper audience exclusions
- **Audience Targeting**: Demographic, behavioral, interest-based, lookalike, and custom audience creation
- **Creative Optimization**: Ad copy generation, creative spec validation, A/B test frameworks
- **Platform Integration**: Direct API setup for Google Ads, Meta, LinkedIn, TikTok
- **Budget Management**: Daily budget allocation formulas, bid strategy recommendations, ROI pacing
- **Conversion Tracking**: Pixel setup, event configuration, UTM parameter generation
- **Performance Monitoring**: Automated alerts, daily performance pulls, weekly optimization
- **Compliance**: Platform-specific ad policies, format requirements, bidding constraints

---

## Workflow: 6-Phase Campaign Launch

### PHASE 1: Strategy & Planning (Days 1-3)

**Define Campaign Objectives**

```
PRIMARY OBJECTIVE:
[ ] Brand Awareness Ã¢â‚¬â€ reach [X millions] people
[ ] Lead Generation Ã¢â‚¬â€ acquire [X] leads at <$[Y] CPA
[ ] Sales Ã¢â‚¬â€ generate [X] sales at <[Z]x ROAS
[ ] Traffic Ã¢â‚¬â€ drive [X] visitors to [landing page]
[ ] Engagement Ã¢â‚¬â€ [X] comments, shares, video views

SECONDARY METRICS:
- Cost per result: $[X]
- Target ROAS: [X]x (revenue / ad spend)
- Target CPA: $[X]
- Acceptable CAC:LTV ratio: [X]:1
```

**Target Audience Segmentation (Funnel-Based)**

```
TOFU (Top of Funnel) Ã¢â‚¬â€ Cold Prospecting
Audience: People who don't know you exist
Size: [X] million people
Targeting: Interest + demographic + behavioral
Examples:
  - Interest in [category] (Interests: "Marketing", "Startups")
  - Job title: [Role] (LinkedIn)
  - Search intent: [Broad keyword] (Google)
Messaging: Problem-focused, educational
Budget allocation: [X]% of total

MOFU (Middle of Funnel) Ã¢â‚¬â€ Warm Engagement
Audience: People who've engaged with you
Size: [X]M people (website visitors, video viewers, engagers)
Targeting: Retargeting pixel, custom audiences
Examples:
  - Visited [landing page] in last 30 days
  - Watched >25% of [video]
  - Downloaded [whitepaper]
Messaging: Consideration-focused, benefits, differentiation
Budget allocation: [X]% of total

BOFU (Bottom of Funnel) Ã¢â‚¬â€ Hot Retargeting
Audience: High-intent, close to deciding
Size: [X]K people (cart abandoners, feature page visitors, demos booked)
Targeting: Specific behavior retargeting
Examples:
  - Added to cart but didn't buy
  - Visited pricing page
  - Viewed comparison content
Messaging: Urgency, social proof, offers, CTAs
Budget allocation: [X]% of total

EXCLUSIONS (Critical for efficiency):
- MOFU campaigns exclude: BOFU audiences
- TOFU campaigns exclude: MOFU + BOFU audiences
- All exclude: Current customers, brand competitors
```

**Budget Allocation Framework**

```
If total budget = $[X,000]/month:

Allocation model 1 (Conservative, brand new):
- TOFU: 40% ($[X]K)
- MOFU: 40% ($[X]K)
- BOFU: 20% ($[X]K)

Allocation model 2 (Mature, proven conversion):
- TOFU: 30% ($[X]K)
- MOFU: 30% ($[X]K)
- BOFU: 40% ($[X]K) Ã¢â‚¬â€ highest ROI, scale this

Allocation model 3 (Aggressive growth):
- TOFU: 50% ($[X]K)
- MOFU: 30% ($[X]K)
- BOFU: 20% ($[X]K) Ã¢â‚¬â€ focus on awareness + scale

Monthly budget: $[Total]
Daily budget: $[Total/30]
```

**Platform Selection & Channel Mix**

```
CHOOSE platforms based on objective:

AWARENESS (reach, impressions):
Ã¢â€ â€™ Use: Meta (Facebook/Instagram/Audience Network) + YouTube
Ã¢â€ â€™ Allocate: 60% Meta, 40% YouTube

LEAD GENERATION (form fills, email signups):
Ã¢â€ â€™ Use: Google Ads (Search) + LinkedIn (B2B) + Meta (Leads)
Ã¢â€ â€™ Allocate: 40% Google, 40% LinkedIn, 20% Meta

SALES/TRANSACTIONS:
Ã¢â€ â€™ Use: Google Ads (Search + Shopping) + Meta (Conversion) + TikTok
Ã¢â€ â€™ Allocate: 50% Google, 35% Meta, 15% TikTok

ENGAGEMENT (video views, comments):
Ã¢â€ â€™ Use: YouTube + TikTok + Meta (Reels)
Ã¢â€ â€™ Allocate: 40% YouTube, 30% TikTok, 30% Meta
```

**KPI Targets & Benchmarks**

```
Set targets based on industry + platform:

TOFU METRICS:
- Cost per impression (CPM): $[3-8] (industry dependent)
- Cost per click (CPC): $[0.50-2.00]
- Cost per mille (reach): $[5-15]

MOFU METRICS:
- Cost per view (if video): $[0.05-0.25]
- Cost per engagement: $[1-5]
- Cost per lead: $[10-50]

BOFU METRICS:
- Cost per conversion: $[20-100]
- ROAS (Return on Ad Spend): [2x-5x]
- CPA (Cost per acquisition): $[50-500] (product dependent)

Set minimums:
- ROAS floor: [2x] (break-even + profit)
- CPA cap: $[X] (don't spend more than profitable margin)
- CTR minimum: [0.5-2%] (pause if underperforming)

Benchmarks (typical for B2B SaaS):
- Impression CTR: 1-3%
- Click-to-conversion: 2-5%
- Overall ad-to-customer: 0.5-2%
- Target ROAS: 3x (industry average: 2.5x)
```

**Output**: Campaign Strategy Document (1-2 pages)
- Objective, KPIs, audience segments, budget allocation, platform selection

---

### PHASE 2: Audience Building (Days 4-7)

**Create Audience Segments**

```
GOOGLE ADS AUDIENCES:

Custom Segments (Search):
- High-intent keywords: [List 50-100 keywords]
  Categories: [Product keywords], [Problem keywords], [Competitor keywords]
- Negative keywords: [List to exclude]
  Examples: ["free", "blog", competitor names, irrelevant terms]

Display/Video Audiences:
- In-market audiences: [Interests in your category]
- Affinity audiences: [Lifestyle/interest keywords]
- Custom intent: [Keywords showing intent]
- Lookalike audiences: [Based on customers]

Demographic:
- Age: [Target ages] (example: 25-55)
- Gender: [All / M / F]
- Device: [Mobile, Desktop, Tablet]
- Location: [Countries, states, cities]

---

META AUDIENCES (Facebook/Instagram):

Interests:
- Interest 1: [Interest] (e.g., "Marketing", "Startups")
- Interest 2: [Interest]
- Behavioral: [Behavior] (e.g., "High-value audiences")

Demographics:
- Age: [Target] (example: 25-55)
- Gender: [All / M / F]
- Languages: [Language]
- Locations: [Countries/regions]

Lookalike Audiences:
- Source: [Your customer list / pixel audience / video viewers]
- Size: [1%, 5%, 10%] (1% = highest similarity to source)
- Create multiple (1%, 5%, 10%) to test

Custom Audiences:
- From pixel: People who visited [page]
- From list: Customers you already have
- From engagement: Video viewers, post engagers, website visitors

---

LINKEDIN AUDIENCES (B2B):

Targeting:
- Job title: [Titles] (example: "VP of Marketing", "CMO")
- Company: [Companies] (target accounts)
- Company size: [Employees] (example: 100-1000)
- Industry: [Industries]
- Seniority: [Senior, Manager, Entry-level]

Audiences:
- Matched audiences: Upload your customer list
- Website audiences: Retarget website visitors
- Engagement audiences: People who engaged with your content

---

TIKTOK AUDIENCES:

Interests:
- Interest categories: [Interests]
- Behaviors: [Behaviors]
- Demographics: [Age, gender, location]

Custom Audiences:
- Upload customer list
- Pixel-based (website visitors)
- Video viewers

Lookalike:
- Based on customer list
- Size options: [Similarity level]
```

**Audience Validation**

```
For each audience, check:

Ã¢Å“â€œ Size: Adequate for campaign
  - Google Search: Min [1,000] monthly searches
  - Meta: [100K-1M] (sweet spot, not too narrow)
  - LinkedIn: [10K-100K] (smaller is okay for B2B)

Ã¢Å“â€œ Definition: Clear and measurable
  - Not too broad ("All people interested in business")
  - Not too narrow ("People who visited page X in last 3 days")
  - Just right: Specific behavior + clear intent

Ã¢Å“â€œ Availability: Recent data
  - Not stale (audience needs recent activity)
  - Cross-validated (audience exists in all platforms)

Ã¢Å“â€œ Alignment: Matches campaign objective
  - TOFU audience: Broad, less defined, large
  - MOFU audience: Specific behavior, medium size
  - BOFU audience: Very specific, small, high-intent
```

**Output**: Audience Segment Document
- For each platform, list all audiences with sizing and targeting criteria
- Exclusion logic (who NOT to target)

---

### PHASE 3: Creative Development (Days 5-10)

**Generate Ad Copy by Funnel Stage**

```
TOFU MESSAGING (Awareness, Problem-focused):

Hook: What's their pain?
1. "[Problem] costing you [cost]? [Solution]."
2. "[Stat] of [audience] are [struggling with problem]."
3. "[Question] If you answered yes, read this."
4. "[Problem] is #1 complaint from [audience]."
5. "The [wrong] way to do [task] (and why)."
6. "Case study: How [similar company] solved [problem]."

Body: Educational, benefit-forward
- Focus on problem, not product
- Build credibility, not urgency
- Invite engagement, not immediate sale

CTA: Soft, engagement-focused
- "Learn more"
- "Read the guide"
- "Watch the video"
- "See how it works"

---

MOFU MESSAGING (Consideration, benefits-focused):

Hook: What's your solution?
1. "[Solution] used by [social proof]."
2. "[Your product] vs. [alternative 1] vs. [alternative 2]."
3. "[Feature 1] saves [X hours/week]."
4. "Why [competitor] customers are switching to [us]."
5. "[Specific benefit] for [audience]."

Body: Proof-focused
- Testimonials from similar companies
- Performance metrics (specific numbers)
- Feature benefits (how they solve pain)
- Comparison to alternatives

CTA: Medium urgency
- "See pricing"
- "Book a demo"
- "Get trial"
- "Compare plans"

---

BOFU MESSAGING (Conversion, urgency-focused):

Hook: Conversion-focused
1. "[Offer] for [audience]."
2. "[Promotion]: [Discount]% off, expires [date]."
3. "[Authority]: '[Testimonial]' Ã¢â‚¬â€ [Customer name]."
4. "[Scarcity]: [X spots] remaining."
5. "Join [X] companies using [product]."

Body: Social proof + urgency
- Customer logos + quotes
- Risk reversal ("30-day money-back guarantee")
- Urgency (limited time offer)
- Fear of missing out (FOMO)

CTA: Hard, conversion-focused
- "Get started"
- "Buy now"
- "Claim offer"
- "Sign up (free)"
```

**Creative Assets by Platform**

```
GOOGLE ADS SEARCH:
- Responsive Search Ads (RSA): 3+ headlines, 2+ descriptions
  Headlines (30 chars each):
    1. [Primary value prop]
    2. [Benefit 1]
    3. [Social proof or urgency]
    4. [Alternative benefit]
    5. [Guarantee or offer]
  Descriptions (90 chars each):
    1. [Problem + solution]
    2. [Testimonial or stat]
  Final URL: [Landing page]
  Display URL: [Domain]

---

META (FACEBOOK/INSTAGRAM):
Image Ad:
- Image: 1200x628px, product/benefit-focused
- Headline: [25-char headline]
- Primary text: [125-char copy]
- Description: [30-char]
- CTA button: [Select CTA type]

Video Ad:
- Duration: [15-30 sec for feed, 6-15 sec for stories]
- Aspect ratio: [1:1 for feed, 9:16 for stories]
- Hook: First 3 seconds (no audio)
- Captions: Always (50% watch without sound)
- CTA: Overlay or end-card

Carousel:
- 3-10 cards
- Each card: Image, headline, description
- Card 1: Primary benefit
- Card 2-X: Features or proof

---

LINKEDIN ADS:
- Headline: [200 chars, value prop]
- Description: [2000 chars, detailed benefits]
- Image/video: Professional, B2B-focused
- CTA: "Learn more", "Download", "Contact sales", etc.

---

TIKTOK ADS:
- Video: 9-34 seconds, native TikTok feel (not polished ad)
- Hook: First 2 seconds (native, authentic)
- Captions: Use trending audio + captions
- CTA: Subtle, native to platform (not "BUY NOW")
```

**Creative Testing Framework (A/B Test Setup)**

```
For optimal performance, test:

TEST 1: HOOK / HEADLINE
Control: [Current best-performing]
Variant A: [Different pain point]
Variant B: [Different benefit]
Variant C: [Different angle/stat]
Winning metric: CTR (Click-through rate)
Duration: 7 days (min 100 clicks per variant)

TEST 2: BODY / COPY
Control: [Current best-performing]
Variant A: [Shorter copy]
Variant B: [Longer copy]
Variant C: [Different benefit focus]
Winning metric: Conversion rate (CPA)
Duration: 7-14 days (min 20-50 conversions per variant)

TEST 3: VISUAL / IMAGE
Control: [Current best-performing]
Variant A: [Different image, same copy]
Variant B: [Different style (text overlay vs. clean)]
Variant C: [Different people/setting]
Winning metric: CTR + CPA
Duration: 7 days

TEST 4: CTA BUTTON / LANDING PAGE
Control: [Current destination]
Variant A: [Different landing page]
Variant B: [Different CTA copy]
Winning metric: Conversion rate
Duration: 7-14 days

BEST PRACTICE:
- Test ONE element at a time (not combinations)
- Give each test minimum 100-200 interactions
- Run at least 2-3 tests per campaign per month
- Winner becomes new control, test against new variation
```

**Output**: Creative Assets Document
- All copy variations (by funnel stage and platform)
- Image/video specs and assets
- A/B test plan (what to test, how to measure)

---

### PHASE 4: Campaign Construction (Days 8-14)

**Campaign Structure Setup**

```
GOOGLE ADS STRUCTURE:

Campaign 1: [Campaign Name] Ã¢â‚¬â€ TOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign settings:
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Campaign type: Search (or Display/YouTube as needed)
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Networks: Search + Search Partners (or Display only)
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Budget: $[X]/day
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Bid strategy: Maximize conversions (or Target CPA $[X])
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Location: [Locations]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Languages: [Languages]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Devices: All / Mobile only (specify)
Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Ad scheduling: All hours (or specific times)
Ã¢â€â€š
Ã¢â€Å“Ã¢â€â‚¬ Ad Group 1: [Topic 1]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Keywords:
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Exact: ["+keyword 1+"]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Phrase: ["keyword 1"]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Broad: [keyword 1]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Negative: [-keyword to exclude]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ads: [RSA with 3+ headlines/descriptions]
Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Landing page: [URL]
Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬ Ad Group 2: [Topic 2]
   Ã¢â€â€Ã¢â€â‚¬ [Same structure]

Campaign 2: [Campaign Name] Ã¢â‚¬â€ MOFU
Ã¢â€Å“Ã¢â€â‚¬ Audience: Retargeting (website visitors, pixel)
Ã¢â€Å“Ã¢â€â‚¬ Budget: $[X]/day
Ã¢â€Å“Ã¢â€â‚¬ Ads: [Different ad copy]
Ã¢â€â€Ã¢â€â‚¬ Landing page: [Specific page for warm audience]

Campaign 3: [Campaign Name] Ã¢â‚¬â€ BOFU
Ã¢â€Å“Ã¢â€â‚¬ Audience: [High-intent, specific behavior]
Ã¢â€Å“Ã¢â€â‚¬ Budget: $[X]/day (often highest ROI)
Ã¢â€Å“Ã¢â€â‚¬ Ads: [Conversion-focused]
Ã¢â€â€Ã¢â€â‚¬ Landing page: [Checkout/demo booking page]

---

META ADS STRUCTURE:

Campaign 1: [Campaign] Ã¢â‚¬â€ TOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign objective: Awareness (or Link Clicks)
Ã¢â€Å“Ã¢â€â‚¬ Budget: $[X]/day
Ã¢â€Å“Ã¢â€â‚¬ Ad Set 1: [Audience 1]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Audience: [Interest targeting]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Placement: Facebook Feed + Reels + Instagram Feed/Reels
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Bid: Lowest cost (automatic)
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ads:
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ad 1: [Copy A + Image 1]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ad 2: [Copy A + Image 2]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ad 3: [Copy B + Image 1]
Ã¢â€â€š  Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Rotation: Default (equal distribution)
Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Schedule: All hours
Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬ Ad Set 2: [Audience 2]
   Ã¢â€â€Ã¢â€â‚¬ [Same structure, different audience]

Campaign 2: [Campaign] Ã¢â‚¬â€ MOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign objective: Traffic (or Conversions)
Ã¢â€Å“Ã¢â€â‚¬ Audience: Pixel (website visitors)
Ã¢â€Å“Ã¢â€â‚¬ Ad Sets: [By recency: 1-7 days, 8-30 days, 30+ days]
Ã¢â€â€Ã¢â€â‚¬ Ads: [Different copy for warm audience]

Campaign 3: [Campaign] Ã¢â‚¬â€ BOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign objective: Conversions
Ã¢â€Å“Ã¢â€â‚¬ Audience: [High-intent custom audience]
Ã¢â€Å“Ã¢â€â‚¬ Ads: [Urgency-focused]
Ã¢â€â€Ã¢â€â‚¬ Pixel event: Purchase / Lead

---

LINKEDIN ADS STRUCTURE:

Campaign 1: TOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign: Awareness
Ã¢â€Å“Ã¢â€â‚¬ Budget: $[X]/day
Ã¢â€Å“Ã¢â€â‚¬ Audience 1: [Job title + company size targeting]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Audience size: [X]K people
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ Ad: [Problem-focused]
Ã¢â€â€š  Ã¢â€Å“Ã¢â€â‚¬ CTA: "Learn more"
Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬ Landing page: [Guide/resource]
Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬ Audience 2: [Different targeting]

Campaign 2: MOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign: Lead generation
Ã¢â€Å“Ã¢â€â‚¬ Audience: Website visitors + engagement audiences
Ã¢â€â€Ã¢â€â‚¬ Ad: [Feature + proof]

Campaign 3: BOFU
Ã¢â€Å“Ã¢â€â‚¬ Campaign: Conversions
Ã¢â€Å“Ã¢â€â‚¬ Audience: Website visitors (specific page), email list
Ã¢â€â€Ã¢â€â‚¬ Ad: [Offer + social proof]
```

**Conversion Tracking Setup**

```
GOOGLE ADS CONVERSION TRACKING:

For each campaign, track:
Ã¢â€“Â¡ Page view conversion (thank you page or order confirmation)
Ã¢â€“Â¡ Form submission (lead capture)
Ã¢â€“Â¡ Purchase (e-commerce)

Setup steps:
1. Go to Google Ads Ã¢â€ â€™ Conversions
2. Create new conversion
3. Select: Web (or App if applicable)
4. Name: [Conversion name]
5. Category: [Purchase / Lead / Sign-up]
6. Value: [Fixed $X or variable per transaction]
7. Count: One per user per day / One per user per visit
8. Install tag: [Choose method]

Verification:
Ã¢â€“Â¡ Tag installed correctly (use Google Tag Assistant)
Ã¢â€“Â¡ Tracking page receiving data
Ã¢â€“Â¡ Conversions showing in Google Ads (allow 24 hours)

---

META CONVERSION TRACKING:

Setup Meta Pixel:
1. Create pixel (if don't have)
2. Install on website (GTM or manual)
3. Create events:
   - ViewContent (when viewing product/page)
   - AddToCart
   - Purchase
   - Lead (form submission)
   - CompleteRegistration

Event configuration:
- ViewContent: Track product page views
- Purchase: Track completed transactions (include value)
- Lead: Track form submissions
- CompleteRegistration: Track sign-ups

Verification:
Ã¢â€“Â¡ Pixel installed (verify with Pixel Helper browser extension)
Ã¢â€“Â¡ Events firing correctly
Ã¢â€“Â¡ Data appears in Events Manager (allow 24 hours)

---

LINKEDIN CONVERSION TRACKING:

Setup Insight Tag:
1. Generate tag (LinkedIn)
2. Install on website
3. Create conversions for:
   - Lead (form fill)
   - Purchase
   - Page view (specific page)

Setup Lead Gen Forms (LinkedIn):
- Form auto-fills from LinkedIn profile
- Tracks directly in LinkedIn (no pixel needed)
- Higher conversion rate than external landing page
```

**Output**: Campaign Setup Document
- Campaign structure (screenshots or detailed specs)
- Ad copy for each campaign/ad set
- Conversion tracking implementation checklist

---

### PHASE 5: Launch & Monitoring (Days 15-21)

**Pre-Launch Checklist**

```
FINAL REVIEW:

Campaign Setup:
Ã¢â€“Â¡ All campaigns created and saved
Ã¢â€“Â¡ Audiences created and sized correctly
Ã¢â€“Â¡ Budgets allocated correctly
Ã¢â€“Â¡ Landing pages tested (load <3 seconds, mobile-responsive)
Ã¢â€“Â¡ All ads approved by platform (no disapprovals)

Tracking:
Ã¢â€“Â¡ Conversion pixels/tags installed and verified
Ã¢â€“Â¡ Google Analytics goals set up
Ã¢â€“Â¡ UTM parameters on all links (utm_source, utm_medium, utm_campaign)
Ã¢â€“Â¡ Tracking dashboard created

Approvals:
Ã¢â€“Â¡ Creative approved by marketing/legal (if needed)
Ã¢â€“Â¡ Campaign strategy signed off by stakeholder
Ã¢â€“Â¡ Budget approved
Ã¢â€“Â¡ Legal review (compliance, claims, privacy policy)

Launch Status:
Ã¢â€“Â¡ All campaigns set to "Paused" (not live yet)
Ã¢â€“Â¡ Ready to enable after final sign-off
```

**Launch Process**

```
STEP 1: Enable campaigns (Staggered)
Day 1: Enable TOFU campaign only
  - Budget: Set to 25% of target ($[X]/day)
  - Monitor: First 24 hours for disapprovals, errors

Day 2-3: Increase TOFU to 50% budget if no issues
  - Monitor: Cost per click, impression share

Day 3-4: Enable MOFU campaign
  - Budget: 25% of target initially
  - Monitor: Same metrics

Day 5: Enable BOFU campaign
  - Budget: 25% of target
  - Monitor: Conversion rate, ROAS

Day 7: Increase all to target budgets (if performing)
  - Ramp up gradually (not 0 to 100%)

---

STEP 2: Monitor First 48 Hours

Track:
Ã¢â€“Â¡ Impressions (are ads showing?)
Ã¢â€“Â¡ Clicks (is anyone clicking?)
Ã¢â€“Â¡ Cost per click (is it in expected range?)
Ã¢â€“Â¡ Quality score / Relevance (any red flags?)
Ã¢â€“Â¡ Disapprovals (fix immediately if any)
Ã¢â€“Â¡ Invalid traffic (bot clicks, fraud)

Daily checklist:
Ã¢â€“Â¡ Check cost per result (CPC, CPM)
Ã¢â€“Â¡ Check for disapprovals (fix ads if flagged)
Ã¢â€“Â¡ Verify tracking is working (conversions coming in)
Ã¢â€“Â¡ Monitor landing page errors (broken links, redirects)

---

STEP 3: Set Up Automation & Alerts

Create automated alerts:
Ã¢â€“Â¡ CPC spike (alert if CPC increases >20%)
Ã¢â€“Â¡ Conversion drop (alert if CPA >2x target)
Ã¢â€“Â¡ Spend overage (alert if daily spend >budget+10%)
Ã¢â€“Â¡ Quality score drop (alert if QS drops below 5)
Ã¢â€“Â¡ Campaign pause (alert if paused unexpectedly)

Email alerts to: [Team member]
Frequency: Daily at [time]
```

**Monitoring Dashboard Setup**

```
Create daily reporting view with:

DAILY METRICS:
- Date | Impressions | Clicks | Cost | CTR | CPC | Conv | CPA | ROAS

PERFORMANCE BY CAMPAIGN:
- Campaign name | Spend | Clicks | Conv | CPA | ROAS
- Highlight: Top performers vs. underperformers

PERFORMANCE BY AUDIENCE:
- Audience | Spend | Conv | CPA | Recommendation
- Identify: Which audience performing best

CREATIVE PERFORMANCE:
- Ad copy | Impressions | CTR | CPA
- Identify: Which copy outperforming

TOP OPPORTUNITIES:
- Pause: Campaigns with CPA > 2x target
- Scale: Campaigns with ROAS > 3x target
- Optimize: Campaigns with CTR <1% (check relevance)

BUDGET STATUS:
- Allocated budget: $[X]
- Spent to date: $[X]
- Remaining: $[X]
- Pace: On track / Over / Under

Tools:
- Use Google Sheets, Supermetrics, or dashboard tool (Data Studio, Looker)
- Set to auto-refresh daily
- Share with team
```

---

### PHASE 6: Optimization (Ongoing)

**Daily Optimization (First 2 Weeks)**

```
EVERY DAY:
Ã¢â€“Â¡ Check for new disapprovals (fix immediately)
Ã¢â€“Â¡ Verify conversion tracking (are conversions coming in?)
Ã¢â€“Â¡ Monitor for click fraud (unusual spike in clicks/impressions)
Ã¢â€“Â¡ Check landing page (no 404s, load time okay)
Ã¢â€“Â¡ Adjust bids if CPC spiking (reduce bid to manage cost)

EVERY 3 DAYS:
Ã¢â€“Â¡ Pause ads with CTR <0.5% (not relevant)
Ã¢â€“Â¡ Pause keywords with CPA >2x target (losing money)
Ã¢â€“Â¡ Increase budget to top performers (ROAS >3x)
Ã¢â€“Â¡ Review top converting keywords/audiences
```

**Weekly Optimization (After 2 Weeks)**

```
EVERY 7 DAYS (minimum 50-100 conversions):

Ã¢â€“Â¡ Analyze performance by audience
  - Which audience has best CPA?
  - Allocate more budget to winners
  - Reduce budget to losers
  - Exclude underperforming audiences

Ã¢â€“Â¡ Analyze performance by creative
  - Which headlines/images/copy performs best?
  - Pause underperforming ads
  - Add new variations of top performers

Ã¢â€“Â¡ Check landing page performance
  - Which landing page converts best?
  - Update underperforming page (test different message)
  - Ensure page aligns with ad promise

Ã¢â€“Â¡ Keyword analysis (if Google Search)
  - Add top-converting searches as exact match keywords
  - Add search terms as negative keywords if irrelevant
  - Review long-tail keywords (often higher convert rate)

Ã¢â€“Â¡ Bid adjustments
  - Increase bids on best-performing keywords
  - Decrease bids on underperformers
  - Adjust bids by device (mobile usually converts better)
  - Adjust bids by location (some locations perform better)

WEEKLY REVIEW MEETING:
- Date: Every [day] at [time]
- Attendees: [Names]
- Agenda:
  1. What's working? (Keep doing more)
  2. What's not working? (Pause or optimize)
  3. Budget allocation adjustments
  4. Test results (from A/B tests)
  5. Next week's focus
- Output: Action items spreadsheet
```

**Monthly Optimization**

```
EVERY 30 DAYS (after 300+ conversions):

1. PERFORMANCE ANALYSIS
   - Compare to KPI targets (are we hitting targets?)
   - Calculate ROAS (revenue / ad spend)
   - Calculate CAC (total ad spend / total customers)
   - Compare to benchmarks (industry average ROAS?)

2. AUDIENCE ANALYSIS
   - Which audience segment performing best?
   - Expand winning audience (increase lookalike %, broaden targeting)
   - Narrow losing audience (tighten targeting, lower budget)
   - Test new audiences (based on customer feedback)

3. CREATIVE ANALYSIS
   - Calculate creative performance (impression share by creative)
   - Retire underperforming creatives (<500 impressions with CPA >2x target)
   - Create new variations of top performers
   - Test new angles (new pain points, new benefits)

4. PLATFORM ANALYSIS
   - Google Ads ROI vs. Meta vs. LinkedIn vs. TikTok
   - Where are we getting best customers? (highest LTV)
   - Where are we losing money?
   - Allocate budget based on performance

5. FORECAST & PLANNING
   - If maintaining current spend, projected revenue = ?
   - To hit monthly target, what spend needed?
   - Are we on track for quarter/year goals?
   - Do we need to adjust strategy?

6. SCALING DECISIONS
   - For campaigns with ROAS >3x: Increase budget 20-50%
   - For campaigns with ROAS 1.5-3x: Maintain or optimize
   - For campaigns with ROAS <1.5x: Pause or redesign

Output: Monthly Performance Report
- Executive summary (what worked, what didn't)
- Detailed analysis (metrics + trends)
- Recommendations (pause, scale, optimize, test)
- Next month's strategy
```

**Ongoing Testing Framework**

```
CONTINUOUS TESTING PLAN:

Week 1: Test new headline
- Control: [Current best]
- Variant: [New hook]
- Metric: CTR
- Winner: Becomes new control

Week 2: Test new image
- Control: [Current best]
- Variant: [New image]
- Metric: CTR + CPA
- Winner: Becomes new control

Week 3: Test new landing page
- Control: [Current best]
- Variant: [Different message/layout]
- Metric: Conversion rate
- Winner: Becomes new control

Week 4: Test new audience
- Control: [Current best]
- Variant: [Broader / narrower audience]
- Metric: CPA + LTV
- Winner: Becomes new control

Repeat this cycle continuously.
Goal: Small 5-10% improvements month-over-month.
Over 12 months: 60-100% performance improvement.
```

---

## Platform-Specific Strategies

### Google Ads Strategy

```
KEYWORD STRATEGY:
High-intent keywords:
- [Product keyword]: "Buy [product]", "[product] software"
- [Problem keyword]: "[problem] solution", "[problem] fix"
- [Comparison keyword]: "[product] vs. [competitor]"

Negative keywords to exclude:
- "Free" (unless offering freemium)
- "Tutorial" or "how to" (DIY, not buyers)
- Competitor names (unless comparison)
- Irrelevant variations

BID STRATEGY:
1. Manual CPC (Day 1-14): Keep granular control, adjust daily
2. Target CPA (After 30+ conversions): Let Google optimize for conversion
3. Maximize conversions (After 100+ conversions): Scale without target
4. Target ROAS (After 200+ conversions): Optimize for profitability

Bid amounts:
- Start: $[X] per click (based on target CPA / expected conversion rate)
- Adjust: +10-20% for top performers, -20-30% for underperformers
- Rule: Don't overpay for clicks that don't convert

---

GOOGLE SEARCH ADS:
Quality Score impact:
- QS 10: ~50% lower CPC than QS 5
- QS <5: Campaign likely not profitable
- Action: Improve QS by improving ad relevance, landing page quality

Improve QS:
1. Match keywords to ad copy (exact match > partial match > broad match)
2. Include keyword in headline
3. Improve landing page (relevance + load time)
4. Increase CTR (better ad copy, better position)
```

### Meta (Facebook/Instagram) Strategy

```
AUDIENCE STRATEGY:
Broad audience:
- Start with 1-2M+ audience (for initial scale)
- Single interest targeting (not narrow combinations)
- Let Meta's algorithm learn

Narrow audience:
- After optimization, use narrow combinations
- Lookalike audiences (perform well once warmed up)
- Custom audiences (pixel, email list)

Layering:
- Include: [Interest A], [Interest B] (people interested in both)
- Exclude: [Competitor interest] (avoid showing to competitor customers)

---

CREATIVE STRATEGY:
Images vs. Video:
- Test both (video usually higher engagement, images higher CTR)
- Single image ad: Simple, fast-loading
- Carousel: Show multiple products/benefits
- Video: Higher view-through rate, builds brand

Frequency:
- Target: 1-3x per person per day (too much = expensive, too little = ineffective)
- If frequency >4: Increase daily budget (scaling), create new ad variation
- If frequency <1: Audiences too small, broaden targeting

---

BUDGET PACING:
- Standard pacing: Spend evenly throughout day
- Accelerated pacing: Spend quickly (useful for flash sales, limited time)
- Recommended: Standard (more reliable, better optimization)
```

### LinkedIn Strategy (B2B)

```
AUDIENCE TARGETING:
Job title: Target decision makers
- [Decision maker title 1, 2, 3]
- Example: VP of Marketing, CMO, Marketing Manager

Company size:
- Target companies with 100-1000+ employees
- Avoid too small (<50) or too large (less agile)

Seniority:
- Senior (C-level, VP, Director): Buying decision authority
- Manager (higher conversion rate)
- Entry-level (lower intent, lower budget)

Company industry:
- Target specific industries (vs. all industries)
- Example: "Software development", "Technology"

---

CREATIVE STRATEGY:
Professional but personable:
- Avoid overly polished (people skip)
- Include people (headshots, team photos)
- Use client logos (social proof)

CTA recommendations:
- "Learn more" (softest)
- "Get started" (medium)
- "Book a demo" (hardest, best for qualified leads)
- "Download guide" (low commitment, good for top of funnel)

---

LEAD GEN FORMS:
Auto-fill from LinkedIn profile:
- Higher conversion (prefilled = easier)
- Longer form okay (you're asking professionals)
- Ask for: Email, phone, company, title, budget
- Avoid: Password, credit card

---

BUDGET ALLOCATION:
- Smaller budgets go further ($500-1K/month can work)
- Start with defined audience, not broad
- CPL (cost per lead) typically higher than Meta ($50-200 vs. $10-50)
- But lead quality higher (B2B qualified vs. consumer)
```

### TikTok Strategy

```
TARGETING:
Interests:
- Interest in [category] (e.g., "Fitness", "Productivity")
- Behaviors (e.g., "Tech savvy users", "High spenders")

Demographics:
- Age: [Target age] (TikTok skews younger)
- Gender: [All / M / F]

Custom audiences:
- Upload customer list (pixel-based or email)
- Lookalike from customer list

Lookalike:
- 1% = most similar to customer
- 5% = broader similarity
- 10% = even broader
- Test all to find sweet spot

---

CREATIVE STRATEGY:
Authentic > polished:
- Avoid corporate ads
- Use native TikTok sound (trendy, familiar)
- Include captions (50% watch without sound)
- Hook in first 3 seconds

Native formats:
- In-feed video (6-34 seconds, vertical)
- Brand takeover (5-10 seconds, full screen)
- Branded hashtag challenge (encourage UGC)

CTA style:
- Subtle (TikTok users hate hard sell)
- "Check out our [thing]" (soft)
- "Swipe up" (if qualified account)
- "Link in bio" (direct to landing page)

---

BUDGET ALLOCATION:
- CPM: $2-5 (cheaper than Meta, Facebook)
- CPC: $0.30-0.50
- CPA: $5-20 (depending on conversion)
- Good for awareness and reach, less proven for direct sales
```

---

## Expected Campaign Results

**By End of Week 1:**
- Campaigns live and receiving traffic
- Early indicators: CTR, CPC (are they in range?)
- Potential issues: Disapprovals, high CPC, low CTR
- Action: Iterate on copy, optimize bids

**By End of Week 2:**
- Early conversion data (if you have conversions)
- CPA vs. target: On track or high?
- ROAS (if e-commerce): Profitable or negative?
- Action: Scale winners, pause losers

**By End of Month:**
- Statistically significant data (50-100 conversions)
- Full picture: Which audience, creative, platform works best?
- Performance: Hitting KPIs or not?
- Action: Optimize based on learnings, scale winners 20-50%

**By End of Quarter (3 months):**
- Proven channel performance
- Top performing audience/creative/platform identified
- Budget allocation optimized
- Performance: 3-5x improvement from initial launch (typical)

---

## Summary: Campaign Launch Checklist

```
WEEK 1: Setup
Ã¢â€“Â¡ Define strategy (objectives, audiences, budget)
Ã¢â€“Â¡ Create audiences (all segments)
Ã¢â€“Â¡ Create ad copy variations (5-10 per stage)
Ã¢â€“Â¡ Create campaigns (proper structure)
Ã¢â€“Â¡ Setup conversion tracking

WEEK 2: Launch
Ã¢â€“Â¡ Final review (all campaigns, pixels, tracking)
Ã¢â€“Â¡ Enable campaigns (staggered, 25% budget)
Ã¢â€“Â¡ Monitor (hourly first 24 hours, then daily)
Ã¢â€“Â¡ Fix issues (disapprovals, errors, tracking problems)

WEEK 3: Optimize
Ã¢â€“Â¡ Analyze first data (CTR, CPC, early conversions)
Ã¢â€“Â¡ Pause underperformers (<0.5% CTR)
Ã¢â€“Â¡ Scale winners (increase budget for top performers)
Ã¢â€“Â¡ Test new creatives (new variations based on learnings)
Ã¢â€“Â¡ Increase budgets toward target (ramp up 25-50% if on track)

WEEK 4: Scale
Ã¢â€“Â¡ Full budget reached (assuming performance is okay)
Ã¢â€“Â¡ Run weekly optimization (pause losers, scale winners)
Ã¢â€“Â¡ Start monthly analysis (full dataset available)
Ã¢â€“Â¡ Plan Q2 strategy (what worked, what to repeat)
```

Expected outcome: Profitable customer acquisition channel within 4-8 weeks.
