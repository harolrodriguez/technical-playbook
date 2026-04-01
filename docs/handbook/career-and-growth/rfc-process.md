---
sidebar_position: 2
title: RFC Process
---

Cómo proponer cambios significativos al Playbook o a la arquitectura mediante un RFC (Request for Comments).

## Qué es un RFC

Un RFC es un documento que propone un cambio significativo y solicita feedback del equipo antes de implementarlo. No es una decisión unilateral ni una presentación de algo ya decidido.

El proceso existe para que las decisiones importantes se tomen con el input de quienes van a ser afectados por ellas.

## Cuándo usar un RFC

Un RFC es necesario cuando el cambio:
- Afecta a múltiples equipos o servicios
- Cambia un estándar o proceso del equipo
- Introduce una nueva tecnología o patrón arquitectónico
- Modifica un contrato de API que tiene múltiples consumidores
- Cambia algo en este handbook que tiene impacto amplio

No es necesario para cambios pequeños, correcciones de bugs o mejoras locales.

## Formato del RFC

```markdown
# RFC-XXX: Título del cambio

**Autor**: Nombre
**Fecha**: YYYY-MM-DD
**Estado**: Draft | En revisión | Aprobado | Rechazado | Implementado

## Resumen
Una o dos oraciones que describen el cambio propuesto.

## Motivación
¿Por qué se necesita este cambio? ¿Qué problema resuelve?

## Propuesta detallada
Descripción técnica del cambio. Suficiente detalle para que el equipo pueda evaluar el impacto.

## Alternativas consideradas
¿Qué otras opciones se evaluaron? ¿Por qué se descartaron?

## Trade-offs
¿Qué se gana con este cambio? ¿Qué se pierde o complica?

## Plan de implementación
Pasos concretos para implementar el cambio si se aprueba.

## Preguntas abiertas
Aspectos que aún no están resueltos y sobre los que se busca input.
```

## Proceso

1. **Draft**: El autor escribe el RFC y lo comparte con el Tech Lead para una revisión inicial
2. **En revisión**: Se abre al equipo por al menos 5 días hábiles para comentarios
3. **Discusión**: Se puede hacer una sesión sincrónica si el tema lo amerita
4. **Decisión**: El Architect o Tech Lead (según el alcance) toma la decisión con el input recibido
5. **Implementación**: Si se aprueba, se implementa según el plan documentado

## Dónde viven los RFCs

Los RFCs se guardan en el repositorio del handbook bajo `/rfcs/`. El nombre del archivo sigue el formato `RFC-XXX-titulo-corto.md`.

Los RFCs aprobados e implementados se convierten en la documentación oficial del cambio.
