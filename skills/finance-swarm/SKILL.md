---
name: finance-swarm
description: Coordinates Financial Analyst, Tax Finance, and Research Desk agents for complete portfolio review with tax optimization and market research
source_group: swarms
imported_from: finance-swarm.md
swarm_name: finance-swarm
agents: [financial-analyst-agent, tax-finance-agent, research-desk-agent]
version: 1.0.0
---

# Finance Swarm

## Overview
The Finance Swarm orchestrates complete portfolio management by combining investment analysis, tax optimization, and market research. It ensures investment decisions are profitable AND tax-efficient while being informed by rigorous market intelligence.

**Use Case**: "Complete portfolio review with tax optimization and market research"

**Timeline**: 2-3 weeks
**Output**: Comprehensive portfolio strategy with specific actions and tax roadmap

## Agents in This Swarm

### 1. Research Desk Agent
**Role**: Market intelligence gathering
**Output**: Market trends, investment opportunities, risk factors
**Duration**: 1-2 weeks
**Triggers**: Financial Analyst (informs research questions), Tax Finance (identifies geopolitical risks)

### 2. Financial Analyst Agent
**Role**: Portfolio and security analysis
**Output**: Portfolio health assessment, valuation analysis, position recommendations
**Duration**: 1-2 weeks
**Triggers**: Tax Finance (uses recommendations for tax planning)

### 3. Tax Finance Agent
**Role**: Tax optimization and planning
**Output**: Tax strategy, quarterly estimates, deduction identification
**Duration**: 1 week
**Triggers**: None (final phase, uses all prior outputs)

## Orchestration Flow

```
Research Desk
   Ã¢â€ â€œ (market context)
Financial Analyst Ã¢â€â‚¬Ã¢â€ â€™ Identify undervalued securities
   Ã¢â€ â€œ (trading/rebalancing recommendations)
Tax Finance Ã¢â€â‚¬Ã¢â€ â€™ Optimize for tax efficiency
   Ã¢â€ â€œ (tax-loss harvesting, deferral strategies)
Final: Integrated investment + tax plan
```

## Example Workflow: "Annual Portfolio Review"

