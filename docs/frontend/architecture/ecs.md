---
sidebar_position: 4
title: Entity-Component System (ECS)
---

Arquitectura para proyectos con canvas, juegos o experiencias interactivas complejas. Separa datos (components), identidad (entities) y lógica (systems).

## Cuándo usarla

- Canvas 2D, WebGL, Three.js, Babylon.js
- Juegos o experiencias con muchos objetos que comparten comportamientos
- Simulaciones, editores visuales, experiencias generativas

## Conceptos

**Entity** — un ID. No tiene datos ni lógica, solo existe.

**Component** — datos puros asociados a una entity. Sin lógica.

```ts
// component de posición
interface Position { x: number; y: number }

// component de velocidad
interface Velocity { dx: number; dy: number }
```

**System** — lógica que opera sobre entities que tienen ciertos components.

```ts
// sistema de movimiento: opera sobre entities con Position + Velocity
function movementSystem(entities: Entity[], dt: number) {
  for (const entity of entities.with(Position, Velocity)) {
    entity.get(Position).x += entity.get(Velocity).dx * dt
  }
}
```

## Estructura

```
src/
├── entities/       ← definición de entity types
├── components/     ← interfaces de datos puros
├── systems/        ← lógica que opera sobre components
├── world/          ← instancia del mundo ECS, loop principal
└── features/       ← features que consumen el mundo ECS
    └── [feature]/
        └── [THC]   ← THC para el componente que consume servicios
```

## THC dentro de ECS

Cuando un system necesita consumir un servicio externo (API, WebSocket, storage), ese punto de integración se estructura con THC. ECS organiza el mundo del juego. THC organiza la capa de integración con el exterior.
