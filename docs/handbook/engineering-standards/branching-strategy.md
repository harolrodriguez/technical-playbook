---
sidebar_position: 4
title: Branching Strategy
---

Cómo organizamos las ramas: trunk-based development, convenciones de nombres y reglas de protección.

## Estrategia: Trunk-Based Development

Trabajamos con **trunk-based development**: todos los Devs integran a `main` frecuentemente (al menos una vez por día). Las ramas de feature son de vida corta, idealmente menos de 2 días.

Esto reduce los merge conflicts, acelera la integración y hace que los problemas aparezcan antes.

## Ramas principales

| Rama | Propósito |
|------|-----------|
| `main` | Código en producción o listo para producción |
| `staging` | Ambiente de QA y validación (si aplica) |

`main` siempre debe estar en estado deployable. Si algo roto llega a `main`, es prioridad máxima corregirlo.

## Ramas de trabajo

Las ramas de feature siguen esta convención:

```
<tipo>/<ticket-id>-<descripcion-corta>
```

Ejemplos:
```
feat/PROJ-123-add-address-validation
fix/PROJ-456-null-response-payment
chore/PROJ-789-upgrade-typescript
```

Los tipos siguen los mismos de [Conventional Commits](/handbook/engineering-standards/conventional-commits).

## Reglas de protección de `main`

- No se hace push directo a `main`
- Todo cambio entra por PR con al menos 1 aprobación
- Los checks de CI deben pasar antes de mergear
- No se mergea un PR con conflictos sin resolver

## Feature flags para cambios grandes

Si una feature tarda más de 2 días en desarrollarse, se usa un feature flag para integrar el código a `main` sin activarlo en producción. Esto evita las ramas de larga duración que generan merge conflicts masivos.

## Hotfixes

Para fixes urgentes en producción:
1. Crear rama desde `main`: `fix/hotfix-descripcion`
2. Implementar el fix con el mínimo cambio necesario
3. PR con review exprés (al menos 1 aprobación del Tech Lead)
4. Mergear a `main` y deployar
5. Crear ticket para el follow-up si el fix fue un parche temporal
