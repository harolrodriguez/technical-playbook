---
sidebar_position: 3
title: Cómo Escribir un PR
---

Qué debe tener un Pull Request para que sea revisado rápido y bien: título, descripción, contexto, checklist y tamaño adecuado.

## Por qué importa

Un PR bien escrito se revisa más rápido, genera menos preguntas y tiene menos chances de introducir bugs. El tiempo que inviertes en escribirlo bien se recupera en el review.

Un PR sin descripción obliga al reviewer a leer todo el código para entender qué está pasando. Eso es transferirle tu trabajo a otra persona.

---

## Alineación con GitFlow

Cada PR debe seguir el flujo definido en la [Branching Strategy](/handbook/engineering-standards/branching-strategy):

| Origen | Destino | Cuándo |
|--------|---------|--------|
| `feature/*` | `develop` | Al terminar una funcionalidad |
| `bugfix/*` | `develop` | Al corregir un bug en desarrollo |
| `release/*` | `main` + `develop` | Al cerrar un release |
| `hotfix/*` | `main` + `develop` | Al corregir un bug crítico en producción |

Nunca se abre un PR de `feature/*` directamente a `main`.

---

## Estructura del PR

### Título

Sigue el formato de [Conventional Commits](/handbook/engineering-standards/conventional-commits). Debe describir qué hace el PR, no qué archivos toca.

```
feat(checkout): add address validation before payment step
fix(auth): handle expired token on silent refresh
chore: upgrade eslint to v9
```

### Descripción

Usa esta estructura como base:

---

**¿Qué hace este PR?**  
Una o dos oraciones que expliquen el cambio. Alguien sin contexto debe poder entenderlo.

**¿Por qué?**  
El contexto de negocio o técnico. Link al ticket si existe.

**¿Cómo lo hace?**  
Si la implementación no es obvia, explica el approach. No tienes que documentar cada línea, pero sí las decisiones no triviales.

**Screenshots / videos** *(si hay cambios de UI)*  
Antes y después. Vale más que mil palabras.

**Checklist**
```
- [ ] Tests escritos y pasando
- [ ] Documentación actualizada si aplica
- [ ] No hay console.logs ni código de debug
- [ ] Probado localmente
- [ ] Probado en staging (si aplica)
- [ ] Breaking changes documentados (si aplica)
```

---

## Tamaño del PR

Los PRs grandes son difíciles de revisar bien. Un reviewer que ve 800 líneas cambiadas tiende a aprobar sin revisar a fondo.

**Objetivo**: menos de **400 líneas de cambio** por PR. Si es más grande, considera partirlo.

Excepciones válidas:
- Migraciones de base de datos
- Refactors mecánicos (renombrar, mover archivos)
- Cambios generados automáticamente (schemas, mocks, fixtures)

---

## Draft PRs

Usa **Draft PR** cuando quieres feedback temprano antes de terminar. Deja claro en la descripción qué está listo para revisar y qué no.

Un Draft PR no debe ser asignado para review formal hasta que esté marcado como "Ready for Review".

---

## Cómo pedir review

- Asigna reviewers específicos, no dejes el PR sin asignar
- Si el PR toca un área sensible (auth, pagos, infraestructura), incluye al Tech Lead como reviewer
- Si necesitas review urgente, avisa por el canal del equipo con el link al PR
- Si el PR lleva más de **24 horas hábiles** sin respuesta, haz un ping directo

---

## Self-review antes de pedir review

Antes de asignar reviewers, revisa tu propio PR:

- Lee el diff completo como si fuera código de otra persona
- Verifica que el título y la descripción son precisos
- Confirma que no hay código de debug, TODOs sin ticket, ni cambios accidentales
- Asegúrate de que los tests pasan en CI

Un self-review de 5 minutos puede ahorrarte un ciclo de review completo.
