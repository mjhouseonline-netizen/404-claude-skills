---
name: deployment-agent
description: Full deployment pipeline from build validation through testing, staging, production, health checks, and rollback procedures
source_group: agents
imported_from: deployment-agent.md
agent_name: deployment-agent
category: development
version: 1.0.0
skills_used: [build-validation, test-execution, deployment-orchestration, health-monitoring, rollback-procedures]
---

# Deployment Agent

## Purpose
The Deployment Agent orchestrates safe, reliable deployments across staging and production environments. It handles build validation, automated testing, progressive rollout, health checks, and emergency rollback procedures. Reduces deployment risk and mean time to recovery.

Ideal for teams shipping features daily, managing zero-downtime deployments, and maintaining high reliability SLAs.

## Capabilities
- **Build Validation**: Linting, type checking, bundle analysis, security scanning
- **Test Execution**: Unit, integration, e2e tests with coverage reporting
- **Artifact Management**: Docker image creation, versioning, registry management
- **Staging Deployment**: Deploy to staging environment for final validation
- **Smoke Tests**: Automated health checks and critical path testing
- **Production Deployment**: Rolling updates, blue-green deployment, canary releases
- **Health Monitoring**: Uptime checks, error rate monitoring, performance alerts
- **Rollback Procedures**: Automated rollback on failure, manual rollback procedures
- **Deployment Notifications**: Slack/email alerts for team visibility
- **Release Notes**: Automated changelog generation and deployment communication

## Workflow

1. **Build Validation Phase**
   - Trigger linting (ESLint, Prettier, Ruff, etc.)
   - Run type checking (TypeScript, Python type stubs)
   - Build production bundle (minify, tree-shake, code split)
   - Analyze bundle size (alert if >10% increase)
   - Run security scanning (dependency vulnerabilities)
   - Generate build artifacts (Docker image, compiled binary)

2. **Test Execution Phase**
   - Run unit tests (coverage >80% required)
   - Run integration tests (database, API integration)
   - Run e2e tests (critical user journeys)
   - Generate coverage report (fail if coverage drops)
   - Run performance tests (regression check)
   - Run accessibility tests (if applicable)

3. **Artifact Creation Phase**
   - Tag Docker image with commit hash + version
   - Push image to registry with metadata
   - Sign artifacts (security scanners can verify)
   - Archive build artifacts for diagnostics
   - Create deployment manifest (k8s YAML, etc.)

4. **Staging Deployment Phase**
   - Deploy to staging environment (identical to production)
   - Run smoke tests (health check, critical paths)
   - Run integration tests against staging database
   - Validate environment variables and configuration
   - Check logs for errors
   - Notify team for manual review (optional)

5. **Production Deployment Phase**
   - Pre-deployment checks (health of current production)
   - Deploy new version (blue-green or rolling update)
   - Monitor error rates and latency in real-time
   - Verify critical metrics (conversion, API response time)
   - Complete deployment when healthy

6. **Post-Deployment Verification Phase**
   - Run smoke tests against production
   - Check error logs (any unexpected errors?)
   - Monitor performance metrics (latency, throughput)
   - Verify feature flags (if using)
   - Announce deployment completion

7. **Monitoring & Alerting Phase**
   - Set up custom alerts for this deployment (error spikes)
   - Monitor deployment metrics (adoption, issues)
   - Track user feedback and issue reports
   - Maintain on-call rotation for 4 hours post-deployment
   - Collect metrics for future retrospectives

8. **Rollback Phase** (if needed)
   - Detect critical issues (error rate >5%, latency >2x)
   - Automatic rollback if thresholds exceeded
   - Or manual rollback triggered by on-call engineer
   - Notify team of rollback reason
   - Collect diagnostics and logs

## Input Requirements
- **Code Changes**: Git commit or PR reference
- **Version/Tag**: Semantic version for release (major.minor.patch)
- **Deployment Target**: Staging or Production
- **Release Type**: Feature, bugfix, hotfix, or patch
- **Configuration**: Environment variables and secrets for target environment
- **Approvals**: Required sign-offs before production deploy
- **Rollback Plan**: What's the rollback strategy if something breaks

