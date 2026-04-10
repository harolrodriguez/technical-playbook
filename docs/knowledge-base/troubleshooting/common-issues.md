---
sidebar_position: 1
title: Common Issues
---

Problemas comunes que encontrarás durante el desarrollo y cómo resolverlos.

## Git

### "Permission denied (publickey)"

**Problema**: No puedes hacer push a GitHub.

**Solución**:
1. Verifica que SSH está configurado: `ssh -T git@github.com`
2. Si falla, sigue la sección de [Instalación y Configuración](/knowledge-base/intro) en la Base de Conocimientos
3. Si ya está configurado, agrega la clave al ssh-agent: `ssh-add ~/.ssh/id_ed25519`

### "Your branch is ahead of 'origin/main' by X commits"

**Problema**: Hiciste commits locales pero no los pusheaste.

**Solución**:
```bash
git push origin branch-name
```

### "Merge conflict"

**Problema**: No puedes mergear porque hay conflictos.

**Solución**: Ver la sección de [Operaciones Avanzadas](/knowledge-base/intro) en la Base de Conocimientos

### "Detached HEAD"

**Problema**: Hiciste checkout a un commit específico y ahora estás en "detached HEAD".

**Solución**:
```bash
git checkout main              # Volver a main
git branch recovery <commit>   # O crear una rama desde ese commit
```

## Node.js / npm

### "npm ERR! code EACCES"

**Problema**: Permisos insuficientes para instalar paquetes globales.

**Solución**: No uses `sudo npm`. Configura npm:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### "Module not found"

**Problema**: `Cannot find module 'xyz'`

**Solución**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port already in use"

**Problema**: El puerto 3000 (o el que uses) ya está ocupado.

**Solución**:
```bash
lsof -ti:3000 | xargs kill -9
```

O cambia el puerto en `.env.local`.

## TypeScript

### "Type 'X' is not assignable to type 'Y'"

**Problema**: Error de tipos.

**Solución**:
1. Lee el error completo, te dice exactamente qué no coincide
2. Verifica que los tipos son correctos
3. Si necesitas forzar, usa `as Type` (pero evita si puedes)

### "Cannot find name 'X'"

**Problema**: Variable o función no definida.

**Solución**:
1. Verifica que está importada
2. Verifica que está definida
3. Verifica la ortografía

## React

### "Too many re-renders"

**Problema**: Componente entra en loop infinito de renders.

**Solución**: Probablemente estás llamando una función en el render:
```typescript
// ❌ Malo
<button onClick={handleClick()}>Click</button>

// ✅ Bueno
<button onClick={handleClick}>Click</button>
```

### "Can't perform a React state update on an unmounted component"

**Problema**: Intentas actualizar estado de un componente que se desmontó.

**Solución**: Limpia en useEffect:
```typescript
useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) setData(data);
  });
  
  return () => { isMounted = false; };
}, []);
```

## Database

### "Connection refused"

**Problema**: No puedes conectar a la base de datos.

**Solución**:
1. Verifica que el servicio está corriendo: `docker ps`
2. Verifica las credenciales en `.env.local`
3. Verifica el host y puerto

### "Unique constraint violation"

**Problema**: Intentas insertar un valor duplicado en un campo único.

**Solución**:
1. Verifica que el valor no existe ya
2. Si necesitas actualizar, usa `upsert` en lugar de `insert`

## API

### "CORS error"

**Problema**: `Access to XMLHttpRequest blocked by CORS policy`

**Solución**: El backend debe permitir tu origen:
```typescript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### "401 Unauthorized"

**Problema**: Token expirado o inválido.

**Solución**:
1. Verifica que el token está siendo enviado
2. Verifica que el token no expiró
3. Verifica que el backend lo valida correctamente

## Performance

### "App is slow"

**Solución**:
1. Abre DevTools → Performance
2. Graba una sesión
3. Busca funciones que toman mucho tiempo
4. Optimiza esas funciones

### "Bundle size is too large"

**Solución**:
```bash
npm run build
npm run analyze  # Si tienes script de análisis
```

Busca librerías grandes que no necesitas.

## Debugging

### "I don't know qué está pasando"

**Solución**:
1. Agrega `console.log()` antes y después de la línea problemática
2. Usa DevTools → Debugger para pausar la ejecución
3. Inspecciona variables en la consola
4. Lee los logs del servidor

### "El error solo ocurre en producción"

**Solución**:
1. Reproduce localmente con `npm run build && npm run start`
2. Verifica variables de entorno
3. Verifica que el código es el mismo
4. Revisa los logs de producción
