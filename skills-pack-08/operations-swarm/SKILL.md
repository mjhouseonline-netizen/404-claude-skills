---
name: operations-swarm
description: Coordinates Client Onboarding, Workflow Automator, Product Manager, and Brand Builder for end-to-end client setup
source_group: swarms
imported_from: operations-swarm.md
swarm_name: operations-swarm
agents: [client-onboarding-agent, workflow-automator-agent, product-manager-agent, brand-builder-agent]
version: 1.0.0
---

# Operations Swarm

## Overview
The Operations Swarm orchestrates complete client acquisition through project launch. It automates onboarding workflows, ensures brand alignment, trains the team on processes, and sets up the foundation for successful project delivery.

**Use Case**: "Set up a new client from first contact through project kickoff with brand alignment"

**Timeline**: 2-3 weeks (from contract to kickoff)
**Effort**: Replaces manual onboarding, reducing setup time 50-70%
**Outcome**: Standardized, white-glove onboarding experience

## Agents in This Swarm

### 1. Client Onboarding Agent
**Role**: Client acquisition workflow
**Output**: Onboarding checklist, welcome sequences, access provisioning
**Duration**: 1 week

### 2. Brand Builder Agent
**Role**: Internal brand alignment
**Output**: Brand guidelines for client communications, voice/messaging consistency
**Duration**: 1-2 days (parallel with onboarding)

### 3. Workflow Automator Agent
**Role**: Automation of repetitive tasks
**Output**: Automated workflows (email sequences, task assignment, notifications)
**Duration**: 3-5 days

### 4. Product Manager Agent
**Role**: Project clarity and execution
**Output**: Project plan, user stories, sprint schedule
**Duration**: 1 week

## Orchestration Flow

```
Client Onboarding Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Create project workspace, provision access
     Ã¢â€ â€œ
Brand Builder Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Align communications, messaging consistency
     Ã¢â€ â€œ
Workflow Automator Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Automate repetitive tasks (email, notifications)
     Ã¢â€ â€œ
Product Manager Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Create project plan, define success metrics
     Ã¢â€ â€œ
Kickoff Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Client meets team, project begins
```

## Example Workflow: "Onboard New Enterprise Client"

### Step 1: Client Onboarding Agent (Setup Phase)
**Input**:
- Client company name
- Key contacts (primary POC, stakeholders)
- Signed contract details
- Service scope

**Output**:
- Welcome email drafted (personalized)
- Access credentials prepared (Slack, project tools, etc.)
- Team introduction prepared
- Kickoff meeting scheduled
- Onboarding checklist created

**Example Output**:
- Day 1: Send welcome email + schedule kickoff for Day 5
- Day 2: Provide access credentials (Slack invite, tool logins)
- Day 3: Share onboarding guide + recorded video walkthrough
- Day 4: Pre-kickoff check-in call (answer questions)
- Day 5: Kickoff meeting (full team intros, project overview)

### Step 2: Brand Builder Agent (2-3 days)
**Input** (while onboarding is preparing):
- Brand guidelines (your company)
- Tone and messaging standards
- Visual identity specs

**Output**:
- Brand guidelines for client communications (email templates, colors, fonts)
- Messaging guide (how to talk about your company/services to this client)
- Voice consistency check (all client-facing materials reviewed)

**Example Output**:
- Email template (matches your brand colors, fonts, tone)
- PowerPoint template for kickoff (branded design)
- Messaging guide for account manager (key talking points)
- Visual identity specs (logo usage, color palette, typography)

### Step 3: Workflow Automator Agent (3-5 days)
**Input** (using outputs from Onboarding + Brand):
- Client-specific workflows needed
- Communication cadence (weekly updates, monthly reviews)
- Approval processes (how decisions get made)

**Output**:
- Automated workflows:
  - Weekly status email (auto-generated from project data)
  - Monthly check-in (auto-scheduled, reminder sent)
  - Slack notifications (when project milestones hit)
  - Task assignment (auto-assign to team members)

**Example Output**:
```
Workflow 1: Weekly Status Email
- Trigger: Every Monday at 9 AM
- Get: Project updates from tool
- Send: Client formatted email with progress
- Result: Client sees updates without manual effort

Workflow 2: Monthly Review Prep
- Trigger: First of each month
- Generate: Slide deck with month's accomplishments
- Schedule: Review meeting
- Notify: Team to prepare talking points
```

### Step 4: Product Manager Agent (1 week)
**Input** (using contract + brand + workflow setup):
- Project scope (what are we delivering?)
- Success metrics (how do we measure success?)
- Timeline (when are deliverables due?)

