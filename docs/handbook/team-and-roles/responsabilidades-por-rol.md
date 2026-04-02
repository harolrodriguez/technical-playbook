---
sidebar_position: 2
title: Responsabilidades por Rol *
---

Qué le pertenece a cada rol en términos de ownership técnico y de proceso. No jerarquía, sino claridad sobre quién decide qué.

## Dev

**Owns:**
- La calidad del código que produce
- Los tests de su feature
- La documentación técnica de lo que implementa
- Alertar cuando algo en producción falla en su área

**Decide:**
- Cómo implementar una solución dentro de los estándares del equipo
- Cuándo pedir ayuda o escalar un bloqueo

**No decide:**
- Cambios de arquitectura que afectan a otros equipos (eso requiere RFC o Architect)
- Prioridad del backlog (eso es del PO)

## QA Engineer

**Owns:**
- La estrategia de testing del equipo
- Los criterios de aceptación junto con el PO y el Dev
- La automatización de tests de regresión

**Decide:**
- Qué casos de prueba son prioritarios
- Cuándo una feature tiene suficiente cobertura para ir a producción

## Tech Lead

**Owns:**
- La coherencia técnica del equipo
- Las decisiones de diseño de features complejas
- El proceso de code review y los estándares de calidad
- El crecimiento técnico del equipo

**Decide:**
- Qué solución técnica adoptar cuando hay debate
- Cuándo escalar una decisión al Architect
- Qué entra en el backlog técnico

## Chapter Lead

**Owns:**
- El proceso de trabajo del equipo (Scrum, ceremonias, acuerdos)
- El crecimiento y bienestar de las personas del equipo
- La comunicación con stakeholders sobre capacidad y timelines

**Decide:**
- Composición del equipo
- Procesos de trabajo (en conjunto con el equipo)
- Escalamiento de problemas de personas o proceso

## Architect

**Owns:**
- La arquitectura del sistema a nivel macro
- Las decisiones técnicas que afectan a múltiples equipos
- Los ADRs (Architecture Decision Records)

**Decide:**
- Patrones arquitectónicos a adoptar
- Cuándo una decisión técnica necesita RFC
- Qué tecnologías son aprobadas para uso en producción

## Product Owner

**Owns:**
- El backlog del equipo
- La definición de qué problema hay que resolver
- La aceptación del trabajo terminado

**Decide:**
- Prioridad de features y bugs
- Qué entra en el sprint
- Cuándo una feature está lista para lanzar (junto con QA)
