---
sidebar_position: 3
title: Error Handling
---

Cómo manejar y comunicar errores en APIs: códigos HTTP, estructura de errores y mensajes claros.

## Códigos HTTP

| Código | Significado | Cuándo usar |
|--------|------------|-----------|
| 200 | OK | Éxito |
| 201 | Created | Recurso creado |
| 204 | No Content | Éxito sin contenido |
| 400 | Bad Request | Datos inválidos |
| 401 | Unauthorized | No autenticado |
| 403 | Forbidden | No autorizado |
| 404 | Not Found | Recurso no existe |
| 409 | Conflict | Conflicto (ej: email duplicado) |
| 429 | Too Many Requests | Rate limited |
| 500 | Internal Server Error | Error del servidor |
| 503 | Service Unavailable | Servicio no disponible |

## Estructura de error

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": {
      "field": "email",
      "value": "invalid-email",
      "reason": "Must be a valid email address"
    }
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req-123-abc"
  }
}
```

### Campos

- **code**: Código de error (máquina-legible)
- **message**: Mensaje legible para humanos
- **details**: Información adicional (opcional)
- **meta**: Metadatos (timestamp, requestId)

## Códigos de error comunes

```
VALIDATION_ERROR      → 400
UNAUTHORIZED          → 401
FORBIDDEN             → 403
NOT_FOUND             → 404
CONFLICT              → 409
RATE_LIMITED          → 429
INTERNAL_ERROR        → 500
SERVICE_UNAVAILABLE   → 503
```

## Ejemplos

### Validación fallida (400)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "not-an-email",
      "reason": "Must be a valid email address"
    }
  }
}
```

### No autenticado (401)

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Missing or invalid authentication token"
  }
}
```

### No autorizado (403)

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "You don't have permission to access this resource"
  }
}
```

### Recurso no encontrado (404)

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found",
    "details": {
      "resourceId": "123",
      "resourceType": "User"
    }
  }
}
```

### Conflicto (409)

```json
{
  "error": {
    "code": "CONFLICT",
    "message": "Email already exists",
    "details": {
      "field": "email",
      "value": "juan@example.com"
    }
  }
}
```

### Rate limited (429)

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later."
  },
  "meta": {
    "retryAfter": 60
  }
}
```

### Error del servidor (500)

```json
{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  },
  "meta": {
    "requestId": "req-123-abc"
  }
}
```

## Qué NO hacer

❌ Exponer detalles internos:
```json
{
  "error": "TypeError: Cannot read property 'email' of undefined"
}
```

❌ Mensajes genéricos sin contexto:
```json
{
  "error": "Error"
}
```

❌ Múltiples formatos de error:
```json
{
  "message": "Error",
  "error": "Error",
  "status": "error"
}
```

## Referencia

- [Response Structure](/handbook/engineering-standards/api-design/response-structure)
- [Best Practices - Error Handling](/knowledge-base/best-practices/error-handling)
