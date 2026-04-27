---
name: data-intelligence-swarm
description: Coordinates Data Analytics, Market Research, Customer Feedback, and Investor Relations agents for data-driven business decisions
source_group: swarms
imported_from: data-intelligence-swarm.md
swarm_name: data-intelligence-swarm
agents: [data-analytics-agent, market-research-agent, customer-feedback-agent, investor-relations-agent, performance-review-agent]
version: 1.0.0
---

# Data Intelligence Swarm

## Overview
The Data Intelligence Swarm transforms raw data into actionable insights and strategic decisions. It connects data sources, analyzes customer behavior and market trends, gathers feedback, and communicates results to stakeholders (board, investors, leadership). This swarm is the "nerve system" of data-driven companies.

**Use Case**: "Build data-driven culture where every decision is backed by metrics and insights"

**Timeline**: 8-12 weeks to full data infrastructure, ongoing insights
**Effort**: Equivalent to 2 data analysts + 1 data engineer for 12 weeks
**Output**: Integrated analytics platform, weekly insights, monthly board reports, investor updates

## Agents in This Swarm

### 1. Data Analytics Agent
**Role**: Data infrastructure and metrics dashboarding
**Produces**: Dashboards, reports, metric definitions
**Duration**: Ongoing
**Output Files**:
- Data warehouse setup (PostgreSQL, Snowflake, or BigQuery)
- ETL pipelines (ingest data from sources)
- Metric definitions (what is churn rate? how calculated?)
- Executive dashboard (CEO-level KPIs)
- Cohort analysis (retention by customer segment)
- Forecast models (revenue projections)

**Triggers Next**: Market Research (market context for metrics), Customer Feedback (segment feedback by cohort), Investor Relations (data for pitch deck)

