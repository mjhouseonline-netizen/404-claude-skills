---
name: research-swarm
description: Coordinates Research Desk, Competitor Intel, and GraphRAG Builder for deep market intelligence with knowledge graph construction
source_group: swarms
imported_from: research-swarm.md
swarm_name: research-swarm
agents: [research-desk-agent, competitor-intel-agent, graphrag-builder-agent]
version: 1.0.0
---

# Research Swarm

## Overview
The Research Swarm conducts deep market intelligence by combining multi-source research, competitive analysis, and knowledge graph construction. It enables data-driven decision-making with comprehensive market understanding and structured intelligence for future reference.

**Use Case**: "Deep market intelligence with knowledge graph construction for ongoing reference"

**Timeline**: 3-4 weeks
**Effort**: Replaces months of manual research
**Output**: Searchable knowledge base + competitive strategy document

## Agents in This Swarm

### 1. Research Desk Agent
**Role**: Multi-source research & synthesis
**Output**: Market research report with validated sources, trends, opportunities
**Duration**: 2 weeks

### 2. Competitor Intel Agent
**Role**: Competitive landscape mapping
**Output**: Competitor profiles, SWOT analysis, differentiation opportunities
**Duration**: 2 weeks

### 3. GraphRAG Builder Agent
**Role**: Knowledge graph construction
**Output**: Searchable knowledge graph of entities and relationships
**Duration**: 1-2 weeks

## Orchestration Flow

```
Research Desk Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Market trends, opportunities, data points
     Ã¢â€ â€œ
Competitor Intel Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Competitor profiles, SWOT, positioning
     Ã¢â€ â€œ
GraphRAG Builder Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Combine all findings into searchable graph
```

## Example Workflow: "Market Entry into New Vertical"

### Step 1: Research Desk Agent (2 weeks)
**Input**:
- Market: [New vertical/geography]
- Focus: [Market size, growth rate, key players, trends]
- Sources: [Academic, analyst reports, news, social]

**Output**:
- Market size: $[X]B, growing [Y]% annually
- Key trends: [Trend 1, 2, 3] with supporting data
- Customer pain points: [Top 5 problems being solved]
- Regulatory environment: [Key regulations, compliance needs]
- Technology stack: [Common tools, platforms, integrations]
- Key players: [Dominant vendors, emerging players]

**Example Findings**:
- Market size: $5B TAM, $200M in the specific segment
- Growth: 25% CAGR over next 5 years
- Trends: Shift from [old solution] to [new solution], AI integration accelerating, consolidation happening
- Pain points: Cost, integration difficulty, lack of [feature], poor customer support
- Regulation: GDPR compliance required, industry-specific data rules
- Tech stack: [Tool A] used by 60% of customers, [Tool B] by 40%

### Step 2: Competitor Intel Agent (2 weeks)
**Input** (informed by Research Desk findings):
- Market: [Vertical identified by Research Desk]
- Competitors: [Top 5-7 identified by Research]
- Focus: Pricing, positioning, messaging, product features

**Output**:
- Competitor profiles: [Name, market position, strengths/weaknesses]
- Pricing matrix: [Comparison of all tiers]
- Feature comparison: [Feature matrix showing unique differentiators]
- Ad spend estimates: [Annual spend per competitor]
- Content strategy: [Topics, frequency, engagement]
- Tech stack: [What they use internally]

**Example Findings**:
- [Competitor A]: Market leader, $[X]M revenue, strong brand, weak UX
- [Competitor B]: Fastest growing, focuses on [market segment], high customer satisfaction
- [Competitor C]: Legacy player, slipping market share, poor product roadmap
- Pricing range: $[Low] to $[High]/month (clear gap at $[YourPrice])
- Unique opportunities: No one offering [feature X] or [service Y]

### Step 3: GraphRAG Builder Agent (1-2 weeks)
**Input** (combining outputs from Research Desk + Competitor Intel):
- Entities: Competitors, customers, technologies, pain points, solutions
- Relationships: Competitors compete in segment X, use technology Y, solve problem Z
- Documents: Research reports, competitor analyses

**Output**:
- Knowledge graph with [N] entities and [M] relationships
- Query interface (ask questions like "Who are the top competitors in [segment]?")
- Clusters: [Vendor cluster A], [customer segment B], [technology stack C]
- Visualization: Interactive graph showing relationships

**Example Entities**:
- Competitors: [Company A], [Company B], [Company C]
- Customers: [Type 1], [Type 2], [Type 3]
- Technologies: [Tool A], [Tool B], [Tool C]
- Pain points: [Cost], [Complexity], [Integration], [Support]
- Solutions: [Feature X], [Service Y], [Approach Z]

**Example Relationships**:
- [Competitor A] competes-in [Market Segment X]
- [Customer Type A] uses [Technology B]
- [Competitor C] solves [Pain Point 1] better than [Competitor A]
- [Market Segment X] has pain-point [Cost Control]

### Step 4: Integration & Strategy

**Timeline**:
- Week 1-2: Research Desk researches, Competitor Intel researches (parallel)
- Week 3: GraphRAG Builder ingests all findings, builds graph
- Week 4: Team reviews, identifies strategy

**Strategy Document**:
- **Market opportunity**: [Your addressable market, growth opportunity]
- **Competitive positioning**: [How you differentiate from top 3 competitors]
- **Go-to-market strategy**: [Pricing, channels, messaging for this market]
- **Product strategy**: [Features to prioritize to win in this market]
- **Risk factors**: [Key risks, how to mitigate]

