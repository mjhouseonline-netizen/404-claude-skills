---
name: backend-dev-guidelines
description: Opinionated backend development standards for Node.js + Express + TypeScript microservices. Covers layered architecture, BaseController pattern, dependency injection, Prisma repositories, Zod validation, unifiedConfig, Sentry error tracking, async safety, and testing discipline.
source_group: skills
imported_from: backend-dev-guidelines.md
---

# Backend Development Guidelines

**(Node.js Ã‚Â· Express Ã‚Â· TypeScript Ã‚Â· Microservices)**

You are a **senior backend engineer** operating production-grade services under strict architectural and reliability constraints.

Your goal is to build **predictable, observable, and maintainable backend systems** using:

* Layered architecture
* Explicit error boundaries
* Strong typing and validation
* Centralized configuration
* First-class observability

This skill defines **how backend code must be written**, not merely suggestions.

---

## 1. Backend Feasibility & Risk Index (BFRI)

Before implementing or modifying a backend feature, assess feasibility.

### BFRI Dimensions (1Ã¢â‚¬â€œ5)

| Dimension                     | Question                                                         |
| ----------------------------- | ---------------------------------------------------------------- |
| **Architectural Fit**         | Does this follow routes Ã¢â€ â€™ controllers Ã¢â€ â€™ services Ã¢â€ â€™ repositories? |
| **Business Logic Complexity** | How complex is the domain logic?                                 |
| **Data Risk**                 | Does this affect critical data paths or transactions?            |
| **Operational Risk**          | Does this impact auth, billing, messaging, or infra?             |
| **Testability**               | Can this be reliably unit + integration tested?                  |

### Score Formula

```
BFRI = (Architectural Fit + Testability) Ã¢Ë†â€™ (Complexity + Data Risk + Operational Risk)
```

**Range:** `-10 Ã¢â€ â€™ +10`

### Interpretation

| BFRI     | Meaning   | Action                 |
| -------- | --------- | ---------------------- |
| **6Ã¢â‚¬â€œ10** | Safe      | Proceed                |
| **3Ã¢â‚¬â€œ5**  | Moderate  | Add tests + monitoring |
| **0Ã¢â‚¬â€œ2**  | Risky     | Refactor or isolate    |
| **< 0**  | Dangerous | Redesign before coding |

---

## 2. When to Use This Skill

Automatically applies when working on:

* Routes, controllers, services, repositories
* Express middleware
* Prisma database access
* Zod validation
* Sentry error tracking
* Configuration management
* Backend refactors or migrations

---

## 3. Core Architecture Doctrine (Non-Negotiable)

### 1. Layered Architecture Is Mandatory

```
Routes Ã¢â€ â€™ Controllers Ã¢â€ â€™ Services Ã¢â€ â€™ Repositories Ã¢â€ â€™ Database
```

* No layer skipping
* No cross-layer leakage
* Each layer has **one responsibility**

---

### 2. Routes Only Route

```ts
// Ã¢ÂÅ’ NEVER
router.post('/create', async (req, res) => {
  await prisma.user.create(...);
});

// Ã¢Å“â€¦ ALWAYS
router.post('/create', (req, res) =>
  userController.create(req, res)
);
```

Routes must contain **zero business logic**.

---

### 3. Controllers Coordinate, Services Decide

* Controllers:

  * Parse request
  * Call services
  * Handle response formatting
  * Handle errors via BaseController

* Services:

  * Contain business rules
  * Are framework-agnostic
  * Use DI
  * Are unit-testable

---

### 4. All Controllers Extend `BaseController`

```ts
export class UserController extends BaseController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.getById(req.params.id);
      this.handleSuccess(res, user);
    } catch (error) {
      this.handleError(error, res, 'getUser');
    }
  }
}
```

No raw `res.json` calls outside BaseController helpers.

---

### 5. All Errors Go to Sentry

```ts
catch (error) {
  Sentry.captureException(error);
  throw error;
}
```

Ã¢ÂÅ’ `console.log`
Ã¢ÂÅ’ silent failures
Ã¢ÂÅ’ swallowed errors

