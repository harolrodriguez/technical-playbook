---
sidebar_position: 5
title: Manejo de Estado
---

Cuándo usar estado local, de servidor o global. La regla es usar el estado más simple que resuelva el problema.

## Los tres tipos

**Estado local** — vive en el componente o en el hook del feature. No se comparte.

**Estado de servidor** — datos que vienen de una API. Se gestiona con TanStack Query.

**Estado global** — estado de UI que múltiples features necesitan leer o escribir. Se gestiona con Zustand o TanStack Store.

## Árbol de decisión

```
¿El estado viene de una API?
  → Sí → TanStack Query
  → No → ¿Lo necesitan múltiples features?
            → Sí → Zustand / TanStack Store
            → No → useState en el hook del feature
```

## Estado local

```ts
// hooks/useCrearCuenta.ts
export function useCrearCuenta() {
  const [formData, setFormData] = useState<CrearCuentaFormData>({ ... })
  const [status, setStatus] = useState<Status>('idle')
  // ...
}
```

## Estado de servidor

```ts
// TanStack Query maneja cache, loading, error y refetch
const { data: user, isPending, isError } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => userService.getById(userId),
})
```

No dupliques estado de servidor en `useState`. Si ya tienes TanStack Query, no necesitas un `useState` para los datos de la API.

## Estado global

```ts
// store/cartStore.ts — solo cuando múltiples features lo necesitan
export const useCartStore = create<CartStore>(set => ({
  items: [],
  addItem: (item) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id) => set(state => ({ items: state.items.filter(i => i.id !== id) })),
}))
```

## Lo que no hacer

```ts
// ❌ estado global para cosas que son locales
const useGlobalFormStore = create(() => ({ nombre: '', email: '' }))

// ❌ duplicar estado de servidor en estado local
const [users, setUsers] = useState([])
useEffect(() => { fetch('/api/users').then(r => r.json()).then(setUsers) }, [])

// ❌ prop drilling de más de 2 niveles — señal de que necesitas estado global o composición
```
