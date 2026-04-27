---
name: ai-product-swarm
description: Full-cycle AI product development Ã¢â‚¬â€ from idea through design, security validation, deployment, and post-launch optimization
source_group: swarms
imported_from: ai-product-swarm.md
swarm_name: ai-product-swarm
agents: [ai-product-agent, code-review-agent, deployment-agent, security-auditor-agent, data-analyst-agent]
version: 1.0.0
---

# AI Product Swarm

## Overview
The AI Product Swarm orchestrates complete AI product development from concept to deployed, monitored system. It coordinates specialized agentsÃ¢â‚¬â€product design, code quality, security, deployment, and analyticsÃ¢â‚¬â€to deliver production-ready AI products.

**Use Case**: "Build a production-grade AI product in 90 days"

**Timeline**: 12 weeks from concept to launch
**Effort**: Equivalent to 4-6 weeks of focused engineering + PM work
**Output**: Shipped, monitored AI product with customer feedback loop

## Agents in This Swarm

### 1. AI Product Agent
**Role**: Product strategy and architecture
**Produces**: Technical specification, system architecture, prompt library, evaluation framework, cost model
**Duration**: 2 weeks
**Output Files**:
- Product specification with success criteria
- System architecture diagram + data flow
- Evaluation framework and test dataset
- 90-day roadmap with milestones

**Triggers Next**: Code Review Agent (design review), Data Analyst Agent (baseline metrics setup)

### 2. Code Review Agent
**Role**: Code quality and standards enforcement
**Produces**: Architecture review, PR feedback, performance recommendations, best practices guidance
**Duration**: Ongoing (parallel with development)
**Output Files**:
- Architecture review document
- Code quality standards checklist
- Performance profiling results
- Refactoring recommendations

**Triggered By**: AI Product Agent (design spec), Development sprint kickoff
**Triggers Next**: Deployment Agent (code ready for staging)

### 3. Deployment Agent
**Role**: Infrastructure, deployment, monitoring setup
**Produces**: Deployment pipeline, staging environment, monitoring dashboard, runbooks
**Duration**: 2-3 weeks
**Output Files**:
- Deployment pipeline (dev Ã¢â€ â€™ staging Ã¢â€ â€™ prod)
- Infrastructure-as-code (Docker, Terraform)
- Monitoring alerts and dashboards
- Incident response runbooks
- Rollback procedures

**Triggered By**: Code Review Agent (code approved), Security Auditor Agent (security clearance)
**Triggers Next**: Security Auditor Agent (pre-launch), Data Analyst Agent (monitor post-launch)

### 4. Security Auditor Agent
**Role**: Security review and guardrails
**Produces**: Security assessment, vulnerability fixes, compliance checklist, safety guardrails
**Duration**: 2 weeks
**Output Files**:
- Security audit report
- Vulnerability list + fixes
- Compliance checklist (GDPR, CCPA, etc.)
- Content policy enforcement spec
- Rate limiting and abuse prevention

**Triggered By**: AI Product Agent (pre-build), Code Review Agent (code ready), Deployment Agent (before prod launch)
**Triggers Next**: Deployment Agent (approved for production)

### 5. Data Analyst Agent
**Role**: Metrics baseline, post-launch analysis, optimization
**Produces**: Baseline metrics, experiment tracking setup, quality analysis, user behavior insights
**Duration**: 1 week (baseline setup), ongoing (monitoring)
**Output Files**:
- Metrics dashboard specification
- Baseline quality/efficiency benchmarks
- User feedback analysis
- Optimization recommendations
- Weekly/monthly performance reports

**Triggered By**: AI Product Agent (evaluation framework), Deployment Agent (post-launch monitoring)

## Orchestration Flow

