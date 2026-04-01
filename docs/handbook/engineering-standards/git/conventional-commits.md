---
sidebar_position: 2
title: Conventional Commits
---

Estándar de mensajes de commit que usamos en ACITY: formato, tipos, scope, ejemplos y reglas de uso.

## Por qué importa

Un historial de commits legible permite:
- Entender qué cambió y por qué sin leer el diff
- Generar changelogs automáticamente
- Hacer bisect de bugs más fácilmente
- Revisar el historial de una feature o módulo específico

Un commit como `fix stuff` o `wip` no aporta nada al equipo que venga después. El mensaje de commit es documentación.

---

## Formato

```
<tipo>(<scope>): <descripción corta>

<cuerpo opcional>

<footer opcional>
```

### Reglas del formato

- La primera línea (subject) no debe superar los **72 caracteres**
- El tiempo verbal es **imperativo**: `add feature`, no `added feature` ni `adding feature`
- El subject no termina en punto
- El cuerpo y el footer se separan del subject con una línea en blanco
- El scope es opcional pero recomendado: indica el módulo o área afectada

---

## Tipos

| Tipo | Cuándo usarlo |
|------|--------------|
| `feat` | Nueva funcionalidad para el usuario |
| `fix` | Corrección de un bug |
| `docs` | Cambios solo en documentación |
| `style` | Formato, espacios, comas — sin cambio de lógica |
| `refactor` | Refactor de código sin agregar features ni corregir bugs |
| `test` | Agregar o corregir tests |
| `chore` | Tareas de mantenimiento: dependencias, configuración, scripts |
| `perf` | Mejora de performance |
| `ci` | Cambios en configuración de CI/CD |
| `revert` | Revertir un commit anterior |
| `build` | Cambios que afectan el sistema de build o dependencias externas |

---

## Scope

El scope indica el área del código afectada. Debe ser consistente dentro del proyecto. Ejemplos de scopes válidos:

```
auth, payments, checkout, users, api, db, config, ci, composer
```

---

## Ejemplos

### Commit simple
```
feat(auth): add JWT refresh token support
```

### Con cuerpo explicativo
```
fix(payments): handle null response from payment gateway

The payment gateway occasionally returns null when the network
times out. Added a fallback to retry once before throwing an error.
```

### Chore sin scope
```
chore: upgrade typescript to 5.4
```

### Revert
```
revert: feat(auth): add JWT refresh token support

Reverts commit abc1234 due to regression in token expiry logic.
```

### Con referencia a ticket
```
feat(checkout): add address validation before payment step

Closes PROJ-123
```

---

## Breaking changes

Si el commit introduce un breaking change, se indica con `!` después del tipo/scope, o con `BREAKING CHANGE:` en el footer:

```
feat(api)!: change user endpoint response format

BREAKING CHANGE: the `name` field is now split into `firstName` and `lastName`.
Consumers of this endpoint must update their integration.
```

Ambas formas son válidas. El `!` es más visible en el subject; el footer permite agregar más detalle.

---

## Relación con las ramas

Los tipos de commit están alineados con los tipos de ramas definidos en la [Branching Strategy](/handbook/engineering-standards/branching-strategy):

| Rama | Tipos de commit esperados |
|------|--------------------------|
| `feature/*` | `feat`, `refactor`, `test`, `docs`, `style` |
| `bugfix/*` | `fix`, `test` |
| `hotfix/*` | `fix` |
| `chore/*` | `chore`, `ci`, `build`, `perf` |
| `release/*` | `fix`, `docs`, `chore` |

---

## Herramientas

Usamos [commitlint](https://commitlint.js.org/) para validar el formato en CI. Si tu commit no sigue el estándar, el pipeline lo rechaza.

Para facilitar la escritura, puedes usar [Commitizen](https://commitizen-tools.github.io/commitizen/) como CLI interactivo:

```bash
npx cz
```
