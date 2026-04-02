---
sidebar_position: 2
---

# Git Reset

El comando `git reset` es una herramienta compleja y versátil para deshacer cambios. Se invoca principalmente de tres formas distintas, que se corresponden con los argumentos `--soft`, `--mixed` y `--hard`.

## Los tres árboles de Git

Para entender `git reset`, primero debes entender los tres árboles de Git:

1. **HEAD**: El commit actual (historial de confirmaciones)
2. **Staging Area**: Los cambios preparados (entorno de ensayo)
3. **Working Directory**: Los archivos que estás editando

## Opciones principales

### --soft

```bash
git reset --soft <commit>
```

Mueve HEAD a un commit anterior, pero mantiene los cambios en el staging area.

**Efecto**:
- HEAD se mueve
- Staging area se actualiza
- Working directory NO cambia

**Uso**: Cuando quieres rehacer la confirmación anterior.

```bash
# Deshacer la última confirmación pero mantener los cambios preparados
git reset --soft HEAD~1
```

### --mixed (predeterminado)

```bash
git reset --mixed <commit>
```

o simplemente:

```bash
git reset <commit>
```

Mueve HEAD a un commit anterior y actualiza el staging area, pero mantiene los cambios en el working directory.

**Efecto**:
- HEAD se mueve
- Staging area se actualiza
- Working directory NO cambia

**Uso**: Cuando quieres deshacer la preparación de cambios.

```bash
# Deshacer la última confirmación y deshacer la preparación
git reset HEAD~1
```

### --hard

```bash
git reset --hard <commit>
```

Mueve HEAD a un commit anterior y descarta todos los cambios.

**Efecto**:
- HEAD se mueve
- Staging area se actualiza
- Working directory se actualiza (CAMBIOS PERDIDOS)

**Advertencia**: Esto descarta todos los cambios no confirmados. ¡Úsalo con cuidado!

```bash
# Deshacer la última confirmación y descartar todos los cambios
git reset --hard HEAD~1
```

## Referencia de commits

### HEAD

El commit actual:

```bash
git reset HEAD
```

### HEAD~n

n commits anteriores:

```bash
git reset HEAD~1    # 1 commit anterior
git reset HEAD~2    # 2 commits anteriores
git reset HEAD~10   # 10 commits anteriores
```

### Hash del commit

Usa el hash SHA-1 del commit:

```bash
git reset abc1234
```

## Casos de uso comunes

### Deshacer la última confirmación

```bash
# Mantener los cambios en staging area
git reset --soft HEAD~1

# Mantener los cambios en working directory
git reset --mixed HEAD~1

# Descartar todos los cambios
git reset --hard HEAD~1
```

### Deshacer la preparación de un archivo

```bash
git reset <archivo>
```

### Deshacer la preparación de todos los cambios

```bash
git reset
```

### Volver a un commit específico

```bash
git reset --hard <hash-del-commit>
```

## Ejemplo práctico

```bash
# Crear varios commits
echo "contenido 1" > archivo1.txt
git add archivo1.txt
git commit -m "Commit 1"

echo "contenido 2" > archivo2.txt
git add archivo2.txt
git commit -m "Commit 2"

echo "contenido 3" > archivo3.txt
git add archivo3.txt
git commit -m "Commit 3"

# Ver el historial
git log --oneline
# abc1234 Commit 3
# def5678 Commit 2
# ghi9012 Commit 1

# Deshacer el último commit pero mantener los cambios
git reset --soft HEAD~1

# Ver el estado
git status
# Changes to be committed:
#   new file:   archivo3.txt

# Deshacer la preparación
git reset

# Ver el estado
git status
# Untracked files:
#   archivo3.txt
```

## Diferencia entre reset y revert

| Comando | Efecto | Historial |
|---------|--------|-----------|
| `git reset` | Mueve HEAD atrás | Se reescribe |
| `git revert` | Crea un nuevo commit que deshace cambios | Se preserva |

**Regla de oro**: No uses `git reset` en commits que ya has compartido con otros. Usa `git revert` en su lugar.

## Recuperar cambios después de reset

Si accidentalmente usas `git reset --hard`, puedes recuperar los cambios:

```bash
# Ver el reflog
git reflog

# Encontrar el commit que querías
# Luego resetear a ese commit
git reset --hard <hash>
```

## Resumen

- `git reset` mueve HEAD a un commit anterior
- `--soft`: Mantiene cambios en staging area
- `--mixed`: Mantiene cambios en working directory
- `--hard`: Descarta todos los cambios
- No uses `git reset` en commits compartidos
- Usa `git reflog` para recuperar cambios perdidos

---

**Fuente**: [Atlassian - git reset](https://www.atlassian.com/es/git/tutorials/undoing-changes/git-reset)