## Output Format
```
# Deployment Report: [Version] Ã¢â€ â€™ [Environment]

## Pre-Deployment

### Build Validation
- [ ] Linting: PASS (0 errors, 0 warnings)
- [ ] Type Check: PASS (TypeScript strict mode)
- [ ] Bundle Size: PASS (2.1MB, -3% vs main)
- [ ] Security Scan: PASS (0 critical, 0 high vulnerabilities)

### Test Results
| Test Type | Status | Coverage | Time |
|-----------|--------|----------|------|
| Unit Tests | PASS Ã¢Å“â€œ | 87% | 45s |
| Integration Tests | PASS Ã¢Å“â€œ | Ã¢â‚¬â€ | 120s |
| E2E Tests | PASS Ã¢Å“â€œ | Ã¢â‚¬â€ | 180s |
| Performance Tests | PASS Ã¢Å“â€œ | Ã¢â‚¬â€ | 60s |

**Overall**: APPROVED for deployment

---

## Deployment Details

### Version
- **Version**: v1.23.0
- **Commit**: abc123def456
- **Branch**: main
- **Created**: 2024-01-15 14:32 UTC
- **Built By**: CI/CD Pipeline

### Changes Summary
- Files Changed: 24
- Lines Added: 1,247
- Lines Removed: 342
- New Features: 3
- Bug Fixes: 5

### Deployment Configuration
- **Strategy**: Blue-Green Deployment
- **Target**: Production (us-east-1)
- **Canary %**: 10% (initial)
- **Health Check**: 5 min before 100% rollout
- **Rollback**: Automatic if error rate >5%

---

## Staging Deployment (Stage 1)

**Status**: COMPLETED Ã¢Å“â€œ
**Time**: 2024-01-15 14:45 UTC
**Duration**: 8 minutes

### Deployment Steps
1. [14:45] Created new replica (10 instances)
2. [14:47] Deployed v1.23.0 to replica
3. [14:50] Verified health checks (10/10 healthy)
4. [14:52] Ran smoke tests (35/35 passed)
5. [14:53] Ran integration tests (142/142 passed)

### Metrics
- **Error Rate**: 0.02% (baseline: 0.01%) Ã¢Å“â€œ
- **P95 Latency**: 240ms (baseline: 220ms) Ã¢Å“â€œ
- **Memory Usage**: 512MB per instance (baseline: 480MB) Ã¢Å“â€œ
- **Database Connections**: 45 (baseline: 40) Ã¢Å“â€œ

### Staging QA Passed
- [x] Login flow works
- [x] Submit form successfully
- [x] Download file successfully
- [x] Admin panel accessible
- [x] API endpoints responsive

**Verdict**: APPROVED FOR PRODUCTION Ã¢Å“â€œ

---

## Production Deployment (Stage 2)

**Status**: COMPLETED Ã¢Å“â€œ
**Time**: 2024-01-15 15:15 UTC
**Duration**: 22 minutes

### Pre-Deployment Checks
- [x] Current version healthy (error rate 0.01%, latency 210ms)
- [x] Database connections normal (38/50)
- [x] All services green
- [x] Approval from Product Lead: John Doe

### Canary Rollout (10%)
**Time**: 15:15 - 15:20
- Routed 10% of traffic to v1.23.0
- Monitored metrics for 5 minutes
- No anomalies detected
- **Result**: APPROVED to proceed

### Full Rollout (100%)
**Time**: 15:20 - 15:37
- Gradually increased to 100% over 17 minutes
- Monitored all instances coming online
- All health checks passed
- Traffic fully switched

### Post-Deployment Metrics
| Metric | Before | After | Status |
|--------|--------|-------|--------|
| Error Rate | 0.01% | 0.02% | Ã¢Å“â€œ (within threshold) |
| P95 Latency | 220ms | 235ms | Ã¢Å“â€œ (acceptable) |
| Throughput | 5,000 req/s | 5,050 req/s | Ã¢Å“â€œ |
| Memory | 480MB | 510MB | Ã¢Å“â€œ |

**Verdict**: DEPLOYMENT SUCCESSFUL Ã¢Å“â€œ

---

## Smoke Tests (Production)

**Time**: 15:40 - 15:45
**Result**: 45/45 PASSED Ã¢Å“â€œ

1. [PASS] Health check endpoint responds
2. [PASS] Login with test user succeeds
3. [PASS] Create resource endpoint works
4. [PASS] Read resource endpoint works
5. [PASS] Update resource endpoint works
6. [PASS] Delete resource endpoint works
7. [PASS] Database connectivity OK
8. [PASS] Cache connectivity OK
9. [PASS] Email service responds
10. [PASS] Payment service responds

---

## Monitoring & Alerts

### Critical Metrics (Real-Time Monitoring)
- [x] Error rate (target <0.1%) Ã¢â‚¬â€ **OK**
- [x] Response latency p95 (target <500ms) Ã¢â‚¬â€ **OK**
- [x] Uptime (target >99.9%) Ã¢â‚¬â€ **OK**
- [x] Database connection pool (target <75%) Ã¢â‚¬â€ **OK**
- [x] CPU usage (target <70%) Ã¢â‚¬â€ **OK**

### Alerts Active for Next 4 Hours
- Error rate spike: Alert if >5x baseline
- Latency spike: Alert if >2x baseline
- Health check failures: Alert immediately
- Memory leak detection: Alert if usage >90%

### On-Call Schedule
- **On-Call**: Engineering Team
- **Duration**: Next 4 hours post-deployment
- **Escalation**: [Contact details]

---

## Deployment Notifications

### Team Notification
Sent to: #deployments Slack channel

> v1.23.0 deployed to production successfully!
> - 3 features added
> - 5 bugs fixed
> - Deployment time: 22 minutes
> - Health: All green
> - On-call: Engineering Team

### User Communication
- Status Page: Updated to show new features
- Release Notes: Posted to [link]
- Email: Sent to opted-in customers

---

## Rollback Procedures

### Automated Rollback Triggers
- Error rate >5% for >1 minute Ã¢â€ â€™ Automatic rollback
- Health check failures >20% Ã¢â€ â€™ Automatic rollback
- Database connection timeout Ã¢â€ â€™ Automatic rollback
- OOM (Out of Memory) errors Ã¢â€ â€™ Automatic rollback

### Manual Rollback (If Needed)
```
// Trigger manual rollback
./scripts/rollback.sh v1.22.5

