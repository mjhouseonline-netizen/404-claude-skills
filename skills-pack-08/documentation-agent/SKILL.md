---
name: documentation-agent
description: Generate API documentation, READMEs, architecture diagrams, changelogs, and developer guides from codebase analysis
source_group: agents
imported_from: documentation-agent.md
agent_name: documentation-agent
category: documentation
version: 1.0.0
skills_used: [api-documentation, technical-writing, architecture-visualization, changelog-generation, developer-guides]
---

# Documentation Agent

## Purpose
The Documentation Agent automates the creation and maintenance of technical documentation. It generates API docs, READMEs, architecture diagrams, changelogs, and developer guides by analyzing code, extracting insights, and organizing them for clarity. It keeps documentation in sync with codebase changes.

Ideal for teams shipping products with clear onboarding, API documentation, and architectural clarity.

## Capabilities
- **API Documentation**: OpenAPI/Swagger specs, endpoint documentation, examples, error codes
- **README Generation**: Project overview, setup instructions, usage examples, troubleshooting
- **Architecture Diagrams**: System diagrams, data flow, sequence diagrams from code analysis
- **Code Comments**: JSDoc/docstring generation, complex logic explanation
- **Changelog Generation**: Auto-detect changes from commits, format release notes
- **Developer Guides**: Getting started, contributing guidelines, coding standards
- **Diagram Updates**: Auto-update architecture diagrams when code structure changes
- **Documentation Validation**: Check links, code examples, completeness

## Workflow

1. **Codebase Analysis Phase**
   - Scan directory structure (identify modules, services)
   - Extract function/class signatures (parameters, return types)
   - Identify public APIs (exported functions/routes)
   - Find existing documentation (comments, docstrings)
   - Analyze dependencies (external libraries, internal modules)

2. **API Documentation Generation Phase**
   - Extract endpoint routes and HTTP methods
   - Document request parameters (query, body, headers)
   - Document response formats (status codes, schemas)
   - Generate examples (request/response pairs)
   - Create error documentation (what can go wrong, how to fix)
   - Generate OpenAPI/Swagger specification
   - Create interactive API documentation

3. **README Generation Phase**
   - Write project overview (what does it do?)
   - Create setup instructions (prerequisites, installation)
   - Document configuration (environment variables, settings)
   - Add usage examples (common patterns, quick start)
   - Include troubleshooting (common issues, solutions)
   - Add links to detailed documentation
   - Create badges (build status, coverage, version)

4. **Architecture Documentation Phase**
   - Create system diagram (services, databases, external APIs)
   - Document data flow (request Ã¢â€ â€™ processing Ã¢â€ â€™ response)
   - Create sequence diagrams (complex flows)
   - Document module relationships (dependencies)
   - Explain design decisions (why architecture chosen?)
   - Create deployment diagram (environments, scaling)

5. **Developer Guide Generation Phase**
   - Write getting started guide (install deps, run locally)
   - Document code structure (where things live)
   - Create contributing guidelines (PR process, testing)
   - Document coding standards (naming, formatting, patterns)
   - Add debugging guide (how to debug locally)
   - Create performance guide (optimization tips)

