---
sidebar_position: 2
---

# Configuración de Git (git config)

El comando `git config` es una función útil que sirve para definir valores de configuración de Git a nivel de un proyecto global o local.

## Niveles de configuración

Git tiene tres niveles de configuración, con la siguiente prioridad (de mayor a menor):

### 1. Local (--local)

Aplica solo al repositorio actual. Se almacena en `.git/config`.

```bash
git config --local user.name "Nombre Local"
```

### 2. Global (--global)

Aplica al usuario actual del sistema operativo. Se almacena en `~/.gitconfig`.

```bash
git config --global user.name "Tu Nombre"
```

### 3. Sistema (--system)

Aplica a toda la máquina. Se almacena en `$(prefix)/etc/gitconfig`.

```bash
sudo git config --system user.name "Nombre del Sistema"
```

## Configuración común

### Información del usuario

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@example.com"
```

### Editor predeterminado

```bash
# Nano
git config --global core.editor "nano -w"

# Vim
git config --global core.editor "vim"

# VS Code
git config --global core.editor "code --wait"

# Atom
git config --global core.editor "atom --wait"

# Sublime Text
git config --global core.editor "subl -w"
```

### Herramienta de diferencias

```bash
git config --global diff.tool vimdiff
```

### Herramienta de fusión

```bash
git config --global merge.tool vimdiff
```

### Almacenamiento de credenciales

```bash
# macOS
git config --global credential.helper osxkeychain

# Linux
git config --global credential.helper store

# Windows (incluido en Git Bash)
git config --global credential.helper manager
```

## Lectura de configuración

### Ver un valor específico

```bash
git config user.name
git config user.email
```

### Ver todos los valores

```bash
git config --list
```

### Ver valores de un nivel específico

```bash
git config --global --list
git config --local --list
```

### Ver dónde se define un valor

```bash
git config --show-origin user.name
```

## Edición de archivos de configuración

### Editar configuración global

```bash
git config --global --edit
```

Esto abrirá el editor configurado con el archivo `~/.gitconfig`.

### Editar configuración local

```bash
git config --local --edit
```

Esto abrirá el editor configurado con el archivo `.git/config`.

## Alias de Git

Los alias permiten crear atajos para comandos frecuentes:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Ahora puedes usar:

```bash
git co          # en lugar de git checkout
git br          # en lugar de git branch
git ci          # en lugar de git commit
git st          # en lugar de git status
```

### Alias más complejos

```bash
# Deshacer cambios preparados
git config --global alias.unstage 'reset HEAD --'

# Ver el último commit
git config --global alias.last 'log -1 HEAD'

# Ver log con formato bonito
git config --global alias.lg 'log --graph --oneline --all'
```

## Configuración avanzada

### Colores

```bash
git config --global color.ui true
git config --global color.status auto
git config --global color.branch auto
```

### Comportamiento de push

```bash
# Solo push a la rama actual
git config --global push.default current

# O push a la rama con el mismo nombre
git config --global push.default upstream
```

### Comportamiento de pull

```bash
# Usar rebase en lugar de merge
git config --global pull.rebase true
```

### Ignorar cambios de permisos

```bash
git config --global core.filemode false
```

## Ejemplo de configuración completa

```bash
# Información del usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@example.com"

# Editor
git config --global core.editor "code --wait"

# Alias útiles
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.lg 'log --graph --oneline --all'

# Colores
git config --global color.ui true

# Credenciales
git config --global credential.helper osxkeychain
```

---

**Fuente**: [Atlassian - git config](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-config)
