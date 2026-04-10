---
sidebar_position: 1
title: Unit Testing
---

Qué testear, qué no testear, cobertura mínima y cómo escribir tests que sobrevivan refactors.

## Qué testear

**Hooks** — son el orquestador del feature. Tienen lógica de negocio, validaciones y transformaciones. Son el objetivo principal de los tests unitarios.

**Funciones puras** — validators, mappers, utils. Sin efectos secundarios, fáciles de testear.

**Componentes** — solo el comportamiento observable: qué renderiza, qué pasa al interactuar. No la implementación interna.

## Qué no testear

- Implementación interna de componentes (clases CSS, estructura del DOM)
- Librerías de terceros (TanStack Query, Zustand ya tienen sus propios tests)
- Tipos de TypeScript (el compilador los verifica)
- Código trivial sin lógica (getters simples, constantes)

## Cobertura mínima

| Tipo | Cobertura mínima |
|---|---|
| Hooks con lógica de negocio | 80% |
| Validators y mappers | 100% |
| Componentes críticos (formularios, flujos de pago) | 70% |
| Componentes de UI simples | No requerida |

La cobertura es una métrica de referencia, no un objetivo en sí mismo. Un test que verifica el comportamiento correcto vale más que diez que verifican implementación.

## Tests de hooks

```ts
// hooks/useCrearCuenta.test.ts
import { renderHook, act } from '@testing-library/react'
import { useCrearCuenta } from './useCrearCuenta'

describe('useCrearCuenta', () => {
  it('actualiza el campo correctamente', () => {
    const { result } = renderHook(() => useCrearCuenta())
    act(() => result.current.updateField('email', 'test@ejemplo.com'))
    expect(result.current.formData.email).toBe('test@ejemplo.com')
  })

  it('pasa a estado loading al registrar', async () => {
    const { result } = renderHook(() => useCrearCuenta())
    act(() => { result.current.registrar() })
    expect(result.current.status).toBe('loading')
  })
})
```

## Tests de componentes

```tsx
// components/CrearCuentaForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { CrearCuentaForm } from './CrearCuentaForm'

describe('CrearCuentaForm', () => {
  it('muestra el botón de submit', () => {
    render(<CrearCuentaForm />)
    expect(screen.getByRole('button', { name: /crear cuenta/i })).toBeInTheDocument()
  })

  it('deshabilita el botón mientras carga', async () => {
    render(<CrearCuentaForm />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

## Tests de validators

```ts
// validators/crearCuenta.validator.test.ts
import { validarCrearCuenta } from './crearCuenta.validator'

describe('validarCrearCuenta', () => {
  it('retorna error si el email es inválido', () => {
    const errors = validarCrearCuenta({ nombre: 'María', email: 'no-es-email', password: '12345678' })
    expect(errors.email).toBeDefined()
  })

  it('retorna objeto vacío si todo es válido', () => {
    const errors = validarCrearCuenta({ nombre: 'María', email: 'maria@ejemplo.com', password: '12345678' })
    expect(errors).toEqual({})
  })
})
```

## Herramientas

- **Vitest** — runner de tests, compatible con Vite
- **Testing Library** — tests de componentes y hooks orientados al comportamiento
- **jest-axe** — tests de accesibilidad automatizados
