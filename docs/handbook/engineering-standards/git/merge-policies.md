---
sidebar_position: 5
title: Merge Policies & Governance
---

Políticas de merge, protecciones de rama, y gobernanza de integración en ACITY. Define cómo y cuándo se pueden mergear cambios a cada rama.

## Protecciones de rama

### `main` (Producción)

**Protecciones:**
- ✅ Requiere PR review antes de merge
- ✅ Requiere **2 aprobaciones** (incluyendo Tech Lead o Architect)
- ✅ Requiere que todos los checks de CI pasen
- ✅ Requiere que la rama esté actualizada con `develop`
- ✅ Dismiss stale PR approvals cuando hay nuevos commits
- ✅ Requiere que los commits estén firmados (signed commits)
- ❌ No se permite push directo
- ❌ No se permite force push

**Quién puede mergear:**
- Tech Lead
- Architect
- Release Manager (durante releases)

**Tipos de merge permitidos:**
- `Merge Commit` (preserva el historial del release)
- `Squash and Merge` (solo en casos excepcionales)

**Rama de origen permitida:**
- `release/*` (para releases normales)
- `hotfix/*` (para hotfixes críticos)

---

### `develop` (Integración)

**Protecciones:**
- ✅ Requiere PR review antes de merge
- ✅ Requiere **1 aprobación**
- ✅ Requiere que todos los checks de CI pasen
- ✅ Dismiss stale PR approvals cuando hay nuevos commits
- ❌ No se permite push directo
- ❌ No se permite force push

**Quién puede mergear:**
- Cualquier miembro del equipo (después de aprobación)

**Tipos de merge permitidos:**
- `Squash and Merge` (mantiene el historial limpio)
- `Merge Commit` (si el PR es muy importante y queremos preservar el historial)

**Ramas de origen permitidas:**
- `feature/*`
- `bugfix/*`
- `chore/*`
- `release/*` (merge de vuelta después de release)

---

### `release/*` (Preparación de Release)

**Protecciones:**
- ✅ Requiere PR review antes de merge a `main`
- ✅ Requiere **1 aprobación**
- ✅ Requiere que todos los checks de CI pasen
- ❌ No se permite push directo (excepto para bugfixes menores)

**Quién puede mergear:**
- Tech Lead
- Release Manager

**Tipos de merge permitidos:**
- `Merge Commit` (preserva el historial del release)

**Ramas de origen permitidas:**
- `bugfix/*` (solo bugfixes menores durante el release)

---

### `hotfix/*` (Correcciones Críticas)

**Protecciones:**
- ✅ Requiere PR review antes de merge a `main`
- ✅ Requiere **1 aprobación** del Tech Lead (review exprés)
- ✅ Requiere que todos los checks de CI pasen
- ✅ SLA de review: **máximo 2 horas**

**Quién puede mergear:**
- Tech Lead
- Architect

**Tipos de merge permitidos:**
- `Merge Commit` (preserva el historial del hotfix)

---

## Estrategia de merge por tipo de rama

| Rama | Destino | Estrategia | Razón |
|------|---------|-----------|-------|
| `feature/*` | `develop` | Squash and Merge | Mantiene el historial de `develop` limpio |
| `bugfix/*` | `develop` | Squash and Merge | Mantiene el historial de `develop` limpio |
| `chore/*` | `develop` | Squash and Merge | Mantiene el historial de `develop` limpio |
| `release/*` | `main` | Merge Commit | Preserva el historial del release |
| `release/*` | `develop` | Merge Commit | Preserva el historial del release |
| `hotfix/*` | `main` | Merge Commit | Preserva el historial del hotfix |
| `hotfix/*` | `develop` | Merge Commit | Preserva el historial del hotfix |

---

## Resolución de conflictos

### Antes de mergear

Si hay conflictos, el **autor del PR** es responsable de resolverlos:

1. Actualiza tu rama local desde el destino:
   ```bash
   git fetch origin
   git rebase origin/develop  # o main, según corresponda
   ```

2. Resuelve los conflictos manualmente (ver [Conflict Resolution](/knowledge-base/git-guide/conflict-resolution))

3. Haz push de los cambios:
   ```bash
   git push origin feature/PROJ-123-my-feature --force-with-lease
   ```

4. Pide re-review si los cambios son significativos

### Conflictos durante merge

Si hay conflictos al hacer merge (raro si se resolvieron antes), el **Tech Lead** resuelve:

1. Aborta el merge:
   ```bash
   git merge --abort
   ```

2. Pide al autor que resuelva los conflictos en su rama

3. Reintenta el merge

---

## Signed commits

Todos los commits a `main` deben estar firmados con GPG. Esto verifica que el commit fue hecho por quien dice que fue.

**Configuración:**
```bash
# Generar clave GPG (si no tienes)
gpg --full-generate-key

# Configurar Git para firmar commits
git config --global user.signingkey <KEY_ID>
git config --global commit.gpgsign true
```

**Firmar un commit:**
```bash
git commit -S -m "feat: add feature"
```

O si ya configuraste `commit.gpgsign true`:
```bash
git commit -m "feat: add feature"
```

---

## Revertir un merge

Si un merge a `main` introduce un bug crítico:

1. **Opción A: Revert (preferido)**
   ```bash
   git revert -m 1 <merge-commit-hash>
   git push origin main
   ```
   Esto crea un nuevo commit que deshace los cambios. El historial se preserva.

2. **Opción B: Reset (solo si el merge es muy reciente y no hay otros commits después)**
   ```bash
   git reset --hard HEAD~1
   git push origin main --force-with-lease
   ```
   Esto elimina el commit del historial. Úsalo solo en emergencias.

Después de revertir, abre un issue para investigar por qué pasó a producción.

---

## Checklist antes de mergear

Antes de hacer click en "Merge", verifica:

- [ ] Todos los checks de CI pasaron
- [ ] El PR tiene al menos las aprobaciones requeridas
- [ ] No hay conflictos sin resolver
- [ ] La rama está actualizada con el destino
- [ ] El título y descripción del PR son precisos
- [ ] Los commits siguen [Conventional Commits](/handbook/engineering-standards/conventional-commits)
- [ ] No hay código de debug, console.logs, o TODOs sin ticket
- [ ] Los tests pasan localmente (si es un cambio sensible)

