---
sidebar_position: 4
title: Reset, Revert, Rebase
---

Tres herramientas poderosas para deshacer cambios en Git: cuándo usar cada una y cómo no romper el historial.

## Reset

Mueve el HEAD a un commit anterior, descartando cambios.

```bash
git reset --soft HEAD~1    # Deshace el commit, mantiene cambios en staging
git reset --mixed HEAD~1   # Deshace el commit, mantiene cambios en working directory (default)
git reset --hard HEAD~1    # Deshace el commit y descarta todos los cambios
```

**Cuándo usarlo:**
- Deshiciste un commit localmente que no has pusheado
- Necesitas reorganizar commits antes de pushear

**⚠️ Nunca uses reset en commits que ya pusheaste a una rama compartida.** Reescribe el historial y causa problemas a otros.

## Revert

Crea un nuevo commit que deshace los cambios de un commit anterior, sin reescribir el historial.

```bash
git revert <commit-hash>
```

**Cuándo usarlo:**
- Necesitas deshacer cambios que ya están en `main` o `develop`
- Quieres preservar el historial (auditoría)
- Trabajas en un equipo y otros ya tienen esos commits

**Ventajas:**
- No reescribe el historial
- Seguro para ramas compartidas
- Queda registro de qué se deshizo y por qué

**Desventajas:**
- Crea un commit adicional
- Si hay conflictos, necesitas resolverlos

## Rebase

Reaplica commits de una rama sobre otra, creando un historial lineal.

```bash
git rebase develop          # Reaplica tus commits sobre develop
git rebase -i HEAD~3        # Rebase interactivo de los últimos 3 commits
```

**Cuándo usarlo:**
- Quieres un historial lineal antes de mergear
- Necesitas reorganizar, combinar o editar commits locales
- Tu rama está desactualizada y quieres traer los cambios nuevos

**⚠️ Nunca hagas rebase en commits que ya pusheaste a una rama compartida.**

### Rebase interactivo

```bash
git rebase -i HEAD~3
```

Se abre un editor con los últimos 3 commits. Opciones:

```
pick   = mantener el commit
reword = cambiar el mensaje
squash = combinar con el commit anterior
drop   = descartar el commit
```

Ejemplo: combinar 3 commits en 1

```
pick abc1234 feat: add feature
squash def5678 fix: typo
squash ghi9012 docs: update
```

Resultado: 1 commit con todos los cambios.

## Comparación

| Operación | Reescribe historial | Seguro en ramas compartidas | Cuándo usar |
|-----------|-------------------|---------------------------|-----------|
| **Reset** | Sí | ❌ No | Commits locales sin pushear |
| **Revert** | No | ✅ Sí | Deshacer cambios en main/develop |
| **Rebase** | Sí | ❌ No | Reorganizar commits locales |

## Regla de oro

**Si ya pusheaste el commit a una rama compartida, usa `revert`.** No uses `reset` ni `rebase`.

Si solo está en tu máquina, puedes usar `reset` o `rebase` sin problemas.
