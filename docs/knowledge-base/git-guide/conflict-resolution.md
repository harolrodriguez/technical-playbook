---
sidebar_position: 3
title: Conflict Resolution
---

Cómo resolver conflictos de merge en Git: identificarlos, resolverlos manualmente, usar herramientas y evitar que ocurran.

## Qué es un conflicto de merge

Un conflicto ocurre cuando Git no puede automáticamente combinar cambios de dos ramas porque ambas modificaron las mismas líneas.

```
<<<<<<< HEAD
tu código
=======
código de la otra rama
>>>>>>> feature/branch
```

## Cómo resolver conflictos

### 1. Identificar archivos en conflicto

```bash
git status
```

Verás archivos marcados como "both modified" o "both added".

### 2. Abrir el archivo y resolver

Busca los marcadores `<<<<<<<`, `=======`, `>>>>>>>` y decide qué código mantener.

**Opciones:**
- Mantener tu código (HEAD)
- Mantener el código de la otra rama
- Combinar ambos
- Escribir código nuevo

**Ejemplo:**

```typescript
// Antes (en conflicto)
<<<<<<< HEAD
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
=======
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
>>>>>>> feature/fix-quantity-calculation

// Después (resuelto)
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
```

### 3. Marcar como resuelto

```bash
git add archivo-resuelto.ts
```

### 4. Completar el merge

```bash
git commit -m "Merge branch 'feature/branch' into develop"
git push origin develop
```

---

## Técnicas avanzadas de resolución

### Usar herramientas visuales

Si el conflicto es complejo, usa una herramienta visual:

```bash
# Configurar VS Code como merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Usar la herramienta
git mergetool
```

Otras opciones: `vimdiff`, `meld`, `kdiff3`, `p4merge`

### Resolver usando `ours` o `theirs`

Si quieres mantener completamente tu versión o la de la otra rama:

```bash
# Mantener completamente tu versión (HEAD)
git checkout --ours archivo.ts
git add archivo.ts

# Mantener completamente la versión de la otra rama
git checkout --theirs archivo.ts
git add archivo.ts
```

### Resolver durante rebase

Si estás haciendo rebase y hay conflictos:

```bash
# Ver el estado
git status

# Resolver los conflictos manualmente

# Marcar como resuelto
git add archivo-resuelto.ts

# Continuar el rebase
git rebase --continue

# O abortar si algo salió mal
git rebase --abort
```

---

## Evitar conflictos

**Mantén las ramas cortas**: Ramas que viven más de 1-2 días tienen más chances de conflicto.

**Integra frecuentemente**: Si tu rama está desactualizada, actualízala antes de mergear:

```bash
git fetch origin
git rebase origin/develop
```

**Comunica cambios grandes**: Si vas a refactorizar un archivo que otros también tocan, avisa.

**Usa feature flags**: Para cambios que toman mucho tiempo, integra el código a `develop` con un feature flag desactivado.

**Coordina el trabajo**: En archivos críticos (package.json, tsconfig.json, migrations), coordina quién hace cambios.

---

## Conflictos complejos

Si el conflicto es muy grande o complicado:

```bash
# Abortar el merge y empezar de nuevo
git merge --abort

# O si ya hiciste commit
git reset --hard HEAD~1
```

Luego, coordina con tu equipo cómo resolver. Opciones:

1. **Rebase interactivo**: Reorganiza los commits para evitar el conflicto
2. **Cherry-pick selectivo**: Toma solo los commits que necesitas
3. **Merge manual**: Resuelve el conflicto en una rama separada y luego mergea

---

## Conflictos en archivos específicos

### package.json / package-lock.json

```bash
# Regenerar package-lock.json
npm install

# Luego
git add package-lock.json
git add package.json
```

### Migraciones de base de datos

Nunca resuelvas conflictos en migraciones automáticamente. Crea una nueva migración:

```bash
# Aborta el merge
git merge --abort

# Crea una nueva migración que combine ambos cambios
npm run migrate:create -- combine_migrations

# Luego mergea de nuevo
```

### Archivos generados

Si el conflicto es en un archivo generado (bundle, dist, etc.), regenera:

```bash
npm run build
git add dist/
```

---

## Debugging de conflictos

Ver qué cambios causaron el conflicto:

```bash
# Ver el diff de tu rama
git diff HEAD

# Ver el diff de la otra rama
git diff MERGE_HEAD

# Ver el diff base (antes de ambos cambios)
git diff-base HEAD MERGE_HEAD
```


