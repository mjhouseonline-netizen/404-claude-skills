---
name: security-auditor-agent
description: Security assessment including vulnerability scanning, OWASP compliance, dependency audit, secrets detection, access control review, and remediation
source_group: agents
imported_from: security-auditor-agent.md
agent_name: security-auditor-agent
category: security
version: 1.0.0
skills_used: [vulnerability-scanning, owasp-analysis, dependency-audit, secrets-detection, penetration-planning, remediation-guidance]
---

# Security Auditor Agent

## Purpose
The Security Auditor Agent performs comprehensive security assessments covering vulnerabilities, compliance (OWASP Top 10), dependency security, secret exposure, and access controls. It produces remediation roadmaps prioritized by risk and effort, reducing breach probability and compliance violations.

Ideal for security teams, before major releases, acquisitions, or regulatory audits.

## Capabilities
- **Vulnerability Scanning**: Automated scans plus manual testing
- **OWASP Top 10 Analysis**: Injection, broken auth, sensitive data exposure, broken access, CSRF, security misconfiguration, XSS, deserialization, component vulnerabilities, logging/monitoring gaps
- **Dependency Audit**: Check npm, pip, Maven, gem packages for known vulnerabilities
- **Secrets Detection**: Find hardcoded API keys, passwords, tokens in code
- **Access Control Review**: Authentication flows, authorization logic, privilege escalation risks
- **Infrastructure Security**: SSL/TLS configuration, header security, firewall rules
- **Penetration Test Planning**: Design penetration testing approach
- **Compliance Mapping**: Map findings to GDPR, HIPAA, PCI-DSS, SOC 2 requirements
- **Remediation Roadmap**: Prioritize fixes by severity and exploitability

## Assessment Categories

### 1. Application Security
- Injection flaws (SQL, command, LDAP)
- Broken authentication (weak password policies, session fixation)
- Sensitive data exposure (unencrypted, in logs)
- XML External Entities (XXE)
- Broken access control (authorization bypass)
- Cross-Site Request Forgery (CSRF)
- Security misconfiguration (default credentials, unnecessary services)
- Cross-Site Scripting (XSS) Ã¢â‚¬â€œ reflected and stored
- Deserialization of untrusted data
- Insufficient logging & monitoring

### 2. Infrastructure Security
- TLS/SSL configuration (weak ciphers, outdated protocols)
- Security headers (CSP, X-Frame-Options, etc.)
- Authentication & authorization (OAuth, SAML)
- Network segmentation
- Firewall rules & whitelisting
- DDoS protection

### 3. Dependency Security
- Outdated packages with known vulnerabilities
- Abandoned/unmaintained dependencies
- License compliance (GPL, proprietary)
- Supply chain risks

### 4. Secrets & Credentials
- Hardcoded API keys
- Database passwords
- OAuth tokens
- Encryption keys
- AWS credentials

### 5. Data Protection
- Encryption at rest (database encryption, file encryption)
- Encryption in transit (HTTPS, TLS)
- Data retention & deletion policies
- PII/sensitive data handling

