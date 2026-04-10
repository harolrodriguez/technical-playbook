---
sidebar_position: 2
title: Metrics Principles
---

Principios para definir y recopilar métricas: qué medir, cómo medir y cómo usar los datos.

## Qué medir

### Métricas de negocio

- Usuarios activos
- Conversiones
- Ingresos
- Retención

### Métricas de sistema

- Latencia (p50, p95, p99)
- Throughput (requests/segundo)
- Error rate
- Disponibilidad

### Métricas de aplicación

- Tiempo de respuesta por endpoint
- Tamaño de payload
- Cache hit rate
- Database query time

## Tipos de métricas

| Tipo | Ejemplo | Herramienta |
|------|---------|-----------|
| **Counter** | Requests totales | Prometheus |
| **Gauge** | Memoria usada | Prometheus |
| **Histogram** | Latencia de request | Prometheus |
| **Timer** | Duración de operación | Micrometer |

## Cómo medir

### Instrumentación

Agrega código para recopilar métricas:

```typescript
const requestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request latency',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    requestDuration
      .labels(req.method, req.route.path, res.statusCode)
      .observe(duration);
  });
  next();
});
```

### Agregación

Recopila métricas en un servicio centralizado:

- **Prometheus**: Recopila y almacena
- **Grafana**: Visualiza
- **Datadog**: Todo en uno

## Alertas

Define alertas basadas en métricas:

```yaml
alert: HighErrorRate
expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
for: 5m
annotations:
  summary: "High error rate detected"
```

## Evitar problemas comunes

**Problema: Demasiadas métricas**  
Solución: Enfócate en métricas que importan. Elimina las que no usas.

**Problema: Métricas sin contexto**  
Solución: Agrega labels (método, endpoint, usuario, etc.).

**Problema: Alertas que no alertan**  
Solución: Calibra umbrales basado en datos reales.

## Referencia

- Backend: [Metrics Backend](/backend/observability/logging)
- Frontend: [Performance Frontend](/frontend/quality/performance)
- QA: [Load Testing](/qa/performance-security/load-testing)
