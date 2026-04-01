---
sidebar_position: 2
title: Estimación
---

Cómo estimamos el trabajo en ACITY: estimación relativa, story points y el proceso de estimación.

## Estimación Relativa

La estimación relativa es una práctica ágil que permite dimensionar el trabajo comparándolo con otros elementos, en lugar de estimarlo en tiempo exacto.

**Ventajas:**
- Los equipos pueden evaluar con mayor precisión qué tan grande o complejo es un ítem respecto a otro
- Considera factores como esfuerzo, complejidad e incertidumbre
- Promueve decisiones más ágiles y realistas, enfocadas en flujo de valor

## Story Points

**Unidad**: Fibonacci (1, 2, 3, 5, 8, 13, 21)  
**Responsable**: Equipo de delivery  
**Momento**: Refinamiento o planificación de sprint

**Regla clave**: Si una historia supera los 8 puntos, debe ser dividida (slicing) antes de ser planificada en un sprint.

## Proceso de Estimación (3C)

### 1. Card (Qué estamos estimando)

- El Product Owner presenta la historia o ítem
- Se comparten criterios de aceptación a nivel general
- El equipo entiende el objetivo y valor del ítem (no entra aún en detalle técnico profundo)

### 2. Conversation (Construimos entendimiento compartido)

El equipo conversa para aclarar dudas funcionales y técnicas.

**Uso del pivot (historia de referencia):**
- Primera estimación del equipo: se define una historia base (ej. 3 puntos)
- Inicio de cada sesión: se recuerda el pivot para alinear criterios
- Ante dispersión: se vuelve al pivot para recalibrar

**Criterios de un buen pivot:**
- Entendido por todo el equipo
- Representativo (ni muy pequeño ni muy grande)
- Comparable con otros ítems

**Comparación relativa:**
- Más simple → menor puntaje
- Similar → mismo puntaje
- Más complejo → mayor puntaje

**Tres dimensiones clave:**
- **Complejidad**: Grado de dificultad técnica del trabajo
- **Esfuerzo**: Cantidad de trabajo necesario para terminar la historia (desarrollo, pruebas, validación)
- **Incertidumbre**: Nivel de desconocimiento o riesgo asociado al trabajo

### 3. Confirmation (Alineamos y cerramos la estimación)

- El equipo estima usando Fibonacci (1, 2, 3, 5, 8, 13, 21)
- Se puede usar herramientas como [Planning Poker](https://free-planning-poker.com)
- Si hay diferencias relevantes (ej. 2, 3, 8, 13):
  - Se discuten los supuestos
  - Se busca entendimiento común
  - Se revota si es necesario

## Slicing (División de Historias > 8 puntos)

Cuando un ítem excede los 8 puntos, debe dividirse en partes más pequeñas que mantengan coherencia y entreguen valor.

**Técnica SPIDR:**

| Técnica | Descripción |
|---------|------------|
| **S – Spike** | Crear una historia de investigación para reducir incertidumbre |
| **P – Paths** | Dividir por flujos alternativos o escenarios (ej: flujo feliz vs excepciones) |
| **I – Interfaces** | Separar por tipos de interacción (UI, API, integración) |
| **D – Data** | Dividir según tipos o fuentes de datos |
| **R – Rules** | Separar por reglas de negocio o validaciones |

**Qué debe cumplir un buen slice:**
- Tiene valor para el usuario (aunque sea parcial)
- Es independiente (no bloquea a otros)
- Se puede probar (criterios claros)
- Cabe en un sprint

## Referencia

- [Scrum & Agile Model](/handbook/ways-of-working/scrum)
- [Definition of Ready / Done](/handbook/ways-of-working/definition-of-ready-done)
