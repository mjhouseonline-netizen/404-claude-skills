---
name: development-swarm
description: Coordinates Code Review, Database Architect, Deployment, and Security Auditor agents for safe feature shipping
source_group: swarms
imported_from: development-swarm.md
swarm_name: development-swarm
agents: [code-review-agent, database-architect-agent, deployment-agent, security-auditor-agent]
version: 1.0.0
---

# Development Swarm

## Overview
The Development Swarm ensures code quality, security, and reliability before production deployment. It orchestrates code review, database validation, security scanning, and coordinated deploymentÃ¢â‚¬â€catching issues before they impact customers.

**Use Case**: "Ship a feature from code review through production deploy with security validation"

**Timeline**: 1-2 weeks
**Effort**: Replaces manual QA + security review + deployment processes
**Risk Reduction**: Catches 90%+ of issues before production

## Agents in This Swarm

### 1. Code Review Agent
**Role**: Quality and security baseline
**Output**: Issues found (security, performance, code quality, test coverage), severity ratings
**Duration**: 2-3 days

### 2. Database Architect Agent
**Role**: Data model validation
**Output**: Schema review, migration scripts, performance impact assessment
**Duration**: 1-2 days

### 3. Security Auditor Agent
**Role**: Vulnerability scanning
**Output**: Vulnerability findings, remediation roadmap, compliance check
**Duration**: 1-2 days

### 4. Deployment Agent
**Role**: Safe release execution
**Output**: Deployment plan, health checks, rollback procedures
**Duration**: 1 day

## Orchestration Flow

```
Code Review Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Identify issues
    Ã¢â€ â€œ                   Ã¢â€ â€œ
Database Architect     Pass/Fail
    Ã¢â€ â€œ                   Ã¢â€ â€œ
Security Auditor Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Critical issues? Ã¢â€ â€™ BLOCK or PLAN FIX
    Ã¢â€ â€œ
Deployment Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Execute safely with monitoring
```

## Example Workflow: "Deploy Feature X"

### Step 1: Code Review Agent (2-3 days)
**Input**:
- Pull request or commit
- Repository context
- Team standards

**Output**:
- Security issues: [N]
- Performance issues: [N]
- Code quality issues: [N]
- Test coverage: [X]%
- Recommendation: [APPROVE / NEEDS FIXES / BLOCK]

**Example Issues**:
- Ã¢Å¡Â Ã¯Â¸Â **HIGH**: SQL injection in filter function (FIX BEFORE MERGE)
- Ã¢Å¡Â Ã¯Â¸Â **HIGH**: Test coverage dropped to 62% (target 80%)
- Ã¢Å¡Â Ã¯Â¸Â **MEDIUM**: Inefficient N+1 query (optimize after release OK)
- Ã¢Å“â€œ **LOW**: Variable naming inconsistency (minor style issue)

**Decision**:
- If critical issues: Team fixes, then re-run review
- If only minor issues: Approve with notes for future improvement

### Step 2: Database Architect Agent (1-2 days)
**Input** (while code review is running):
- Database migrations in PR
- Data changes (schema, indexes)
- Performance impact

