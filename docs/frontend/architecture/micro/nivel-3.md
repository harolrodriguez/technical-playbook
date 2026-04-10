---
sidebar_position: 4
title: Nivel 3 — Múltiples Escenarios
---

Se agrega cuando necesitas probar más de un estado de la UI. Cada escenario es una carpeta. Cambiar de escenario es cambiar una constante en el Composer.

## Qué se agrega

```
[feature]/
├── fixtures/
│   ├── exitoso/
│   │   └── [feature].fixture.ts
│   ├── email-duplicado/             ← NUEVO
│   │   └── [feature].fixture.ts
│   └── error-servidor/              ← NUEVO
│       └── [feature].fixture.ts
└── ...
```

## Fixtures por escenario

```ts
// fixtures/email-duplicado/crearCuenta.fixture.ts
import type { ApiResponse, Cuenta } from '@/types/crearCuenta.types'

const fixture: ApiResponse<Cuenta> = {
  status: 409,
  error: 'El email ya está registrado',
}

export default fixture
```

```ts
// fixtures/error-servidor/crearCuenta.fixture.ts
const fixture: ApiResponse<Cuenta> = {
  status: 500,
  error: 'Error interno del servidor',
}

export default fixture
```

## Cambiar de escenario

Solo en el ComposedService:

```ts
const SCENARIO = 'email-duplicado'  // ← una línea
```

Cero cambios en el hook. Cero cambios en el componente.

## Cuándo subir al nivel 4

Cuando el feature tiene múltiples endpoints o la lógica de servicio se vuelve compleja para vivir en un solo archivo.
