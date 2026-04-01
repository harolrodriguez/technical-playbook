---
sidebar_position: 1
title: Conventional Commits
---

Estándar de mensajes de commit que usamos: tipos, formato, ejemplos y por qué importa tener un historial legible y automatizable.

## Formato

```
<tipo>(<scope opcional>): <descripción corta>

<cuerpo opcional>

<footer opcional>
```

La primera línea no debe superar los 72 caracteres. El tiempo verbal es imperativo: "add feature", no "added feature" ni "adding feature".

## Tipos

| Tipo | Cuándo usarlo |
|------|--------------|
| `feat` | Nueva funcionalidad para el usuario |
| `fix` | Corrección de un bug |
| `docs` | Cambios solo en documentación |
| `style` | Formato, espacios, comas (sin cambio de lógica) |
| `refactor` | Refactor de código sin agregar features ni corregir bugs |
| `test` | Agregar o corregir tests |
| `chore` | Tareas de mantenimiento: dependencias, configuración, CI |
| `perf` | Mejora de performance |
| `ci` | Cambios en configuración de CI/CD |
| `revert` | Revertir un commit anterior |

## Ejemplos

```
feat(auth): add JWT refresh token support

fix(payments): handle null response from payment gateway

docs(readme): update local setup instructions

refactor(composer): extract orchestration logic into separate module

chore: upgrade typescript to 5.4
```

## Breaking changes

Si el commit introduce un breaking change, se indica con `!` después del tipo o con `BREAKING CHANGE:` en el footer:

```
feat(api)!: change user endpoint response format

BREAKING CHANGE: the `name` field is now split into `firstName` and `lastName`
```

## Por qué importa

Un historial de commits legible permite:
- Entender qué cambió y por qué sin leer el diff
- Generar changelogs automáticamente
- Hacer bisect de bugs más fácilmente
- Revisar el historial de una feature o módulo específico

Un commit como `fix stuff` o `wip` no aporta nada al equipo que venga después.

## Herramientas

Usamos [commitlint](https://commitlint.js.org/) para validar el formato en CI. Si tu commit no sigue el estándar, el pipeline lo rechaza.
