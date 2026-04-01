---
sidebar_position: 2
title: Linting & Formatting
---

Estándares transversales para linting y formatting: herramientas, configuración y cómo mantener consistencia en el código.

## Herramientas

| Herramienta | Propósito | Lenguaje |
|-------------|----------|----------|
| **ESLint** | Detecta errores y problemas de código | JavaScript/TypeScript |
| **Prettier** | Formatea código automáticamente | JS/TS/JSON/CSS/Markdown |
| **Stylelint** | Linting para CSS | CSS/SCSS |
| **Commitlint** | Valida mensajes de commit | Todos |

## ESLint

Detecta problemas de código: variables no usadas, comparaciones incorrectas, etc.

### Configuración base

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-types': 'warn',
  },
};
```

### Ejecutar

```bash
npm run lint              # Verificar
npm run lint -- --fix    # Arreglar automáticamente
```

## Prettier

Formatea código automáticamente. No hay discusión sobre estilo.

### Configuración base

```javascript
// .prettierrc.js
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
};
```

### Ejecutar

```bash
npm run format           # Formatear
npm run format -- --check  # Verificar sin cambiar
```

## Integración con Git

Usa Husky para ejecutar linting antes de commit:

```bash
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

Ver [Git Hooks](/knowledge-base/git-guide/git-hooks)

## Configuración por proyecto

Cada proyecto (Frontend, Backend, QA) puede tener configuración específica, pero debe extender la base común.

**Frontend**: Reglas adicionales para React, accesibilidad.

**Backend**: Reglas adicionales para Node.js, seguridad.

## Ignorar archivos

Crea `.eslintignore` y `.prettierignore`:

```
node_modules/
dist/
build/
.next/
coverage/
```

## Evitar problemas comunes

**Problema: ESLint y Prettier en conflicto**  
Solución: Usa `eslint-config-prettier` para desactivar reglas de ESLint que conflicten con Prettier.

**Problema: Linting lento**  
Solución: Usa `lint-staged` para lintear solo archivos modificados.

**Problema: Diferentes configuraciones en diferentes proyectos**  
Solución: Crea una configuración base compartida en un paquete npm.

## Referencia

- Frontend: [Estándares de Código Frontend](/frontend/quality/estandares-de-codigo)
- Backend: [Estándares de Código Backend](/backend/quality/estandares-de-codigo)
