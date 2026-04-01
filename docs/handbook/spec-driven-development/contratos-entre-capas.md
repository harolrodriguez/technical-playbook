---
sidebar_position: 4
title: Contratos y Fixtures
---

Cómo se documentan los contratos desde el Swagger, cómo se estructuran los fixtures y qué trazabilidad debe existir entre ellos para asegurar que la integración sea segura.

## El Swagger como fuente de verdad

El Swagger de Backend es la fuente de verdad de los contratos. No se inventan tipos ni estructuras; se extraen del Swagger y se tipan.

Un contrato incluye:
- La firma del endpoint (método, path, parámetros)
- La estructura de la respuesta exitosa con tipos exactos
- Todos los códigos de error posibles y la estructura de cada uno
- Comportamientos especiales: idempotencia, paginación, ordenamiento

Si el Swagger no documenta un caso de error que los requerimientos EARS necesitan, es un gap que Backend debe resolver antes de que el equipo avance. Los fixtures no pueden existir sin contratos.

## Estructura de un fixture

Cada fixture tiene tres partes: trazabilidad, datos y tipo.

```typescript
// fixtures/booklets.ts

import type { BookletResponse, BookletError } from '@/types/generated' // del Swagger

export const bookletFixtures = {

  cartilla_activa: {
    // Trazabilidad
    _scenario: "Scenario: cartilla disponible para el usuario",
    _ears: "REQ-BOOKLET-UNLOCK-001 → GET /api/booklets/{id} → 200",

    // Datos tipados según el contrato
    data: {
      id: "CART_001",
      nombre: "Cartilla Básica",
      costo: 0,
      estado: "activa",
      eventos: [
        { id: "evt_1", nombre: "Real Madrid vs Barcelona", fecha: "2026-04-01" }
      ]
    } satisfies BookletResponse
  },

  cartilla_bloqueada: {
    _scenario: "Scenario: cartilla bloqueada por puntos insuficientes",
    _ears: "REQ-BOOKLET-UNLOCK-001 → estado=bloqueada cuando userPoints < booklet.costo",

    data: {
      id: "CART_003",
      nombre: "Cartilla Oro",
      costo: 150,
      estado: "bloqueada",
      eventos: []
    } satisfies BookletResponse
  },

  cartilla_no_encontrada: {
    _scenario: "Scenario: cartilla con ID inválido",
    _ears: "REQ-BOOKLET-UNLOCK-001 → GET /api/booklets/{id} → 404",

    error: {
      code: "NOT_FOUND",
      message: "Cartilla no encontrada",
      retryable: false
    } satisfies BookletError
  }

}
```

La trazabilidad no es opcional. Si un fixture no referencia su caso Gherkin y su requerimiento EARS, no se puede mantener cuando alguno de los dos cambia.

## Mock handler

El Composer expone un handler que Frontend usa para activar cualquier escenario. La interfaz es idéntica en desarrollo y en producción; solo cambia la implementación.

```typescript
// En desarrollo: usa fixtures
// En producción: llama al Backend real
// Frontend no cambia su código entre ambos entornos

const booklet = await bookletComposer.getById("CART_001")
// → dev:  devuelve bookletFixtures.cartilla_activa.data
// → prod: llama a GET /api/booklets/CART_001
```

Esto permite que Frontend desarrolle todos los estados de UI sin tocar el Backend, y que QA active cualquier escenario de forma controlada.

## Cobertura mínima de fixtures

Por cada endpoint o función del Composer:

| Tipo de escenario | Código | Fixture requerido |
|------------------|--------|-------------------|
| Respuesta exitosa completa | 200 | Todos los campos presentes |
| Respuesta exitosa mínima | 200 | Solo campos obligatorios |
| Recurso no encontrado | 404 | Error con `code: NOT_FOUND` |
| Sin permisos | 403 | Error con `code: FORBIDDEN` |
| Error de servidor | 500 | Error con `retryable: false` |
| Servicio no disponible | 503 | Error con `retryable: true` |
| Estado vacío | 200 | Respuesta válida con arrays vacíos |

QA define si se necesitan fixtures adicionales según la complejidad de la feature.

## Cuando el Swagger cambia

Si Backend actualiza el Swagger después de que los fixtures están generados:

1. Identificar qué fixtures se ven afectados (la trazabilidad lo hace evidente)
2. Actualizar los tipos generados del Swagger
3. Los errores de TypeScript señalan exactamente qué fixtures rompen el contrato
4. Actualizar los fixtures afectados
5. Verificar que Frontend y QA no tienen código que asuma la estructura anterior

Los fixtures desactualizados son peores que no tener fixtures: dan falsa confianza. El sistema de tipos es la red de seguridad que asegura que todo sigue siendo consistente.

## Beneficio: integración segura

Con fixtures tipados y trazables:

- **Frontend desarrolla contra contratos reales** — no contra suposiciones
- **Backend implementa contra contratos acordados** — no contra adivinanzas
- **QA prueba todos los escenarios** — no solo los que ocurren en staging
- **TypeScript detecta inconsistencias** — antes de que lleguen a producción
- **La integración es una confirmación** — no una sorpresa
