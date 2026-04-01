---
sidebar_position: 1
title: Logging Format
---

Estándar de formato para logs: estructura, niveles y qué loggear.

## Formato estructurado

Los logs deben ser JSON estructurado, no texto libre:

```json
{
  "timestamp": "2024-01-15T10:30:00.123Z",
  "level": "error",
  "message": "Failed to fetch user profile",
  "context": {
    "userId": "123",
    "endpoint": "/api/users/123",
    "method": "GET"
  },
  "error": {
    "message": "Connection timeout",
    "stack": "Error: Connection timeout\n    at ..."
  },
  "requestId": "req-123-abc"
}
```

## Campos obligatorios

| Campo | Descripción |
|-------|------------|
| **timestamp** | ISO 8601 (2024-01-15T10:30:00Z) |
| **level** | debug, info, warn, error, fatal |
| **message** | Descripción breve del evento |
| **context** | Datos relevantes (userId, endpoint, etc.) |
| **requestId** | ID único para rastrear request |

## Niveles de log

| Nivel | Cuándo usar |
|-------|-----------|
| **debug** | Información detallada para debugging |
| **info** | Eventos normales (usuario logueado, request completado) |
| **warn** | Situaciones inesperadas pero recuperables |
| **error** | Errores que requieren atención |
| **fatal** | Errores que detienen la aplicación |

## Ejemplos

### Info: Usuario logueado

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "info",
  "message": "User logged in",
  "context": {
    "userId": "123",
    "email": "juan@example.com",
    "method": "password"
  },
  "requestId": "req-123-abc"
}
```

### Warn: Retry después de fallo

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "warn",
  "message": "Request failed, retrying",
  "context": {
    "endpoint": "https://external-api.com/data",
    "attempt": 1,
    "maxRetries": 3
  },
  "requestId": "req-123-abc"
}
```

### Error: Fallo de base de datos

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "error",
  "message": "Database query failed",
  "context": {
    "query": "SELECT * FROM users WHERE id = ?",
    "userId": "123"
  },
  "error": {
    "message": "Connection refused",
    "code": "ECONNREFUSED"
  },
  "requestId": "req-123-abc"
}
```

## Qué NO loggear

❌ **Datos sensibles**:
- Passwords
- API keys
- Tokens
- Números de tarjeta
- PII (Personally Identifiable Information)

❌ **Información innecesaria**:
- Logs de cada línea de código
- Valores de variables internas
- Stack traces en info/warn

## Qué SÍ loggear

✅ **Eventos importantes**:
- Inicio/fin de procesos
- Errores y excepciones
- Cambios de estado
- Acciones de usuario

✅ **Contexto útil**:
- ID de usuario
- ID de request
- Endpoint/función
- Duración de operación

## Herramientas

| Herramienta | Propósito |
|-------------|----------|
| **Winston** | Logger para Node.js |
| **Pino** | Logger rápido para Node.js |
| **Bunyan** | Logger estructurado |
| **Datadog** | Agregación y análisis de logs |
| **ELK Stack** | Elasticsearch, Logstash, Kibana |

## Configuración por entorno

```typescript
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: 'json',
  transports: [
    new transports.Console(),
    process.env.NODE_ENV === 'production' &&
      new transports.File({ filename: 'logs/error.log', level: 'error' })
  ]
});
```

## Referencia

- Backend: [Logging Backend](/backend/observability/logging)
- Best Practices: [Error Handling](/knowledge-base/best-practices/error-handling)
