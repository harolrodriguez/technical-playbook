---
sidebar_position: 2
---

# Alias de Git

Los alias de Git son accesos rápidos a comandos frecuentes. Permiten crear comandos más cortos que se asignan a comandos más largos.

## ¿Por qué usar alias?

- Reducen el número de teclas que debes presionar
- Aumentan la eficiencia del flujo de trabajo
- Hacen los comandos más fáciles de recordar

## Crear alias

### Usando git config

```bash
git config --global alias.co checkout
```

Esto crea un alias global `co` para `checkout`.

### Editar el archivo de configuración

```bash
git config --global --edit
```

Luego agrega:

```
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
```

## Alias comunes

### Básicos

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Ahora puedes usar:

```bash
git co main          # en lugar de git checkout main
git br -a            # en lugar de git branch -a
git ci -m "mensaje"  # en lugar de git commit -m "mensaje"
git st               # en lugar de git status
```

### Deshacer cambios

```bash
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.undo 'reset --soft HEAD~1'
```

Ahora puedes usar:

```bash
git unstage archivo.txt  # deshacer la preparación
git last                 # ver el último commit
git undo                 # deshacer el último commit
```

### Visualización del historial

```bash
git config --global alias.lg 'log --graph --oneline --all'
git config --global alias.lgs 'log --graph --oneline --all --stat'
git config --global alias.lga 'log --graph --oneline --all --author'
```

Ahora puedes usar:

```bash
git lg    # ver el historial con gráfico
git lgs   # ver el historial con estadísticas
```

### Búsqueda

```bash
git config --global alias.find 'log --all --grep'
git config --global alias.blame 'blame'
```

Ahora puedes usar:

```bash
git find "palabra"  # buscar commits con una palabra
```

## Alias complejos

### Alias con múltiples comandos

```bash
git config --global alias.amend 'commit --amend --no-edit'
git config --global alias.force 'push --force-with-lease'
```

### Alias con opciones

```bash
git config --global alias.diff 'diff --color-words'
git config --global alias.log 'log --oneline --decorate'
```

## Ejemplo de configuración completa

```bash
# Básicos
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Deshacer cambios
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.undo 'reset --soft HEAD~1'

# Visualización
git config --global alias.lg 'log --graph --oneline --all'
git config --global alias.lgs 'log --graph --oneline --all --stat'

# Otros
git config --global alias.amend 'commit --amend --no-edit'
git config --global alias.force 'push --force-with-lease'
git config --global alias.find 'log --all --grep'
```

## Ver alias configurados

### Ver todos los alias

```bash
git config --global --list | grep alias
```

### Ver un alias específico

```bash
git config --global alias.co
```

## Eliminar un alias

```bash
git config --global --unset alias.co
```

## Alias locales vs globales

### Alias global (para todos los repositorios)

```bash
git config --global alias.co checkout
```

### Alias local (solo para el repositorio actual)

```bash
git config --local alias.co checkout
```

## Resumen

- Los alias reducen el número de teclas que debes presionar
- Se crean con `git config --global alias.nombre 'comando'`
- Puedes tener alias globales y locales
- Los alias complejos pueden incluir múltiples comandos
- Usa alias para comandos que usas frecuentemente

---

**Fuente**: [Atlassian - Alias de Git](https://www.atlassian.com/es/git/tutorials/git-alias)
