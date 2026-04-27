---
name: compliance-swarm
description: Coordinates Compliance Audit, Documentation, HR Recruitment, and Crisis Communication agents for governance and risk management
source_group: swarms
imported_from: compliance-swarm.md
swarm_name: compliance-swarm
agents: [compliance-audit-agent, documentation-agent, hr-recruitment-agent, crisis-communication-agent]
version: 1.0.0
---

# Compliance Swarm

## Overview
The Compliance Swarm ensures organizations meet all regulatory requirements and are prepared for crises. It conducts compliance audits, documents policies, builds compliant hiring practices, and establishes crisis response protocols.

**Use Case**: "Scale from startup (no compliance) to enterprise-ready (SOC2 certified, GDPR-compliant)"

**Timeline**: 4-6 months to full compliance, ongoing maintenance
**Effort**: Equivalent to 1 full-time compliance officer for 6 months
**Output**: SOC2 Type II certification, GDPR/CCPA compliance, crisis playbooks, policy handbook

## Agents in This Swarm

### 1. Compliance Audit Agent
**Role**: Identify and fix regulatory gaps
**Produces**: Compliance roadmap, audit evidence
**Duration**: 4-week initial audit, quarterly reviews
**Output Files**:
- Gap analysis (critical, high, medium, low)
- Remediation plan (timeline, ownership, effort)
- Evidence binder (organized by requirement)
- Monitoring dashboard (ongoing compliance tracking)

**Triggers Next**: Documentation Agent (update policies), HR Recruitment Agent (compliance hiring), Crisis Communication Agent (incident response)

### 2. Documentation Agent
**Role**: Policy writing and process documentation
**Produces**: Policies, procedures, training materials
**Duration**: Ongoing
**Output Files**:
- Privacy policy (GDPR + CCPA compliant)
- Security policy (data protection, access control)
- Data retention policy (how long to keep data)
- Incident response plan (what to do if breached)
- Employee handbook (compliance expectations)

**Triggers Next**: HR Recruitment Agent (hire for compliance), Crisis Communication Agent (incident protocols)

### 3. HR Recruitment Agent
**Role**: Compliant hiring and people management
**Produces**: Fair hiring processes, performance reviews
**Duration**: Ongoing
**Output Files**:
- Job descriptions (compliant language)
- Interview rubrics (consistent, unbiased)
- Offer letters (compliant terms)
- Performance management process (fair reviews)
- Compliance training (annual refresher)

**Triggers Next**: Crisis Communication Agent (employee incident handling)

### 4. Crisis Communication Agent
**Role**: Incident response and stakeholder management
**Produces**: Crisis playbooks, post-mortems
**Duration**: Ongoing (ad-hoc when needed)
**Output Files**:
- Incident response playbook (what to do if breached)
- Communication templates (to customers, regulators, employees)
- Stakeholder communication plan (who to notify, when)
- Post-mortem template (learn from incidents)
- Monitoring dashboard (incident detection)

**Triggers Next**: Compliance Audit Agent (incorporate lessons into controls)

## Orchestration Flow

```
Week 1-2: Assessment
Ã¢â€Å“Ã¢â€â‚¬ Compliance Audit Ã¢â€ â€™ [Identify gaps]
Ã¢â€Å“Ã¢â€â‚¬ Crisis Communication Ã¢â€ â€™ [Build incident response plan]
Ã¢â€â€Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Audit existing policies]

Week 3-4: Planning
Ã¢â€Å“Ã¢â€â‚¬ Compliance Audit Ã¢â€ â€™ [Prioritize remediation]
Ã¢â€Å“Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Draft new policies]
Ã¢â€â€Ã¢â€â‚¬ HR Recruitment Ã¢â€ â€™ [Design compliant hiring]

Week 5-8: Implementation
Ã¢â€Å“Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Finalize policies, rollout training]
Ã¢â€Å“Ã¢â€â‚¬ HR Recruitment Ã¢â€ â€™ [Update hiring process]
Ã¢â€Å“Ã¢â€â‚¬ Compliance Audit Ã¢â€ â€™ [Build evidence, monitor]
Ã¢â€â€Ã¢â€â‚¬ Crisis Communication Ã¢â€ â€™ [Test incident response]

Week 9-16: Certification
Ã¢â€Å“Ã¢â€â‚¬ Compliance Audit Ã¢â€ â€™ [Audit prep, evidence collection]
Ã¢â€Å“Ã¢â€â‚¬ Crisis Communication Ã¢â€ â€™ [Run incident drills]
Ã¢â€â€Ã¢â€â‚¬ Documentation Ã¢â€ â€™ [Annual policy reviews]

Week 17+: Maintenance
Ã¢â€Å“Ã¢â€â‚¬ Quarterly compliance reviews
Ã¢â€Å“Ã¢â€â‚¬ Annual policy updates
Ã¢â€Å“Ã¢â€â‚¬ Continuous monitoring
Ã¢â€â€Ã¢â€â‚¬ Incident response as needed
```

## Example Workflow: "Achieve SOC2 Type II Certification"

### Step 1: Compliance Audit Agent (Weeks 1-2)
**Assessment**:
- SOC2 requires: Access control, security, availability, processing integrity, confidentiality
- Current state: Manual access control, limited monitoring, no incident response
- Gaps identified: 8 critical, 12 medium

