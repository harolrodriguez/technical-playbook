---
sidebar_position: 3
title: Cómo Colaborar Entre Roles
---

Guía práctica de cómo interactúan los roles entre sí: cuándo involucrar a quién, cómo escalar y cómo dar y pedir contexto sin fricción.

## Dev ↔ Dev

La colaboración más frecuente. Sucede en code reviews, pair programming y diseño de soluciones.

- Los code reviews son conversaciones técnicas, no juicios. Ver [Code Review](/handbook/engineering-standards/code-review)
- Si hay desacuerdo técnico que no se resuelve entre dos Devs, el Tech Lead es el desempate
- Pedir ayuda no es señal de debilidad; bloquearse en silencio sí es un problema

## Dev ↔ Tech Lead

El Tech Lead es el referente técnico, no el cuello de botella.

- Involucrar al Tech Lead en el diseño de features complejas antes de implementar, no después
- Si un Dev tiene dudas sobre si su solución es la correcta, consultar antes de invertir días en ella
- El Tech Lead no necesita aprobar cada PR, pero sí los cambios de arquitectura o los que tienen impacto amplio

## Dev ↔ QA

QA no es el último filtro; es un colaborador desde el inicio.

- Involucrar a QA en la definición de criterios de aceptación, no solo al final
- QA puede identificar casos borde que el Dev no consideró; eso es valioso, no una crítica
- Si QA encuentra un bug, el Dev lo corrige sin drama. Si hay debate sobre si es un bug, el PO tiene la última palabra

## Dev ↔ PO

El PO define el qué, el Dev define el cómo.

- Si un requerimiento no está claro, preguntar antes de implementar
- Si la implementación técnica implica un trade-off que afecta al usuario, comunicarlo al PO con opciones concretas
- El Dev puede y debe cuestionar requerimientos que no tienen sentido técnico o de UX, pero con argumentos, no con resistencia pasiva

## Tech Lead ↔ Architect

- El Tech Lead escala al Architect cuando una decisión técnica tiene impacto en múltiples equipos o servicios
- El Architect no está en el día a día del equipo; hay que darle contexto suficiente cuando se lo involucra
- Las decisiones del Architect se documentan como ADRs

## Cómo escalar un bloqueo

1. Intentar resolverlo con la persona directamente involucrada
2. Si no se resuelve en 24h, involucrar al Tech Lead o EM según si es técnico o de proceso
3. Si sigue sin resolverse, el EM lo escala con el contexto necesario

No escalar no es una virtud. Un bloqueo que dura días sin resolverse es un problema de proceso.
