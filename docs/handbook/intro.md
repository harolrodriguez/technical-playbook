---
sidebar_position: 1
title: Introducción
---

# Engineering Handbook

El contrato cultural y operativo del equipo de ingeniería. Aquí viven los acuerdos, procesos y estándares que aplican a todos los roles, independientemente del stack o disciplina.

No es un conjunto de reglas impuestas. Es el resultado de decisiones colectivas. Si algo no tiene sentido, el proceso para cambiarlo está en [RFC Process](/handbook/career-and-growth/rfc-process).

Si algo está desactualizado, abre un PR. Este documento es de todos.

---

## Principios que guían el trabajo

**Simplicidad sobre cleverness** — El código más fácil de mantener es el que cualquier persona puede leer sin contexto previo. Si necesitas explicar por qué lo hiciste así, probablemente hay una forma más simple.

**Claridad de contratos** — Los contratos entre capas (APIs, interfaces, eventos) son explícitos y documentados. Nadie debería tener que leer la implementación para entender qué hace una interfaz.

**Ownership real** — Quien construye algo es responsable de que funcione en producción. Eso incluye monitoreo y responder cuando algo falla.

**Feedback rápido** — Ciclos cortos de validación: tests en segundos, deploys frecuentes, PRs pequeños. Cuanto más tarde descubres un error, más caro es corregirlo.

**Deuda técnica explícita** — La deuda que no está documentada no existe para el equipo. Si tomamos un atajo, lo registramos. La deuda invisible destruye la velocidad a largo plazo.

**Seguridad por diseño** — La seguridad no se agrega al final. Se considera desde el diseño: mínimo privilegio, validación de inputs, manejo correcto de secrets.

---

## Qué encontrarás aquí

- [Team & Roles](/handbook/team-and-roles/mapa-de-roles) — quién hace qué y cómo colaboramos
- [Ways of Working](/handbook/ways-of-working/intro) — Scrum, estimación, bugs y deuda técnica
- [Engineering Standards](/handbook/engineering-standards/git/code-review) — git, code quality, API design y más
- [Tooling & Setup](/handbook/tooling-and-setup/setup-entorno-local) — entorno local y herramientas aprobadas
- [Security](/handbook/security/secrets-management) — secrets, privilegios, dependencias e incidentes
- [Career & Growth](/handbook/career-and-growth/feedback-tecnico) — feedback técnico y RFCs
