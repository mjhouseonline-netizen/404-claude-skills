---
skill_name: API Contract Testing
description: Validate OpenAPI specs, implement Pact contracts, and detect schema drift
category: Testing
version: 1.0.0
---

# API Contract Testing

## Overview
Contract testing verifies client-server communication contracts. Master OpenAPI validation, Pact, and schema drift detection.

## OpenAPI Schema Validation

### OpenAPI Definition

```yaml
# openapi.yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0

paths:
  /users:
    get:
      summary: List users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'

    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'

  /users/{id}:
    get:
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: User details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found

components:
  schemas:
    User:
      type: object
      required:
        - id
        - email
        - name
      properties:
        id:
          type: string
          format: uuid
        email:
          type: string
          format: email
        name:
          type: string
        createdAt:
          type: string
          format: date-time

    CreateUserRequest:
      type: object
      required:
        - email
        - name
      properties:
        email:
          type: string
          format: email
        name:
          type: string
```

### OpenAPI Validation Testing

```javascript
import SwaggerParser from '@apidevtools/swagger-parser';
import ajv from 'ajv';

describe('OpenAPI Contract Validation', () => {
  let api;
  let validator;

  beforeAll(async () => {
    api = await SwaggerParser.validate('openapi.yaml');
    validator = new ajv();
  });

  it('valid response matches schema', async () => {
    const response = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'user@example.com',
      name: 'John Doe',
      createdAt: '2024-01-01T00:00:00Z'
    };

    const schema = api.components.schemas.User;
    const validate = validator.compile(schema);
    const valid = validate(response);

    expect(valid).toBe(true);
  });

  it('invalid response fails schema', async () => {
    const invalidResponse = {
      email: 'not-an-email', // Invalid format
      name: 'John Doe'
      // Missing required id field
    };

    const schema = api.components.schemas.User;
    const validate = validator.compile(schema);
    const valid = validate(invalidResponse);

    expect(valid).toBe(false);
  });

  it('endpoint definitions match', async () => {
    expect(api.paths['/users']).toBeDefined();
    expect(api.paths['/users'].get).toBeDefined();
    expect(api.paths['/users'].post).toBeDefined();
    expect(api.paths['/users/{id}'].get).toBeDefined();
  });
});
```

### Runtime Response Validation

```javascript
import axios from 'axios';
import { validate } from 'openapi-request-validator';

describe('Response Validation', () => {
  const api = require('./openapi.json');

  it('GET /users returns valid response', async () => {
    const response = await axios.get('http://localhost:3000/users');

    const validator = validate(api);
    const result = validator.validateResponse(
      '/users',
      'get',
      response.status,
      response.data
    );

    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('POST /users validates request and response', async () => {
    const validator = validate(api);

    // Validate request
    const payload = {
      email: 'new@example.com',
      name: 'New User'
    };

    const reqErrors = validator.validateRequest(
      '/users',
      'post',
      { body: payload }
    );
    expect(reqErrors).toHaveLength(0);

    // Make request and validate response
    const response = await axios.post(
      'http://localhost:3000/users',
      payload
    );

    const resErrors = validator.validateResponse(
      '/users',
      'post',
      201,
      response.data
    );
    expect(resErrors).toHaveLength(0);
  });
});
```

## Pact Consumer-Driven Contracts

### Setup

```bash
npm install --save-dev @pact-foundation/pact
```

### Consumer Test (Frontend)

```javascript
// __tests__/userService.pact.js
import { Pact } from '@pact-foundation/pact';
import UserService from '../src/UserService';

const provider = new Pact({
  consumer: 'UserConsumer',
  provider: 'UserProvider',
  port: 8081
});

describe('UserService Pact', () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe('getUser', () => {
    it('returns user details', async () => {
      const expectedUser = {
        id: '1',
        name: 'Alice',
        email: 'alice@example.com'
      };

      provider
        .addInteraction({
          state: 'user with id 1 exists',
          uponReceiving: 'a request for user with id 1',
          withRequest: {
            method: 'GET',
            path: '/users/1',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          willRespondWith: {
            status: 200,
            body: expectedUser
          }
        });

      const userService = new UserService('http://localhost:8081');
      const user = await userService.getUser('1');

      expect(user).toEqual(expectedUser);
    });
  });

  describe('createUser', () => {
    it('creates a new user', async () => {
      const newUser = {
        name: 'Bob',
        email: 'bob@example.com'
      };

      const createdUser = {
        id: '2',
        ...newUser
      };

      provider
        .addInteraction({
          uponReceiving: 'a request to create a user',
          withRequest: {
            method: 'POST',
            path: '/users',
            headers: {
              'Content-Type': 'application/json'
            },
            body: newUser
          },
          willRespondWith: {
            status: 201,
            body: createdUser
          }
        });

      const userService = new UserService('http://localhost:8081');
      const user = await userService.createUser(newUser);

      expect(user).toEqual(createdUser);
    });
  });
});
```

