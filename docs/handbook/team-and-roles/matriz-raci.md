---
sidebar_position: 4
title: Matriz RACI *
---

Mapa de responsabilidades por tipo de decisión técnica. R = Responsable, A = Aprobador, C = Consultado, I = Informado.

## Decisiones de feature

| Decisión | Dev | QA | Tech Lead | EM | PO | Architect |
|----------|-----|----|-----------|----|-----|-----------|
| Diseño de solución técnica | R | C | A | I | I | C |
| Criterios de aceptación | C | R | C | I | A | - |
| Prioridad en el sprint | I | I | C | C | A | - |
| Aceptación de la feature | C | R | C | I | A | - |

## Decisiones de arquitectura

| Decisión | Dev | Tech Lead | EM | Architect |
|----------|-----|-----------|-----|-----------|
| Diseño de nuevo servicio | C | R | I | A |
| Adopción de nueva tecnología | C | R | I | A |
| Cambio de contrato de API pública | C | R | I | A |
| Decisión de base de datos | C | R | I | A |

## Decisiones de proceso

| Decisión | Dev | QA | Tech Lead | EM | PO |
|----------|-----|----|-----------|----|-----|
| Cambio en el proceso de Scrum | C | C | C | A | C |
| Cambio en estándares de código | C | C | A | I | - |
| Cambio en el handbook | R | R | A | A | - |
| Contratación | C | - | C | A | - |

## Decisiones de incidentes

| Decisión | Dev | Tech Lead | EM | On-call |
|----------|-----|-----------|-----|---------|
| Respuesta inicial al incidente | - | - | I | R |
| Decisión de rollback | C | A | I | R |
| Comunicación a stakeholders | - | C | R | I |
| Post-mortem | R | A | I | R |

## Notas

- **R (Responsable)**: Quien ejecuta la tarea
- **A (Aprobador)**: Quien tiene la última palabra; solo uno por decisión
- **C (Consultado)**: Quien aporta input antes de decidir
- **I (Informado)**: Quien se entera después de que se decide

Si una decisión no está en esta tabla, el Tech Lead o EM determinan el RACI ad-hoc.
