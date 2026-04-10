---
sidebar_position: 5
title: Micro-Frontends
---

Arquitectura para plataformas con múltiples equipos que necesitan despliegue independiente. Un Shell orquesta múltiples aplicaciones remotas.

## Cuándo usarla

- Múltiples equipos con dominios de negocio distintos
- Necesidad de despliegue independiente por equipo
- Migración incremental de un monolito frontend

## Modelo

```
Shell (host)
├── Remote A  ← equipo Catálogo
├── Remote B  ← equipo Checkout
└── Remote C  ← equipo Perfil
```

El Shell maneja routing global, autenticación y el layout base. Cada remote es una app independiente con su propio ciclo de vida.

## Implementación

La integración más común es **Module Federation** (Webpack 5 / Vite). Permite cargar código de otro bundle en runtime sin incluirlo en el build.

```ts
// vite.config.ts del Shell
federation({
  remotes: {
    catalogApp: 'http://catalog.internal/assets/remoteEntry.js',
    checkoutApp: 'http://checkout.internal/assets/remoteEntry.js',
  }
})
```

## Arquitectura interna de cada remote

Cada remote es una app independiente. Internamente puede usar FSD, Page-Based o ECS según su naturaleza. Las capas de cada feature siguen el sistema THC.

## Bounded Context

Cada remote define su propio bounded context. No comparte estado con otros remotes directamente — la comunicación pasa por eventos del Shell o contratos explícitos. Ver [Bounded Context](./bounded-context).
