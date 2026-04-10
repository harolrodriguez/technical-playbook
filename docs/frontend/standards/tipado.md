---
sidebar_position: 3
title: Tipado — TypeScript
---

Cómo usamos TypeScript en el equipo. Reglas para interfaces, tipos, generics y cuándo usar cada uno.

## Interface vs Type

```ts
// ✅ interface para objetos y contratos
interface UserProfile {
  id: string
  name: string
  email: string
}

// ✅ type para uniones, intersecciones y aliases
type Status = 'idle' | 'loading' | 'success' | 'error'
type UserId = string
type UserWithRole = UserProfile & { role: 'admin' | 'viewer' }
```

Usa `interface` cuando describes la forma de un objeto. Usa `type` para todo lo demás.

## No uses `any`

```ts
// ❌ any apaga TypeScript
function process(data: any) {}

// ✅ unknown si no sabes el tipo, luego narrowing
function process(data: unknown) {
  if (typeof data === 'string') { ... }
}

// ✅ generic si el tipo varía pero es conocido en el call site
function process<T>(data: T): T { return data }
```

## Tipos de respuesta de API

Define siempre los dos casos: éxito y error.

```ts
interface ApiSuccessResponse<T> {
  status: 200 | 201
  data: T
}

interface ApiErrorResponse {
  status: 400 | 401 | 409 | 500
  error: string
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse
```

## Tipos opcionales

```ts
// ✅ opcional solo cuando realmente puede no existir
interface CrearCuentaErrors {
  nombre?: string   // puede no haber error de nombre
  email?: string
  general?: string
}

// ❌ no uses optional para evitar inicializar
interface UserProfile {
  id?: string  // el id siempre existe, no debe ser opcional
}
```

## Inferencia

Deja que TypeScript infiera cuando el tipo es obvio. No anotes lo que ya es evidente.

```ts
// ✅ TypeScript infiere correctamente
const count = 0
const name = 'María'
const items = ['a', 'b', 'c']

// ❌ anotación redundante
const count: number = 0
const name: string = 'María'
```

Anota siempre los parámetros de funciones y los retornos cuando no son obvios.

```ts
// ✅ parámetros y retorno anotados
function formatCurrency(amount: number, currency: string): string {
  return `${currency} ${amount.toFixed(2)}`
}
```

## `strict: true`

Todo proyecto tiene `strict: true` en `tsconfig.json`. No se negocia.
