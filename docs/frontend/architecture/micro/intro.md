---
sidebar_position: 1
title: Sistema THC — Capas internas de un feature
---

THC es la forma en que este equipo estructura las capas internas de cualquier feature, independientemente de la arquitectura macro del proyecto.

## Las tres capas base

**Types** — contratos y entidades. Define la forma de los datos. Sin lógica, sin llamadas, sin renderizado.

**Hooks** — implementación y lógica de negocio. El hook es el orquestador: maneja estado, validaciones, llamadas a servicios y transformaciones. El componente no sabe cómo funciona el negocio.

**Components** — interfaz de usuario. Renderiza y captura interacciones. Sin lógica de negocio, sin llamadas directas a servicios.

## Los 5 niveles

El sistema empieza simple y crece solo cuando el feature lo necesita.

| Nivel | Qué agrega | Cuándo |
|-------|-----------|--------|
| 1 | THC base | Siempre, punto de partida |
| 2 | Composer + fixtures (1 escenario) | Maquetador necesita trabajar sin backend |
| 3 | Múltiples escenarios de fixtures | Necesitas probar más de un estado |
| 4 | `services/` + `composeConfig` | Feature con múltiples endpoints |
| 5 | `store/` + `validators/` + `mappers/` | Feature complejo con estado compartido |

Agregar un nivel nunca rompe el nivel anterior. Se agrega encima.
