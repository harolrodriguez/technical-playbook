---
sidebar_position: 2
title: Nivel 1 — THC Base
---

El punto de partida. Tres archivos, tres responsabilidades. Sin excepciones.

## Estructura

```
[feature]/
├── types/
│   └── [feature].types.ts
├── hooks/
│   └── use[Feature].ts
└── components/
    └── [Feature].tsx
```

## Types

Define la forma de los datos. Sin lógica, sin imports de librerías de UI.

```ts
// types/crearCuenta.types.ts
export interface CrearCuentaFormData {
  nombre: string
  email: string
  password: string
}

export interface CrearCuentaErrors {
  nombre?: string
  email?: string
  general?: string
}
```

## Hook

Orquesta el feature. Maneja estado, validaciones y llamadas. El componente no sabe qué hay aquí.

```ts
// hooks/useCrearCuenta.ts
export function useCrearCuenta() {
  const [formData, setFormData] = useState<CrearCuentaFormData>({
    nombre: '', email: '', password: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const updateField = (field: keyof CrearCuentaFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const registrar = async () => {
    setStatus('loading')
    // llamada directa al servicio
  }

  return { formData, status, updateField, registrar }
}
```

## Component

Renderiza. Nada más.

```tsx
// components/CrearCuentaForm.tsx
export function CrearCuentaForm() {
  const { formData, status, updateField, registrar } = useCrearCuenta()

  return (
    <form onSubmit={e => { e.preventDefault(); registrar() }}>
      <input value={formData.nombre} onChange={e => updateField('nombre', e.target.value)} />
      <button disabled={status === 'loading'}>Crear cuenta</button>
    </form>
  )
}
```

## Cuándo subir al nivel 2

Cuando el maquetador necesita trabajar sin backend, o cuando necesitas probar distintos estados de la UI de forma aislada.
