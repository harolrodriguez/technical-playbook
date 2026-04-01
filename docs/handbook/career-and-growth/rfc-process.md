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

## Cómo abrir un RFC

Un RFC se abre como un **Pull Request** en el repositorio del handbook. El PR es el mecanismo de discusión: los comentarios, sugerencias y la decisión final quedan registrados ahí.

1. Crea una rama con el formato `rfc/titulo-corto`
2. Agrega o modifica los archivos relevantes del handbook con el cambio propuesto
3. Abre el PR con el título `RFC: Título del cambio` y completa la descripción usando la plantilla de abajo
4. Asigna como reviewers al Tech Lead y/o Architect según el alcance
5. El PR permanece abierto al menos **5 días hábiles** para recibir comentarios del equipo
6. Se puede convocar una sesión sincrónica si el tema lo amerita
7. El Architect o Tech Lead toma la decisión y mergea, cierra o solicita cambios al PR

## Plantilla de descripción del PR

```markdown
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

## Resultado

Si el RFC se aprueba, el PR se mergea y los cambios en el handbook se convierten en la documentación oficial. Si se rechaza, el PR se cierra con un comentario explicando el motivo, quedando el historial de la discusión como referencia.
