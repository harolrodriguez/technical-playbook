---
sidebar_position: 3
title: Conflict Resolution
---

Cómo resolver conflictos de merge en Git: identificarlos, resolverlos manualmente y evitar que ocurran.

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

Verás archivos marcados como "both modified".

### 2. Abrir el archivo y resolver

Busca los marcadores `<<<<<<<`, `=======`, `>>>>>>>` y decide qué código mantener.

Opciones:
- Mantener tu código (HEAD)
- Mantener el código de la otra rama
- Combinar ambos
- Escribir código nuevo

### 3. Marcar como resuelto

```bash
git add archivo-resuelto.ts
```

### 4. Completar el merge

```bash
git commit -m "Merge branch 'feature/branch' into develop"
git push origin develop
```

## Evitar conflictos

**Mantén las ramas cortas**: Ramas que viven más de 1-2 días tienen más chances de conflicto.

**Integra frecuentemente**: Si tu rama está desactualizada, actualízala antes de mergear:

```bash
git fetch origin
git rebase origin/develop
```

**Comunica cambios grandes**: Si vas a refactorizar un archivo que otros también tocan, avisa.

**Usa feature flags**: Para cambios que toman mucho tiempo, integra el código a `develop` con un feature flag desactivado.

## Conflictos complejos

Si el conflicto es muy grande o complicado:

```bash
# Abortar el merge y empezar de nuevo
git merge --abort

# O si ya hiciste commit
git reset --hard HEAD~1
```

Luego, coordina con tu equipo cómo resolver.
