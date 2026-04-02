---
sidebar_position: 1
---

# Git Branch

El comando `git branch` es tu herramienta de administración de ramas de uso general. Permite crear entornos de desarrollo aislados en un solo repositorio.

## ¿Qué es una rama?

Una rama es una línea de desarrollo independiente. Permite trabajar en cambios sin afectar la rama principal.

## Uso básico

### Listar ramas locales

```bash
git branch
```

Muestra todas las ramas locales. La rama actual está marcada con un asterisco (*).

### Listar todas las ramas (locales y remotas)

```bash
git branch -a
```

### Crear una nueva rama

```bash
git branch <nombre-rama>
```

```bash
git branch feature/nueva-caracteristica
```

Esto crea una nueva rama basada en el commit actual, pero no cambia a esa rama.

### Crear una rama y cambiar a ella

```bash
git checkout -b <nombre-rama>
```

o (en Git 2.23+):

```bash
git switch -c <nombre-rama>
```

### Cambiar a una rama existente

```bash
git checkout <nombre-rama>
```

o (en Git 2.23+):

```bash
git switch <nombre-rama>
```

### Eliminar una rama

```bash
git branch -d <nombre-rama>
```

Esto elimina la rama solo si ya ha sido fusionada.

### Forzar eliminación de una rama

```bash
git branch -D <nombre-rama>
```

Esto elimina la rama sin verificar si ha sido fusionada.

## Opciones útiles

### Ver información detallada de ramas

```bash
git branch -v
```

Muestra el último commit de cada rama.

### Ver ramas fusionadas

```bash
git branch --merged
```

Muestra las ramas que ya han sido fusionadas en la rama actual.

### Ver ramas no fusionadas

```bash
git branch --no-merged
```

Muestra las ramas que aún no han sido fusionadas.

### Renombrar una rama

```bash
git branch -m <nombre-antiguo> <nombre-nuevo>
```

o si estás en la rama:

```bash
git branch -m <nombre-nuevo>
```

### Crear una rama desde un commit específico

```bash
git branch <nombre-rama> <hash-commit>
```

## Convenciones de nombres

Es recomendable usar nombres descriptivos:

```bash
# Bueno
git branch feature/autenticacion
git branch bugfix/error-login
git branch docs/readme

# Malo
git branch feature1
git branch fix
git branch temp
```

## Ejemplo práctico

```bash
# Ver las ramas actuales
git branch
# * main

# Crear una nueva rama
git branch feature/nueva-caracteristica

# Ver las ramas
git branch
# feature/nueva-caracteristica
# * main

# Cambiar a la nueva rama
git checkout feature/nueva-caracteristica

# Ver las ramas
git branch
# * feature/nueva-caracteristica
# main

# Hacer cambios
echo "contenido" > archivo.txt
git add archivo.txt
git commit -m "Agregar archivo en rama feature"

# Cambiar de vuelta a main
git checkout main

# Ver las ramas
git branch
# feature/nueva-caracteristica
# * main

# Eliminar la rama
git branch -d feature/nueva-caracteristica
```

## Flujo de trabajo con ramas

### 1. Crear una rama para una característica

```bash
git checkout -b feature/nueva-caracteristica
```

### 2. Hacer cambios y confirmar

```bash
echo "contenido" > archivo.txt
git add archivo.txt
git commit -m "Implementar nueva característica"
```

### 3. Cambiar a main y actualizar

```bash
git checkout main
git pull origin main
```

### 4. Fusionar la rama

```bash
git merge feature/nueva-caracteristica
```

### 5. Eliminar la rama

```bash
git branch -d feature/nueva-caracteristica
```

### 6. Enviar cambios

```bash
git push origin main
```

## Ramas remotas

### Ver ramas remotas

```bash
git branch -r
```

### Crear una rama local que rastrea una rama remota

```bash
git checkout --track origin/<nombre-rama>
```

o simplemente:

```bash
git checkout <nombre-rama>
```

Git automáticamente creará una rama local que rastrea la rama remota.

## Resumen

- `git branch` administra ramas en tu repositorio
- Las ramas permiten trabajar en cambios de forma aislada
- Usa nombres descriptivos para tus ramas
- Sigue un flujo de trabajo consistente con ramas
- Elimina ramas después de fusionarlas

---

**Fuente**: [Atlassian - git branch](https://www.atlassian.com/es/git/tutorials/using-branches)
