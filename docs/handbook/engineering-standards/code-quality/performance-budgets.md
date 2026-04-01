---
sidebar_position: 3
title: Performance Budgets
---

Cómo definir y mantener presupuestos de performance: métricas, límites y cómo monitorear.

## Qué es un performance budget

Un performance budget es un límite máximo para métricas de performance. Si la métrica excede el límite, el build falla.

Ejemplos:
- Bundle size: máximo 200KB
- Lighthouse score: mínimo 90
- Time to Interactive: máximo 3 segundos
- Database query: máximo 100ms

## Métricas clave

### Frontend

| Métrica | Límite | Herramienta |
|---------|--------|-----------|
| Bundle size | < 200KB (gzipped) | webpack-bundle-analyzer |
| Lighthouse score | > 90 | Lighthouse |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |

### Backend

| Métrica | Límite | Herramienta |
|---------|--------|-----------|
| API response time | < 200ms (p95) | APM |
| Database query | < 100ms | Query logs |
| Error rate | < 0.1% | Monitoring |
| Memory usage | < 500MB | Monitoring |

## Implementar budgets

### Frontend: webpack-bundle-analyzer

```bash
npm install --save-dev webpack-bundle-analyzer
```

En `webpack.config.js`:

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
    }),
  ],
};
```

### Frontend: Lighthouse CI

```bash
npm install --save-dev @lhci/cli@latest
```

En `lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

### Backend: Custom checks

En tu CI pipeline:

```bash
# Verificar bundle size
SIZE=$(du -sb dist/ | cut -f1)
if [ $SIZE -gt 209715200 ]; then  # 200MB
  echo "Bundle size exceeded"
  exit 1
fi

# Verificar tests
npm run test
```

## Monitorear en producción

Usa herramientas de APM (Application Performance Monitoring):

- **Datadog**: Monitoreo completo
- **New Relic**: APM y observabilidad
- **Sentry**: Error tracking
- **Grafana**: Dashboards

## Evitar problemas comunes

**Problema: Budget muy estricto**  
Solución: Establece budgets realistas basados en datos actuales.

**Problema: Budget ignorado**  
Solución: Haz que el build falle si se excede. Fuerza a los devs a optimizar.

**Problema: No sabes por qué se excedió el budget**  
Solución: Usa herramientas de análisis (webpack-bundle-analyzer) para identificar culpables.

## Referencia

- Frontend: [Performance Frontend](/frontend/quality/performance)
- Backend: [Performance Backend](/backend/quality/performance)
- QA: [Load Testing](/qa/performance-security/load-testing)
