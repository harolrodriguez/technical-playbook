---
sidebar_position: 5
title: Advanced Log
---

Cómo usar `git log` para investigar el historial: búsquedas, filtros, formatos personalizados y bisect.

## Comandos básicos

```bash
git log                          # Historial completo
git log --oneline               # Una línea por commit
git log --graph --all --oneline # Visualizar ramas
git log -n 10                   # Últimos 10 commits
```

## Búsquedas

### Por autor

```bash
git log --author="Juan"
```

### Por mensaje

```bash
git log --grep="fix"            # Commits con "fix" en el mensaje
git log --grep="PROJ-123"       # Commits con ticket ID
```

### Por archivo

```bash
git log -- src/components/Button.tsx
git log -p -- src/components/Button.tsx  # Con diff
```

### Por rango de fechas

```bash
git log --since="2024-01-01" --until="2024-12-31"
git log --since="2 weeks ago"
```

## Formatos personalizados

```bash
# Formato compacto
git log --oneline --graph --all

# Formato detallado
git log --pretty=format:"%h - %an, %ar : %s"

# Formato con estadísticas
git log --stat

# Mostrar cambios
git log -p
```

## Bisect: encontrar cuándo se rompió algo

Si un bug apareció en algún momento pero no sabes cuándo:

```bash
git bisect start
git bisect bad HEAD              # El commit actual está roto
git bisect good v1.0.0          # Este commit estaba bien
```

Git te mostrará commits intermedios. Prueba cada uno:

```bash
git bisect good                 # Este commit está bien
git bisect bad                  # Este commit está roto
```

Cuando termine:

```bash
git bisect reset
```

## Reflog: recuperar commits "perdidos"

Si accidentalmente borraste un commit o rama:

```bash
git reflog                      # Ver todos los cambios de HEAD
git checkout <commit-hash>      # Volver a ese commit
git branch recovery <commit-hash>  # Crear una rama desde ese commit
```

## Blame: quién cambió qué

```bash
git blame src/components/Button.tsx
```

Muestra quién hizo cada línea y en qué commit.

## Diff avanzado

```bash
git diff develop..feature/branch     # Cambios en feature vs develop
git diff --stat                      # Solo estadísticas
git diff --word-diff                 # Diff a nivel de palabra
```
