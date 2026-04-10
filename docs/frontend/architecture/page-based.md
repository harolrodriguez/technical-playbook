---
sidebar_position: 3
title: Page-Based (Route Colocation)
---

Arquitectura para landings, promos y páginas de campaña. Todo lo que pertenece a una ruta vive junto a ella.

## Cuándo usarla

- Landing pages o páginas de campaña independientes
- Proyectos con pocas rutas y sin lógica de negocio compartida
- Equipos pequeños o trabajo de un solo dev

## Estructura

```
src/
└── promo/
    └── [nombre-campana]/
        ├── landing/          ← vista principal
        │   └── [THC]
        └── page/             ← variante o subpágina
            └── [THC]
```

Cada `landing/` o `page/` contiene su propia estructura THC internamente. No hay capas globales — cada ruta es autónoma.

## Diferencia con FSD

FSD organiza por dominio de negocio con capas compartidas. Page-Based organiza por ruta con todo colocado. Escala peor pero arranca más rápido y es más simple de entender.

## Capas internas

Dentro de cada ruta, las capas se organizan con el sistema THC. Ver [Micro — Sistema THC](./micro/intro).
