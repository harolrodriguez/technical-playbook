---
sidebar_position: 6
title: Nivel 5 — Store, Validators, Mappers
---

El nivel completo. Se agrega cuando el feature tiene estado compartido entre componentes distantes, validaciones complejas o transformaciones de datos no triviales.

## Qué se agrega

```
[feature]/
├── store/                           ← NUEVO (opcional)
│   └── [entidad]Store.ts
├── validators/                      ← NUEVO (opcional)
│   └── [feature].validator.ts
├── mappers/                         ← NUEVO (opcional)
│   └── [feature].mapper.ts
└── ...
```

Agrega solo lo que el feature necesita. No los tres por defecto.

## Store con Zustand

```ts
// store/cuentaStore.ts
import { create } from 'zustand'
import type { Cuenta } from '@/types/crearCuenta.types'

interface CuentaStore {
  cuenta: Cuenta | null
  setCuenta: (c: Cuenta) => void
  clearCuenta: () => void
}

export const useCuentaStore = create<CuentaStore>(set => ({
  cuenta: null,
  setCuenta: (cuenta) => set({ cuenta }),
  clearCuenta: () => set({ cuenta: null }),
}))
```

## Store con TanStack Store

Preferible si el proyecto ya usa TanStack Query — reduce dependencias externas.

```ts
// store/cuentaStore.ts
import { Store } from '@tanstack/store'
import type { Cuenta } from '@/types/crearCuenta.types'

export const cuentaStore = new Store<{ cuenta: Cuenta | null }>({ cuenta: null })
export const setCuenta = (cuenta: Cuenta) => cuentaStore.setState(() => ({ cuenta }))
export const clearCuenta = () => cuentaStore.setState(() => ({ cuenta: null }))
```

## Validator

```ts
// validators/crearCuenta.validator.ts
import type { CrearCuentaFormData, CrearCuentaErrors } from '@/types/crearCuenta.types'

export function validarCrearCuenta(data: CrearCuentaFormData): CrearCuentaErrors {
  const errors: CrearCuentaErrors = {}
  if (!data.nombre.trim()) errors.nombre = 'El nombre es requerido'
  if (!data.email.includes('@')) errors.email = 'Email inválido'
  if (data.password.length < 8) errors.password = 'Mínimo 8 caracteres'
  return errors
}
```

## Mapper

```ts
// mappers/crearCuenta.mapper.ts
import type { CrearCuentaFormData } from '@/types/crearCuenta.types'
import type { CrearCuentaApiPayload } from '@/types/crearCuenta.types'

export function toApiPayload(data: CrearCuentaFormData): CrearCuentaApiPayload {
  return {
    full_name: data.nombre.trim(),
    email_address: data.email.toLowerCase(),
    password_hash: data.password, // el hash lo hace el backend
  }
}
```

## Regla

El hook sigue siendo el orquestador. Los componentes nunca acceden a store, validators ni mappers directamente — todo pasa por el hook.
