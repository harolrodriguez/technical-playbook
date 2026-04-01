---
sidebar_position: 2
title: Estimación
---

Cómo estimamos con puntos de historia: qué representan, cómo calibrar el equipo y cómo mejorar la precisión con el tiempo.

## Qué son los puntos de historia

Los puntos de historia miden **esfuerzo relativo**, no tiempo absoluto. Un punto no equivale a una hora ni a un día. Equivale a "tan complejo como la historia de referencia que el equipo acordó que vale 1 punto".

Esto es importante: dos Devs distintos pueden tardar tiempos distintos en completar la misma historia, pero ambos deberían estar de acuerdo en que vale 3 puntos.

## Escala de Fibonacci

Usamos la escala de Fibonacci: **1, 2, 3, 5, 8, 13, 21**.

| Puntos | Referencia |
|--------|-----------|
| 1 | Cambio trivial, bien entendido, sin incertidumbre |
| 2 | Tarea pequeña con algo de contexto necesario |
| 3 | Feature simple con algunas partes móviles |
| 5 | Feature mediana con dependencias o incertidumbre moderada |
| 8 | Feature compleja o con mucha incertidumbre |
| 13 | Feature muy compleja o con alta incertidumbre |
| 21 | Demasiado grande; hay que partir en historias más pequeñas |

Si una historia vale 21, no se estima: se parte.

## Proceso de estimación (Planning Poker)

1. El PO presenta la historia y responde preguntas de clarificación
2. Cada Dev vota en silencio su estimación
3. Se revelan todos los votos al mismo tiempo
4. Si hay divergencia grande (ej: alguien votó 2 y otro votó 8), se discute
5. Se vuelve a votar hasta llegar a consenso o mayoría

La discusión es el valor real del proceso. Si todos votan igual, no hay nada que hablar. Si hay divergencia, alguien tiene información que el resto no tiene.

## Velocidad del equipo

La velocidad es el promedio de puntos completados por sprint en los últimos 3-4 sprints. Se usa para planificar, no para presionar.

Si la velocidad baja, se investiga la causa (deuda técnica, interrupciones, historias mal estimadas) en lugar de exigir más puntos.

## Errores comunes

**Estimar en horas**: Convierte la estimación en un compromiso de tiempo. Genera presión y estimaciones infladas.

**Estimar solo**: La estimación individual pierde el valor de la discusión colectiva.

**No revisar estimaciones pasadas**: Si el equipo consistentemente sobre o subestima cierto tipo de historias, hay que calibrar.
