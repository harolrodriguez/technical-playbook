---
sidebar_position: 1
---

# Git Add

El comando `git add` añade un cambio del directorio de trabajo al área del entorno de ensayo (staging area). De este modo, indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación.

## ¿Qué es el entorno de ensayo?

El entorno de ensayo es una de las características más exclusivas de Git. Es un intermediario entre el directorio de trabajo y el historial del proyecto.

**Los tres árboles de Git**:
1. **Directorio de trabajo**: Los archivos que estás editando
2. **Entorno de ensayo (Staging area)**: Los cambios que vas a confirmar
3. **Historial de confirmaciones**: Los cambios confirmados

## Uso básico

### Preparar un archivo específico

```bash
git add <archivo>
```

```bash
git add hello.py
```

### Preparar todos los cambios

```bash
git add .
```

o

```bash
git add -A
```

### Preparar cambios de un directorio

```bash
git add <directorio>
```

```bash
git add src/
```

## Opciones útiles

### Preparación interactiva

```bash
git add -i
```

o

```bash
git add --interactive
```

Esto abre una sesión interactiva donde puedes elegir qué partes de cada archivo quieres preparar.

### Preparar solo cambios (no archivos nuevos)

```bash
git add -u
```

o

```bash
git add --update
```

### Preparar archivos nuevos y modificados (no eliminados)

```bash
git add -A
```

### Preparar cambios específicos de un archivo

```bash
git add -p <archivo>
```

o

```bash
git add --patch <archivo>
```

Esto te permite revisar cada cambio y decidir si prepararlo o no.

## Flujo de trabajo básico

### 1. Editar archivos

```bash
echo "contenido" > archivo.txt
```

### 2. Ver el estado

```bash
git status
```

Deberías ver el archivo como "Changes not staged for commit".

### 3. Preparar cambios

```bash
git add archivo.txt
```

### 4. Ver el estado nuevamente

```bash
git status
```

Ahora deberías ver el archivo como "Changes to be committed".

### 5. Confirmar cambios

```bash
git commit -m "Mensaje descriptivo"
```

## Ejemplo práctico

```bash
# Crear varios archivos
echo "Contenido 1" > archivo1.txt
echo "Contenido 2" > archivo2.txt
echo "Contenido 3" > archivo3.txt

# Ver el estado
git status
# Untracked files:
#   archivo1.txt
#   archivo2.txt
#   archivo3.txt

# Preparar solo archivo1.txt
git add archivo1.txt

# Ver el estado
git status
# Changes to be committed:
#   new file:   archivo1.txt
# Untracked files:
#   archivo2.txt
#   archivo3.txt

# Preparar los demás archivos
git add archivo2.txt archivo3.txt

# Confirmar todos los cambios
git commit -m "Agregar tres archivos"
```

## Deshacer git add

### Deshacer la preparación de un archivo

```bash
git reset <archivo>
```

```bash
git reset archivo.txt
```

### Deshacer la preparación de todos los cambios

```bash
git reset
```

## Diferencia entre git add y svn add

**Importante**: `git add` NO es lo mismo que `svn add`.

- **svn add**: Marca un archivo para ser rastreado (solo una vez)
- **git add**: Prepara cambios para la próxima confirmación (cada vez que cambias el archivo)

En Git, debes ejecutar `git add` cada vez que modifiques un archivo que quieras confirmar.

## Patrones de archivo

Puedes usar patrones para preparar múltiples archivos:

```bash
# Preparar todos los archivos .py
git add *.py

# Preparar todos los archivos en src/
git add src/

# Preparar todos los archivos excepto los que coincidan con un patrón
git add -A -- ':!*.log'
```

## Resumen

- `git add` prepara cambios para la próxima confirmación
- Es el primer paso del flujo de trabajo básico de Git
- Permite agrupar cambios relacionados en confirmaciones lógicas
- Puedes preparar archivos completos o cambios específicos
- Es diferente a `svn add` - se usa cada vez que cambias un archivo

---

**Fuente**: [Atlassian - git add](https://www.atlassian.com/es/git/tutorials/saving-changes)
