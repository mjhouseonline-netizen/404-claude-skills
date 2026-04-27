---
name: sales-swarm
description: Coordinates Lead Generation, Sales Automation, Proposal Writer, Pricing Strategy, and CRM Sync agents for complete revenue pipeline
source_group: swarms
imported_from: sales-swarm.md
swarm_name: sales-swarm
agents: [lead-generation-agent, proposal-writer-agent, pricing-strategy-agent, api-integration-agent, performance-review-agent]
version: 1.0.0
---

# Sales Swarm

## Overview
The Sales Swarm orchestrates all revenue-generating functions. It identifies prospects, automates outreach, qualifies leads, designs proposals, optimizes pricing, and closes deals. This swarm handles the complete sales cycle from cold outreach to contract signature.

**Use Case**: "Scale a sales-driven company from 0 to $1M ARR in 12 months"

**Timeline**: 3-6 months to full execution
**Effort**: Equivalent to 2-3 sales team members for 6 months
**Output**: Sales playbook, 100+ qualified leads/month, 10-20 closed deals/month at $5-10K ACV

## Agents in This Swarm

### 1. Lead Generation Agent
**Role**: Prospect identification and outreach
**Produces**: Qualified pipeline (100+ leads/month)
**Duration**: Ongoing
**Output Files**:
- Prospect research database (10K+ companies categorized)
- Multi-touch email sequences (tested, proven cadences)
- Lead scoring model (fit + engagement)
- CRM integration (auto-create contacts)

**Triggers Next**: Proposal Writer Agent (qualified leads ready for demo)

### 2. Proposal Writer Agent
**Role**: Deal closure and contract preparation
**Produces**: Professional proposals (48-hour turnaround)
**Duration**: Ongoing
**Output Files**:
- SOW template (customizable)
- Contract terms (legal-reviewed)
- Proposal samples (by use case)
- Negotiation playbook

**Triggers Next**: Pricing Strategy Agent (if price negotiation needed)

