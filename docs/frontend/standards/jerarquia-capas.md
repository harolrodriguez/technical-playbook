---
sidebar_position: 7
title: Jerarquía de Capas — z-index
---

Convenciones de z-index y stacking context para evitar conflictos visuales entre componentes.

## Escala de z-index

Usamos una escala fija por categoría. No se usan valores arbitrarios.

```ts
// tokens/zIndex.ts
export const zIndex = {
  base: 0,
  raised: 10,       // cards elevadas, elementos flotantes simples
  dropdown: 100,    // menús desplegables, selects
  sticky: 200,      // headers sticky, barras de navegación fijas
  overlay: 300,     // fondos de modal, drawers
  modal: 400,       // modales, dialogs
  toast: 500,       // notificaciones, toasts
  tooltip: 600,     // tooltips (siempre encima de todo)
} as const
```

## Uso en CSS / Tailwind

```tsx
// ✅ usando los tokens
<div style={{ zIndex: zIndex.modal }}>...</div>

// Con Tailwind — define las clases en el config
// tailwind.config.ts
zIndex: {
  'dropdown': '100',
  'sticky': '200',
  'overlay': '300',
  'modal': '400',
  'toast': '500',
  'tooltip': '600',
}

// ❌ valores arbitrarios
<div style={{ zIndex: 9999 }}>...</div>
<div className="z-[9999]">...</div>
```

## Stacking context

Crear un stacking context nuevo aísla los z-index de los hijos. Esto puede romper modales o tooltips que esperan estar encima de todo.

```css
/* ⚠️ estas propiedades crean stacking context */
transform: translateZ(0);
opacity: 0.99;
filter: blur(0);
will-change: transform;
isolation: isolate;
```

Si un modal o tooltip aparece "detrás" de otro elemento, el problema casi siempre es un stacking context inesperado en un ancestro.

## Portals

Los modales, drawers y toasts deben renderizarse en un portal (`document.body`) para escapar del stacking context del componente padre.

```tsx
// ✅ modal en portal
import { createPortal } from 'react-dom'

function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div style={{ zIndex: zIndex.modal }}>{children}</div>,
    document.body
  )
}
```