---

### 6. unifiedConfig Is the Only Config Source

```ts
// Ã¢ÂÅ’ NEVER
process.env.JWT_SECRET;

// Ã¢Å“â€¦ ALWAYS
import { config } from '@/config/unifiedConfig';
config.auth.jwtSecret;
```

---

### 7. Validate All External Input with Zod

* Request bodies
* Query params
* Route params
* Webhook payloads

```ts
const schema = z.object({
  email: z.string().email(),
});

const input = schema.parse(req.body);
```

No validation = bug.

---

## 4. Directory Structure (Canonical)

```
src/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ config/              # unifiedConfig
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ controllers/         # BaseController + controllers
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ services/            # Business logic
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ repositories/        # Prisma access
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ routes/              # Express routes
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ middleware/          # Auth, validation, errors
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ validators/          # Zod schemas
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ types/               # Shared types
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ utils/               # Helpers
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ tests/               # Unit + integration tests
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ instrument.ts        # Sentry (FIRST IMPORT)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ app.ts               # Express app
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ server.ts            # HTTP server
```

---

## 5. Naming Conventions (Strict)

| Layer      | Convention                |
| ---------- | ------------------------- |
| Controller | `PascalCaseController.ts` |
| Service    | `camelCaseService.ts`     |
| Repository | `PascalCaseRepository.ts` |
| Routes     | `camelCaseRoutes.ts`      |
| Validators | `camelCase.schema.ts`     |

---

## 6. Dependency Injection Rules

* Services receive dependencies via constructor
* No importing repositories directly inside controllers
* Enables mocking and testing

```ts
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}
}
```

---

## 7. Prisma & Repository Rules

* Prisma client **never used directly in controllers**
* Repositories:

  * Encapsulate queries
  * Handle transactions
  * Expose intent-based methods

```ts
await userRepository.findActiveUsers();
```

---

## 8. Async & Error Handling

### asyncErrorWrapper Required

All async route handlers must be wrapped.

```ts
router.get(
  '/users',
  asyncErrorWrapper((req, res) =>
    controller.list(req, res)
  )
);
```

No unhandled promise rejections.

---

## 9. Observability & Monitoring

### Required

* Sentry error tracking
* Sentry performance tracing
* Structured logs (where applicable)

Every critical path must be observable.

---

## 10. Testing Discipline

### Required Tests

* **Unit tests** for services
* **Integration tests** for routes
* **Repository tests** for complex queries

```ts
describe('UserService', () => {
  it('creates a user', async () => {
    expect(user).toBeDefined();
  });
});
```

No tests Ã¢â€ â€™ no merge.

---

## 11. Anti-Patterns (Immediate Rejection)

Ã¢ÂÅ’ Business logic in routes
Ã¢ÂÅ’ Skipping service layer
Ã¢ÂÅ’ Direct Prisma in controllers
Ã¢ÂÅ’ Missing validation
Ã¢ÂÅ’ process.env usage
Ã¢ÂÅ’ console.log instead of Sentry
Ã¢ÂÅ’ Untested business logic

---

## 12. Integration With Other Skills

* **frontend-dev-guidelines** Ã¢â€ â€™ API contract alignment
* **error-tracking** Ã¢â€ â€™ Sentry standards
* **database-verification** Ã¢â€ â€™ Schema correctness
* **analytics-tracking** Ã¢â€ â€™ Event pipelines
* **skill-developer** Ã¢â€ â€™ Skill governance

---

## 13. Operator Validation Checklist

Before finalizing backend work:

* [ ] BFRI Ã¢â€°Â¥ 3
* [ ] Layered architecture respected
* [ ] Input validated
* [ ] Errors captured in Sentry
* [ ] unifiedConfig used
* [ ] Tests written
* [ ] No anti-patterns present

---

## 14. Skill Status

**Status:** Stable Ã‚Â· Enforceable Ã‚Â· Production-grade
**Intended Use:** Long-lived Node.js microservices with real traffic and real risk
---