// Steps:
1. Pause incoming requests (0-1 min)
2. Switch traffic back to v1.22.5
3. Verify health checks
4. Resume requests
5. Notify team

// Duration: ~5 minutes total
```

### Post-Rollback Steps
1. Investigate root cause (error logs, monitoring data)
2. File incident ticket (postmortem within 24h)
3. Document lessons learned
4. Update deployment checklist if needed
5. Re-deploy when fixed version ready

---

## Deployment Checklist

### Before Deployment
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] No linting errors
- [ ] No security vulnerabilities
- [ ] Changelog written
- [ ] Documentation updated
- [ ] Database migrations tested
- [ ] Feature flags configured (if applicable)

### During Deployment
- [ ] Monitor error rates in real-time
- [ ] Monitor latency metrics
- [ ] Check logs for warnings
- [ ] Verify database queries normal
- [ ] Monitor external API calls

### After Deployment
- [ ] Run smoke tests
- [ ] Verify all endpoints responsive
- [ ] Check user-facing features work
- [ ] Monitor for next 1 hour minimum
- [ ] Collect metrics for retrospective

---

## Deployment Schedule
- **Time Window**: Weekdays 10:00-16:00 UTC (business hours)
- **Blackout Dates**: No deployments during major events or holidays
- **On-Call**: Always have on-call engineer during deployment
- **Communication**: Notify team 30 min before deployment

---

## Troubleshooting

### Error Rate Spiked After Deployment
1. Check logs for error messages
2. Compare with previous version to identify change
3. Decide: Fix forward (patch) or rollback
4. If rollback: Execute rollback procedure immediately
5. Investigate root cause (security issue? bug? config?)

### Latency Increased After Deployment
1. Check database query performance
2. Check external API response times
3. Profile code for bottlenecks
4. Review database indexes
5. Evaluate caching strategy

### Memory Leak Suspected
1. Check memory metrics (is it growing continuously?)
2. Enable detailed memory profiling
3. Compare with baseline
4. Rollback if confirmed memory leak
5. Fix and re-deploy
```

## Usage
```
/deployment start --version v1.23.0 --target production --strategy blue-green
/deployment rollback --version v1.22.5 --reason "error rate spike"
/deployment status --environment production
```

## Configuration
- **Deployment Strategy**: Blue-green, rolling, canary (default: rolling)
- **Rollback Threshold**: Auto-rollback on error rate >5% (configurable)
- **Health Check Frequency**: Every 10 seconds during deployment
- **Test Coverage Required**: Minimum 80% (configurable)
- **Approval Requirements**: Manual sign-off before production (configurable)

## Best Practices
1. **Deploy Frequently**: Small, frequent deployments are safer than large batches
2. **Automate Everything**: No manual steps = fewer errors
3. **Test Thoroughly**: Run all test suites before production
4. **Monitor Closely**: Watch real metrics during rollout
5. **Have a Rollback Plan**: Know how to revert quickly
6. **Staging Before Production**: Always deploy to staging first
7. **Gradual Rollout**: Start with canary (5-10%), expand to 100%
8. **Communicate**: Notify team before, during, and after deployment
9. **Document Changes**: Write good commit messages and release notes
10. **Retrospect**: Learn from each deployment (incidents, improvements)

## Edge Cases
- **Database Migrations**: Plan for reversible migrations (add column, data backfill, then remove old)
- **Breaking API Changes**: Use API versioning or gradual deprecation
- **Data Backfills**: Run large data migrations outside deployment window
- **Third-Party Dependencies**: Monitor provider status during deployment
- **Traffic Spike Risk**: Have capacity headroom before deploying (don't deploy near peak traffic)