```
Week 1-2: Foundation
Ã¢â€Å“Ã¢â€â‚¬ AI Product Agent Ã¢â€ â€™ [Spec + Architecture + Eval Framework]
Ã¢â€Å“Ã¢â€â‚¬ Security Auditor Agent Ã¢â€ â€™ [Security baseline, encryption strategy]
Ã¢â€â€Ã¢â€â‚¬ Data Analyst Agent Ã¢â€ â€™ [Metrics & baseline setup]

Week 3-6: Build Sprint (2-3 week sprints)
Ã¢â€Å“Ã¢â€â‚¬ Development Team builds (loop with Code Review Agent)
Ã¢â€Å“Ã¢â€â‚¬ Code Review Agent Ã¢â€ â€™ [Architecture review + PR feedback]
Ã¢â€Å“Ã¢â€â‚¬ Security Auditor Agent Ã¢â€ â€™ [Ongoing security review]
Ã¢â€â€Ã¢â€â‚¬ Data Analyst Agent Ã¢â€ â€™ [Monitoring setup]

Week 7-8: Pre-Launch
Ã¢â€Å“Ã¢â€â‚¬ Code Review Agent Ã¢â€ â€™ [Final approval]
Ã¢â€Å“Ã¢â€â‚¬ Security Auditor Agent Ã¢â€ â€™ [Final security audit]
Ã¢â€Å“Ã¢â€â‚¬ Deployment Agent Ã¢â€ â€™ [Staging environment ready]
Ã¢â€â€Ã¢â€â‚¬ Data Analyst Agent Ã¢â€ â€™ [Dashboards ready]

Week 9-12: Launch & Optimization
Ã¢â€Å“Ã¢â€â‚¬ Deployment Agent Ã¢â€ â€™ [Production deployment]
Ã¢â€Å“Ã¢â€â‚¬ Data Analyst Agent Ã¢â€ â€™ [Monitor metrics, identify optimizations]
Ã¢â€â€Ã¢â€â‚¬ All agents Ã¢â€ â€™ [Ongoing feedback loop]
```

## Example Workflow: "Launch AI Code Review Assistant"

### Step 1: AI Product Agent (Weeks 1-2)
**Input**:
- Product: AI code review assistant for engineering teams
- Target users: Startups and mid-size dev teams
- Goals: 90-day: working product, 30 beta users, <5 sec latency, <$0.10 cost per review

**Output**:
- Product spec: RAG + multi-step workflow combining static analysis + LLM review
- Architecture: Code input Ã¢â€ â€™ static analysis Ã¢â€ â€™ embedding Ã¢â€ â€™ vector search Ã¢â€ â€™ LLM context Ã¢â€ â€™ review generation
- Evaluation dataset: 200 representative code samples with human-reviewed correct outputs
- Cost model: ~300 tokens per review average, $0.003 per review at scale
- Rollout plan: Week 1-2 foundations, Week 3-6 core MVP, Week 7-9 advanced features, Week 10-12 scaling

**Decision**: Proceed with RAG approach; requires code embedding infrastructure + fine-tuned prompt

### Step 2: Security Auditor Agent (Parallel, Weeks 1-3)
**Input** (from AI Product spec):
- System processes customer code (sensitive IP)
- Stores embeddings and review history
- Integrates with GitHub/GitLab (OAuth required)

**Output**:
- Security assessment: Code is sensitive Ã¢â€ â€™ must use VPC, encryption at rest, audit logging
- Compliance: GDPR/SOC2 required for enterprise customers
- Guardrails: Input validation (prevent prompt injection), output filtering (no leaking code context), rate limiting, PII scrubbing
- OAuth implementation: GitHub app with minimal scopes, token storage encrypted

**Decision**: Implement VPC deployment, all code processing in customer account optional, SOC2 certification path

### Step 3: Code Review Agent (Weeks 3-6, During Development)
**Input**:
- Code from dev team as PRs submitted
- Architecture spec from AI Product Agent
- Security requirements from Security Auditor Agent

