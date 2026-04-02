---
sidebar_position: 2
---

# Git Log Avanzado

El comando `git log` muestra las instantáneas confirmadas. Te permite ver el historial del proyecto, filtrarlo y buscar cambios concretos.

## Uso básico

### Ver el historial

```bash
git log
```

Muestra todos los commits en orden cronológico inverso.

### Ver en una línea

```bash
git log --oneline
```

Muestra cada commit en una sola línea con el hash abreviado y el mensaje.

## Opciones de formato

### Decorar referencias

```bash
git log --decorate
```

Muestra ramas, etiquetas y referencias que apuntan a cada commit.

```bash
git log --oneline --decorate
```

### Ver diferencias

```bash
git log --stat
```

Muestra el número de inserciones y eliminaciones de cada archivo.

```bash
git log -p
```

Muestra el parche completo (cambios reales) de cada commit.

### Formato personalizado

```bash
git log --format="%h %an %s"
```

Muestra el hash abreviado, autor y asunto.

### Gráfico de ramas

```bash
git log --graph --oneline --all
```

Muestra un gráfico ASCII del historial de ramas.

## Filtrado de commits

### Por autor

```bash
git log --author="Nombre"
```

Muestra commits de un autor específico.

### Por mensaje

```bash
git log --grep="palabra"
```

Muestra commits cuyo mensaje contiene la palabra.

### Por rango de fechas

```bash
git log --since="2024-01-01" --until="2024-12-31"
```

Muestra commits dentro de un rango de fechas.

### Por número de commits

```bash
git log -n 10
```

Muestra los últimos 10 commits.

### Por archivo

```bash
git log -- archivo.txt
```

Muestra commits que modificaron un archivo específico.

### Por rama

```bash
git log main
```

Muestra commits de la rama main.

```bash
git log main..feature
```

Muestra commits en feature que no están en main.

## Ejemplo práctico

```bash
# Ver los últimos 5 commits con gráfico
git log --oneline --graph -n 5

# Ver commits de hoy
git log --since="today"

# Ver commits de un autor
git log --author="Juan"

# Ver commits que modificaron un archivo
git log -- src/main.py

# Ver commits con cambios específicos
git log -p -- src/main.py

# Ver commits en una rama que no están en otra
git log main..feature

# Ver todos los commits con gráfico
git log --graph --oneline --all
```

## Alias útiles

```bash
# Crear un alias para ver el historial bonito
git config --global alias.lg 'log --graph --oneline --all'

# Luego usar
git lg
```

## Resumen

- `git log` muestra el historial de commits
- Soporta múltiples opciones de formato
- Permite filtrar commits por autor, mensaje, fecha, etc.
- `--graph --oneline --all` es muy útil para ver la estructura de ramas
- Crea alias para comandos que usas frecuentemente

---

**Fuente**: [Atlassian - git log](https://www.atlassian.com/es/git/tutorials/git-log)
