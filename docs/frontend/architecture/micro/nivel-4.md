---
sidebar_position: 5
title: Nivel 4 — Services + composeConfig
---

Se agrega cuando el feature tiene múltiples endpoints o necesitas control centralizado del modo mock por feature.

## Qué se agrega

```
[feature]/
├── services/                        ← NUEVO
│   ├── [feature]Service.ts
│   ├── [feature]Service.mock.ts
│   └── composer.ts
└── ...

composeConfig.ts                     ← NUEVO (nivel global, fuera del feature)
```

## composeConfig

Control centralizado. Un solo lugar para saber qué está en mock y qué no.

```ts
// composeConfig.ts (raíz del proyecto o src/)
export const composeConfig = {
  register: { useMock: true, scenario: 'exitoso' },
  login:    { useMock: false, scenario: 'exitoso' },
} as const
```

## Service real

```ts
// services/crearCuentaService.ts
export const crearCuentaService = {
  registrar: async (data: CrearCuentaFormData): Promise<ApiResponse<Cuenta>> => {
    const response = await fetch('/api/crear-cuenta', { method: 'POST', body: JSON.stringify(data) })
    return response.json()
  },
  verificarEmail: async (email: string): Promise<boolean> => {
    const response = await fetch(`/api/verificar-email?email=${email}`)
    return response.json()
  },
}
```

## Service mock

```ts
// services/crearCuentaService.mock.ts
import { composeConfig } from '@/composeConfig'
const { scenario } = composeConfig.register

export const crearCuentaService = {
  registrar: async (_data: CrearCuentaFormData): Promise<ApiResponse<Cuenta>> => {
    const { default: fixture } = await import(`@/fixtures/${scenario}/crearCuenta.fixture`)
    return fixture
  },
  verificarEmail: async (_email: string): Promise<boolean> => true,
}
```

## Composer

```ts
// services/composer.ts
import { composeConfig } from '@/composeConfig'
import { crearCuentaService as real } from './crearCuentaService'
import { crearCuentaService as mock } from './crearCuentaService.mock'

export const crearCuentaService = composeConfig.register.useMock ? mock : real
```

## Cuándo subir al nivel 5

Cuando el feature necesita estado compartido entre componentes distantes, validaciones complejas reutilizables, o transformaciones de datos no triviales.
