---
sidebar_position: 3
---

# Git Revert

El comando `git revert` es un comando para "deshacer" que crea un nuevo commit que invierte los cambios de un commit anterior. A diferencia de `git reset`, no reescribe el historial.

## ¿Cuándo usar git revert?

Usa `git revert` cuando:
- Quieras deshacer cambios en commits que ya has compartido
- Quieras preservar el historial completo
- Trabajes en un repositorio compartido

## Uso básico

### Revertir el último commit

```bash
git revert HEAD
```

Esto crea un nuevo commit que deshace los cambios del último commit.

### Revertir un commit específico

```bash
git revert <hash-del-commit>
```

```bash
git revert abc1234
```

## Opciones útiles

### Sin abrir editor

```bash
git revert -n <commit>
```

o

```bash
git revert --no-edit <commit>
```

Esto crea el commit de reversión sin abrir el editor.

### Con mensaje personalizado

```bash
git revert -m "Mensaje personalizado" <commit>
```

## Ejemplo práctico

```bash
# Crear varios commits
echo "contenido 1" > archivo1.txt
git add archivo1.txt
git commit -m "Agregar archivo1"

echo "contenido 2" > archivo2.txt
git add archivo2.txt
git commit -m "Agregar archivo2"

echo "contenido 3" > archivo3.txt
git add archivo3.txt
git commit -m "Agregar archivo3"

# Ver el historial
git log --oneline
# abc1234 Agregar archivo3
# def5678 Agregar archivo2
# ghi9012 Agregar archivo1

# Revertir el commit "Agregar archivo2"
git revert def5678

# Ver el historial
git log --oneline
# jkl3456 Revert "Agregar archivo2"
# abc1234 Agregar archivo3
# def5678 Agregar archivo2
# ghi9012 Agregar archivo1

# Ver el contenido
ls
# archivo1.txt
# archivo3.txt
# (archivo2.txt fue eliminado por la reversión)
```

## Diferencia entre reset y revert

| Aspecto | Reset | Revert |
|--------|-------|--------|
| Historial | Se reescribe | Se preserva |
| Commits compartidos | No recomendado | Seguro |
| Resultado | Mueve HEAD atrás | Crea nuevo commit |
| Cambios | Se pierden | Se invierten |

## Revertir múltiples commits

### Revertir un rango de commits

```bash
git revert <commit-antiguo>..<commit-nuevo>
```

Esto revierte todos los commits entre `commit-antiguo` y `commit-nuevo`.

### Revertir commits individuales

```bash
git revert abc1234
git revert def5678
git revert ghi9012
```

## Conflictos durante revert

Si hay conflictos al revertir:

```bash
# Ver el estado
git status

# Resolver los conflictos manualmente
# Luego preparar los cambios
git add .

# Continuar con la reversión
git revert --continue

# O abortar la reversión
git revert --abort
```

## Resumen

- `git revert` crea un nuevo commit que invierte cambios
- Preserva el historial completo
- Es seguro usar en commits compartidos
- A diferencia de `git reset`, no reescribe el historial
- Usa `git revert` en repositorios compartidos

---

**Fuente**: [Atlassian - git revert](https://www.atlassian.com/es/git/tutorials/undoing-changes/git-revert)
