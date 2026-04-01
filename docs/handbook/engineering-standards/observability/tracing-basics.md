---
sidebar_position: 3
title: Tracing Basics
---

Principios básicos de distributed tracing: cómo rastrear requests a través de múltiples servicios.

## Qué es tracing

Distributed tracing permite seguir un request a través de múltiples servicios:

```
Frontend → API Gateway → User Service → Database
   ↓           ↓              ↓            ↓
 span 1      span 2         span 3       span 4
```

Cada span representa una operación. Juntos forman un trace.

## Conceptos

### Trace

Un trace es el viaje completo de un request a través del sistema.

```
Trace ID: abc123
├── Span 1: Frontend request (0-100ms)
├── Span 2: API Gateway (10-90ms)
├── Span 3: User Service (20-80ms)
└── Span 4: Database query (30-70ms)
```

### Span

Un span es una operación individual dentro de un trace.

```json
{
  "traceId": "abc123",
  "spanId": "span3",
  "parentSpanId": "span2",
  "operation": "getUserById",
  "startTime": "2024-01-15T10:30:00.000Z",
  "duration": 50,
  "tags": {
    "userId": "123",
    "service": "user-service"
  }
}
```

## Implementación

### Propagación de trace ID

Pasa el trace ID entre servicios:

```typescript
// Frontend
const traceId = generateTraceId();
fetch('/api/users', {
  headers: {
    'X-Trace-ID': traceId
  }
});

// Backend
app.use((req, res, next) => {
  const traceId = req.headers['x-trace-id'] || generateTraceId();
  req.traceId = traceId;
  res.setHeader('X-Trace-ID', traceId);
  next();
});
```

### Instrumentación

Agrega spans a operaciones importantes:

```typescript
const tracer = require('dd-trace').init();

app.get('/users/:id', (req, res) => {
  const span = tracer.startSpan('getUserById', {
    tags: {
      userId: req.params.id,
      service: 'user-service'
    }
  });

  try {
    const user = await getUserFromDB(req.params.id);
    span.setTag('found', !!user);
    res.json(user);
  } catch (error) {
    span.setTag('error', true);
    span.log({ event: 'error', message: error.message });
    res.status(500).json({ error: 'Internal error' });
  } finally {
    span.finish();
  }
});
```

## Herramientas

| Herramienta | Propósito |
|-------------|----------|
| **Jaeger** | Open source distributed tracing |
| **Zipkin** | Open source distributed tracing |
| **Datadog APM** | Tracing comercial |
| **New Relic** | APM y tracing |
| **OpenTelemetry** | Estándar abierto para observabilidad |

## Casos de uso

**Debugging**: ¿Por qué este request es lento?

Mira el trace y ve dónde se gasta el tiempo.

**Optimización**: ¿Qué operación es el cuello de botella?

Identifica spans lentos y optimiza.

**Monitoreo**: ¿Hay degradación de performance?

Compara traces históricos.

## Evitar problemas comunes

**Problema: Demasiados spans**  
Solución: Crea spans solo para operaciones importantes.

**Problema: Trace ID no se propaga**  
Solución: Asegúrate de pasar el trace ID entre servicios.

**Problema: Spans sin contexto**  
Solución: Agrega tags útiles (userId, endpoint, etc.).

## Referencia

- Backend: [Tracing Backend](/backend/observability/tracing)
- Logging: [Logging Format](/handbook/engineering-standards/observability/logging-format)
