---
sidebar_position: 2
title: Cómo Escribir un PR
---

Qué debe tener un Pull Request para que sea revisado rápido y bien: descripción, contexto, screenshots, checklist y tamaño adecuado.

## Por qué importa

Un PR bien escrito se revisa más rápido, genera menos preguntas y tiene menos chances de introducir bugs. El tiempo que inviertes en escribirlo bien se recupera en el review.

Un PR sin descripción obliga al reviewer a leer todo el código para entender qué está pasando. Eso es transferirle tu trabajo a otra persona.

## Estructura del PR

### Título
Sigue el formato de [Conventional Commits](/handbook/engineering-standards/conventional-commits). Debe describir qué hace el PR, no qué archivos toca.

```
feat(checkout): add address validation before payment step
```

### Descripción

**¿Qué hace este PR?**
Una o dos oraciones que expliquen el cambio. Alguien que no tiene contexto debe poder entenderlo.

**¿Por qué?**
El contexto de negocio o técnico. Link al ticket si existe.

**¿Cómo lo hace?**
Si la implementación no es obvia, explica el approach. No tienes que documentar cada línea, pero sí las decisiones no triviales.

**Screenshots / videos** (si hay cambios de UI)
Antes y después. Vale más que mil palabras.

**Checklist**
```
- [ ] Tests escritos y pasando
- [ ] Documentación actualizada si aplica
- [ ] No hay console.logs ni código de debug
- [ ] Probado en staging
```

## Tamaño del PR

Los PRs grandes son difíciles de revisar bien. Un reviewer que ve 800 líneas cambiadas tiende a aprobar sin revisar a fondo.

**Objetivo**: menos de 400 líneas de cambio por PR. Si es más grande, considera partirlo.

Excepciones válidas: migraciones de base de datos, refactors mecánicos (renombrar, mover archivos), cambios generados automáticamente.

## Draft PRs

Usa Draft PR cuando quieres feedback temprano antes de terminar. Deja claro en la descripción qué está listo para revisar y qué no.

## Cómo pedir review

- Asigna reviewers específicos, no dejes el PR sin asignar
- Si necesitas review urgente, avisa por el canal del equipo
- Si el PR lleva más de 24h sin review, haz un ping