**Output**: 16-week remediation roadmap

### Step 2: Documentation Agent (Weeks 3-6)
**Policy Creation**:
- Information Security Policy (data classification, access rights)
- Access Control Policy (who can access what, approvals)
- Incident Response Plan (detect, contain, respond, recover)
- Change Management Process (how software updates happen)
- Data Backup & Recovery Plan (continuity testing)

**Output**: 5 policies + 8 procedures

### Step 3: HR Recruitment Agent (Weeks 5-7)
**Hiring Process**:
- Background checks (for all new hires)
- Confidentiality agreements (all employees sign)
- Security training (annual, required)
- Role-based access training (how to handle data)

**Output**: Updated hiring process, training materials

### Step 4: Crisis Communication Agent (Week 7-8)
**Incident Response**:
- Incident detection (monitoring alerts)
- Communication flowchart (who to call, when)
- Stakeholder notification (customers, regulators, employees)
- Post-incident response (root cause, prevention)

**Output**: Incident response playbook, templates

### Step 5: Compliance Audit Agent (Weeks 9-16)
**Evidence Collection**:
- Access logs (demonstrate monitoring)
- Change logs (show controlled changes)
- Incident reports (show we handle issues)
- Training records (prove we educate team)
- Policy sign-offs (employees understand)

**Output**: Evidence binder (100+ pages organized by control)

### Step 6: Third-Party Audit (Weeks 17-20)
**Auditor Review**:
- External firm audits controls
- Tests access, security, availability, processing
- Interviews team members
- Reviews evidence
- Issues SOC2 Type II report (18-month engagement letter)

**Result**: SOC2 Type II certified (renewable annually)

## When to Use This Swarm

**Scenarios**:
- Scaling to enterprise (customers demand SOC2/ISO)
- Regulatory requirements (healthcare = HIPAA, fintech = compliance)
- Incident response (need crisis playbook)
- Employee growth (need fair hiring, policies)
- Market expansion (GDPR for EU customers, CCPA for CA)

**Success Indicators**:
- Ã¢Å“â€œ SOC2 Type II or equivalent certification achieved
- Ã¢Å“â€œ Zero compliance violations in audits
- Ã¢Å“â€œ Employee handbook with all required policies
- Ã¢Å“â€œ Incident response procedures tested quarterly
- Ã¢Å“â€œ Zero data breaches (preventive controls working)

## Resource Requirements

| Agent | Effort | Owner | Timeline |
|-------|--------|-------|----------|
| Compliance Audit | 60 hrs initial, 20 hrs/quarter | Compliance officer | 4 weeks |
| Documentation | 80 hrs initial, 10 hrs/quarter | Legal/ops | 4 weeks |
| HR Recruitment | 40 hrs initial, 5 hrs/month | HR | Ongoing |
| Crisis Communication | 20 hrs initial, 2 hrs/quarter | Communication | Ongoing |

**Total**: 200 hrs initial, 40 hrs/quarter maintenance

## Success Metrics

### Compliance
- Gaps identified and closed: 0 critical Ã¢â€ â€™ 16 remediated
- Policy coverage: 5 policies documented and signed off
- Training completion: 100% of team trained

### Certification
- SOC2 Type II: Achieved (implies pass)
- GDPR compliance: Audit passed
- CCPA compliance: Audit passed

### Incident Response
- Incident detection time: <1 hour (monitored)
- Customer notification: <24 hours (GDPR required)
- Post-mortem completion: Within 1 week
- Recurring incidents: 0 (preventive)

### People & Culture
- Employee handbook: Signed by 100%
- Compliance training: 100% completion, annually
- Policy violations: < 2/year (low)

## Handoffs

```
Compliance Audit Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Gap Analysis]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Documentation Agent Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Policies]
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ HR Recruitment Agent Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Hiring Process]
     Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Crisis Communication Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ [Incident Plan]
               Ã¢â€ â€œ
          [Regular Updates]
               Ã¢â€ â€œ
         Quarterly Reviews
```

## Launch Checklist

- [ ] Compliance audit complete (gaps identified)
- [ ] Remediation roadmap approved (timeline, ownership)
- [ ] Key policies drafted (privacy, security, incident response)
- [ ] Team trained on policies (100% sign-off)
- [ ] Incident response playbook tested (table-top drill)
- [ ] Monitoring tools in place (detect incidents early)
- [ ] Evidence collection started (logs, records, test results)
- [ ] External auditor selected (if pursuing certification)
- [ ] Quarterly review schedule set (ongoing maintenance)

## Next Steps

1. **Run Compliance Audit Agent** (identify gaps)
2. **Prioritize critical gaps** (highest risk first)
3. **Hire compliance officer** (if not already)
4. **Implement policies** (documentation agent)
5. **Update hiring** (compliant process)
6. **Test incident response** (crisis communication playbook)
7. **Prepare for audit** (collect evidence)
8. **Quarterly reviews** (ongoing compliance monitoring)

---

**Estimated ROI**: Certification enables $100K+ of enterprise sales (customer requirement), reduces breach risk (avoid $1M+ incident cost)