**Feedback Loop** (Weekly):
- Week 3: Architecture review Ã¢â€ â€™ flag monolith structure, recommend service separation
- Week 4: PR review Ã¢â€ â€™ suggest caching layer for vector DB, optimize embedding pipeline
- Week 5: PR review Ã¢â€ â€™ performance: latency is 8sec, target 5sec; suggest batching or parallel processing
- Week 6: Final review Ã¢â€ â€™ approve for staging; note: need monitoring for cost creep as volume grows

**Output**:
- Approved architecture with optimizations
- Performance benchmarks (latency, throughput, token usage)
- Technical debt list for future sprints

### Step 4: Deployment Agent (Weeks 7-8)
**Input**:
- Approved code from Code Review Agent
- Security clearance from Security Auditor Agent
- Infrastructure requirements: LLM API access, vector DB (Pinecone or Weaviate), GitHub OAuth

**Output**:
- Deployment pipeline: GitHub Ã¢â€ â€™ test Ã¢â€ â€™ build Ã¢â€ â€™ push to staging Ã¢â€ â€™ manual approval Ã¢â€ â€™ prod
- Staging environment: Full replica of prod, synthetic test data, kill switch for cost control
- Monitoring dashboard: Latency (p50, p99), token usage, error rates, GitHub API quota, cost tracking
- Runbooks: How to scale, how to rollback, how to handle vector DB failures, how to pause if costs exceed threshold
- Alert thresholds: Cost >$100/day, latency p99 >10sec, error rate >5%, vector DB availability <99%

**Decision**: Use containerized deployment on AWS, auto-scaling based on queue depth, cost-aware scaling (pause if exceeds budget)

### Step 5: Data Analyst Agent (Weeks 1-2, 10-12)
**Weeks 1-2: Baseline Setup**
- Define success metrics:
  - Quality: % of reviews that developer finds useful (target >70%), correctness (vs. manual review)
  - Efficiency: Review time (target <5 sec), tokens per review (cost target)
  - User experience: Task completion rate, retention
- Create evaluation dataset (200 code samples, hand-reviewed benchmarks)
- Setup dashboards: Real-time cost, latency, quality metrics

**Weeks 10-12: Post-Launch Analysis**
- Monitor quality: Are users finding reviews useful? Any feedback patterns?
- Analyze cohorts: Different review types (security vs. style vs. performance) Ã¢â‚¬â€ which are most useful?
- Cost optimization: Can we reduce tokens per review? Improve caching? Fine-tune prompts?
- Identify next features: What issues are users reporting? What would increase adoption?
- Weekly reports: Metrics dashboard, optimization recommendations, top issues

**Output**:
- Dashboard: Real-time metrics showing quality, cost, latency, user engagement
- Weekly reports: Performance analysis, optimization recommendations, roadmap updates

## Coordination Protocol: How Agents Handoff

### Design Phase (AI Product Agent Ã¢â€ â€™ Others)
**Handoff Package**:
- Product specification (success criteria, must-haves, roadmap)
- Architecture diagram (components, data flows, dependencies)
- Evaluation framework (how to measure success)
- Cost model (estimated spend by stage)

**Recipients**: Code Review Agent (architecture approval), Security Auditor Agent (security implications), Deployment Agent (infrastructure needs), Data Analyst Agent (metrics setup)

**Decision Point**: Does architecture make sense? Are there security implications? Can we deploy at scale? Feedback loop back to AI Product Agent if major changes needed.

---

### Development Phase (Code Review Agent Ã¢â€ â€™ Others)
**Ongoing Feedback**:
- Weekly code review reports Ã¢â€ â€™ note quality issues, architecture gaps, performance problems
- Architecture review Ã¢â€ â€™ flag design decisions that violate spec
- Performance findings Ã¢â€ â€™ alert if latency/cost targets at risk

**Recipients**: Development team (implement feedback), Deployment Agent (adjust infrastructure if needed), Data Analyst Agent (baseline assumptions changing?)

**Decision Point**: Is code on track? Are we hitting targets? Escalate if significant gaps.

---

