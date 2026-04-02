---
sidebar_position: 1
---

# Git Rebase

El comando `git rebase` es una herramienta para reorganizar el historial de confirmaciones. Permite cambiar la base de tu rama a otra confirmación.

## ¿Qué es rebase?

La reorganización es el proceso de mover o combinar una secuencia de confirmaciones en una nueva confirmación base. Esto reescribe el historial del proyecto creando nuevas confirmaciones para cada confirmación en la rama original.

## Uso básico

### Rebase simple

```bash
git rebase <rama-base>
```

Esto reorganiza la rama actual sobre la rama base.

```bash
git rebase main
```

## Ventajas del rebase

### 1. Historial lineal

El rebase crea un historial perfectamente lineal, sin bifurcaciones.

### 2. Fácil de navegar

Es más fácil navegar por el proyecto con comandos como `git log`, `git bisect` y `gitk`.

### 3. Identificación de errores

Un historial limpio facilita la identificación de cuándo se introdujeron errores.

## Rebase interactivo

```bash
git rebase -i <commit>
```

o

```bash
git rebase --interactive <commit>
```

Esto abre un editor donde puedes modificar, combinar o reordenar commits.

### Opciones en rebase interactivo

- **pick**: Usar el commit
- **reword**: Usar el commit pero editar el mensaje
- **squash**: Usar el commit pero combinarlo con el anterior
- **fixup**: Como squash pero descarta el mensaje del commit
- **drop**: Eliminar el commit

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

# Rebase interactivo para combinar commits
git rebase -i HEAD~3

# En el editor, cambia:
# pick ghi9012 Commit 1
# squash def5678 Commit 2
# squash abc1234 Commit 3

# Luego edita el mensaje del commit combinado

# Ver el historial
git log --oneline
# xyz9999 Commit 1, 2 y 3
```

## Rebase vs Merge

| Aspecto | Rebase | Merge |
|--------|--------|-------|
| Historial | Lineal | Bifurcado |
| Commits | Se reescriben | Se preservan |
| Seguridad | Menos seguro en commits compartidos | Más seguro |
| Claridad | Más limpio | Más contexto |

## Regla de oro del rebase

**Nunca hagas rebase en commits que ya has compartido con otros.**

Si haces rebase en commits compartidos, causarás problemas a otros desarrolladores.

## Rebase en rama remota

```bash
git rebase origin/main
```

Esto reorganiza tu rama actual sobre la rama remota.

## Abortar un rebase

Si algo sale mal durante el rebase:

```bash
git rebase --abort
```

Esto cancela el rebase y vuelve al estado anterior.

## Continuar después de resolver conflictos

Si hay conflictos durante el rebase:

```bash
# Resolver los conflictos manualmente
# Luego preparar los cambios
git add .

# Continuar con el rebase
git rebase --continue
```

## Resumen

- `git rebase` reorganiza commits en una nueva base
- Crea un historial lineal y limpio
- El rebase interactivo permite modificar commits
- Nunca hagas rebase en commits compartidos
- Usa `git rebase --abort` para cancelar

---

**Fuente**: [Atlassian - git rebase](https://www.atlassian.com/es/git/tutorials/rewriting-history/git-rebase)