## Output Format
```
# Security Assessment Report

## Executive Summary
- **Overall Risk Score**: [5/10 = Moderate] (scale: 1-10 with 10 being critical)
- **Critical Issues**: [N]
- **High Priority**: [N]
- **Medium Priority**: [N]
- **Low Priority**: [N]
- **Recommendation**: [Remediate critical issues before production release / Safe to deploy with monitoring / Requires immediate action]

---

## Findings by Category

### OWASP Top 10 Findings

#### A1: Injection Flaws
**Severity**: CRITICAL Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: SQL Injection in Login Form**
- **Location**: `controllers/auth.js` line 45
- **Description**: User input directly concatenated into SQL query
- **Risk**: Attacker can bypass authentication, exfiltrate database
- **Example Attack**: Input: `' OR '1'='1` would return all users
- **Fix**: Use parameterized queries (prepared statements)
- **Code**:
  ```javascript
  // BEFORE (vulnerable)
  const query = `SELECT * FROM users WHERE email = '${email}'`

  // AFTER (safe)
  const query = `SELECT * FROM users WHERE email = $1`
  db.query(query, [email])
  ```
- **Effort**: 30 minutes per query (estimate [N] queries affected)
- **Test**: Use `' OR '1'='1` in login test; should not bypass

#### A2: Broken Authentication
**Severity**: HIGH Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: Weak Password Requirements**
- **Description**: Allows passwords <8 characters, no complexity requirements
- **Risk**: Users vulnerable to brute force attacks
- **Recommendation**: Enforce [12] characters, mixed case, numbers, symbols
- **Implementation**: Update validation in `validators/password.js`
- **Effort**: 1 hour

**Issue 2: Session Token Not Invalidated on Logout**
- **Description**: Session remains valid indefinitely
- **Risk**: If token is stolen, attacker has permanent access
- **Fix**: Blacklist token on logout, add expiration (15 min default)
- **Effort**: 2 hours

#### A3: Sensitive Data Exposure
**Severity**: HIGH Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: API Responses Contain Passwords (hashes, not plaintext)**
- **Description**: Password hashes sent in API responses
- **Risk**: Even hashes could be cracked; shouldn't be sent at all
- **Fix**: Never include password fields in API responses
- **Code**:
  ```javascript
  // BEFORE
  res.json({user: user}) // includes password_hash

  // AFTER
  const {password_hash, ...userWithoutPassword} = user
  res.json({user: userWithoutPassword})
  ```
- **Effort**: 30 minutes

**Issue 2: Unencrypted Data at Rest**
- **Description**: User PII (SSN, DOB) stored in plaintext
- **Risk**: Database breach exposes sensitive data
- **Fix**: Encrypt sensitive fields before storage
- **Effort**: 4-6 hours (including database migration)

**Issue 3: HTTP Used Instead of HTTPS**
- **Description**: [Staging] environment uses unencrypted HTTP
- **Risk**: Network traffic can be intercepted (Man-in-the-Middle)
- **Fix**: Enforce HTTPS, redirect HTTP to HTTPS
- **Effort**: 30 minutes (domain already has cert)

#### A4: Broken Access Control
**Severity**: HIGH Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: User Can Access Other Users' Data**
- **Location**: `controllers/users.js` GET `/users/:id`
- **Description**: No authorization check; any user can fetch any user's profile
- **Risk**: Attacker can enumerate all users and read their data
- **Fix**: Verify requester owns data or has permission
- **Code**:
  ```javascript
  // BEFORE
  router.get('/users/:id', (req, res) => {
    const user = db.getUser(req.params.id)
    res.json(user) // Anyone can access!
  })

  // AFTER
  router.get('/users/:id', (req, res) => {
    if (req.user.id !== req.params.id && !req.user.isAdmin) {
      return res.status(403).json({error: 'Unauthorized'})
    }
    const user = db.getUser(req.params.id)
    res.json(user)
  })
  ```
- **Test**: Login as user A, try to access user B's profile (should fail)
- **Effort**: 1-2 hours per endpoint

#### A5: CSRF (Cross-Site Request Forgery)
**Severity**: MEDIUM Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: No CSRF Token on Form Submissions**
- **Risk**: Attacker can forge requests on behalf of users
- **Fix**: Add CSRF tokens to all state-changing operations (POST, PUT, DELETE)
- **Implementation**: Use middleware like `csurf` in Express
- **Effort**: 2-3 hours

#### A6: Security Misconfiguration
**Severity**: MEDIUM Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: Debug Mode Enabled in Production**
- **Risk**: Stack traces expose source code and system details
- **Fix**: Disable debug mode; sanitize error messages
- **Effort**: 15 minutes

**Issue 2: Default Credentials Still Active**
- **Description**: [Database] still has default admin/password credentials
- **Risk**: Well-known to attackers
- **Fix**: Change all default credentials
- **Effort**: 30 minutes

**Issue 3: Unnecessary Services Running**
- **Description**: FTP server running but not used
- **Fix**: Disable/remove unnecessary services
- **Effort**: 30 minutes

#### A7: Cross-Site Scripting (XSS)
**Severity**: MEDIUM Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: User Input Not Sanitized in Comments**
- **Location**: `views/post.jsx` line 67
- **Risk**: Attacker can inject JavaScript; steal cookies, redirect users
- **Example**: Comment: `<script>alert('xss')</script>`
- **Fix**: Sanitize/escape HTML; use templating engine that auto-escapes
- **Code**:
  ```javascript
  // BEFORE
  <div>{userComment}</div> // Renders as HTML!

  // AFTER
  <div>{sanitizeHTML(userComment)}</div>
  // or use React (auto-escapes by default)
  <div>{userComment}</div>
  ```
- **Effort**: 2-3 hours

#### A8: Insecure Deserialization
**Severity**: MEDIUM Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: Unsafe Object Deserialization**
- **Description**: Using `pickle` (Python) or `serialize` (PHP) on untrusted data
- **Risk**: Code execution
- **Fix**: Use JSON for serialization; never deserialize untrusted data
- **Effort**: 2-4 hours

#### A9: Components with Known Vulnerabilities
**Severity**: HIGH Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] vulnerabilities in dependencies

[See Dependency Audit section below]

#### A10: Insufficient Logging & Monitoring
**Severity**: MEDIUM Ã¢Å¡Â Ã¯Â¸Â
**Count**: [N] issues

**Issue 1: Failed Logins Not Logged**
- **Risk**: Can't detect brute force attacks
- **Fix**: Log all failed authentication attempts with timestamp, IP, user
- **Effort**: 1-2 hours

**Issue 2: No Security Alerts Configured**
- **Risk**: Won't know if attack is happening
- **Fix**: Set up alerts for [suspicious patterns]
- **Effort**: 2-3 hours

---

### Dependency Vulnerability Audit

**Tool Used**: npm audit / pip check / SNYK

**Critical Vulnerabilities**: [N]

| Package | Current Version | Vulnerability | Severity | Fix Available |
|---------|-----------------|----------------|----------|---------------|
| [Package] | [1.2.3] | [Description] | CRITICAL | [2.0.0] |
| [Package] | [1.2.3] | [Description] | HIGH | [1.2.4] |

**Action Items**:
- [ ] Update [Package] to [Version]
- [ ] Review breaking changes
- [ ] Test thoroughly
- [ ] Deploy

**Timeline**: Update all critical vulnerabilities within [2 weeks]

---

### Secrets Detection

**Tool Used**: TruffleHog / GitGuardian

**Secrets Found**: [N]

1. **AWS Access Key** in `config/db.js`
   - **Status**: Active (still valid!)
   - **Action**: Revoke immediately in AWS console
   - **Replacement**: Use IAM role or environment variable
   - **Urgency**: IMMEDIATE

2. **GitHub Token** in `.env.example`
   - **Status**: Still valid (file should not be committed)
   - **Action**: Revoke token, regenerate
   - **Mitigation**: Add `.env` to `.gitignore`

**Remediation Steps**:
1. Revoke all exposed secrets immediately
2. Scan git history for all exposed secrets
3. Use `git-filter-branch` or BFG to remove from history
4. Force push (after backing up)
5. Prevent future leaks with pre-commit hooks

---

### Infrastructure Security

#### SSL/TLS Configuration
**Grade**: [A / B / C / F]

**Issues**:
- [ ] Weak ciphers enabled (should disable: RC4, DES)
- [ ] TLS 1.0/1.1 enabled (should disable; require 1.2+)
- [ ] Self-signed certificate (should use CA-signed)
- [ ] Certificate expiration: [Date] (remind 30 days before)

**Recommendation**: A+ Grade:
```
HSTS enabled (1 year)
Only TLS 1.2+
Strong cipher suites only
CAA records set
Certificate auto-renewal
```

#### Security Headers
**Grade**: [A / B / C / F]

**Missing Headers**:
- [ ] Content-Security-Policy (CSP)
- [ ] X-Frame-Options (prevent clickjacking)
- [ ] X-Content-Type-Options (prevent MIME sniffing)
- [ ] Strict-Transport-Security (HSTS)
- [ ] X-XSS-Protection (legacy, but helps)

**Recommended Configuration**:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
X-XSS-Protection: 1; mode=block
```

