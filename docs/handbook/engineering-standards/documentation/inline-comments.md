---
sidebar_position: 3
title: Inline Comments
---

Cómo escribir comentarios en código: cuándo comentar, qué comentar y cómo hacerlo bien.

## Principio

**El código debe ser auto-explicativo.** Los comentarios son para explicar el "por qué", no el "qué".

```typescript
// ❌ Malo: Explica lo obvio
const user = getUser(id); // Obtener usuario

// ✅ Bueno: Explica por qué
// Obtener usuario del cache primero para reducir latencia
const user = cache.get(id) || await db.getUser(id);
```

## Cuándo comentar

### ✅ Comenta el "por qué"

```typescript
// Usamos un Set en lugar de Array para O(1) lookup
const userIds = new Set(users.map(u => u.id));

// Reintentamos 3 veces porque el servicio externo es inestable
for (let i = 0; i < 3; i++) {
  try {
    return await externalService.fetch();
  } catch (error) {
    if (i === 2) throw error;
  }
}
```

### ✅ Comenta decisiones no obvias

```typescript
// Ordenamos por fecha descendente porque los usuarios esperan ver lo más reciente primero
const sorted = items.sort((a, b) => b.date - a.date);

// Limitamos a 100 items porque más causa timeout en el cliente
const limited = items.slice(0, 100);
```

### ✅ Comenta workarounds

```typescript
// HACK: El navegador no soporta requestIdleCallback en Safari
// TODO: Remover cuando Safari lo soporte (PROJ-123)
const scheduleIdle = window.requestIdleCallback || setTimeout;
```

### ✅ Comenta complejidad

```typescript
// Algoritmo de búsqueda binaria para O(log n) performance
// Ver: https://en.wikipedia.org/wiki/Binary_search_algorithm
function binarySearch(arr, target) {
  // ...
}
```

## Cuándo NO comentar

### ❌ No comentes lo obvio

```typescript
// ❌ Malo
i++; // Incrementar i

// ✅ Bueno
i++; // Pasar al siguiente usuario
```

### ❌ No comentes código que debería ser eliminado

```typescript
// ❌ Malo
// const oldFunction = () => { ... };

// ✅ Bueno
// Eliminado en favor de newFunction (PROJ-123)
```

### ❌ No comentes si el código es auto-explicativo

```typescript
// ❌ Malo
// Obtener el nombre del usuario
const userName = user.name;

// ✅ Bueno
const userName = user.name;
```

## Tipos de comentarios

### TODO

Para trabajo futuro:

```typescript
// TODO: Agregar validación de email (PROJ-123)
const email = req.body.email;
```

### FIXME

Para bugs conocidos:

```typescript
// FIXME: Esta función falla cuando el usuario no existe (PROJ-456)
function getUserAge(userId) {
  return user.age;
}
```

### NOTE

Para información importante:

```typescript
// NOTE: Este valor es crítico para la seguridad, no cambiar sin revisar
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
```

### HACK

Para workarounds temporales:

```typescript
// HACK: Workaround para bug en navegador X
// Ver: https://bugs.chromium.org/p/chromium/issues/detail?id=123456
if (isChrome) {
  // ...
}
```

## Formato

```typescript
// Comentario de una línea

/*
 * Comentario de múltiples líneas
 * Línea 2
 * Línea 3
 */

/**
 * JSDoc para funciones
 * @param {string} name - El nombre del usuario
 * @returns {Promise<User>} El usuario creado
 */
function createUser(name) {
  // ...
}
```

## Evitar problemas comunes

**Problema: Comentarios desactualizados**  
Solución: Actualiza comentarios cuando cambias código. En code review, verifica que comentarios sean correctos.

**Problema: Demasiados comentarios**  
Solución: Refactoriza el código para que sea más claro. Los comentarios son último recurso.

**Problema: Comentarios que contradicen el código**  
Solución: Si el código y el comentario no coinciden, confía en el código. Actualiza el comentario.

## Referencia

- [README Standards](/handbook/engineering-standards/documentation/readme-standards)
- [ADR Process](/handbook/engineering-standards/documentation/adr-process)
