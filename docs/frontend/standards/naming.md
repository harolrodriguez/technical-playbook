---
sidebar_position: 2
title: Naming — Convenciones de Nombres
---

Convenciones de nombres para archivos, carpetas, variables, funciones y componentes.

## Archivos y carpetas

| Tipo | Convención | Ejemplo |
|---|---|---|
| Componente | PascalCase | `UserCard.tsx` |
| Hook | camelCase con prefijo `use` | `useUserProfile.ts` |
| Tipo / Interface | camelCase con sufijo `.types` | `userProfile.types.ts` |
| Servicio | camelCase con sufijo `Service` | `userProfileService.ts` |
| Fixture | camelCase con sufijo `.fixture` | `userProfile.fixture.ts` |
| Utilidad | camelCase | `formatDate.ts` |
| Carpeta de feature | kebab-case | `user-profile/` |

## Variables y funciones

```ts
// ✅ variables: camelCase
const userName = 'María'
const isLoading = true

// ✅ funciones: camelCase, verbo + sustantivo
function fetchUserProfile(id: string) {}
function formatCurrency(amount: number) {}

// ✅ constantes globales: SCREAMING_SNAKE_CASE
const MAX_RETRY_COUNT = 3
const API_BASE_URL = '/api/v1'

// ❌ evitar abreviaciones no obvias
const usrNm = 'María'
const ld = true
```

## Componentes

```tsx
// ✅ PascalCase, sustantivo o sustantivo + adjetivo
function UserCard() {}
function PrimaryButton() {}
function LoadingSpinner() {}

// ❌ verbos como nombre de componente
function RenderUser() {}
function ShowButton() {}
```

## Interfaces y tipos

```ts
// ✅ interfaces: PascalCase, sin prefijo I
interface UserProfile { ... }
interface ApiResponse<T> { ... }

// ✅ tipos de unión/intersección: PascalCase
type Status = 'idle' | 'loading' | 'success' | 'error'
type UserId = string

// ❌ prefijo I en interfaces
interface IUserProfile { ... }
```

## Booleanos

```ts
// ✅ prefijo is, has, can, should
const isVisible = true
const hasPermission = false
const canEdit = true
const shouldRefetch = false

// ❌ sin prefijo
const visible = true
const permission = false
```