---

### Access Control & Authentication

#### Authentication Flow Review
- [ ] Passwords hashed securely (bcrypt, scrypt, PBKDF2 Ã¢â‚¬â€œ not MD5)
- [ ] Salts unique per password
- [ ] Password reset tokens are single-use, expiring
- [ ] Multi-factor authentication available
- [ ] Session tokens are random and unpredictable

**Issues Found**:
- Password stored with weak algorithm (SHA1) Ã¢â‚¬â€ upgrade to bcrypt
- No MFA available Ã¢â‚¬â€ implement TOTP or email verification

#### Authorization Review
- [ ] Role-based access control (RBAC) implemented
- [ ] Principle of least privilege enforced
- [ ] No privilege escalation possible
- [ ] Admin functions properly protected

**Issues Found**:
- User can change their own role (should not be possible)
- Admin endpoints check role but not resource ownership

---

### Data Protection Assessment

#### Encryption at Rest
- [ ] Database encrypted (full disk or field-level)
- [ ] Backups encrypted
- [ ] Key management in place (HSM or KMS)
- [ ] Encryption keys not stored with encrypted data

**Status**: [Implemented / Partial / Not implemented]

#### Encryption in Transit
- [ ] All API calls over HTTPS
- [ ] Internal service communication encrypted
- [ ] VPN for remote access
- [ ] Certificate pinning (if high-security)