6. **Changelog Generation Phase**
   - Parse commit messages (extract features, fixes, breaks)
   - Group changes by category (features, fixes, security)
   - Generate release notes (what's new, what changed)
   - Track breaking changes (migration guide needed)
   - Auto-increment version numbers (semantic versioning)

7. **Documentation Validation Phase**
   - Verify all code examples compile/run
   - Check all links are valid (no 404s)
   - Validate API examples (make requests, verify responses)
   - Check completeness (all public APIs documented)
   - Verify consistency (terms, formatting, style)

8. **Maintenance Phase**
   - Monitor code changes (detect documentation drift)
   - Update docs when code changes
   - Review documentation for clarity (user feedback)
   - Organize documentation hierarchy (table of contents)
   - Ensure version consistency (docs match code version)

## Input Requirements
- **Repository**: Code repository URL or local path
- **Documentation Format**: Markdown, AsciiDoc, HTML
- **Hosting**: Where docs will be published (GitHub Pages, ReadTheDocs, Notion)
- **Audience**: Who reads docs (developers, users, operators)
- **Scope**: Full documentation or specific sections (API only, setup only)
- **Language**: Programming language of codebase
- **Existing Docs**: Location of existing documentation to preserve

## Output Format
```
# Documentation Package

## Generated Files

### 1. README.md
[Project overview, quick start, basic usage]

### 2. API_DOCUMENTATION.md
[Complete API reference, endpoints, examples]

### 3. ARCHITECTURE.md
[System design, data flow, component relationships]

### 4. DEVELOPER_GUIDE.md
[Setup, running locally, contributing]

### 5. CHANGELOG.md
[Release notes, version history]

### 6. Architecture Diagram (SVG/PNG)
[Visual representation of system]

### 7. Data Flow Diagram (SVG/PNG)
[How data moves through system]

---

# README.md

## Project Name
One-sentence description of what the project does.

## Overview
Paragraph explaining the problem solved and key features.

## Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional, for containerized setup)

### Installation
\`\`\`bash
git clone https://github.com/user/project.git
cd project
npm install
\`\`\`

### Configuration
Create `.env` file:
\`\`\`
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
API_KEY=your_api_key_here
NODE_ENV=development
\`\`\`

### Running Locally
\`\`\`bash
npm run dev
# Server starts on http://localhost:3000
\`\`\`

## Usage Examples

### Example 1: Creating a User
\`\`\`javascript
const response = await fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    name: 'John Doe'
  })
})
const user = await response.json()
console.log(user) // { id: 1, email: 'user@example.com', name: 'John Doe' }
\`\`\`

## Project Structure
\`\`\`
project/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ src/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ routes/        # API endpoints
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ controllers/   # Business logic
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ models/        # Database models
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ utils/         # Helper functions
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ tests/             # Test files
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ docs/              # Documentation
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ package.json
\`\`\`

## API Reference
See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference.

## Contributing
See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for contributing guidelines.

## Troubleshooting

**Problem**: "Connection refused" when starting
- **Solution**: Check PostgreSQL is running: \`pg_isready\`

**Problem**: "Module not found: express"
- **Solution**: Run \`npm install\`

## License
MIT

---

# API_DOCUMENTATION.md

## Overview
Complete API reference for [Project Name].

## Base URL
\`https://api.example.com/v1\`

## Authentication
All requests require Bearer token in Authorization header:
\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Rate Limiting
- 1000 requests per hour per API key
- Response headers include: X-RateLimit-Remaining, X-RateLimit-Reset

## Endpoints

### Users

#### List Users
\`\`\`
GET /users
\`\`\`

**Query Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | false | Page number (default: 1) |
| limit | integer | false | Results per page (default: 20, max: 100) |
| sort | string | false | Sort by field (created_at, name, email) |

**Response**
\`\`\`json
{
  "data": [
    {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
\`\`\`

**Errors**
- 401 Unauthorized: Missing or invalid API key
- 400 Bad Request: Invalid query parameters (limit > 100)

#### Get User
\`\`\`
GET /users/{id}
\`\`\`

**Path Parameters**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | integer | User ID |

**Response**
\`\`\`json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "created_at": "2024-01-15T10:30:00Z"
}
\`\`\`

#### Create User
\`\`\`
POST /users
\`\`\`

**Request Body**
\`\`\`json
{
  "email": "newuser@example.com",
  "name": "Jane Doe"
}
\`\`\`

**Response** (201 Created)
\`\`\`json
{
  "id": 2,
  "email": "newuser@example.com",
  "name": "Jane Doe",
  "created_at": "2024-01-16T14:20:00Z"
}
\`\`\`

**Errors**
- 400 Bad Request: Missing required field (email)
- 409 Conflict: Email already exists

#### Update User
\`\`\`
PUT /users/{id}
\`\`\`

**Request Body** (partial update)
\`\`\`json
{
  "name": "Jane Smith"
}
\`\`\`

**Response**
\`\`\`json
{
  "id": 2,
  "email": "newuser@example.com",
  "name": "Jane Smith",
  "created_at": "2024-01-16T14:20:00Z"
}
\`\`\`

#### Delete User
\`\`\`
DELETE /users/{id}
\`\`\`

**Response** (204 No Content)

---

# ARCHITECTURE.md

## System Overview

```
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â      Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â      Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š   Client    Ã¢â€â€šÃ¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™Ã¢â€â€š   API Server Ã¢â€â€šÃ¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€ â€™Ã¢â€â€š  PostgreSQL  Ã¢â€â€š
Ã¢â€â€š  (Web/App)  Ã¢â€â€š      Ã¢â€â€š (Node.js)    Ã¢â€â€š      Ã¢â€â€š   Database   Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ      Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ      Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
                           Ã¢â€â€š
                           Ã¢â€Å“Ã¢â€â‚¬Ã¢â€ â€™ Redis (Cache)
                           Ã¢â€â€š
                           Ã¢â€â€Ã¢â€â‚¬Ã¢â€ â€™ External Service (if applicable)
```

## Components

### API Server (Node.js)
- Express.js framework
- REST API endpoints
- Request validation
- Business logic execution
- Response formatting

### Database (PostgreSQL)
- Users table: email, name, created_at
- Orders table: user_id, amount, status, created_at
- Indexes on frequently queried fields

### Cache Layer (Redis)
- Session storage
- User list cache (5 min TTL)
- Rate limit tracking

## Data Flow

1. Client sends request to API Server
2. Server validates request (format, auth)
3. Server queries database (or Redis cache)
4. Business logic processes data
5. Server returns JSON response
6. Client receives and renders

## Key Design Decisions

**Why PostgreSQL?**
- ACID compliance (data integrity)
- JSON support (flexible schema)
- Proven at scale

**Why Redis Cache?**
- 100x faster than database for reads
- Reduces database load
- Session management

**Why REST API?**
- Standard, easy to understand
- Works with any client (web, mobile, CLI)
- Good for CRUD operations

---

# DEVELOPER_GUIDE.md

## Getting Started

### Prerequisites
- Node.js 18.x
- PostgreSQL 14+
- npm or yarn

### Development Setup

1. Clone repository
\`\`\`bash
git clone https://github.com/org/project.git
cd project
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create environment file
\`\`\`bash
cp .env.example .env
\`\`\`

4. Set up database
\`\`\`bash
npm run db:migrate
npm run db:seed  # optional, adds test data
\`\`\`

5. Start development server
\`\`\`bash
npm run dev
\`\`\`

6. Verify setup
\`\`\`bash
curl http://localhost:3000/health
# Response: {"status": "ok"}
\`\`\`

## Code Structure

### /src/routes
Express route definitions
- routes/users.js - User CRUD endpoints

### /src/controllers
Business logic for each endpoint
- controllers/userController.js - User operations

### /src/models
Database models and queries
- models/User.js - User database model

### /src/utils
Helper functions
- utils/validation.js - Input validation
- utils/errors.js - Error handling

### /tests
Test files (mirrors src structure)
- tests/controllers/userController.test.js

## Running Tests

```bash
npm run test              # Run all tests
npm run test -- --watch  # Watch mode
npm run test:coverage    # Generate coverage report
```

## Debugging

1. Add debugger statement in code
\`\`\`javascript
debugger // Program pauses here
\`\`\`

2. Run with node inspector
\`\`\`bash
node --inspect-brk src/index.js
\`\`\`

3. Open Chrome DevTools: chrome://inspect

## Contributing

1. Create feature branch
\`\`\`bash
git checkout -b feature/my-feature
\`\`\`

2. Make changes and commit
\`\`\`bash
git commit -m "feat: add new feature"
\`\`\`

3. Push and create Pull Request
\`\`\`bash
git push origin feature/my-feature
\`\`\`

4. PR will automatically run tests - must pass before merge

## Coding Standards

- **Format**: Prettier (run: npm run format)
- **Lint**: ESLint (run: npm run lint)
- **Testing**: Jest (test every function)
- **Naming**: camelCase for variables, PascalCase for classes

---

# CHANGELOG.md

## [1.5.0] - 2024-01-20

### Added
- New endpoint: POST /users/{id}/avatar for profile pictures
- User search functionality with full-text search
- Rate limiting (1000 req/hr per API key)

### Changed
- API response format simplified (removed nested "data" key for single resources)
- User.email is now unique (database constraint added)

### Fixed
- Bug: Delete user returning 500 instead of 404 when user not found
- Security: SQL injection vulnerability in user search (now uses parameterized queries)

### Breaking Changes
- API response format changed - update client to unwrap "data" key for single resources

---

## Architecture Diagram (SVG)
[Embedded SVG or reference to image file]

## Example of markdown SVG diagram:

\`\`\`
        Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
        Ã¢â€â€š   Client    Ã¢â€â€š
        Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
               Ã¢â€â€š HTTP
               Ã¢â€“Â¼
        Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
        Ã¢â€â€š   API Server     Ã¢â€â€š
        Ã¢â€â€š Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â Ã¢â€â€š
        Ã¢â€â€š Ã¢â€â€š  Auth Middleware
        Ã¢â€â€š Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¤ Ã¢â€â€š
        Ã¢â€â€š Ã¢â€â€š Route Handler  Ã¢â€â€š
        Ã¢â€â€š Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¤ Ã¢â€â€š
        Ã¢â€â€š Ã¢â€â€š   Controller   Ã¢â€â€š
        Ã¢â€â€š Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ Ã¢â€â€š
        Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
                 Ã¢â€â€š SQL
                 Ã¢â€“Â¼
        Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
        Ã¢â€â€š   PostgreSQL     Ã¢â€â€š
        Ã¢â€â€š  Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â  Ã¢â€â€š
        Ã¢â€â€š  Ã¢â€â€š Users TableÃ¢â€â€š  Ã¢â€â€š
        Ã¢â€â€š  Ã¢â€â€š Orders Tbl Ã¢â€â€š  Ã¢â€â€š
        Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ  Ã¢â€â€š
        Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
\`\`\`

```

## Usage
```
/documentation --generate --codebase path/to/repo
/documentation --api-docs --format openapi
/documentation --validate --check-links
/documentation --changelog --since v1.0.0
```

## Configuration
- **Format**: Markdown or AsciiDoc (default: Markdown)
- **Output Directory**: Where to save generated docs (default: ./docs)
- **Include Examples**: Include code examples in docs (default: true)
- **Diagram Format**: SVG or PNG (default: SVG)

## Best Practices
1. **Keep Docs in Sync**: Update when code changes
2. **Show Examples**: Every feature needs a usage example
3. **Explain Why**: Not just what, but why design chosen
4. **Use Diagrams**: Visual explanations easier to understand
5. **Version Your Docs**: Match documentation version to code version
6. **Test Your Examples**: Code examples should actually work

## Edge Cases
- **Complex Algorithms**: Use sequence diagrams to explain flow
- **Multiple Versions**: Document breaking changes clearly
- **Multiple Languages**: Generate docs for each language/framework
- **Large APIs**: Use categories/sections to organize
