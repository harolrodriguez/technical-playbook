---
sidebar_position: 3
---

# Git Merge

El comando `git merge` es una forma eficaz de integrar los cambios de ramas divergentes. Después de bifurcar el historial del proyecto con `git branch`, `git merge` permite unirlo de nuevo.

## Uso básico

### Fusionar una rama

```bash
git merge <rama>
```

Esto fusiona la rama especificada en la rama actual.

```bash
git checkout main
git merge feature
```

## Tipos de fusión

### Fast-forward merge

Cuando la rama actual no tiene cambios nuevos desde que se creó la rama a fusionar, Git simplemente mueve el puntero hacia adelante.

```bash
# Antes
main: A -> B
feature: A -> B -> C

# Después
main: A -> B -> C
feature: A -> B -> C
```

### Three-way merge

Cuando ambas ramas tienen cambios nuevos, Git crea un nuevo commit de fusión.

```bash
# Antes
main: A -> B -> D
feature: A -> B -> C

# Después
main: A -> B -> D -> E (merge commit)
      \           /
       -> C -----
feature: A -> B -> C
```

## Opciones útiles

### Evitar fast-forward

```bash
git merge --no-ff <rama>
```

Esto siempre crea un commit de fusión, incluso si es posible un fast-forward.

### Abortar una fusión

```bash
git merge --abort
```

Esto cancela la fusión si hay conflictos.

### Fusión sin confirmar

```bash
git merge --no-commit <rama>
```

Esto prepara la fusión pero no crea el commit.

## Conflictos de fusión

Cuando Git no puede fusionar automáticamente, ocurre un conflicto.

### Resolver conflictos

1. Abre el archivo con conflictos
2. Busca las marcas de conflicto:

```
<<<<<<< HEAD
contenido de main
=======
contenido de feature
>>>>>>> feature
```

3. Edita el archivo para resolver el conflicto
4. Prepara los cambios:

```bash
git add archivo.txt
```

5. Completa la fusión:

```bash
git commit -m "Resolver conflictos de fusión"
```

## Ejemplo práctico

```bash
# Crear una rama
git checkout -b feature

# Hacer cambios
echo "contenido feature" > archivo.txt
git add archivo.txt
git commit -m "Cambios en feature"

# Cambiar a main
git checkout main

# Hacer cambios en main
echo "contenido main" > otro-archivo.txt
git add otro-archivo.txt
git commit -m "Cambios en main"

# Fusionar feature en main
git merge feature

# Si hay conflictos, resolverlos y confirmar
git add .
git commit -m "Resolver conflictos"
```

## Estrategias de fusión

### Recursive (predeterminada)

```bash
git merge -s recursive <rama>
```

### Resolve

```bash
git merge -s resolve <rama>
```

### Ours

```bash
git merge -s ours <rama>
```

Mantiene todos los cambios de la rama actual.

### Subtree

```bash
git merge -s subtree <rama>
```

## Fusión vs Rebase

| Aspecto | Merge | Rebase |
|--------|-------|--------|
| Historial | Preserva bifurcaciones | Lineal |
| Commits | Se preservan | Se reescriben |
| Seguridad | Más seguro | Menos seguro en compartidos |
| Claridad | Muestra contexto | Más limpio |

## Resumen

- `git merge` integra cambios de ramas divergentes
- Fast-forward merge cuando es posible
- Three-way merge cuando ambas ramas tienen cambios
- Resuelve conflictos manualmente cuando sea necesario
- Usa `--no-ff` para siempre crear un commit de fusión

---

**Fuente**: [Atlassian - git merge](https://www.atlassian.com/es/git/tutorials/using-branches/merge-conflicts)
