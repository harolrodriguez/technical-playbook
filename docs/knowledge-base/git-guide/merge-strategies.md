---
sidebar_position: 2
title: Merge Strategies
---

Estrategias de merge en Git: cuándo usar merge commit, squash, rebase y cómo elegir la correcta según el contexto.

## Tipos de merge

### Merge Commit (Three-way merge)

```bash
git merge feature/branch
```

Crea un commit de merge que preserva el historial completo de la rama.

**Cuándo usarlo:**
- Merges a `main` o `develop` (queremos preservar el historial del release)
- Cambios importantes que queremos que sean visibles en el historial
- Cuando trabajas en equipo y otros necesitan ver el historial completo

**Ventajas:**
- Preserva el historial completo
- Fácil de revertir (un solo commit)
- Claro cuándo se integró una rama

**Desventajas:**
- El historial se vuelve ruidoso con muchos commits de merge

### Squash and Merge

```bash
git merge --squash feature/branch
git commit -m "feat: descripción"
```

Combina todos los commits de la rama en uno solo antes de mergear.

**Cuándo usarlo:**
- Merges de `feature/*` a `develop` (queremos historial limpio)
- Ramas con muchos commits pequeños o WIP
- Cuando los commits individuales no son importantes

**Ventajas:**
- Historial limpio y legible
- Cada feature es un commit
- Fácil de entender qué cambió en cada feature

**Desventajas:**
- Pierdes el historial de desarrollo de la rama
- Más difícil de revertir si necesitas volver a un commit específico

### Rebase and Merge

```bash
git rebase develop
git merge --ff-only feature/branch
```

Reaplica los commits de la rama sobre la rama destino, creando un historial lineal.

**Cuándo usarlo:**
- Cuando quieres un historial lineal sin commits de merge
- Ramas de corta duración con pocos commits
- Cuando trabajas solo o en un equipo muy pequeño

**Ventajas:**
- Historial lineal y limpio
- Fácil de seguir el flujo de cambios
- Bisect es más directo

**Desventajas:**
- Reescribe el historial (problemático si otros trabajan en la rama)
- Más difícil de entender cuándo se integró una rama
- Puede ser confuso para equipos grandes

---

## Estrategia en ACITY

Usamos esta estrategia según el tipo de rama:

| Rama | Estrategia | Comando |
|------|-----------|---------|
| `feature/*` → `develop` | Squash and Merge | `git merge --squash` |
| `bugfix/*` → `develop` | Squash and Merge | `git merge --squash` |
| `release/*` → `main` | Merge Commit | `git merge` |
| `hotfix/*` → `main` | Merge Commit | `git merge` |
| `release/*` → `develop` | Merge Commit | `git merge` |
| `hotfix/*` → `develop` | Merge Commit | `git merge` |

**Razón:**
- Squash en `develop` mantiene el historial limpio (cada feature es un commit)
- Merge Commit en `main` preserva el historial de releases (importante para auditoría)

---

## Cómo hacer merge en GitHub

### Squash and Merge (desde GitHub UI)

1. Abre el PR
2. Click en "Squash and merge"
3. Edita el mensaje del commit si es necesario
4. Click en "Confirm squash and merge"

### Merge Commit (desde GitHub UI)

1. Abre el PR
2. Click en "Create a merge commit"
3. Click en "Confirm merge"

### Desde la línea de comandos

```bash
# Squash and merge
git checkout develop
git pull origin develop
git merge --squash feature/branch
git commit -m "feat: descripción"
git push origin develop

# Merge commit
git checkout main
git pull origin main
git merge --no-ff release/1.0.0
git push origin main
```

---

## Evitar problemas comunes

**Problema: Merge conflict**  
Ver [Conflict Resolution](/knowledge-base/git-guide/conflict-resolution)

**Problema: Commits WIP en el historial**  
Usa squash and merge para limpiar el historial antes de integrar a `develop`

**Problema: No puedo revertir un cambio**  
Con merge commit es fácil: `git revert <commit>`. Con squash, necesitas identificar qué cambios revertir.
