---
sidebar_position: 1
title: Error Handling
---

Patrones para manejar errores de forma consistente: qué loggear, cómo comunicar errores al usuario y cuándo fallar rápido.

## Principios

**Fail fast**: Detecta errores lo antes posible, no los dejes propagarse.

**Loggea contexto**: No solo el error, sino qué estabas haciendo cuando ocurrió.

**Comunica claramente**: El usuario debe entender qué salió mal y qué puede hacer.

**Recupera cuando sea posible**: Si hay una forma de recuperarse, hazlo. Si no, falla de forma controlada.

## Estructura de error

Un error debe tener:
- **Tipo**: Qué tipo de error es (validation, network, auth, etc.)
- **Mensaje**: Qué salió mal
- **Contexto**: Dónde ocurrió (función, línea, datos relevantes)
- **Recuperable**: ¿Se puede reintentar?

## Logging de errores

```typescript
// ❌ Malo
console.error(error);

// ✅ Bueno
logger.error('Failed to fetch user profile', {
  userId: user.id,
  error: error.message,
  stack: error.stack,
  timestamp: new Date().toISOString(),
});
```

## Manejo en Frontend

```typescript
try {
  const data = await fetchUserProfile(userId);
  setUser(data);
} catch (error) {
  if (error instanceof NetworkError) {
    showToast('No internet connection. Please try again.');
  } else if (error instanceof ValidationError) {
    showToast('Invalid input. Please check your data.');
  } else {
    showToast('Something went wrong. Please try again later.');
    logger.error('Unexpected error', { error });
  }
}
```

## Manejo en Backend

```typescript
app.get('/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    logger.error('Failed to fetch user', {
      userId: req.params.id,
      error: error.message,
    });
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

## Errores vs Excepciones

**Errores**: Situaciones esperadas que pueden ocurrir (usuario no encontrado, validación fallida).

**Excepciones**: Situaciones inesperadas que indican un bug (null pointer, stack overflow).

Maneja errores explícitamente. Deja que las excepciones se propaguen para que se loggeen.

## Retry logic

Para operaciones que pueden fallar temporalmente:

```typescript
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000; // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

## Errores en APIs

Responde siempre con un formato consistente:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

Ver [API Design - Error Handling](/handbook/engineering-standards/api-design/error-handling)
