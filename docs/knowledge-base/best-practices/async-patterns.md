---
sidebar_position: 3
title: Async Patterns
---

Patrones para manejar operaciones asincrónicas: promises, async/await, y cómo evitar callback hell.

## Callbacks (evitar)

```typescript
// ❌ Callback hell
fetchUser(userId, (error, user) => {
  if (error) {
    handleError(error);
  } else {
    fetchPosts(user.id, (error, posts) => {
      if (error) {
        handleError(error);
      } else {
        renderPosts(posts);
      }
    });
  }
});
```

Difícil de leer, difícil de debuggear, difícil de manejar errores.

## Promises

```typescript
// ✅ Mejor
fetchUser(userId)
  .then(user => fetchPosts(user.id))
  .then(posts => renderPosts(posts))
  .catch(error => handleError(error));
```

Más legible, pero aún puede ser confuso con múltiples `.then()`.

## Async/Await (preferido)

```typescript
// ✅ Mejor aún
async function loadUserPosts(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    renderPosts(posts);
  } catch (error) {
    handleError(error);
  }
}
```

Código que se lee como síncrono, pero es asincrónico.

## Patrones comunes

### Operaciones en paralelo

```typescript
// ❌ Secuencial (lento)
const user = await fetchUser(userId);
const posts = await fetchPosts(userId);
const comments = await fetchComments(userId);

// ✅ Paralelo (rápido)
const [user, posts, comments] = await Promise.all([
  fetchUser(userId),
  fetchPosts(userId),
  fetchComments(userId),
]);
```

### Manejo de errores parciales

```typescript
// Si una falla, todas fallan
Promise.all([...])

// Si una falla, continúa con las otras
Promise.allSettled([...])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(result.value);
      } else {
        console.error(result.reason);
      }
    });
  });
```

### Timeout

```typescript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}
```

### Retry

```typescript
async function retryAsync(fn, maxRetries = 3, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

### Debounce

```typescript
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Uso
const handleSearch = debounce(async (query) => {
  const results = await search(query);
  setResults(results);
}, 300);
```

### Throttle

```typescript
function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

## Evitar problemas comunes

**Problema: Race condition**  
Múltiples requests en paralelo, la última respuesta llega primero.

```typescript
// ✅ Solución: Cancelar requests anteriores
let abortController = new AbortController();

async function search(query) {
  abortController.abort();
  abortController = new AbortController();
  
  const results = await fetch(`/search?q=${query}`, {
    signal: abortController.signal
  });
  setResults(results);
}
```

**Problema: Memory leak**  
Requests pendientes cuando el componente se desmonta.

```typescript
// ✅ Solución: Limpiar en useEffect
useEffect(() => {
  const controller = new AbortController();
  
  fetchData({ signal: controller.signal })
    .then(setData)
    .catch(error => {
      if (error.name !== 'AbortError') {
        setError(error);
      }
    });
  
  return () => controller.abort();
}, []);
```

**Problema: Unhandled rejection**  
Promise que falla sin catch.

```typescript
// ✅ Siempre maneja errores
fetchData()
  .then(setData)
  .catch(error => {
    console.error('Failed to fetch', error);
    setError(error);
  });
```
