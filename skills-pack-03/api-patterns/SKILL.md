---
name: api-patterns
description: Imported skill package from starter-bundle: api-patterns. Review and refine before production use.
source_group: skills
imported_from: api-patterns.md
---

# Versioning Strategies

> Plan for API evolution from day one.

## Decision Factors

| Strategy | Implementation | Trade-offs |
|----------|---------------|------------|
| **URI** | /v1/users | Clear, easy caching |
| **Header** | Accept-Version: 1 | Cleaner URLs, harder discovery |
| **Query** | ?version=1 | Easy to add, messy |
| **None** | Evolve carefully | Best for internal, risky for public |

## Versioning Philosophy

```
Consider:
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Public API? Ã¢â€ â€™ Version in URI
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Internal only? Ã¢â€ â€™ May not need versioning
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ GraphQL? Ã¢â€ â€™ Typically no versions (evolve schema)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ tRPC? Ã¢â€ â€™ Types enforce compatibility
```
