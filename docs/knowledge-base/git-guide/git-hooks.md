---
sidebar_position: 6
title: Git Hooks
---

Cómo usar Git hooks para automatizar tareas: validar commits, prevenir errores y mantener estándares.

## Qué son los hooks

Git hooks son scripts que se ejecutan automáticamente en ciertos eventos (commit, push, merge, etc.).

Se guardan en `.git/hooks/` pero ese directorio no se versionea. Para compartir hooks con el equipo, se usan herramientas como Husky.

## Hooks comunes

### pre-commit

Se ejecuta antes de crear un commit. Útil para:
- Validar que el código cumple linting
- Verificar que no hay secrets
- Formatear código automáticamente

```bash
#!/bin/bash
npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed. Commit aborted."
  exit 1
fi
```

### commit-msg

Se ejecuta después de escribir el mensaje de commit. Útil para:
- Validar que el mensaje sigue Conventional Commits
- Rechazar mensajes que no cumplen el estándar

```bash
#!/bin/bash
commitlint --edit $1
```

### pre-push

Se ejecuta antes de hacer push. Útil para:
- Correr tests antes de pushear
- Verificar que la rama está actualizada

```bash
#!/bin/bash
npm run test
if [ $? -ne 0 ]; then
  echo "Tests failed. Push aborted."
  exit 1
fi
```

## Husky: Git hooks compartidos

Husky permite definir hooks en el repositorio para que todo el equipo los use.

### Instalación

```bash
npm install husky --save-dev
npx husky install
```

### Crear un hook

```bash
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

Esto crea archivos en `.husky/` que se versionean.

### Archivo `.husky/pre-commit` típico

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run format
```

## Lint-staged: ejecutar linting solo en archivos modificados

Combina Husky con lint-staged para que el pre-commit solo valide archivos que cambiaste:

```bash
npm install lint-staged --save-dev
```

En `package.json`:

```json
{
  "lint-staged": {
    "*.ts": "eslint --fix",
    "*.tsx": "eslint --fix",
    "*.md": "prettier --write"
  }
}
```

En `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## Commitlint: validar mensajes de commit

Valida que los commits sigan Conventional Commits.

```bash
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

Crear `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

Agregar hook:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

## Deshabilitar hooks temporalmente

Si necesitas hacer un commit sin que se ejecuten los hooks:

```bash
git commit --no-verify
```

⚠️ Úsalo solo en emergencias. Los hooks existen por una razón.
