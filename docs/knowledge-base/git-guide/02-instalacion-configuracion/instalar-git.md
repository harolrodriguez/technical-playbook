---
sidebar_position: 1
---

# Instalar Git

Git está disponible para todos los sistemas operativos principales. Aquí te mostramos cómo instalarlo en cada plataforma.

## macOS

### Opción 1: Verificar instalación existente

Si has instalado Xcode o sus herramientas de línea de comandos, Git puede que ya esté instalado:

```bash
git --version
```

### Opción 2: Instalador independiente

La forma más sencilla de instalar Git en un Mac:

1. Descarga el instalador desde [git-scm.com](https://git-scm.com)
2. Sigue las instrucciones para instalar Git
3. Abre un terminal y verifica la instalación:

```bash
git --version
```

### Opción 3: Homebrew

Si has instalado Homebrew para gestionar paquetes en macOS:

```bash
brew install git
git --version
```

### Opción 4: MacPorts

Si has instalado MacPorts:

```bash
sudo port install git +bash_completion +credential_osxkeychain +doc
```

## Linux

### Debian/Ubuntu

```bash
sudo apt-get update
sudo apt-get install git
git --version
```

### Fedora/RHEL/CentOS

```bash
sudo yum install git
# o
sudo dnf install git
git --version
```

### Arch Linux

```bash
sudo pacman -S git
git --version
```

## Windows

### Opción 1: Git Bash

La forma más sencilla en Windows es usar Git Bash:

1. Descarga el instalador desde [git-scm.com](https://git-scm.com)
2. Ejecuta el instalador y sigue las instrucciones
3. Abre Git Bash y verifica:

```bash
git --version
```

### Opción 2: Subsistema de Windows para Linux

Los entornos Windows modernos ofrecen un subsistema de Windows para Linux. Una vez instalado, puedes seguir las instrucciones de Linux.

## Configuración inicial

Después de instalar Git, configura tu nombre de usuario y correo electrónico. Esta información se asociará a todas las confirmaciones que crees:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@example.com"
```

### Verificar configuración

```bash
git config --global user.name
git config --global user.email
```

## Configuración opcional: Almacenamiento de credenciales

### macOS: git-credential-osxkeychain

Para que Git recuerde tu nombre de usuario y contraseña cuando trabajes con repositorios HTTPS:

```bash
git credential-osxkeychain
```

Si recibes un error, instálalo:

```bash
# Con Homebrew
brew install git-credential-osxkeychain

# O descárgalo manualmente desde:
# https://github.com/git-ecosystem/git-credential-osxkeychain
```

Luego configura Git para usarlo:

```bash
git config --global credential.helper osxkeychain
```

### Linux: git-credential-store

```bash
git config --global credential.helper store
```

### Windows: Git Credential Manager

Git Bash incluye Git Credential Manager por defecto.

## Configuración del editor

Muchos comandos de Git lanzarán un editor de texto. Configura tu editor preferido:

```bash
# Nano
git config --global core.editor "nano -w"

# Vim
git config --global core.editor "vim"

# VS Code
git config --global core.editor "code --wait"

# Atom
git config --global core.editor "atom --wait"
```

## Verificación final

Para verificar que todo está configurado correctamente:

```bash
git --version
git config --global user.name
git config --global user.email
git config --global core.editor
```

---

**Fuente**: [Atlassian - Instalar Git](https://www.atlassian.com/es/git/tutorials/install-git)
