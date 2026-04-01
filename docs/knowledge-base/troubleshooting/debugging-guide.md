---
sidebar_position: 2
title: Debugging Guide
---

Técnicas y herramientas para debuggear código: console, DevTools, debugger, y cómo pensar como un detective.

## Mentalidad de debugging

**No asumir**: Verifica cada suposición.

**Aislar**: Reduce el problema a la mínima reproducción.

**Documentar**: Anota qué probaste y qué pasó.

**Preguntar**: Si estás atascado, pide ayuda. Explicar el problema a alguien más a menudo te da la respuesta.

## Console

### console.log

```typescript
console.log('User:', user);
console.log('Data:', { userId, email, timestamp });
```

Útil para ver valores en momentos específicos.

### console.table

```typescript
console.table(users);  // Muestra un array como tabla
```

Mejor que console.log para arrays de objetos.

### console.time

```typescript
console.time('fetch');
await fetchData();
console.timeEnd('fetch');  // Muestra cuánto tardó
```

Útil para medir performance.

### console.error

```typescript
console.error('Failed to fetch user', error);
```

Para errores. Aparece en rojo en la consola.

### console.warn

```typescript
console.warn('Deprecated API used');
```

Para advertencias. Aparece en amarillo.

## Browser DevTools

### Debugger

Pausa la ejecución en un punto específico:

```typescript
debugger;  // La ejecución se pausa aquí si DevTools está abierto
```

O haz click en el número de línea en DevTools para agregar un breakpoint.

### Conditional breakpoints

Click derecho en el número de línea → "Add conditional breakpoint" → escribe la condición:

```typescript
userId === 123
```

El debugger solo se pausa si la condición es verdadera.

### Watch expressions

En DevTools, agrega expresiones para monitorear:

```typescript
user.email
items.length
state.isLoading
```

Se actualizan en tiempo real mientras debuggeas.

### Network tab

Para debuggear requests:
1. Abre DevTools → Network
2. Realiza la acción que genera el request
3. Haz click en el request para ver detalles
4. Verifica status code, headers, response

### Console tab

Ejecuta código en el contexto de la página:

```typescript
// En la consola
user  // Ver el valor de user
user.email = 'new@email.com'  // Cambiar un valor
fetch('/api/users')  // Hacer un request
```

## Node.js Debugging

### Modo debug

```bash
node --inspect app.js
```

Luego abre `chrome://inspect` en Chrome.

### Debugger en VS Code

Crea `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

Luego presiona F5 para debuggear.

## Logging estructurado

En lugar de `console.log`, usa un logger:

```typescript
import logger from './logger';

logger.info('User logged in', { userId: user.id });
logger.error('Failed to fetch data', { error, endpoint: '/api/users' });
logger.warn('Deprecated API used', { endpoint: '/v1/users' });
```

Esto permite:
- Filtrar por nivel (info, warn, error)
- Agregar contexto automáticamente
- Enviar logs a un servicio centralizado

## Técnicas de debugging

### Divide y conquista

Si no sabes dónde está el bug:
1. Comenta la mitad del código
2. ¿Sigue fallando? El bug está en la otra mitad
3. Repite hasta encontrarlo

### Reproduce el bug

Antes de debuggear, asegúrate de poder reproducirlo:
1. ¿Qué pasos lo causan?
2. ¿Ocurre siempre o a veces?
3. ¿En qué navegador/versión?

### Compara con lo que funciona

Si algo funcionaba antes:
```bash
git log --oneline | head -20
git checkout <commit-anterior>
npm install
npm run dev
```

¿Funciona? Entonces el bug está en los commits posteriores.

### Usa git bisect

Para encontrar exactamente cuándo se rompió:

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
# Git te muestra commits intermedios
# Prueba cada uno y marca como good o bad
git bisect reset
```

## Debugging remoto

Si el bug solo ocurre en producción:

1. **Revisa los logs**: Busca errores o patrones
2. **Reproduce localmente**: Intenta recrear las condiciones
3. **Agrega logging temporal**: Despliega con logs adicionales
4. **Usa feature flags**: Desactiva la feature problemática mientras debuggeas

## Herramientas útiles

- **VS Code Debugger**: Integrado, muy bueno
- **Chrome DevTools**: Excelente para frontend
- **React DevTools**: Inspecciona componentes React
- **Redux DevTools**: Inspecciona estado Redux
- **Network tab**: Debuggea requests HTTP
- **Sentry**: Captura errores en producción

## Cuándo pedir ayuda

Si llevas más de 30 minutos sin avanzar:
1. Explica el problema a alguien (o a un patito de goma)
2. Muestra el código y los logs
3. Describe qué esperabas vs qué pasó

A menudo, explicar el problema te da la respuesta.