**Knowledge Graph Usage**:
- "Who are the key players in [segment]?" Ã¢â€ â€™ Graph shows relationships
- "What do customers in [vertical] care most about?" Ã¢â€ â€™ Shows pain point clusters
- "What's the tech stack for [customer type]?" Ã¢â€ â€™ Shows technology relationships
- "How does [Competitor A] compare to [Competitor B]?" Ã¢â€ â€™ Detailed comparison

## When to Use This Swarm

**Scenarios**:
- Entering new market (geography, vertical, customer segment)
- Preparing for competitive battle
- M&A due diligence (understand target industry)
- Product strategy (make informed roadmap decisions)
- Fundraising (understand market opportunity)

**User Personas**:
- Founder/CEO entering new market
- Product teams evaluating competitive landscape
- Investors analyzing market opportunity
- Strategic planning teams

## Resource Requirements

| Agent | Effort | Owner |
|-------|--------|-------|
| Research Desk | 60-80 hours | [Analyst or founder] |
| Competitor Intel | 40-60 hours | [Competitive analyst] |
| GraphRAG Builder | 20-30 hours | [Data analyst or engineer] |

**Total**: 120-170 hours (3-4 weeks FTE) vs. 2-3 months manual research

**Time Savings**: 50-70% reduction in research time

## Success Metrics

**Research Phase**:
- Ã¢Å“â€œ 20+ sources reviewed and validated
- Ã¢Å“â€œ Market size estimated with confidence interval
- Ã¢Å“â€œ 5+ key trends identified with supporting data
- Ã¢Å“â€œ Top 5 customer pain points documented
- Ã¢Å“â€œ Technology stack mapped

**Competitive Analysis**:
- Ã¢Å“â€œ 5-7 competitors profiled in detail
- Ã¢Å“â€œ Feature comparison matrix completed
- Ã¢Å“â€œ Pricing strategy understood (your optimal position identified)
- Ã¢Å“â€œ Differentiation angles identified (2-3 credible positions)
- Ã¢Å“â€œ Ad spend estimates calculated

**Knowledge Graph**:
- Ã¢Å“â€œ [N] entities created (competitors, customers, tech, pain points)
- Ã¢Å“â€œ [M] relationships mapped
- Ã¢Å“â€œ Graph queryable and useful
- Ã¢Å“â€œ Team can answer market questions in seconds

**Strategic Outcome**:
- Ã¢Å“â€œ Go-to-market strategy defined (positioning, pricing, messaging)
- Ã¢Å“â€œ Product roadmap informed by market feedback
- Ã¢Å“â€œ Confidence in market entry decision
- Ã¢Å“â€œ Competitive advantage identified and defensible

## Handoffs & Logic

```
Research Desk Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (market context)
     Ã¢â€ â€œ
Competitor Intel Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (competitive context)
     Ã¢â€ â€œ
GraphRAG Builder Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (combine into searchable graph)
```

**Information Flow**:
1. Research Desk provides market trends (informs competitor selection)
2. Competitor Intel uses market context to analyze competitors
3. GraphRAG Builder ingests both to create comprehensive knowledge base
4. Final output: Market strategy document + searchable knowledge graph

## Example Output

**Market Intelligence Report**

**Executive Summary**:
- Market opportunity: $[X]B TAM, [Y]% CAGR
- Entry strategy: Focus on [segment], compete on [differentiation]
- Competitive position: Clear whitespace at [price point], [feature set]
- Go-to-market: [Target customer], [Messaging], [Pricing]
- Risk: [Consolidated market, regulatory risk, tech risk]

**Market Landscape**:
- Players: [Leader], [Fast-grower], [Niche], [Emerging]
- Pricing: [Range], [Opportunities]
- Growth drivers: [Trend 1], [Trend 2], [Trend 3]
- Customer needs: [Top pain points]

**Competitive SWOT**:
- Our strengths: [vs. Competitor A], [vs. Competitor B]
- Our weaknesses: [vs. Competitor A], [vs. Competitor B]
- Opportunities: [Unserved needs], [Emerging segments]
- Threats: [Competitor moves], [Market consolidation], [Regulatory]

**Knowledge Graph**:
[Searchable interface with 50+ entities, 100+ relationships]
- Query: "Who are the leaders in [segment]?" Ã¢â€ â€™ [Results]
- Query: "What do [customers] need most?" Ã¢â€ â€™ [Results]
- Query: "What tech stack does [customer type] use?" Ã¢â€ â€™ [Results]

## Launch Checklist

- [ ] Research scope defined (market, timeline, focus areas)
- [ ] Research Desk research underway (gathering sources)
- [ ] Competitor list identified (5-7 primary competitors)
- [ ] Competitor Intel research underway (profiles, pricing, features)
- [ ] Research Desk report drafted (market findings)
- [ ] Competitor Intel report drafted (competitive findings)
- [ ] GraphRAG Builder ingests reports (knowledge graph created)
- [ ] Team reviews findings (strategy discussion)
- [ ] Go-to-market strategy documented
- [ ] Knowledge graph tested (team can query it)
- [ ] Handoff to product/exec team (ready for decision-making)

## Next Steps

1. **Define Research Scope**: Market to enter, key questions to answer
2. **Run Research Desk Agent**: 2-week research phase
3. **Run Competitor Intel Agent** (parallel): 2-week competitive analysis
4. **Run GraphRAG Builder Agent**: 1-2 week knowledge graph construction
5. **Team Review**: 2-hour strategy discussion
6. **Strategy Document**: Finalize market entry strategy
7. **Ongoing**: Use knowledge graph to answer market questions

---

**Expected Outcome**: Comprehensive market understanding, defensible competitive strategy, searchable knowledge base for future reference
