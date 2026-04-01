---
sidebar_position: 4
title: Documentation
---

Cómo documentar APIs: OpenAPI/Swagger, ejemplos y mantenimiento.

## OpenAPI/Swagger

Usa OpenAPI 3.0 para documentar APIs. Esto permite:
- Generar documentación automáticamente
- Generar clientes SDK
- Validar requests/responses
- Testear interactivamente

### Estructura básica

```yaml
openapi: 3.0.0
info:
  title: ACITY API
  version: 1.0.0
  description: API de ACITY

servers:
  - url: https://api.acity.com/v1
    description: Production

paths:
  /users:
    get:
      summary: List users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserList'
        '400':
          description: Bad request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
          format: email
      required:
        - id
        - name
        - email

    UserList:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          $ref: '#/components/schemas/Pagination'

    Error:
      type: object
      properties:
        error:
          type: object
          properties:
            code:
              type: string
            message:
              type: string
```

## Herramientas

| Herramienta | Propósito |
|-------------|----------|
| **Swagger UI** | Interfaz interactiva para explorar API |
| **ReDoc** | Documentación bonita y legible |
| **Postman** | Testing y documentación |
| **Insomnia** | Cliente REST |

## Generar desde código

### TypeScript + Swagger

```typescript
import { Router } from 'express';
import { z } from 'zod';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/users', (req, res) => {
  res.json({ data: [] });
});
```

Luego genera con `swagger-jsdoc`.

## Mantener documentación actualizada

**Problema**: Documentación desactualizada.

**Solución**:
1. Documenta mientras escribes el código
2. Valida documentación en CI (swagger-cli validate)
3. Genera documentación desde código cuando sea posible
4. Revisa documentación en code review

## Referencia

- [Response Structure](/handbook/engineering-standards/api-design/response-structure)
- Backend: [API Documentation](/backend/api-design/documentacion-apis)
