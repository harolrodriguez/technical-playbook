---
sidebar_position: 2
title: Flujo de Colaboración
---

El flujo tiene cuatro pasos que convierten los artefactos del equipo en una librería de fixtures lista para usar. Los tres actores — Backend, Frontend y QA — participan en cada paso con roles distintos, trabajando en paralelo sin bloquearse.

## Paso 1 — QA define el comportamiento esperado en Gherkin

QA escribe casos funcionales que especifican exactamente qué debe pasar en cada escenario. Estos casos son el punto de partida y deben existir **antes** de que cualquiera empiece a implementar.

Cada caso cubre una casuística real: happy path, errores de negocio, errores técnicos, casos de borde, estados de UI.

```gherkin
Feature: Consulta de puntos del usuario

  Scenario: mostrar puntos correctamente
    Given soy usuario con 250 puntos en BD
    When el componente de puntos se carga
    Then el total visible es "250"
    And el estado es: cargado, sin error

  Scenario: servicio de puntos no disponible
    Given el servicio de puntos devuelve error 503
    When el componente de puntos intenta cargar
    Then se muestra el mensaje "No se pudieron cargar los puntos"
    And se muestra la opción de reintentar

  Scenario: usuario nuevo sin puntos
    Given soy usuario nuevo con 0 puntos
    When el componente de puntos se carga
    Then el total visible es "0"
    And se muestra el mensaje "Comienza tu primer paso"
```

Cada escenario es lo suficientemente específico para ser automatizable sin interpretación. QA define todos los casos de error, no solo el happy path.

**Beneficio**: QA tiene claridad total sobre qué debe probarse. Frontend y Backend saben exactamente qué comportamiento deben implementar.

## Paso 2 — Se asocian con requerimientos EARS

Cada caso Gherkin se enlaza con un requerimiento EARS (Easy Approach to Requirements Syntax) que especifica la regla técnica que lo cumple: qué servicio usar, qué endpoint llamar, qué validación aplicar, qué respuesta esperar.

EARS usa una sintaxis estructurada que elimina la ambigüedad:

```
REQUIREMENT ID: REQ-POINTS-DISPLAY-001

WHEN el componente de puntos se carga
THE SYSTEM SHALL llamar GET /api/user/{userId}/points
AND mostrar el valor en el elemento de total de puntos

WHEN la API responde con error 4xx o 5xx
THE SYSTEM SHALL mostrar el mensaje de error correspondiente
AND ofrecer la opción de reintentar

WHEN el usuario tiene 0 puntos
THE SYSTEM SHALL mostrar "0" como total
AND mostrar el mensaje de bienvenida
```

El requerimiento EARS conecta el caso funcional (qué debe pasar) con la regla técnica (cómo debe pasar). Backend y Frontend lo usan como referencia de implementación.

**Beneficio**: No hay ambigüedad sobre qué implementar. Backend sabe exactamente qué endpoint exponer. Frontend sabe exactamente qué datos esperar.

## Paso 3 — Backend expone contratos en Swagger

Backend expone su Swagger con endpoints, parámetros, estructura de respuesta exitosa, códigos de error y su estructura.

Los contratos del Swagger se cruzan con los requerimientos EARS para verificar que lo que Backend expone cubre lo que los casos funcionales necesitan. Si hay gaps — un caso de error que el Swagger no documenta, un campo que falta — se resuelven antes de continuar.

```typescript
// Tipos generados del Swagger
interface PointsResponse {
  userId: string
  totalPoints: number
  booklets: number
  lastUpdated: string
}

interface PointsError {
  code: 'NOT_FOUND' | 'SERVICE_UNAVAILABLE' | 'FORBIDDEN'
  message: string
  retryable: boolean
}
```

**Beneficio**: Los contratos están documentados y tipados. Frontend sabe exactamente qué estructura esperar. TypeScript detecta si algo no coincide.

## Paso 4 — Se genera la librería de fixtures

La combinación de casos Gherkin + requerimientos EARS + contratos Swagger produce la librería de fixtures: mocks tipados con todos los escenarios posibles.

```typescript
// fixtures/points.ts

export const pointsFixtures = {

  puntos_normales: {
    // Gherkin: "mostrar puntos correctamente"
    // EARS: REQ-POINTS-DISPLAY-001 → GET /api/user/{id}/points → 200
    data: {
      userId: "guest_001",
      totalPoints: 250,
      booklets: 5,
      lastUpdated: "2026-03-28T14:30:00Z"
    } satisfies PointsResponse
  },

  usuario_sin_puntos: {
    // Gherkin: "usuario nuevo sin puntos"
    data: {
      userId: "guest_002",
      totalPoints: 0,
      booklets: 0,
      lastUpdated: "2026-03-28T14:30:00Z"
    } satisfies PointsResponse
  },

  servicio_no_disponible: {
    // Gherkin: "servicio de puntos no disponible"
    // EARS: REQ-POINTS-DISPLAY-001 → 503
    error: {
      code: "SERVICE_UNAVAILABLE",
      message: "No se pudieron cargar los puntos",
      retryable: true
    } satisfies PointsError
  }

}
```

Cada fixture tiene trazabilidad: se sabe de qué escenario Gherkin viene, qué requerimiento EARS cumple y qué contrato del Swagger respeta.

**Beneficio**: Frontend tiene mocks reales de todos los escenarios. QA tiene escenarios controlados para probar. Backend tiene referencia clara de qué implementar.

## Resultado: trabajo en paralelo sin bloqueos

Con la librería de fixtures lista, los tres actores trabajan simultáneamente:

```
Backend  ──────────────────────────► implementa los endpoints reales
Frontend ──────────────────────────► maquetar y desarrollar contra los fixtures
QA       ──────────────────────────► automatiza casos contra los fixtures
```

**Frontend** puede desarrollar y probar todos los estados de UI — loading, error, vacío, éxito — desde el día uno, sin tocar el Backend real. Cuando Backend termina, reemplazar el fixture por la llamada real es trivial.

**Backend** implementa contra contratos claros. No necesita esperar a que Frontend esté listo. Cuando termina, la integración es una confirmación, no una sorpresa.

**QA** ejecuta casos contra fixtures controlados. No depende de datos reales de staging. Todos los escenarios están cubiertos y son reproducibles.

Nadie espera a nadie. La integración es segura porque todos respetaron el contrato acordado.
