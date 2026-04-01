---
sidebar_position: 9
title: Maintenance
---

Cómo mantener tu repositorio Git limpio y eficiente: eliminar ramas, limpiar objetos no usados y optimizar el almacenamiento.

## Eliminar ramas locales

```bash
git branch -d feature/branch          # Eliminar rama (seguro)
git branch -D feature/branch          # Forzar eliminación
```

## Eliminar ramas remotas

```bash
git push origin --delete feature/branch
```

O desde GitHub UI: abre el PR y haz click en "Delete branch".

## Limpiar referencias remotas

Si eliminaste una rama en GitHub pero tu local aún la ve:

```bash
git fetch --prune
```

O configurar para que siempre lo haga:

```bash
git config --global fetch.prune true
```

## Git gc: garbage collection

Limpia objetos no usados y optimiza el repositorio:

```bash
git gc
```

Útil si el repo está lento o ocupa mucho espacio.

## Git prune: eliminar objetos huérfanos

```bash
git prune
```

Elimina commits que no están referenciados por ninguna rama o tag.

⚠️ Úsalo solo si sabes qué estás haciendo. Puede eliminar commits que querías recuperar.

## Reflog cleanup

El reflog mantiene un historial de cambios de HEAD. Puedes limpiarlo:

```bash
git reflog expire --expire=now --all
git gc --prune=now
```

## Monitorear tamaño del repo

```bash
du -sh .git                          # Tamaño total
git count-objects -v                # Detalles de objetos
```

## Ramas antiguas

Encontrar ramas que no se han actualizado en mucho tiempo:

```bash
git branch -v --sort=-committerdate
```

Elimina las que ya no necesites.

## Limpieza regular

Agrega esto a tu rutina semanal:

```bash
git fetch --prune
git gc
```

Mantiene el repo limpio y eficiente.
