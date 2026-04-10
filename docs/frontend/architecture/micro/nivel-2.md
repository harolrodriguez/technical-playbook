---
sidebar_position: 3
title: Nivel 2 — Composer + Fixtures
---

Se agrega cuando el maquetador necesita trabajar sin backend. El Composer es el punto de intercambio entre la implementación real y el mock.

## Qué se agrega

```
[feature]/
├── types/
├── hooks/
│   ├── use[Feature].ts
│   └── [metodo]ComposedService.ts   ← NUEVO
├── fixtures/
│   └── exitoso/                     ← NUEVO
│       └── [feature].fixture.ts
└── components/
```

## ComposedService

El hook importa esta función. No sabe si hay un mock detrás o la implementación real. Cambiar de modo es cambiar una constante.

```ts
// hooks/registrarComposedService.ts
const USE_MOCK = true  // ← cambiar esto es todo lo que hace falta
const SCENARIO = 'exitoso'

const registrarReal = async (data: CrearCuentaFormData): Promise<ApiResponse<Cuenta>> => {
  const response = await fetch('/api/crear-cuenta', { method: 'POST', body: JSON.stringify(data) })
  return response.json()
}

const registrarMock = async (_data: CrearCuentaFormData): Promise<ApiResponse<Cuenta>> => {
  const { default: fixture } = await import(`@/fixtures/${SCENARIO}/crearCuenta.fixture`)
  return fixture
}

export const registrarService = USE_MOCK ? registrarMock : registrarReal
```

## Fixture

Tipado con la entidad. Si el tipo cambia, TypeScript detecta el fixture desactualizado en compilación.

```ts
// fixtures/exitoso/crearCuenta.fixture.ts
import type { ApiResponse, Cuenta } from '@/types/crearCuenta.types'

const fixture: ApiResponse<Cuenta> = {
  status: 201,
  data: { id: 'usr_abc123', nombre: 'María García', email: 'maria@ejemplo.com' },
}

export default fixture
```

## Cuándo subir al nivel 3

Cuando necesitas probar más de un estado: error de servidor, email duplicado, timeout, etc.