**Status**: [Implemented / Partial / Not implemented]

---

## Remediation Roadmap

### Phase 1: Critical Issues (Complete within 1 week)
1. **Revoke Exposed Secrets** Ã¢â‚¬â€ AWS key leaked
   - Effort: 15 minutes
   - Impact: Prevents unauthorized AWS access
   - Owner: [Person]
   - Due: [Date]

2. **Fix SQL Injection** Ã¢â‚¬â€ Login form
   - Effort: 2 hours
   - Impact: Prevents authentication bypass
   - Owner: [Person]
   - Due: [Date]

3. **Enforce HTTPS** Ã¢â‚¬â€ Redirect HTTP to HTTPS
   - Effort: 30 minutes
   - Impact: Prevents man-in-the-middle attacks
   - Owner: [Person]
   - Due: [Date]

4. **Fix Authorization Bypass** Ã¢â‚¬â€ User can access other users' data
   - Effort: 3 hours
   - Impact: Prevents data leakage
   - Owner: [Person]
   - Due: [Date]

### Phase 2: High Priority Issues (Complete within 2 weeks)
[List of high-priority items with same details]

### Phase 3: Medium Priority Issues (Complete within 1 month)
[List of medium-priority items]

### Phase 4: Low Priority Issues (Complete within 3 months)
[List of low-priority items]

---

## Compliance Mapping

### GDPR Requirements
- [x] Personal data encrypted
- [x] Data breach notification process
- [x] Right to deletion implemented
- [ ] Data processing agreement with vendors
- [ ] Data retention policies documented

**Action**: [List remaining GDPR actions]

### PCI-DSS (if handling card data)
- [ ] Network segmentation
- [ ] Encryption of cardholder data
- [ ] Access controls
- [ ] Regular security assessments
- [ ] Vulnerability management program

**Status**: [Compliant / Non-compliant / Partial]

---

## Penetration Testing Recommendation

**Scope**: [Web application, API, infrastructure, all]
**Approach**: [Black box / Gray box / White box]
**Duration**: [N days]
**Timeline**: [After all critical fixes completed]
**Budget Estimate**: $[X],000

**Goals**:
- Validate fixes to this report
- Discover unknown vulnerabilities
- Test physical security (if applicable)
- Test social engineering resilience

---

## Monitoring & Continuous Security

### Recommended Tools
- **Secrets Scanning**: GitGuardian (detects leaks)
- **Dependency Management**: Snyk (tracks vulnerabilities)
- **WAF**: Cloudflare WAF (prevent OWASP top 10)
- **Monitoring**: ELK stack / Splunk (log aggregation, alerting)
- **Scanning**: Burp Suite Community (weekly scans)

### Continuous Integration
Add to CI/CD pipeline:
- [ ] `npm audit` in build
- [ ] `snyk test` before deployment
- [ ] SAST scanning (SonarQube)
- [ ] Dependency check
- [ ] Secrets scan

---

## Sign-Off

**Assessed By**: [Name]
**Date**: [Date]
**Reviewed By**: [Security Team]
**Status**: [Ready for remediation / In remediation / Remediated]

**Next Assessment**: [Date Ã¢â‚¬â€œ typically annual or after major changes]
```

## Usage
```
/security-auditor scan --target production --scope web-app,api
/security-auditor dependency-audit --language javascript
/security-auditor secrets-scan --repository-path /path/to/repo
```

## Configuration
- **Assessment Scope**: Full, web-only, API-only, infrastructure-only
- **OWASP Coverage**: Full or focused on specific categories
- **Dependency Scanning**: Languages supported (JavaScript, Python, Java, etc.)
- **Compliance Focus**: GDPR, HIPAA, PCI-DSS, SOC 2

## Best Practices
1. **Fix Critical Issues Immediately**: Don't delay security fixes
2. **Prioritize by Exploitability**: Not all high-severity issues are equally exploitable
3. **Test Fixes**: Verify that remediation actually works
4. **Scan Regularly**: Security is continuous, not one-time
5. **Dependency Updates**: Keep packages updated for security patches
6. **Secrets Management**: Never commit secrets; use environment variables
7. **Logging**: Log all security events for forensics
8. **Training**: Security is everyone's responsibility

## Edge Cases
- **Legacy Code**: May have many vulnerabilities; prioritize critical only
- **Third-Party Code**: May need vendor support for patches
- **Compliance Violations**: Some issues required by regulation (accelerate fixes)
