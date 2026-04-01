---
sidebar_position: 1
title: Setup SSH
---

Cómo configurar SSH para conectarte a GitHub de forma segura y sin necesidad de autenticarte en cada operación.

## Por qué SSH

SSH es más seguro que HTTPS con contraseña y más cómodo que HTTPS con tokens. Una vez configurado, no tienes que autenticarte en cada operación.

Además, es el método estándar del equipo. Si alguien tiene un problema de autenticación con GitHub, todos sabemos cómo ayudar.

## Configuración paso a paso

### 1. Generar una clave SSH

```bash
ssh-keygen -t ed25519 -C "tu@email.com"
```

Cuando pregunte dónde guardarla, acepta el default (`~/.ssh/id_ed25519`). Agrega una passphrase para mayor seguridad.

### 2. Agregar la clave al ssh-agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

En macOS, agrega esto a tu `~/.ssh/config` para que persista entre reinicios:

```
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

### 3. Agregar la clave pública a GitHub

Copia la clave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```

Ve a GitHub → Settings → SSH and GPG keys → New SSH key. Pega el contenido y guarda.

### 4. Verificar la conexión

```bash
ssh -T git@github.com
```

Deberías ver: `Hi [usuario]! You've successfully authenticated...`

### 5. Clonar con SSH

```bash
git clone git@github.com:org/repo.git
```

Si ya tienes el repo clonado con HTTPS, cambia el remote:
```bash
git remote set-url origin git@github.com:org/repo.git
```

## Múltiples cuentas de GitHub

Si tienes cuenta personal y de trabajo, configura el `~/.ssh/config` con hosts distintos:

```
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
```

Y clona usando el host configurado: `git clone git@github-work:org/repo.git`