**Output**:
- Migration reversibility: [Ã¢Å“â€œ Can roll back / Ã¢Å¡Â Ã¯Â¸Â Risky / Ã¢Å“â€” Can't roll back]
- Performance impact: [No impact / Minor / Significant]
- Data loss risk: [Ã¢Å“â€œ None / Ã¢Å¡Â Ã¯Â¸Â Need backup / Ã¢Å“â€” Will lose data]

**Example Issues**:
- Ã¢Å“â€œ New column added with default value (zero-downtime)
- Ã¢Å¡Â Ã¯Â¸Â Index being dropped (verify it's not needed elsewhere)
- Ã¢Å“â€” Removing column without backup (backup database first)

**Decision**:
- If risky migration: Plan backup/rollback before deployment
- If OK: Approve for deployment

### Step 3: Security Auditor Agent (1-2 days)
**Input** (while code and database reviews are running):
- Source code
- Dependencies
- Secrets scanning
- Infrastructure changes

**Output**:
- Critical vulnerabilities: [N] (block deployment)
- High vulnerabilities: [N] (plan fixes)
- Medium/Low: [N] (OK to deploy with plan to fix)

**Example Issues**:
- Ã¢Å“â€” **CRITICAL**: Hardcoded API key found (REVOKE IMMEDIATELY)
- Ã¢Å“â€” **CRITICAL**: SQL injection vulnerability (fix before merge)
- Ã¢Å¡Â Ã¯Â¸Â **HIGH**: Outdated dependency with known CVE (update before deploy)
- Ã¢Å¡Â Ã¯Â¸Â **MEDIUM**: Missing input validation (plan fix for next sprint)

**Decision**:
- If critical: BLOCK deployment until fixed
- If high: Fix before deploy or have production mitigation plan
- If medium/low: Deploy with plan to fix in next sprint

### Step 4: Deployment Agent (1 day before release)
**Input** (using outputs from all above):
- Code approved
- Database changes safe
- No critical security issues
- Rollback plan established

**Output**:
- Deployment plan (blue-green, rolling update)
- Health checks (what to validate during/after deploy)
- Monitoring alerts (what metrics to watch)
- Rollback procedures (if something goes wrong)

**Example Plan**:
```
1. Deploy to staging (verify no errors)
2. Run smoke tests (check critical paths work)
3. Deploy to 10% of production (canary release)
4. Monitor error rate + latency for 5 min
5. If all green: deploy to 100%
6. If issues: auto-rollback to previous version
7. Monitor for 1 hour post-deploy
```

**Decision**: Deploy on schedule if all checks pass

### Step 5: Integration & Execution

**Timeline**:
- Day 1-2: PR submitted
- Day 2-3: Code Review + Database Architect + Security Auditor (parallel)
- Day 3: Review findings with team
- Day 4: Address any issues found
- Day 5: Deployment Agent creates final plan
- Day 6: Deploy to staging, final testing
- Day 7: Deploy to production (during business hours)
- Day 8: Monitor, celebrate successful release

## When to Use This Swarm

**Always Use For**:
- Shipping to production
- Features impacting payment/security
- Database schema changes
- Infrastructure changes
- Performance-critical features

**Optional For**:
- Internal tools
- Development/staging deployments
- Small bug fixes (if low risk)

## Resource Requirements

| Agent | Effort | Owner |
|-------|--------|-------|
| Code Review | 4-6 hours | [Senior engineer] |
| Database Architect | 2-4 hours | [Database engineer or senior] |
| Security Auditor | 2-4 hours | [Security engineer or DevSecOps] |
| Deployment | 2-4 hours | [DevOps or SRE] |

**Total**: 10-18 hours (equivalent to 1-2 days of team time)

## Success Metrics

**Code Review**:
- Ã¢Å“â€œ 0 security issues remain
- Ã¢Å“â€œ Test coverage maintained or improved
- Ã¢Å“â€œ Performance benchmarks met

**Database**:
- Ã¢Å“â€œ All migrations are reversible
- Ã¢Å“â€œ Zero downtime during migration
- Ã¢Å“â€œ Indexes optimized for queries

**Security**:
- Ã¢Å“â€œ 0 critical vulnerabilities
- Ã¢Å“â€œ Dependencies up-to-date
- Ã¢Å“â€œ No secrets exposed
- Ã¢Å“â€œ Compliance requirements met

**Deployment**:
- Ã¢Å“â€œ Deployed without errors
- Ã¢Å“â€œ Health checks passing
- Ã¢Å“â€œ No rollbacks needed
- Ã¢Å“â€œ Monitoring active

## Handoffs & Dependencies

```
Code Review Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Database Architect (identify schema changes)
     Ã¢â€ â€œ              Ã¢â€ â€œ
Security Auditor Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (no secrets, no vulns)
     Ã¢â€ â€œ
Deployment Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ (all clear, ready to ship)
```

**Sequence**:
- Code Review + Database Architect + Security Auditor: **Parallel** (can run simultaneously)
- Deployment: **Sequential** (after all above pass)

**Critical Path**: Security Auditor findings could block deployment (longest pole in tent if critical vulns found)

## Troubleshooting

**If Code Review finds issues**:
- Team fixes code
- Re-run Code Review
- If still issues: Address before merging

**If Database migration is risky**:
- Deployment Agent adds extra caution
- Backup database before deployment
- Have rollback plan tested

**If Security Auditor finds critical vulns**:
- **STOP**: Do not deploy
- Fix vulnerabilities
- Re-run Security Audit
- Then proceed

**If Deployment fails**:
- Automatic rollback triggered
- On-call engineer investigates
- Document root cause
- Fix and re-deploy next day

## Launch Checklist

- [ ] Code Review completed (no blocking issues)
- [ ] Database changes validated (safe to deploy)
- [ ] Security Audit completed (no critical vulns)
- [ ] Team consensus: safe to deploy (meeting held)
- [ ] Deployment plan created (steps documented)
- [ ] Health checks configured (metrics to monitor)
- [ ] Rollback plan tested (team knows how to revert)
- [ ] Stakeholders notified (PM, customer success, ops)
- [ ] On-call engineer briefed (ready if issues arise)
- [ ] Deploy during business hours (team available to monitor)

## Next Steps

1. **Trigger Code Review Agent**: Submit PR
2. **Trigger Database Agent** (if schema changes): Validate migrations
3. **Trigger Security Auditor**: Run vulnerability scan
4. **Team Review**: Discuss findings (30-min meeting)
5. **Address Issues**: Fix any blocking items
6. **Trigger Deployment Agent**: Create final deployment plan
7. **Deploy to Staging**: Final QA check
8. **Deploy to Production**: Execute deployment
9. **Monitor**: Watch metrics for 1+ hours
10. **Celebrate**: Successful release!

---

**Expected Outcome**: Feature shipped with confidence, zero security issues, zero downtime
