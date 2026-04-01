---
sidebar_position: 3
title: Estándar de Casos Funcionales
---

Para que el flujo funcione, los casos Gherkin deben ser lo suficientemente precisos para generar fixtures sin ambigüedad y para que Frontend pueda desarrollar contra ellos sin interpretación.

## Qué hace que un caso sea preciso

Un caso Gherkin preciso cumple tres condiciones:

1. **Es automatizable sin interpretación** — cualquier persona del equipo puede traducirlo a un test sin hacer preguntas
2. **Especifica el componente o elemento concreto** — no "se muestra algo", sino "el elemento `#points-total` contiene `250`"
3. **Cubre el estado completo** — no solo el resultado visible, sino el estado interno, los atributos y los efectos secundarios

```gherkin
# Impreciso — requiere interpretación
Scenario: mostrar puntos
  Given hay un usuario
  When carga la página
  Then se muestran los puntos

# Preciso — automatizable directamente
Scenario: mostrar puntos del usuario autenticado
  Given soy usuario con 250 puntos en BD
  When el componente de puntos termina de cargar
  Then el elemento con data-testid="points-total" contiene "250"
  And el estado de carga es false
  And no hay errores visibles
```

## Cobertura mínima de escenarios

Por cada feature, los casos deben cubrir al menos:

| Escenario | Descripción | Por qué importa |
|-----------|-------------|-----------------|
| Happy path completo | Todos los datos presentes, flujo normal | Frontend desarrolla el caso normal |
| Datos mínimos | Solo campos obligatorios, sin opcionales | Frontend maneja datos incompletos |
| Recurso no encontrado | 404 | Frontend muestra estado "no encontrado" |
| Sin permisos | 403 | Frontend muestra estado "sin acceso" |
| Error de servidor | 500 | Frontend maneja errores del servidor |
| Servicio no disponible | 503 / timeout | Frontend maneja indisponibilidad |
| Estado vacío | El recurso existe pero no tiene datos | Frontend muestra estado vacío |
| Estado de carga | El componente está esperando la respuesta | Frontend muestra skeleton/loader |

QA define si se necesitan escenarios adicionales según la complejidad de la feature. Los casos de error son tan importantes como el happy path: sin ellos, Frontend no puede desarrollar los estados de error y QA no puede probar la resiliencia.

## Etiquetado de casos

Los casos se etiquetan para poder filtrarlos en CI y para que los fixtures tengan contexto suficiente. El etiquetado mínimo incluye:

- El componente o área funcional: `@PointsDisplay`, `@BookletCard`, `@PredictionForm`
- El tipo de evento: `@click`, `@load`, `@submit`, `@error`
- El requerimiento asociado: `@REQ-POINTS-001`

```gherkin
@PointsDisplay @load @REQ-POINTS-001
Scenario: mostrar puntos del usuario autenticado
  ...

@PointsDisplay @error @REQ-POINTS-001
Scenario: servicio de puntos no disponible
  ...
```

Esto permite ejecutar en CI solo los casos de un componente, solo los casos de error, o solo los casos de un requerimiento específico.

## Referencia de arquitectura

El estándar de etiquetado y estructura de casos está inspirado en el patrón **THC-C** (Types, Hooks, Components, Composer), un patrón de arquitectura de referencia para la escritura de Gherkin orientado a componentes.

Para profundizar en el patrón y ver ejemplos detallados: [github.com/harolsind/thc-c](https://github.com/harolsind/thc-c)

El equipo adoptó los principios de trazabilidad y precisión de THC-C y los adaptó al flujo colaborativo descrito en esta sección.
