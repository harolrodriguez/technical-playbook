---
sidebar_position: 2
title: Feature-Sliced Design (FSD)
---

Arquitectura para apps web complejas con múltiples features y equipos. Organiza el código por capas con dependencias unidireccionales y APIs públicas explícitas.

## Cuándo usarla

- App web con múltiples dominios de negocio
- Más de un equipo trabajando en el mismo proyecto
- Producto de larga vida útil que va a crecer

## Capas

```
src/
├── app/        ← bootstrap, providers, routing global
├── pages/      ← páginas compuestas desde widgets
├── widgets/    ← secciones de página que combinan features
├── features/   ← interacciones de usuario (add-to-cart, login)
├── entities/   ← modelos de negocio (User, Product, Order)
└── shared/     ← código reutilizable sin lógica de negocio
```

## Regla de dependencias

Las capas solo pueden importar de capas inferiores. `features/` puede importar de `entities/` y `shared/`, pero nunca al revés.

```
app → pages → widgets → features → entities → shared
```

## API pública

Cada slice expone solo lo que otros pueden usar a través de un `index.ts`. Nada importa directamente desde rutas internas.

```ts
// ✅ correcto
import { AddToCartButton } from '@/features/add-to-cart'

// ❌ incorrecto
import { AddToCartButton } from '@/features/add-to-cart/ui/AddToCartButton'
```

## Capas internas de cada feature

Dentro de cada slice de `features/` o `entities/`, las capas se organizan con el sistema THC. Ver [Micro — Sistema THC](./micro/intro).