### Step 1: Research Desk Agent (2 weeks)
**Input**:
- Focus areas: [Market sector you're interested in]
- Geographies: [Which regions to research]
- Themes: [Trends you want to understand]

**Output**:
- Market trends: [Tech is consolidating, healthcare accelerating]
- Valuations: [Sector multiples vs. historical averages]
- Macro risks: [Inflation, interest rates, geopolitical]
- Opportunities: [Undervalued sectors, emerging themes]

### Step 2: Financial Analyst Agent (1 week)
**Input** (using Research Desk findings):
- Holdings: [Current portfolio]
- Market context: [From Research Desk]
- Goals: [Income, growth, capital preservation]

**Output**:
- Portfolio assessment: [Over-concentrated in X, underweight Y]
- Valuation: [Holdings trading at X multiple, intrinsic value Y]
- Recommendations:
  - Buy: [Security A] (undervalued, strong fundamentals)
  - Hold: [Security B] (fairly valued, good momentum)
  - Trim: [Security C] (overvalued, sell [N]% to rebalance)
  - Sell: [Security D] (deteriorating, harvest loss)

### Step 3: Tax Finance Agent (1 week)
**Input** (using Financial Analyst recommendations):
- Recommended trades: [Buy A, Sell D, Trim C]
- Holding periods: [Which securities are long-term vs. short-term]
- Tax brackets: [Current and projected]

**Output**:
- Tax-optimized execution plan:
  - Sell [Security D] (realize -$[X] loss, offset against [Gain A])
  - Wait to sell [Security E] (4 months until long-term holding period = $[X] in tax savings)
  - Buy [Security A] now (no wash-sale conflict)
  - Estimated tax savings: $[X]

- Quarterly planning: [Estimated quarterly taxes, adjustments needed]
- Retirement optimization: [Max out [IRA type], save $[X] in taxes]

### Step 4: Integration
**Final Plan**:
- Investment thesis: [Based on research, positioned for [outcome]]
- Specific trades: [Rank by tax efficiency + expected return]
- Tax impact: [Taxes due on these trades = $[X], mitigations = $[Y]]
- Quarterly calendar: [When taxes are due, when rebalancing windows open]
- 12-month roadmap: [Scheduled trades, tax checkpoints, rebalancing dates]

## When to Use This Swarm

**Scenarios**:
- Annual portfolio review (Dec-Jan timeframe, before taxes due)
- Major life change (retirement, inheritance, selling business)
- Market shift (want to reallocate based on new thesis)
- Tax planning (minimize liability for coming year)
- Risk assessment (portfolio stress test given macro environment)

**User Personas**:
- High-net-worth individuals with complex portfolios
- Business owners with concentrated positions
- Investors wanting to combine fundamental research with tax efficiency
- Early-stage investors managing multiple positions

## Resource Requirements

| Agent | Effort | Owner |
|-------|--------|-------|
| Research Desk | 2 weeks | [Analyst or founder] |
| Financial Analyst | 1-2 weeks | [Financial advisor or investor] |
| Tax Finance | 1 week | [CPA or self-directed investor] |

**Total**: 3-4 weeks, equivalent to 12-16 billable hours with a CPA

## Success Metrics

**Research Phase**:
- Ã¢Å“â€œ 5-10 investment theses developed
- Ã¢Å“â€œ Macro risks identified and strategies to hedge
- Ã¢Å“â€œ 2-3 new opportunity ideas identified

**Analysis Phase**:
- Ã¢Å“â€œ All holdings valued with intrinsic value estimates
- Ã¢Å“â€œ Clear buy/hold/sell recommendations with price targets
- Ã¢Å“â€œ Rebalancing plan to reach target allocation

**Tax Optimization Phase**:
- Ã¢Å“â€œ Tax-loss harvesting opportunities identified ($[X] potential savings)
- Ã¢Å“â€œ Holding period strategy optimized (long-term vs. short-term)
- Ã¢Å“â€œ Quarterly tax estimates calculated with adjustments
- Ã¢Å“â€œ Estimated tax savings: $[X] (vs. naive execution)

**12-Month Outcomes**:
- Ã¢Å“â€œ Portfolio aligned with investment thesis
- Ã¢Å“â€œ Tax bill minimized while executing recommendations
- Ã¢Å“â€œ Positioned for next [market cycle] based on research

## Handoffs & Logic

```
Research Desk Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (market insights)
     Ã¢â€ â€œ
Financial Analyst Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (recommendations)
     Ã¢â€ â€œ
Tax Finance Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (optimized execution)
     Ã¢â€ â€œ
Final Integrated Plan
```

**Information Flow**:
1. Research Desk provides market context (assumptions for Financial Analyst)
2. Financial Analyst uses context to score holdings (what to buy/sell)
3. Tax Finance optimizes the transaction sequence (when and in what order)
4. Combined output: "Execute trades in this order, on these dates, for tax savings of $[X]"

## Example Output

**Integrated Investment + Tax Plan**

**Portfolio Action Plan**:
1. **SELL [Security D]** (Dec 15) Ã¢â‚¬â€ Harvests -$[X] loss
2. **BUY [Security A]** (Dec 20) Ã¢â‚¬â€ 20+ days after D sale (no wash-sale)
3. **TRIM [Security C]** (Jan 15) Ã¢â‚¬â€ Long-term capital gain if sold now
4. **HOLD [Security E]** (until Aug 15) Ã¢â‚¬â€ Wait 4 months for long-term treatment

**Tax Impact**:
- Realized losses: -$[X] (offset gains)
- Long-term gains: $[Y] (taxed at [rate]%)
- Net tax liability: $[Z] (vs. $[Unoptimized] if done naively)
- **Tax savings: $[X]**

**Expected Returns**:
- [Security A] target: [+X]% in [timeframe]
- [Security E] target: [+Y]% in [timeframe]
- Portfolio return target: [+Z]% annually

**Quarterly Checkpoints**:
- Q1: Monitor [emerging opportunities from Research]
- Q2: Review holdings vs. targets; rebalance if drifted >5%
- Q3: Tax-loss harvesting window opens (prepare for Dec execution)
- Q4: Execute annual tax plan, plan for next year

## Troubleshooting

**If Research Desk finds macroeconomic headwinds**:
- Financial Analyst adjusts valuations downward (applies risk discount)
- Tax Finance prioritizes defensive trades (quality over growth)

**If Financial Analyst recommends action but tax bill would be large**:
- Tax Finance proposes phased approach (spread sales over multiple years)
- Or: Identify offsetting losses to harvest first

**If holdings have poor tax lots (deep losses)**:
- Tax Finance prioritizes harvesting the worst lots immediately
- Financial Analyst helps identify replacement securities

## Launch Checklist

- [ ] Research Desk findings compiled (market report)
- [ ] Team reviewed research (30-min discussion)
- [ ] Financial Analyst runs valuation (all holdings scored)
- [ ] Recommendations prioritized (top 3-5 actions)
- [ ] Tax Finance maps trades (sequence identified)
- [ ] Tax scenarios modeled (compare: optimized vs. unoptimized)
- [ ] Execute trades (in recommended order, on recommended dates)
- [ ] Quarterly calendar set (tax checkpoints, rebalancing windows)
- [ ] Review scheduled (annual refresh, or quarterly if active trading)

## Next Steps

1. **Gather data**: Portfolio holdings, cost basis, current prices, tax brackets
2. **Run Research Desk Agent**: Identify market trends and opportunities
3. **Run Financial Analyst Agent**: Score holdings and identify actions
4. **Run Tax Finance Agent**: Optimize execution sequence
5. **Execute plan**: Follow the recommended trade sequence
6. **Monitor**: Quarterly checkpoints to track progress toward targets

---

**Estimated Value Creation**: Tax savings ($[X]/year) + improved returns ($[Y]/year) = $[X+Y] total benefit
