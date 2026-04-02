---
sidebar_position: 2
---

# Git Commit

El comando `git commit` captura una instantánea de los cambios preparados en ese momento del proyecto. Las instantáneas confirmadas pueden considerarse como versiones "seguras" de un proyecto: Git no las cambiará nunca a no ser que se lo pidas expresamente.

## Flujo de trabajo básico

El flujo de trabajo fundamental de Git es:

1. **Editar** archivos en el directorio de trabajo
2. **Preparar** cambios con `git add`
3. **Confirmar** cambios con `git commit`

## Uso básico

### Crear una confirmación

```bash
git commit -m "Mensaje descriptivo"
```

El mensaje debe describir qué cambios contiene la confirmación.

### Confirmación con editor

Si no usas `-m`, Git abrirá tu editor configurado:

```bash
git commit
```

Esto es útil para mensajes más largos.

## Opciones útiles

### Preparar y confirmar en un comando

```bash
git commit -a -m "Mensaje"
```

o

```bash
git commit -am "Mensaje"
```

Esto prepara automáticamente todos los archivos modificados (no archivos nuevos) y los confirma.

### Modificar la confirmación anterior

```bash
git commit --amend
```

Esto permite modificar el mensaje o agregar cambios a la confirmación anterior.

```bash
# Modificar solo el mensaje
git commit --amend -m "Nuevo mensaje"

# Agregar cambios olvidados
git add archivo-olvidado.txt
git commit --amend --no-edit
```

### Confirmación vacía

```bash
git commit --allow-empty -m "Mensaje"
```

Esto crea una confirmación sin cambios (útil para marcar hitos).

## Diferencia entre git commit y svn commit

| Aspecto | Git | SVN |
|--------|-----|-----|
| Ubicación | Repositorio local | Servidor remoto |
| Conexión | No requiere red | Requiere conexión |
| Historial | Completo localmente | En servidor |
| Privacidad | Privado hasta push | Público inmediatamente |

## Mensajes de confirmación efectivos

### Estructura recomendada

```
Línea 1: Resumen breve (50 caracteres o menos)

Línea 3+: Explicación detallada si es necesario.
Envuelve en 72 caracteres aproximadamente.

- Punto 1
- Punto 2
```

### Ejemplos buenos

```bash
git commit -m "Agregar validación de email"
git commit -m "Corregir bug en cálculo de totales"
git commit -m "Refactorizar función de autenticación"
```

### Ejemplos malos

```bash
git commit -m "cambios"
git commit -m "fix"
git commit -m "actualizar archivos"
```

## Ejemplo práctico

```bash
# Editar un archivo
echo "nueva línea" >> archivo.txt

# Ver el estado
git status
# Changes not staged for commit:
#   modified:   archivo.txt

# Preparar el cambio
git add archivo.txt

# Ver el estado
git status
# Changes to be committed:
#   modified:   archivo.txt

# Confirmar el cambio
git commit -m "Agregar nueva línea a archivo.txt"

# Ver el historial
git log --oneline
# abc1234 Agregar nueva línea a archivo.txt
# def5678 Commit anterior
```

## Confirmaciones atómicas

Una buena práctica es hacer confirmaciones atómicas: cada confirmación debe representar un cambio lógico completo.

```bash
# Bueno: Confirmaciones separadas para cambios relacionados pero distintos
git add feature-a.txt
git commit -m "Implementar característica A"

git add feature-b.txt
git commit -m "Implementar característica B"

# Malo: Mezclar cambios no relacionados
git add feature-a.txt feature-b.txt
git commit -m "Agregar características"
```

## Confirmaciones frecuentes

Haz confirmaciones frecuentes:
- Proporciona muchas oportunidades de revertir o deshacer trabajo
- Mantiene el historial limpio y comprensible
- Facilita la identificación de cuándo se introdujeron errores

## Resumen

- `git commit` captura una instantánea de cambios preparados
- Los cambios se confirman en el repositorio local primero
- Los mensajes deben ser descriptivos y explicativos
- Las confirmaciones deben ser atómicas (un cambio lógico por confirmación)
- Haz confirmaciones frecuentes para mantener un historial limpio

---

**Fuente**: [Atlassian - git commit](https://www.atlassian.com/es/git/tutorials/saving-changes/git-commit)
