---
sidebar_position: 1
title: Response Structure
---

Estructura estándar para respuestas de API: cómo organizar datos, errores y metadatos.

## Respuesta exitosa

```json
{
  "data": {
    "id": "123",
    "name": "Juan",
    "email": "juan@example.com"
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0"
  }
}
```

### Estructura

- **data**: Los datos solicitados. Puede ser un objeto, array, o null.
- **meta**: Metadatos sobre la respuesta (timestamp, versión, etc.).

## Respuesta con lista

```json
{
  "data": [
    { "id": "1", "name": "Item 1" },
    { "id": "2", "name": "Item 2" }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 100,
    "totalPages": 5
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Paginación

- **page**: Número de página (1-indexed)
- **pageSize**: Cantidad de items por página
- **total**: Total de items
- **totalPages**: Total de páginas

## Respuesta de error

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email",
      "reason": "Must be a valid email"
    }
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req-123-abc"
  }
}
```

### Estructura de error

- **code**: Código de error (VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED, etc.)
- **message**: Mensaje legible para humanos
- **details**: Información adicional sobre el error (campo, valor, razón)

## Códigos de error comunes

| Código | HTTP | Significado |
|--------|------|------------|
| VALIDATION_ERROR | 400 | Datos inválidos |
| UNAUTHORIZED | 401 | No autenticado |
| FORBIDDEN | 403 | No autorizado |
| NOT_FOUND | 404 | Recurso no encontrado |
| CONFLICT | 409 | Conflicto (ej: email duplicado) |
| RATE_LIMITED | 429 | Demasiadas requests |
| INTERNAL_ERROR | 500 | Error del servidor |

## Ejemplo completo

### Request

```bash
GET /api/v1/users?page=1&pageSize=10
Authorization: Bearer token
```

### Response exitosa (200)

```json
{
  "data": [
    { "id": "1", "name": "Juan", "email": "juan@example.com" },
    { "id": "2", "name": "María", "email": "maria@example.com" }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 42,
    "totalPages": 5
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req-123-abc"
  }
}
```

### Response de error (400)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid page number",
    "details": {
      "field": "page",
      "value": "-1",
      "reason": "Must be greater than 0"
    }
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req-123-abc"
  }
}
```

## Referencia

- Backend: [API Design Backend](/backend/api-design/contratos-de-api)
- Versionado: [API Versioning](/handbook/engineering-standards/api-design/versioning)
- Errores: [Error Handling](/handbook/engineering-standards/api-design/error-handling)
