---
sidebar_position: 3
title: SLOs / SLAs Internos
---

Definición de Service Level Objectives y Agreements internos del equipo: qué comprometemos, cómo los medimos y qué pasa cuando no se cumplen.

## Diferencia entre SLO y SLA

**SLO (Service Level Objective)**: El objetivo interno del equipo. Lo que nos comprometemos a mantener entre nosotros.

**SLA (Service Level Agreement)**: El acuerdo con un cliente o stakeholder externo. Suele ser menos estricto que el SLO para tener margen de maniobra.

Si el SLO se rompe, el equipo lo sabe antes de que el SLA se rompa. Eso da tiempo para reaccionar.

## SLOs de disponibilidad

| Servicio | SLO de disponibilidad | Ventana de medición |
|----------|----------------------|---------------------|
| API principal | 99.9% | Rolling 30 días |
| Servicios internos | 99.5% | Rolling 30 días |
| Jobs y workers | 99% | Rolling 30 días |

99.9% de disponibilidad equivale a ~43 minutos de downtime al mes.

## SLOs de latencia

| Endpoint | p50 | p95 | p99 |
|----------|-----|-----|-----|
| APIs críticas | < 100ms | < 500ms | < 1s |
| APIs estándar | < 200ms | < 1s | < 2s |
| Jobs batch | N/A | N/A | < 5min |

## Error budget

El error budget es el margen de tiempo que podemos estar fuera del SLO sin romper el SLA.

Si el error budget se agota:
- Se pausa el trabajo de features nuevas
- Se prioriza la estabilidad y la reducción de incidentes
- Se hace un análisis de causa raíz de los incidentes del período

## Alertas

Las alertas están configuradas para dispararse cuando el burn rate del error budget supera un umbral, no cuando el SLO ya se rompió. Eso da tiempo de reaccionar antes de que sea tarde.

Ver la configuración de alertas en el [Backend Handbook - Alertas y Runbooks](/backend/observability/alertas-runbooks).

## Revisión

Los SLOs se revisan trimestralmente. Si el equipo consistentemente cumple con mucho margen, puede ser que el SLO sea demasiado conservador. Si consistentemente falla, hay que entender si el objetivo es realista o si hay problemas de arquitectura.
