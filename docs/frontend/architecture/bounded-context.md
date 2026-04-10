---
sidebar_position: 6
title: Bounded Context y Desacoplamiento
---

Principio transversal a todas las arquitecturas: cada módulo o feature debe poder existir de forma independiente, con una API pública explícita y sin dependencias implícitas hacia el exterior.

## La regla

Diseña cada feature como si fuera a convertirse en un microfrontend, aunque hoy no lo sea. Eso significa:

- Expone solo lo que otros necesitan usar (API pública vía `index.ts`)
- No importes directamente desde las entrañas de otro módulo
- No compartas estado global sin un contrato explícito
- Las dependencias externas entran por la capa de servicios, no por los componentes

## API pública

```ts
// ✅ cada feature expone solo su interfaz pública
// features/checkout/index.ts
export { CheckoutButton } from './ui/CheckoutButton'
export { useCheckout } from './hooks/useCheckout'
export type { CheckoutState } from './types/checkout.types'

// ❌ nadie importa desde rutas internas
import { CheckoutButton } from '@/features/checkout/ui/CheckoutButton'
```

## Comunicación entre módulos

Cuando dos features necesitan comunicarse, las opciones en orden de preferencia:

1. **Props / callbacks** — si hay una relación padre-hijo clara
2. **Store compartido** — si el estado es genuinamente global (Zustand, TanStack Store)
3. **Eventos del DOM / EventBus** — en micro-frontends entre remotes distintos
4. **URL / query params** — para estado que debe ser compartible o bookmarkeable

## Por qué importa

Un módulo bien desacoplado puede:
- Moverse a otro proyecto sin reescritura
- Testearse de forma aislada
- Desplegarse independientemente si el equipo crece
- Reemplazarse sin afectar al resto del sistema
