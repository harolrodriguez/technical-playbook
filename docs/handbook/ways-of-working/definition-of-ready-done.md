---
sidebar_position: 3
title: Definition of Ready / Done
---

Criterios claros para saber cuándo una historia está lista para trabajarse (DoR) y cuándo está realmente terminada (DoD).

## Definition of Ready (DoR)

Una historia está lista para entrar al sprint cuando cumple todos estos criterios:

- [ ] El objetivo de negocio está claro: ¿qué problema resuelve para el usuario?
- [ ] Los criterios de aceptación están escritos y son verificables
- [ ] Las dependencias están identificadas (otros equipos, servicios, datos)
- [ ] El diseño de UX está disponible si la feature tiene interfaz
- [ ] La historia está estimada por el equipo
- [ ] No hay bloqueos conocidos que impidan empezarla

Si una historia no cumple el DoR, no entra al sprint. Se refina primero.

## Definition of Done (DoD)

Una historia está terminada cuando cumple todos estos criterios:

- [ ] El código está mergeado a la rama principal
- [ ] Los tests unitarios e integración están escritos y pasan
- [ ] El código pasó code review con al menos un aprobador
- [ ] La feature funciona en el ambiente de staging
- [ ] Los criterios de aceptación fueron verificados por QA
- [ ] La documentación técnica está actualizada (si aplica)
- [ ] No hay deuda técnica nueva sin registrar
- [ ] El PO aceptó la historia

## Por qué importa

Sin DoR, el equipo empieza a trabajar en historias ambiguas y termina retrabajando o bloqueándose a mitad del sprint.

Sin DoD, "terminado" significa cosas distintas para distintas personas. Eso genera sorpresas en producción y fricción entre roles.

Estos criterios no son burocracia. Son el acuerdo del equipo sobre qué significa hacer bien el trabajo.

## Excepciones

En situaciones de urgencia (hotfix crítico, incidente en producción), se puede saltear parte del proceso. Pero se documenta la deuda generada y se paga en el sprint siguiente.
