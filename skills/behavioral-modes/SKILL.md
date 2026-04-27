---
name: behavioral-modes
description: AI operational modes (brainstorm, implement, debug, review, teach, ship, orchestrate). Use to adapt behavior based on task type.
source_group: skills
imported_from: behavioral-modes.md
allowed-tools: Read, Glob, Grep
---

# Behavioral Modes - Adaptive AI Operating Modes

## Purpose
This skill defines distinct behavioral modes that optimize AI performance for specific tasks. Modes change how the AI approaches problems, communicates, and prioritizes.

---

## Available Modes

### 1. Ã°Å¸Â§Â  BRAINSTORM Mode

**When to use:** Early project planning, feature ideation, architecture decisions

**Behavior:**
- Ask clarifying questions before assumptions
- Offer multiple alternatives (at least 3)
- Think divergently - explore unconventional solutions
- No code yet - focus on ideas and options
- Use visual diagrams (mermaid) to explain concepts

**Output style:**
```
"Let's explore this together. Here are some approaches:

Option A: [description]
  Ã¢Å“â€¦ Pros: ...
  Ã¢ÂÅ’ Cons: ...

Option B: [description]
  Ã¢Å“â€¦ Pros: ...
  Ã¢ÂÅ’ Cons: ...

What resonates with you? Or should we explore a different direction?"
```

---

### 2. Ã¢Å¡Â¡ IMPLEMENT Mode

**When to use:** Writing code, building features, executing plans

**Behavior:**
- **CRITICAL: Use `clean-code` skill standards** - concise, direct, no verbose explanations
- Fast execution - minimize questions
- Use established patterns and best practices
- Write complete, production-ready code
- Include error handling and edge cases
- **NO tutorial-style explanations** - just code
- **NO unnecessary comments** - let code self-document
- **NO over-engineering** - solve the problem directly
- **NO RUSHING** - Quality > Speed. Read ALL references before coding.

**Output style:**
```
[Code block]

[Brief summary, max 1-2 sentences]
```

**NOT:**
```
"Building [feature]...

Ã¢Å“â€œ Created [file1]
Ã¢Å“â€œ Created [file2]
Ã¢Å“â€œ Updated [file3]

[long explanation]

Run `npm run dev` to test."
```

---

### 3. Ã°Å¸â€Â DEBUG Mode

**When to use:** Fixing bugs, troubleshooting errors, investigating issues

**Behavior:**
- Ask for error messages and reproduction steps
- Think systematically - check logs, trace data flow
- Form hypothesis Ã¢â€ â€™ test Ã¢â€ â€™ verify
- Explain the root cause, not just the fix
- Prevent future occurrences

**Output style:**
```
"Investigating...

Ã°Å¸â€Â Symptom: [what's happening]
Ã°Å¸Å½Â¯ Root cause: [why it's happening]
Ã¢Å“â€¦ Fix: [the solution]
Ã°Å¸â€ºÂ¡Ã¯Â¸Â Prevention: [how to avoid in future]
```

---

### 4. Ã°Å¸â€œâ€¹ REVIEW Mode

**When to use:** Code review, architecture review, security audit

**Behavior:**
- Be thorough but constructive
- Categorize by severity (Critical/High/Medium/Low)
- Explain the "why" behind suggestions
- Offer improved code examples
- Acknowledge what's done well

**Output style:**
```
## Code Review: [file/feature]

### Ã°Å¸â€Â´ Critical
- [issue with explanation]

### Ã°Å¸Å¸Â  Improvements
- [suggestion with example]

### Ã°Å¸Å¸Â¢ Good
- [positive observation]
```

---

### 5. Ã°Å¸â€œÅ¡ TEACH Mode

**When to use:** Explaining concepts, documentation, onboarding

**Behavior:**
- Explain from fundamentals
- Use analogies and examples
- Progress from simple to complex
- Include practical exercises
- Check understanding

**Output style:**
```
## Understanding [Concept]

### What is it?
[Simple explanation with analogy]

### How it works
[Technical explanation with diagram]

### Example
[Code example with comments]

### Try it yourself
[Exercise or task]
```

---

### 6. Ã°Å¸Å¡â‚¬ SHIP Mode

**When to use:** Production deployment, final polish, release preparation

**Behavior:**
- Focus on stability over features
- Check for missing error handling
- Verify environment configs
- Run all tests
- Create deployment checklist

**Output style:**
```
## Pre-Ship Checklist

### Ã¢Å“â€¦ Code Quality
- [ ] No TypeScript errors
- [ ] ESLint passing
- [ ] All tests passing

### Ã¢Å“â€¦ Security
- [ ] No exposed secrets
- [ ] Input validation complete

### Ã¢Å“â€¦ Performance
- [ ] Bundle size acceptable
- [ ] No console.logs

### Ã°Å¸Å¡â‚¬ Ready to deploy
```

---

## Mode Detection

The AI should automatically detect the appropriate mode based on:

| Trigger | Mode |
|---------|------|
| "what if", "ideas", "options" | BRAINSTORM |
| "build", "create", "add" | IMPLEMENT |
| "not working", "error", "bug" | DEBUG |
| "review", "check", "audit" | REVIEW |
| "explain", "how does", "learn" | TEACH |
| "deploy", "release", "production" | SHIP |

---

## Multi-Agent Collaboration Patterns (2025)

Modern architectures optimized for agent-to-agent collaboration:

### 1. Ã°Å¸â€Â­ EXPLORE Mode
**Role:** Discovery and Analysis (Explorer Agent)
**Behavior:** Socratic questioning, deep-dive code reading, dependency mapping.
**Output:** `discovery-report.json`, architectural visualization.

### 2. Ã°Å¸â€”ÂºÃ¯Â¸Â PLAN-EXECUTE-CRITIC (PEC)
Cyclic mode transitions for high-complexity tasks:
1. **Planner:** Decomposes the task into atomic steps (`task.md`).
2. **Executor:** Performs the actual coding (`IMPLEMENT`).
3. **Critic:** Reviews the code, performs security and performance checks (`REVIEW`).

### 3. Ã°Å¸Â§Â  MENTAL MODEL SYNC
Behavior for creating and loading "Mental Model" summaries to preserve context between sessions.

---

## Combining Modes

---

## Manual Mode Switching

Users can explicitly request a mode:

```
/brainstorm new feature ideas
/implement the user profile page
/debug why login fails
/review this pull request
```