### 3. Pricing Strategy Agent
**Role**: Revenue optimization and deal structuring
**Produces**: Pricing models, discount policies, willingness-to-pay data
**Duration**: Quarterly pricing review
**Output Files**:
- Pricing tier analysis (optimal structure)
- A/B test results (pricing sensitivity)
- Customer segmentation (by willingness-to-pay)
- Discount policy (what's permissible)

**Triggers Next**: API Integration Agent (configure CRM pricing fields)

### 4. API Integration Agent
**Role**: CRM synchronization and data flow
**Produces**: Real-time CRM updates, automated workflows
**Duration**: Ongoing
**Output Files**:
- CRM-to-Accounting sync (auto-record deals)
- Lead scoring automation (feed into CRM)
- Email-CRM integration (log all outreach)
- Proposal-CRM integration (auto-create followup tasks)

**Triggers Next**: Performance Review Agent (sales compensation based on deals)

### 5. Performance Review Agent
**Role**: Sales compensation and incentive alignment
**Produces**: Fair comp structure, KPI tracking, commission calculations
**Duration**: Quarterly reviews
**Output Files**:
- Sales KPI dashboard (reps can see their metrics)
- Commission calculations (transparent, motivating)
- Sales quota allocation (fair, achievable)
- Top performer recognition

## Orchestration Flow

```
Month 1: Foundation
Ã¢â€Å“Ã¢â€â‚¬ Lead Generation Ã¢â€ â€™ [Build prospect database]
Ã¢â€Å“Ã¢â€â‚¬ Pricing Strategy Ã¢â€ â€™ [Define pricing model]
Ã¢â€â€Ã¢â€â‚¬ API Integration Ã¢â€ â€™ [Set up CRM integrations]

Month 2: Execution
Ã¢â€Å“Ã¢â€â‚¬ Lead Generation Ã¢â€ â€™ [Run 5-touch sequence to 100 prospects]
Ã¢â€Å“Ã¢â€â‚¬ Proposal Writer Ã¢â€ â€™ [Create SOW templates]
Ã¢â€â€Ã¢â€â‚¬ Pricing Strategy Ã¢â€ â€™ [Test pricing with early customers]

Month 3: Sales
Ã¢â€Å“Ã¢â€â‚¬ Lead Generation Ã¢â€ â€™ [Generate 20 qualified leads]
Ã¢â€Å“Ã¢â€â‚¬ Proposal Writer Ã¢â€ â€™ [Close 5-10 deals]
Ã¢â€Å“Ã¢â€â‚¬ Pricing Strategy Ã¢â€ â€™ [Refine based on market feedback]
Ã¢â€Å“Ã¢â€â‚¬ API Integration Ã¢â€ â€™ [Auto-update CRM with deal details]
Ã¢â€â€Ã¢â€â‚¬ Performance Review Ã¢â€ â€™ [Track sales KPIs]

Month 4-6: Scaling
Ã¢â€Å“Ã¢â€â‚¬ Lead Generation Ã¢â€ â€™ [100+ leads/month, automated sequence]
Ã¢â€Å“Ã¢â€â‚¬ Proposal Writer Ã¢â€ â€™ [48-hour proposal turnaround]
Ã¢â€Å“Ã¢â€â‚¬ Pricing Strategy Ã¢â€ â€™ [Optimize discount strategy]
Ã¢â€Å“Ã¢â€â‚¬ API Integration Ã¢â€ â€™ [Dashboard showing full funnel]
Ã¢â€â€Ã¢â€â‚¬ Performance Review Ã¢â€ â€™ [Monthly comp calculations]
```

## Example Workflow: "Close First $1M ARR Customer"

### Step 1: Lead Generation Agent (Week 1)
**Input**: Target ICP (mid-market SaaS, 50-200 employees, Series B funding)
**Output**:
- 50 prospects researched (LinkedIn, Crunchbase, website scraping)
- 50 decision-makers identified (VP Sales/VP Marketing)
- Email sequence drafted (5-touch, proven copy)
- Leads imported to CRM (auto-scored: 100 = MQL)

**Decision**: Which 50 prospects to focus on? (budget constraints, timing, geography)

### Step 2: Lead Generation Agent (Weeks 2-6)
**Execution**: Send email sequence
- Email 1 (day 1): Personalized intro + problem statement
- Email 2 (day 3): Case study of similar company
- Email 3 (day 5): Different angle or question
- Email 4 (day 7): Last touch before moving to nurture

**Results**:
- Open rate: 30% (15/50 opened)
- Click rate: 5% (2-3 clicked link)
- Reply rate: 2% (1 replied)
- **MQL to SAL**: 1 Sales Accepted Lead

### Step 3: Sales Conversation (Week 7)
**Setup**: Sales rep calls the replier
- Qualify BANT (Budget, Authority, Need, Timeline)
- Uncover pain point (custom use case)
- Schedule demo (if qualified)

**Decision**: Is this a qualified opportunity? (yes = move to proposal)

### Step 4: Proposal Writer Agent (Week 8)
**Input**:
- Customer name and company size
- Pain point identified
- Feature set needed
- Budget indication: "$50K-100K annual"

**Output**:
- Custom proposal (SOW)
- Implementation timeline (8-week project)
- Pricing options:
  - Option A: $50K annually ($4,166/month)
  - Option B: $75K annually ($6,250/month, includes training)
  - Option C: $100K annually ($8,333/month, includes dedicated support)

**Decision**: Which tier does customer pick? (will inform follow-up negotiation)

### Step 5: Pricing Strategy Agent (If Price Negotiation Needed)
**Scenario**: Customer wants $40K, you're asking $50K

**Analysis**:
- Your cost: $15K annually (implementation + support)
- Margin: ($50K - $15K) / $50K = 70% (healthy)
- Min acceptable: $35K (still 57% margin)
- Walk-away: $30K (too low)

**Negotiation**:
- Offer annual prepay discount (save 10% if prepaid = $45K)
- Or offer payment plan (reduce to $45K with 3-year commitment)
- Or reduce scope (fewer features, lower price)

**Result**: Close at $45K (split the difference, relationship preserved)

### Step 6: API Integration Agent
**Setup**: Auto-sync deal to accounting system
- Record new customer in database
- Create invoice (due net-30)
- Auto-email customer with contract
- Set renewal reminder (12 months)

**Automation**: Next quarter, auto-invoice without manual work

### Step 7: Performance Review Agent (Monthly)
**Tracking**: Sales rep KPIs
- Leads generated: 50 (target: 100/month)
- Qualified leads: 1 (target: 2-3/month)
- Deals closed: 1 deal Ãƒâ€” $45K = $45K MRR
- Sales commission: $45K Ãƒâ€” 20% = $9K (distributed per deal)

**Recognition**: "Top performer this month: Closed largest deal to date ($45K ACV)"

## When to Use This Swarm

**Scenarios**:
- Starting sales function (need to build playbook from scratch)
- Scaling from 5 to 50 customers (need to optimize funnel)
- Launching new product line (new target market, new pricing)
- Sales team struggling (audit funnel, find bottlenecks)
- Entering new geography (adapt ICP, messaging, pricing)

**Success Indicators**:
- Ã¢Å“â€œ Consistent pipeline (100+ leads/month)
- Ã¢Å“â€œ Improved close rate (baseline 10% Ã¢â€ â€™ 20% after swarm)
- Ã¢Å“â€œ Faster sales cycle (baseline 6mo Ã¢â€ â€™ 3mo after swarm)
- Ã¢Å“â€œ Higher pricing (baseline $20K ACV Ã¢â€ â€™ $50K ACV after swarm)
- Ã¢Å“â€œ Reduced CAC (baseline $10K Ã¢â€ â€™ $5K after swarm)

## Resource Requirements

| Agent | Effort | Owner | Tools Needed |
|-------|--------|-------|--------------|
| Lead Generation | 20 hrs/mo | Marketing/Sales | LinkedIn Sales Navigator, Apollo, CRM |
| Proposal Writer | 5 hrs per deal | Sales | Word/Google Docs, Proposify |
| Pricing Strategy | 20 hrs/quarter | Finance/Product | Pricing models, customer surveys |
| API Integration | 40 hrs setup, 5 hrs/mo | Engineering | Zapier, custom scripts |
| Performance Review | 10 hrs/quarter | Sales Manager | CRM, spreadsheet |

**Total Effort**: ~60 hrs first month, ~10 hrs/month thereafter
**Cost Savings**: 1 sales rep = $100K/year (this swarm = ~$30K value)

## Success Metrics

### By Phase

**Phase 1 (Weeks 1-4): Foundation**
- Ã¢Å“â€œ Pricing model finalized (3 tiers defined)
- Ã¢Å“â€œ Prospect list built (100+ targets)
- Ã¢Å“â€œ Email sequences tested (drafts ready)

**Phase 2 (Weeks 5-8): Execution**
- Ã¢Å“â€œ First prospects contacted
- Ã¢Å“â€œ First meetings scheduled
- Ã¢Å“â€œ Proposal template created

**Phase 3 (Weeks 9-12): Results**
- Ã¢Å“â€œ First deal closed (any size)
- Ã¢Å“â€œ Pipeline of 5-10 qualified opportunities
- Ã¢Å“â€œ Sales playbook documented

**Phase 4 (Months 4-6): Scaling**
- Ã¢Å“â€œ 100+ leads/month in pipeline
- Ã¢Å“â€œ 5-10 new customers/month
- Ã¢Å“â€œ $100K-250K MRR from new business

## Handoffs & Dependencies

```
Lead Gen Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Prospects Database] Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Proposal Writer
     Ã¢â€ â€œ                                    Ã¢â€ â€œ
     Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [CRM] Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ API Integration Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Pricing Strategy
           Ã¢â€ â€˜                                Ã¢â€ â€œ
           Ã¢â€â€Ã¢â€â‚¬ Performance Review (comp calculations)
```

**Critical Path**:
1. Pricing Strategy (first, defines what you sell for)
2. Lead Generation (second, find buyers)
3. Proposal Writer (third, close deals)
4. API Integration (fourth, automate)
5. Performance Review (fifth, measure results)

**Slack**: Some agents can overlap (e.g., pricing + lead gen in parallel)

## Troubleshooting

**Problem**: Low reply rate from email outreach
- Check: Email testing (subject lines compelling?)
- Check: List quality (right target companies?)
- Check: Timing (when are you sending?)
- Fix: A/B test subject lines, refine target list

**Problem**: Long sales cycle (6+ months)
- Check: Sales process clear? (how many meetings before proposal?)
- Check: Authority confirmed? (talking to decision-maker?)
- Check: Budget confirmed? (customer can afford offer?)
- Fix: Add BANT qualification earlier in process

**Problem**: Pricing too high (low conversion)
- Check: Is customer price-sensitive? (different segment?)
- Check: Willingness-to-pay research (did we survey customers?)
- Fix: Segment by budget size, offer lower tier

**Problem**: Deals not closing despite proposals
- Check: Are proposal terms clear? (legal reviewed?)
- Check: Follow-up cadence? (are you following up?)
- Check: Negotiation stalled? (what's the objection?)
- Fix: Shorter proposals, faster follow-up, more negotiation flexibility

## Launch Checklist

- [ ] Pricing model finalized (3-5 tiers defined)
- [ ] ICP documented (ideal customer profile)
- [ ] Target prospect list built (100+ companies)
- [ ] Email sequences drafted (5-touch minimum)
- [ ] Proposal template created (SOW, pricing options)
- [ ] CRM set up (fields, integrations, workflow)
- [ ] Sales rep roles defined (who owns each stage?)
- [ ] Compensation plan approved (commission structure)
- [ ] Daily tracking in place (pipeline visibility)
- [ ] Weekly sales meeting scheduled (progress + blockers)

## Next Steps

1. **Run Lead Generation Agent** to build prospect database
2. **Finalize Pricing Strategy** (what are your tiers?)
3. **Brief Sales Team** on process and tools
4. **Launch first outreach sequence** (to 50 initial prospects)
5. **Weekly reviews** (track: leads, meetings, proposals, deals)
6. **Iterate based on results** (refine messaging, targeting, pricing quarterly)

---

**Estimated ROI**: 3-5x return on swarm execution effort within 6 months (close $250K-$500K in deals)
