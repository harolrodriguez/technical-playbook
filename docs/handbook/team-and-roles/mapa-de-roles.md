---
sidebar_position: 1
title: Roles & Responsabilidades *
---

Quién es quién en el equipo, qué hace cada rol y qué le pertenece en términos de ownership. No jerarquía — claridad sobre quién decide qué.

---

## Dev (Backend / Frontend / Fullstack)

El rol base del equipo. Diseña, implementa, testea y mantiene features. Es responsable de la calidad del código que produce y de que funcione en producción.

No es solo "quien escribe código" — también participa en el diseño de soluciones, da feedback en code reviews, documenta lo que construye y levanta la mano cuando algo no está bien.

**Owns:** calidad del código, tests de su feature, documentación técnica de lo que implementa.

**Decide:** cómo implementar una solución dentro de los estándares del equipo, cuándo pedir ayuda o escalar un bloqueo.

**No decide:** cambios de arquitectura que afectan a otros equipos (requiere RFC o Architect), prioridad del backlog (eso es del PO).

---

## QA Engineer

Diseña y ejecuta estrategias de testing. No es el guardián de la calidad al final del proceso, sino un colaborador activo desde el diseño de la feature.

Trabaja con los Devs para definir criterios de aceptación, identifica casos borde y automatiza los tests que tienen más valor.

**Owns:** estrategia de testing, criterios de aceptación junto con PO y Dev, automatización de tests de regresión.

**Decide:** qué casos de prueba son prioritarios, cuándo una feature tiene suficiente cobertura para ir a producción.

---

## Tech Lead

Referente técnico del equipo. No necesariamente gestiona personas, pero sí guía decisiones técnicas, facilita el diseño de soluciones y asegura que los estándares se cumplan.

Es quien más contexto tiene sobre la arquitectura y quien más invierte en que el resto del equipo crezca técnicamente.

**Owns:** coherencia técnica del equipo, decisiones de diseño en features complejas, proceso de code review, crecimiento técnico del equipo.

**Decide:** qué solución técnica adoptar cuando hay debate, cuándo escalar al Architect, qué entra en el backlog técnico.

---

## Chapter Lead

Responsable del equipo como unidad: contratación, crecimiento, procesos y cultura. No gestiona el código, gestiona las condiciones para que el equipo trabaje bien.

Trabaja en conjunto con el Tech Lead: el Chapter Lead se ocupa del "cómo trabaja el equipo", el Tech Lead del "cómo resuelve el equipo los problemas técnicos".

**Owns:** proceso de trabajo del equipo, crecimiento y bienestar de las personas, comunicación con stakeholders sobre capacidad y timelines.

**Decide:** composición del equipo, procesos de trabajo (en conjunto con el equipo), escalamiento de problemas de personas o proceso.

---

## Architect

Define y cuida la arquitectura del sistema a nivel macro. Toma decisiones de diseño que afectan a múltiples equipos o servicios, documenta esas decisiones y asegura coherencia técnica entre equipos.

No está en todos los PRs, pero sí en las decisiones que tienen impacto a largo plazo.

**Owns:** arquitectura del sistema, decisiones técnicas cross-equipo, ADRs.

**Decide:** patrones arquitectónicos a adoptar, cuándo una decisión necesita RFC, qué tecnologías son aprobadas para producción.

---

## Product Owner (PO)

Define qué se construye y en qué orden. Es el puente entre el negocio y el equipo de ingeniería. Prioriza el backlog, clarifica requerimientos y acepta o rechaza el trabajo terminado.

No decide cómo se implementa algo, pero sí qué problema hay que resolver y cuándo.

**Owns:** backlog del equipo, definición del problema a resolver, aceptación del trabajo terminado.

**Decide:** prioridad de features y bugs, qué entra en el sprint, cuándo una feature está lista para lanzar (junto con QA).
