---
sidebar_position: 1
title: Setup de Entorno Local
---

Guía para tener el entorno de desarrollo funcionando desde cero. El objetivo es que cualquier persona nueva pueda estar operativa en menos de una hora.

## Prerequisitos

Antes de empezar, asegúrate de tener:

- macOS 13+ o Ubuntu 22.04+
- Acceso al repositorio en GitHub (pedir al EM o Tech Lead)
- Acceso al gestor de secrets del equipo (ver [Secrets y Variables](/handbook/security/secrets-y-variables))

## 1. Herramientas base

### Homebrew (macOS)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Node.js (via nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
```

### Git y configuración básica
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global pull.rebase true
```

Configura SSH para GitHub: ver [GitHub con SSH](/handbook/engineering-standards/github-ssh).

## 2. Clonar los repositorios

```bash
git clone git@github.com:org/repo-principal.git
cd repo-principal
```

## 3. Variables de entorno

Copia el archivo de ejemplo y completa los valores:
```bash
cp .env.example .env.local
```

Los valores reales están en el gestor de secrets del equipo. No los pidas por Slack; están documentados en el vault.

## 4. Instalar dependencias

```bash
npm install
```

## 5. Levantar servicios locales

Si el proyecto usa Docker para servicios de infraestructura (base de datos, cache, etc.):
```bash
docker compose up -d
```

## 6. Correr el proyecto

```bash
npm run dev
```

## Verificar que todo funciona

```bash
npm run test
```

Si los tests pasan, el entorno está bien configurado.

## Problemas comunes

**Error de permisos en npm**: No uses `sudo npm`. Configura npm para instalar globales en tu home: [guía](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

**Puerto ocupado**: Cambia el puerto en `.env.local` o mata el proceso que lo usa: `lsof -ti:3000 | xargs kill`.

**Variables de entorno faltantes**: El proyecto debería fallar con un mensaje claro indicando qué variable falta. Si no lo hace, es un bug de configuración que vale la pena reportar.

Si tienes un problema que no está aquí, resuélvelo y agrega la solución a esta guía.