### Security Phase (Security Auditor Agent Ã¢â€ â€™ Deployment Agent)
**Handoff Package**:
- Security audit report (vulnerabilities, risks)
- Approved security checklist (encryption, logging, rate limiting, PII handling)
- Deployment constraints (must use VPC, must encrypt at rest, must audit log all accesses)
- Compliance requirements (GDPR, SOC2, HIPAA if applicable)

**Decision Point**: Can we deploy with these constraints? Deployment Agent adjusts infrastructure accordingly.

---

### Deployment Phase (Deployment Agent Ã¢â€ â€™ All)
**Handoff Package**:
- Deployed staging environment (ready for testing)
- Monitoring dashboards (live metrics)
- Runbooks (how to scale, how to incident respond, how to rollback)
- Approval checklist (security cleared, performance baseline set, metrics ready)

**Recipients**: Security Auditor Agent (final security validation), Data Analyst Agent (baseline data collection), AI Product Agent (readiness assessment)

**Decision Point**: Ready for production? All sign-offs in place? Launch.

---

### Launch & Optimization Phase (Data Analyst Agent + All)
**Weekly Reports**:
- Metrics dashboard: Quality, cost, latency, user engagement
- Issues identified: Top bugs, top feature requests, quality problems
- Optimizations: Prompts to improve, infrastructure to adjust, cost-saving opportunities

**Recipients**: Product team (feature requests), Engineering team (bugs/performance), Leadership (launch success metrics)

**Feedback Loop**: Findings Ã¢â€ â€™ actions Ã¢â€ â€™ improvements Ã¢â€ â€™ next week report

## Success Criteria & Milestones

### Week 2 (Foundation)
- Ã¢Å“â€œ Product spec finalized (architecture clear, success metrics defined)
- Ã¢Å“â€œ Evaluation framework built (200+ test cases, baseline benchmarks)
- Ã¢Å“â€œ Security assessment complete (no blockers identified)
- Ã¢Å“â€œ Deployment strategy approved (infrastructure decided)

### Week 6 (Alpha)
- Ã¢Å“â€œ Core MVP working (hits 80%+ quality on evaluation set)
- Ã¢Å“â€œ Code reviewed and approved (performance on track)
- Ã¢Å“â€œ Security measures implemented (encryption, logging, rate limiting)
- Ã¢Å“â€œ Cost under budget ($0.10 per review target vs. actual spend)

### Week 9 (Staging)
- Ã¢Å“â€œ Product running in staging environment (fully functional)
- Ã¢Å“â€œ Monitoring dashboards live (collecting baseline metrics)
- Ã¢Å“â€œ Runbooks written (how to scale, incident response, rollback)
- Ã¢Å“â€œ Security audit complete (all vulns fixed)

### Week 12 (Launch + 2 Weeks)
- Ã¢Å“â€œ Product in production (live users)
- Ã¢Å“â€œ 30+ beta users active (hitting 30-user goal)
- Ã¢Å“â€œ Quality metrics at target (70%+ useful, <5 sec latency)
- Ã¢Å“â€œ Cost under control (model prediction vs. actual spend aligned)
- Ã¢Å“â€œ User feedback positive (NPS >40, retention >50% day 7)

## Roles & Responsibilities

| Role | Owner | Key Responsibilities |
|------|-------|----------------------|
| Product Manager | [Name] | Vision, spec, success criteria, roadmap prioritization |
| ML Engineer | [Name] | Prompt engineering, evaluation, fine-tuning, cost optimization |
| Backend Engineer | [Name] | API design, database, caching, performance |
| DevOps / Infrastructure | [Name] | Deployment pipeline, monitoring, scaling, cost control |
| Security Engineer | [Name] | Security audit, compliance, guardrails, penetration testing |
| QA / Data Analyst | [Name] | Evaluation, testing, metrics dashboard, post-launch analysis |

## Resource Requirements