**Output**:
- Project plan (phases, milestones, deliverables)
- User stories (broken-down work items)
- Sprint schedule (weekly/biweekly pace)
- Success metrics dashboard (what we're tracking)

**Example Output**:
```
Project: [Client Project]
Timeline: [X weeks]

Phase 1: Discovery (Weeks 1-2)
- Story 1.1: Understand client's current process
- Story 1.2: Document requirements
- Deliverable: Requirements document

Phase 2: Design (Weeks 3-4)
- Story 2.1: Create design concepts
- Story 2.2: Get client feedback
- Deliverable: Approved design

Phase 3: Implementation (Weeks 5-8)
- Story 3.1: Build feature 1
- Story 3.2: Build feature 2
- Deliverable: Working feature

Success Metrics:
- Client satisfaction: NPS > 40
- On-time delivery: 100%
- Zero critical issues: Yes
```

### Step 5: Integration & Kickoff

**Timeline**:
- Day 1: Client signs contract
- Day 1-3: Onboarding Agent prepares access + comms
- Day 2-3: Brand Builder finalizes templates
- Day 3-5: Workflow Automator sets up automations
- Day 4-5: Product Manager builds project plan
- Day 5: Kickoff meeting (all systems ready)
- Week 1+: Project execution begins (automations running)

**Kickoff Meeting Agenda**:
1. Welcome (Client onboarding agent leads)
2. Team introductions (Brand guide: voice/tone evident)
3. Project overview (Product manager presents plan)
4. Process & communication (Workflow automator: explain cadence)
5. Q&A
6. Next steps (first week tasks assigned)

## When to Use This Swarm

**Always Use For**:
- New enterprise clients
- High-touch service offerings
- Multi-stakeholder projects
- Contracts >$50K

**Optional For**:
- Small clients (<5 people)
- Fully automated services
- Repeat clients (use template from first engagement)

## Resource Requirements

| Agent | Effort | Owner |
|-------|--------|-------|
| Client Onboarding | 4-6 hours | [Account manager] |
| Brand Builder | 2-3 hours | [Marketing/brand lead] |
| Workflow Automator | 4-6 hours | [Operations/automation specialist] |
| Product Manager | 6-8 hours | [PM or project lead] |

**Total**: 16-23 hours (2-3 days of team time)

## Success Metrics

**Onboarding**:
- Ã¢Å“â€œ All access provisioned by Day 2
- Ã¢Å“â€œ Welcome email sent within 24 hours
- Ã¢Å“â€œ Kickoff scheduled and confirmed

**Brand**:
- Ã¢Å“â€œ All client communications aligned with brand
- Ã¢Å“â€œ Consistent messaging across team
- Ã¢Å“â€œ Professional, cohesive presentation at kickoff

**Workflows**:
- Ã¢Å“â€œ Automated status emails sent on schedule
- Ã¢Å“â€œ Notifications working correctly
- Ã¢Å“â€œ Manual work reduced 50%+

**Product**:
- Ã¢Å“â€œ Project plan documented and shared
- Ã¢Å“â€œ Success metrics defined and measurable
- Ã¢Å“â€œ Team aligned on deliverables and timeline

## Handoffs & Dependencies

```
Client Onboarding Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Brand Builder (messaging)
     Ã¢â€ â€œ                   Ã¢â€ â€œ
     Ã¢â€Å“Ã¢â€â‚¬Ã¢â€ â€™ Workflow Automator Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Set up automations
     Ã¢â€â€š
     Ã¢â€â€Ã¢â€â‚¬Ã¢â€ â€™ Product Manager Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™ Create project plan
            Ã¢â€ â€œ
     All feed into Kickoff
```

**Sequence**:
- Onboarding + Brand + Workflow + Product: **Parallel** (can run simultaneously)
- Kickoff: **After all above complete** (Day 5+)

**Critical Path**: Product Manager (longest, needed for project detail), can start while onboarding prep happens

## Troubleshooting

**If client doesn't receive welcome email**:
- Check email deliverability
- Verify email address in system
- Resend manually if automation fails

**If brand guidelines not finalized**:
- Use previous client's materials (with updates)
- Kickoff with draft guidelines (finalize after)

**If workflow automation has issues**:
- Start with manual emails (transition to automation later)
- Document manual steps for next client

**If project scope unclear**:
- Schedule early discovery call
- Delay kickoff if needed (better to clarify now)

## Launch Checklist

- [ ] Contract signed and stored
- [ ] All client access credentials created
- [ ] Welcome email drafted and scheduled
- [ ] Kickoff meeting date/time confirmed (client calendar)
- [ ] Team members assigned to project
- [ ] Brand guidelines customized for client
- [ ] Email templates created (brand-aligned)
- [ ] Workflow automations configured and tested
- [ ] Project plan drafted (phases, milestones)
- [ ] Success metrics defined
- [ ] Kickoff meeting prep completed (slides, talking points)
- [ ] First-week tasks identified and assigned

## Next Steps

1. **Contract Signed**: Trigger Onboarding Agent
2. **While Onboarding Preps**: Brand Builder + Workflow Automator start
3. **Parallel**: Product Manager builds project plan
4. **Day 4**: Team aligns on plan (30-min meeting)
5. **Day 5**: Kickoff meeting (launch!)
6. **Week 1+**: Project begins (automations handling routine tasks)
7. **Weekly**: Status updates (via automation)
8. **Monthly**: Review (via automation + live meeting)

---

**Expected Outcome**: Smooth client experience, professional introduction, set up for successful delivery