### Provider Test (Backend)

```javascript
// __tests__/userApi.pact.js
import { Verifier } from '@pact-foundation/pact';
import app from '../src/app';

describe('User API Pact Verification', () => {
  it('fulfills consumer expectations', async () => {
    const opts = {
      provider: 'UserProvider',
      providerBaseUrl: 'http://localhost:3000',
      pactUrls: ['./pacts/UserConsumer-UserProvider.json'],
      stateHandlers: {
        'user with id 1 exists': async () => {
          // Seed database with test user
          await db.users.create({
            id: '1',
            name: 'Alice',
            email: 'alice@example.com'
          });
        }
      }
    };

    return new Verifier(opts).verifyProvider();
  });
});
```

### Generated Pact File

```json
{
  "consumer": {
    "name": "UserConsumer"
  },
  "provider": {
    "name": "UserProvider"
  },
  "interactions": [
    {
      "description": "a request for user with id 1",
      "providerState": "user with id 1 exists",
      "request": {
        "method": "GET",
        "path": "/users/1",
        "headers": {
          "Content-Type": "application/json"
        }
      },
      "response": {
        "status": 200,
        "body": {
          "id": "1",
          "name": "Alice",
          "email": "alice@example.com"
        }
      }
    }
  ],
  "metadata": {
    "pactSpecification": {
      "version": "2.0.0"
    }
  }
}
```

## Schema Drift Detection

### Schema Change Detection

```javascript
class SchemaDriftDetector {
  compareSchemas(oldSchema, newSchema) {
    const drifts = [];

    // Check removed properties
    for (const prop in oldSchema.properties) {
      if (!(prop in newSchema.properties)) {
        drifts.push({
          type: 'BREAKING',
          message: `Property '${prop}' removed`,
          severity: 'critical'
        });
      }
    }

    // Check new required properties
    for (const prop of newSchema.required || []) {
      if (!(oldSchema.required || []).includes(prop)) {
        drifts.push({
          type: 'BREAKING',
          message: `New required property '${prop}'`,
          severity: 'critical'
        });
      }
    }

    // Check type changes
    for (const prop in newSchema.properties) {
      if (oldSchema.properties[prop]?.type !== newSchema.properties[prop]?.type) {
        drifts.push({
          type: 'BREAKING',
          message: `Type changed for '${prop}'`,
          severity: 'high'
        });
      }
    }

    // Check new optional properties
    for (const prop in newSchema.properties) {
      if (!(prop in oldSchema.properties)) {
        drifts.push({
          type: 'COMPATIBLE',
          message: `New optional property '${prop}'`,
          severity: 'low'
        });
      }
    }

    return drifts;
  }

  detectBreakingChanges(oldSchema, newSchema) {
    const drifts = this.compareSchemas(oldSchema, newSchema);
    return drifts.filter(d => d.type === 'BREAKING');
  }
}

// Usage
const detector = new SchemaDriftDetector();
const oldSchema = {
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  },
  required: ['id', 'name']
};

const newSchema = {
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' }
  },
  required: ['id', 'name', 'email'] // Breaking change!
};

const drifts = detector.detectBreakingChanges(oldSchema, newSchema);
console.log(drifts); // Will show breaking change
```

### Git-based Schema Tracking

```bash
#!/bin/bash
# scripts/detect-schema-drift.sh

# Extract current schema
curl -s http://localhost:3000/openapi.json > current-schema.json

# Compare with previous version
if git show HEAD:openapi.json > previous-schema.json 2>/dev/null; then
  node scripts/compare-schemas.mjs previous-schema.json current-schema.json

  if [ $? -ne 0 ]; then
    echo "Breaking schema changes detected!"
    exit 1
  fi
fi
```

## Mock Server Testing

### Prism Mock Server

```bash
# Start mock server from OpenAPI spec
npx prism mock openapi.yaml --port 4010
```

```javascript
// Test against mock server
describe('Mock API Testing', () => {
  it('returns mock response matching spec', async () => {
    const response = await axios.get(
      'http://localhost:4010/users'
    );

    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('email');
  });
});
```

## Production Checklist

- [ ] Define comprehensive OpenAPI specifications
- [ ] Validate all responses against OpenAPI schemas
- [ ] Implement Pact testing for critical APIs
- [ ] Detect schema drift automatically
- [ ] Fail CI on breaking changes
- [ ] Version APIs explicitly
- [ ] Generate API documentation from specs
- [ ] Test request/response validation separately
- [ ] Monitor for undocumented endpoints
- [ ] Maintain consumer and provider contract tests
- [ ] Use mock servers for development
- [ ] Document API changes in changelog
- [ ] Enforce API review process
