---
sidebar_position: 7
title: Cherry-pick
---

Cómo usar cherry-pick para aplicar commits específicos de una rama a otra sin mergear toda la rama.

## Qué es cherry-pick

Cherry-pick toma un commit específico de una rama y lo aplica a otra rama, creando un nuevo commit con los mismos cambios.

```bash
git cherry-pick <commit-hash>
```

## Cuándo usarlo

**Escenario 1: Hotfix que necesita ir a múltiples ramas**

Un bug crítico se encontró en `main`. Lo arreglaste en `hotfix/bug-critico`. Ahora necesitas ese fix en `develop` también:

```bash
git checkout develop
git cherry-pick <hash-del-fix>
```

**Escenario 2: Traer un commit de una rama que no está lista**

Trabajas en `feature/grande` pero necesitas un commit específico en `develop` ahora:

```bash
git checkout develop
git cherry-pick <hash-del-commit>
```

**Escenario 3: Revertir un cherry-pick**

```bash
git revert <commit-hash>
```

## Cómo hacerlo

### Cherry-pick de un commit

```bash
git cherry-pick abc1234
```

### Cherry-pick de múltiples commits

```bash
git cherry-pick abc1234 def5678 ghi9012
```

### Cherry-pick de un rango

```bash
git cherry-pick abc1234..ghi9012  # Todos los commits entre abc1234 y ghi9012
```

### Cherry-pick interactivo

```bash
git cherry-pick -i abc1234..ghi9012
```

Se abre un editor donde puedes elegir qué commits aplicar y en qué orden.

## Resolver conflictos

Si hay conflictos:

```bash
# Resolver los conflictos manualmente
# Luego:
git add .
git cherry-pick --continue

# O abortar
git cherry-pick --abort
```

## Evitar cherry-pick

Cherry-pick es útil pero puede crear problemas:

- **Duplica commits**: El mismo cambio existe en dos ramas con hashes distintos
- **Dificulta el historial**: Es más difícil entender qué cambios están dónde
- **Puede causar conflictos**: Si aplicas el mismo cambio en múltiples ramas

**Mejor alternativa**: Usa merge o rebase cuando sea posible. Cherry-pick es para casos excepcionales.

## Cuándo NO usar cherry-pick

❌ No hagas cherry-pick de commits de `feature/*` a `main`. Usa un PR normal.

❌ No hagas cherry-pick de múltiples commits si puedes mergear la rama completa.

✅ Usa cherry-pick solo para commits específicos que necesitan ir a otra rama urgentemente.