### 2. Market Research Agent
**Role**: Market context and competitive intelligence
**Produces**: Market sizing, competitor tracking, trend analysis
**Duration**: Monthly analysis
**Output Files**:
- TAM/SAM/SOM updates (is market growing?)
- Competitive benchmarking (how are we doing vs. competitors?)
- Industry trends (what's happening in market?)
- Customer segments analysis (which segments growing?)
- White space opportunities (new markets to enter?)

**Triggers Next**: Customer Feedback (validate market insights), Investor Relations (market size for board)

### 3. Customer Feedback Agent
**Role**: Customer voice and sentiment
**Produces**: NPS tracking, feature prioritization, churn insights
**Duration**: Monthly surveys, ongoing
**Output Files**:
- NPS scores (customer satisfaction trend)
- Feature prioritization (RICE scoring)
- Churn analysis (why customers leave?)
- Cohort sentiment (how happy is each segment?)
- Feedback themes (what's repeated?)

**Triggers Next**: Data Analytics (segment feedback data), Performance Review (team compensation)

### 4. Investor Relations Agent
**Role**: Stakeholder reporting and fundraising
**Produces**: Investor updates, pitch decks, financial projections
**Duration**: Monthly updates, quarterly board
**Output Files**:
- Monthly investor letter (progress, metrics, asks)
- Quarterly board deck (performance, strategy, plans)
- Financial projections (revenue model)
- Investor dashboard (updated cap table, ARR trends)
- Annual report (year-end summary)

**Triggers Next**: Data Analytics (metrics for reports), Performance Review (comp discussions with board)

### 5. Performance Review Agent
**Role**: Team metrics and accountability
**Produces**: Team scorecards, OKRs, comp calculations
**Duration**: Quarterly OKR reviews, annual performance reviews
**Output Files**:
- OKR tracking (are teams hitting goals?)
- Team KPIs (sales quota, support ticket time, etc.)
- Individual performance scores
- Compensation data (fair pay based on metrics)
- Promotions/recognition (who's excelling?)

**Triggers Next**: Data Analytics (team performance metrics), Investor Relations (board discussions)

## Orchestration Flow

```
Week 1-4: Setup
Ã¢â€Å“Ã¢â€â‚¬ Data Analytics Ã¢â€ â€™ [Build warehouse, integrate data sources]
Ã¢â€Å“Ã¢â€â‚¬ Market Research Ã¢â€ â€™ [Size market, analyze competitors]
Ã¢â€â€Ã¢â€â‚¬ Customer Feedback Ã¢â€ â€™ [Set up NPS surveys, feedback database]

Week 5-8: Analysis & Integration
Ã¢â€Å“Ã¢â€â‚¬ Data Analytics Ã¢â€ â€™ [Create dashboards, metric definitions]
Ã¢â€Å“Ã¢â€â‚¬ Market Research Ã¢â€ â€™ [Benchmark vs. competitors, trends]
Ã¢â€Å“Ã¢â€â‚¬ Customer Feedback Ã¢â€ â€™ [Analyze NPS, segment feedback]
Ã¢â€â€Ã¢â€â‚¬ Investor Relations Ã¢â€ â€™ [Draft first investor update]

Week 9-12: Insights & Action
Ã¢â€Å“Ã¢â€â‚¬ Data Analytics Ã¢â€ â€™ [Weekly insights, forecasts]
Ã¢â€Å“Ã¢â€â‚¬ Market Research Ã¢â€ â€™ [Monthly market brief]
Ã¢â€Å“Ã¢â€â‚¬ Customer Feedback Ã¢â€ â€™ [Feature prioritization]
Ã¢â€Å“Ã¢â€â‚¬ Performance Review Ã¢â€ â€™ [Team OKRs with metrics]
Ã¢â€â€Ã¢â€â‚¬ Investor Relations Ã¢â€ â€™ [Monthly board updates]

Ongoing (Month 4+)
Ã¢â€Å“Ã¢â€â‚¬ Weekly dashboards (live metrics)
Ã¢â€Å“Ã¢â€â‚¬ Monthly investor letters (email to stakeholders)
Ã¢â€Å“Ã¢â€â‚¬ Quarterly board meetings (full data review)
Ã¢â€Å“Ã¢â€â‚¬ Quarterly OKR reviews (team progress)
Ã¢â€â€Ã¢â€â‚¬ Annual strategy planning (using historical data)
```

## Example Workflow: "Build Monthly Data Intelligence Cycle"

### Week 1 of Month: Data Analytics Publishes Dashboard
**Metrics Dashboard**:
```
Revenue Dashboard
- MRR: $245K (Ã¢â€ â€˜ 12% from last month)
- ARR: $2.94M (Ã¢â€ â€˜ 8% YoY growth)
- New customers: 23 (Ã¢â€ â€˜ 15% from last month)
- Customer churn: 2.3% monthly (target: <2%)
- Cohort 90-day retention: 87% (healthy)

Unit Economics
- CAC (Customer Acquisition Cost): $450 (up from $400)
- LTV (Lifetime Value): $8,400 (stable)
- LTV:CAC ratio: 18.7:1 (excellent, >3:1 is good)
- Payback period: 2.1 months (target: <12 months)

Segments (Who's buying?)
- Enterprise (>1000 employees): 8 customers, $102K MRR
- Mid-market (100-1000): 35 customers, $98K MRR
- SMB (<100): 180 customers, $45K MRR
- Growth rates: Enterprise 25%, Mid-market 15%, SMB 8%
```

**Key Insights**:
- Enterprise segment growing fastest (25% MoM), focus sales there
- Churn ticked up (2.3% vs 2.0% target), investigate why
- CAC increased (higher ad spend?), check marketing efficiency

### Week 2 of Month: Customer Feedback Publishes NPS Results
**NPS Score**: 42 (up from 40 last month)
- Promoters (9-10): 45% ("amazing product", "great support")
- Passives (7-8): 30% ("works well", "could be better")
- Detractors (0-6): 25% ("expensive", "missing features", "churn risks")

**Churn Analysis** (from detractor feedback):
- Top reason: "Product missing [Feature X]" (40% of detractors)
- Second reason: "Price increased" (30% of detractors)
- Third reason: "Switched to [Competitor]" (20%)

**Action**: Feature X moves to top of roadmap. Announce timeline to at-risk customers.

### Week 3 of Month: Market Research Publishes Market Brief
**Market Context**:
- Market growing 18% YoY (good tailwind)
- Competitor A raised $50M (expansion threat)
- Industry event next month (opportunity to sponsor)
- New regulation (might affect pricing model)

**Competitive Benchmarking**:
| Metric | Us | Competitor A | Competitor B |
|--------|----|--------------|----|
| ARR | $2.94M | $50M | $15M |
| Growth Rate | 8% | 30% | 15% |
| CAC | $450 | $300 | $550 |
| Price | $1000/mo avg | $1500/mo | $800/mo |

**Insights**:
- Competitor A growing faster (raised capital), increasing price pressure
- We're mid-market on pricing (defend quality story vs. Competitor B)
- Market has room for multiple winners (still early market)

### Week 4 of Month: Performance Review Publishes Team Scorecards
**Sales Team Metrics**:
- Sales quota: $250K/month
- Actual: $245K/month (98% of target)
- Growth: 12% MoM (exceeding growth targets)
- Sales cycle: 45 days (down from 60, improving)

**Product Team Metrics**:
- Delivery: 10 features shipped (vs. 8 planned, over-delivery)
- Quality: 0 critical bugs (target met)
- User satisfaction: NPS +15 from feature improvements

**Marketing Team Metrics**:
- Lead generation: 150 leads (vs. 120 target)
- CAC: $450 (vs. $400 target, slightly above)
- Conversion: 15% (vs. 12% target, beating)

**Recognition**: Sales team exceeded quota in tough month, Product shipped features early, Marketing beat targets despite CAC increase.

### Week 4 of Month: Investor Relations Publishes Monthly Update
**Email to Board & Investors**:

Subject: "[Company] Monthly Update - [Month]"

Headline: "Reached $2.94M ARR with strong product momentum"

Metrics:
- MRR: $245K (Ã¢â€ â€˜12% MoM, Ã¢â€ â€˜8% YoY)
- New customers: 23 (Ã¢â€ â€˜15%)
- NPS: 42 (Ã¢â€ â€˜2 points, trending up)
- Churn: 2.3% (Ã¢â€ â€˜ from 2.0%, investigating)
- Cash: $1.2M remaining (11-month runway)

Key Wins This Month:
1. Launched [Feature] (top customer request)
2. Entered [New vertical] (expanded addressable market)
3. Hit NPS of 42 (industry avg 35)

Challenges:
1. Churn ticked up (price-sensitive customers). Mitigation: [action]
2. CAC increased (increased ad spend). Expected given growth push.

Looking Ahead:
- Focus: Enterprise segment (25% growth)
- Ship: [Feature] (estimated impact +2% churn reduction)
- Fundraise: Series B (targeting Q3 2024)

How You Can Help:
- Introductions to enterprise prospects in [vertical]
- Advice on Series B positioning vs. [Competitor A]

---

### Month-End: Complete Intelligence Report
**Integrated Analysis**:

**What We Learned**:
1. Enterprise segment opportunity (25% growth, high CAC justifiable)
2. Feature gap is real (40% of churn mentions Feature X)
3. Market growing (but competitors raising capital, pace accelerating)
4. Team executing well (beating targets despite challenges)

**What We Should Do**:
1. **Immediate** (this month):
   - Increase sales effort in Enterprise
   - Announce Feature X roadmap (retain at-risk churn customers)
   - Raise CAC budget (ROI still excellent at 18.7:1 LTV:CAC)

2. **Next Quarter**:
   - Launch Feature X (reduce churn by estimated 2%)
   - Enter [new vertical] (expand TAM)
   - Prepare Series B materials (market is hot, should fundraise)

3. **Next Year**:
   - Potential Series B ($5M raise, expand enterprise sales)
   - Build data warehouse (current system struggling with scale)
   - Hire data analyst (insights demand exceeds one person's capacity)

**Data-Driven Decisions**:
- All decisions backed by metrics, not hunches
- Churn analysis drove Feature X prioritization (not guessing)
- NPS trending up (confidence in customer satisfaction)
- Team OKRs tied to metrics (clear accountability)

## When to Use This Swarm

**Scenarios**:
- Scaling company (need visibility into metrics at scale)
- Data-driven culture (decisions based on data, not opinions)
- Fundraising (need compelling data for investors)
- Team growth (need way to measure performance fairly)
- Market turbulence (need to understand dynamics quickly)

**Success Indicators**:
- Ã¢Å“â€œ Weekly metrics published (all stakeholders see data)
- Ã¢Å“â€œ Monthly investor updates (consistent communication)
- Ã¢Å“â€œ Data-driven decisions (leadership can cite metrics)
- Ã¢Å“â€œ Reduced churn (insights lead to action)
- Ã¢Å“â€œ Improved team accountability (metrics tie to comp)

## Resource Requirements

| Agent | Effort | Owner | Timeline |
|-------|--------|-------|----------|
| Data Analytics | 100 hrs setup, 20 hrs/week | Data engineer | 4 weeks |
| Market Research | 40 hrs/month | Analyst | 2 weeks |
| Customer Feedback | 30 hrs/month | Product | Ongoing |
| Investor Relations | 20 hrs/month | Finance/CEO | Ongoing |
| Performance Review | 30 hrs/quarter | HR/Ops | Ongoing |

**Total**: 200+ hrs setup, 50+ hrs/month ongoing

## Success Metrics

**Data Quality**:
- Latency (how current is data?): <1 day (real-time ideal)
- Accuracy (is data correct?): >95% (spot-checked monthly)
- Coverage (what % of company data captured?): 90%+

**Usage**:
- % of decisions with data backing: 80%+ (up from 40% baseline)
- Weekly dashboard views: 100+ (everyone uses it)
- Monthly insights acted on: 70%+ (recommendations implemented)

**Business Impact**:
- Churn reduction: 2.3% Ã¢â€ â€™ 1.8% (insights led to action)
- Revenue growth: 8% Ã¢â€ â€™ 12% (faster after data-driven decisions)
- NPS improvement: 35 Ã¢â€ â€™ 42 (customer satisfaction)
- Fundraising: Series B data room ready (confidence in metrics)

## Handoffs

```
Data Analytics Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Dashboards + Metrics]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Market Research Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Competitive context]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Customer Feedback Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Segment analysis]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Investor Relations Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Board reports]
     Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Performance Review Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Team metrics]
```

## Launch Checklist

- [ ] Data warehouse set up (single source of truth)
- [ ] ETL pipelines running (data flowing daily)
- [ ] Metric definitions documented (everyone agrees on KPIs)
- [ ] Executive dashboard live (CEO has key metrics)
- [ ] NPS surveys sending (quarterly minimum)
- [ ] Market tracking system in place (competitive intelligence)
- [ ] Monthly reporting automated (investor updates scheduled)
- [ ] Team OKRs tied to metrics (accountability)
- [ ] Weekly metrics review meeting scheduled (cadence)
- [ ] Annual planning uses historical data (data-driven strategy)

## Next Steps

1. **Run Data Analytics Agent** (build warehouse, integrate sources)
2. **Define metrics** (what matters to your business?)
3. **Build dashboards** (visualize key metrics)
4. **Monthly reporting cycle** (investor updates, board meetings)
5. **Use data for decisions** (change org culture)
6. **Celebrate wins** (use data to recognize achievements)

---

**Estimated ROI**: 2-3x return within 12 months (better decisions = 10-15% higher growth, better retention, more informed fundraising)
