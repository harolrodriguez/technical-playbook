---
sidebar_position: 1
title: Branching Strategy
---

Cómo organizamos las ramas en ACITY: modelo GitFlow, tipos de ramas, convenciones de nombres y reglas de protección.

## Modelo: GitFlow

Usamos **GitFlow** como estrategia de branching. Este modelo define ramas con propósitos claros y un flujo de integración predecible, lo que facilita el trabajo en paralelo, los releases controlados y los hotfixes sin interrumpir el desarrollo activo.

---

## Ramas principales

Estas ramas son permanentes y están protegidas. Nadie hace push directo a ellas.

| Rama | Propósito |
|------|-----------|
| `main` | Código en producción. Siempre estable y deployable. |
| `develop` | Rama de integración. Aquí converge todo el trabajo antes de ir a producción. |

`main` solo recibe merges desde `release/*` o `hotfix/*`.  
`develop` recibe merges desde `feature/*`, `bugfix/*` y `release/*`.

---

## Tipos de ramas

### `feature/*`
Para desarrollar nuevas funcionalidades. Se crean desde `develop` y se mergean de vuelta a `develop`.

```
feature/<ticket-id>-<descripcion-corta>
```

Ejemplos:
```
feature/PROJ-123-add-address-validation
feature/PROJ-456-user-profile-page
feature/PROJ-789-payment-retry-logic
```

### `bugfix/*`
Para corregir bugs encontrados durante el desarrollo (no en producción). Se crean desde `develop` y se mergean a `develop`.

```
bugfix/<ticket-id>-<descripcion-corta>
```

Ejemplos:
```
bugfix/PROJ-234-fix-null-response-on-checkout
bugfix/PROJ-567-incorrect-tax-calculation
```

### `release/*`
Para preparar un nuevo release. Se crean desde `develop` cuando el sprint está listo para salir a producción. Solo se permiten bugfixes y ajustes menores en esta rama. Al finalizar, se mergea a `main` y a `develop`.

```
release/<version>
```

Ejemplos:
```
release/1.4.0
release/2.0.0
```

### `hotfix/*`
Para corregir bugs críticos directamente en producción. Se crean desde `main` y se mergean tanto a `main` como a `develop` (o a la rama `release` activa si existe).

```
hotfix/<ticket-id>-<descripcion-corta>
```

Ejemplos:
```
hotfix/PROJ-999-fix-payment-gateway-crash
hotfix/PROJ-888-security-patch-auth-token
```

### `chore/*`
Para tareas de mantenimiento que no son features ni bugs: actualizaciones de dependencias, configuración, CI/CD, refactors de infraestructura.

```
chore/<descripcion-corta>
```

Ejemplos:
```
chore/upgrade-typescript-5.4
chore/update-ci-node-version
chore/cleanup-unused-env-vars
```

---

## Convenciones de nombres

- Siempre en **minúsculas**
- Palabras separadas por **guiones** (`-`), nunca underscores ni espacios
- Incluir el **ticket ID** cuando existe (feature, bugfix, hotfix)
- La descripción debe ser corta pero descriptiva: máximo 4-5 palabras
- No incluir el nombre del desarrollador en la rama

```
✅ feature/PROJ-123-add-address-validation
✅ bugfix/PROJ-456-fix-null-checkout-response
✅ hotfix/PROJ-789-patch-auth-token-expiry
✅ chore/upgrade-eslint-config

❌ feature/juan-nueva-funcionalidad
❌ fix/arreglando_cosas
❌ FEATURE/PROJ-123-AddressValidation
❌ mi-rama-temporal
```

---

## Flujo de trabajo

```
main ──────────────────────────────────────────────► producción
  │                                        ▲
  │ (hotfix se crea desde main)            │ (release se mergea a main)
  │                                        │
develop ──────────────────────────────────────────► integración
  │         ▲          ▲         ▲
  │         │          │         │
feature   feature   bugfix    (release se mergea de vuelta a develop)
```

1. El trabajo del día a día ocurre en ramas `feature/*` y `bugfix/*` que salen de `develop`
2. Al terminar, se abre un PR hacia `develop`
3. Al cierre del sprint, se crea una rama `release/*` desde `develop`
4. La rama `release/*` se mergea a `main` (deploy a producción) y de vuelta a `develop`
5. Si hay un bug crítico en producción, se crea un `hotfix/*` desde `main`

---

## Reglas de protección

### `main`
- No se permite push directo
- Solo acepta merges desde `release/*` y `hotfix/*`
- Requiere al menos **2 aprobaciones** (incluyendo Tech Lead)
- Los checks de CI deben pasar
- No se mergea con conflictos sin resolver

### `develop`
- No se permite push directo
- Requiere al menos **1 aprobación**
- Los checks de CI deben pasar

---

## Vida útil de las ramas

| Tipo | Vida esperada |
|------|--------------|
| `feature/*` | Duración del ticket, idealmente menos de 1 sprint |
| `bugfix/*` | Días |
| `release/*` | Días (solo para estabilización del release) |
| `hotfix/*` | Horas |
| `chore/*` | Días |

Si una rama `feature` lleva más de un sprint sin mergearse, es una señal de que el scope es demasiado grande. Considera partirla o usar un feature flag para integrar el código sin activarlo.

---

## Feature flags para cambios grandes

Si una feature tarda más de un sprint en desarrollarse, se usa un **feature flag** para integrar el código a `develop` sin activarlo en producción. Esto evita ramas de larga duración que generan merge conflicts masivos y dificultan la integración continua.