| Phase | ML Engineer | Backend | DevOps | Security | QA | Duration |
|-------|-------------|---------|--------|----------|-----|----------|
| Design | 40% | 20% | 20% | 30% | 20% | 2 weeks |
| Build | 60% | 80% | 10% | 10% | 20% | 4 weeks |
| Pre-Launch | 30% | 30% | 50% | 30% | 40% | 2 weeks |
| Launch+ | 40% | 20% | 20% | 10% | 30% | Ongoing |

**Total Team Effort**: ~3-4 people, full-time for 12 weeks

## Known Risks & Mitigations

**Risk 1: Quality Below Target**
- If evaluation shows <70% quality by week 6
- Mitigation: Adjust prompts, add few-shot examples, consider fine-tuning, extend timeline

**Risk 2: Cost Exceeds Model**
- If actual cost is 2x+ model prediction
- Mitigation: Optimize token usage, implement caching, consider cheaper model, reduce feature scope

**Risk 3: Security Vulnerabilities Discovered Late**
- If security audit (week 8) finds major vulns
- Mitigation: Implement security-first development, weekly security reviews, pre-audit week 4

**Risk 4: Scaling Issues at Launch**
- If latency/cost blow up with real traffic
- Mitigation: Load test in week 8, implement rate limiting, scale infrastructure proactively

## Troubleshooting Guide

**If Code Review finds architecture flaws (Week 4)**:
- Refactor early while MVP scope is still limited
- Estimated 1-week delay acceptable
- AI Product Agent revises spec based on learnings

**If Security Audit uncovers compliance needs (Week 6)**:
- Prioritize critical security items (encryption, logging)
- Plan compliance (SOC2, GDPR) for post-launch if not critical path
- May delay launch 1-2 weeks if major work required

**If Quality Below Target (Week 8)**:
- Extend data collection phase (more evaluation cases)
- Iterate on prompts (10+ variations)
- Consider pivot (simpler problem, different approach)
- Last resort: delay launch, extend engineering sprint

**If Cost Exceeds Budget (Ongoing)**:
- Implement request caching (reduce duplicate processing)
- Fine-tune cheaper model (reduce token consumption)
- Implement circuit breaker (pause generation if cost spike)
- Partner model (cheaper model for simple cases, expensive for complex)

## Handoff & Launch Checklist

### Pre-Launch (Week 11)
- [ ] AI Product Agent: Spec signed off, success criteria clear
- [ ] Code Review Agent: Final code approved, architecture validated
- [ ] Security Auditor Agent: Security audit complete, no critical vulns
- [ ] Deployment Agent: Staging environment fully functional, runbooks written
- [ ] Data Analyst Agent: Metrics dashboard ready, baseline collected
- [ ] All agents: Cross-validation (is everything aligned?)

### Launch (Week 12)
- [ ] Deploy to production (blue-green deployment, rollback ready)
- [ ] Onboard first 5 beta users (internal + trusted customers)
- [ ] Monitor metrics (daily check for first week)
- [ ] Gather feedback (daily sync with early users)
- [ ] Iterate based on feedback (quick turns on prompts, features)

### Post-Launch (Week 12+)
- [ ] Hit 30-user beta goal
- [ ] Quality metrics at target
- [ ] Cost model validated
- [ ] Feedback loop established
- [ ] Plan for next sprint (new features, expansion)

## Integration Points

- **Git**: Version control for code, infrastructure-as-code, deployment tracking
- **Monitoring**: Datadog, New Relic, or CloudWatch for live metrics and alerts
- **Issue Tracking**: Linear, Jira for feature requests, bug reports, performance issues
- **Communication**: Slack for daily standups, weekly syncs across agents
- **Product Analytics**: Amplitude or Mixpanel for user engagement, feature adoption
- **Cost Tracking**: AWS Cost Explorer, cloud provider dashboards for budget monitoring

---

**Estimated Launch ROI**: After 90 days: product shipped, 30+ users, positive feedback, clear path to market validation.
