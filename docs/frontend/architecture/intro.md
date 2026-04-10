---
sidebar_position: 1
title: Arquitectura Frontend
---

Cómo organizamos proyectos frontend a nivel macro y cómo estructuramos las capas internas de cada feature.

## Dos niveles de decisión

**Macro** — qué arquitectura de proyecto usas. Depende del tipo de producto, el tamaño del equipo y los requisitos de despliegue. Elige una antes de escribir la primera línea de código.

**Micro** — cómo estructuras las capas internas de un feature. Aplica a cualquier arquitectura macro. Usamos el sistema de niveles THC.

## Cómo elegir arquitectura macro

| Tipo de proyecto | Arquitectura |
|---|---|
| App web compleja, multi-feature, multi-equipo | Feature-Sliced Design |
| Landing, promo, página de campaña | Page-Based |
| Canvas, juego, experiencia interactiva | ECS |
| Plataforma con equipos independientes | Micro-Frontends |

Una vez elegida la macro, las capas internas de cada feature siempre siguen el sistema THC.
