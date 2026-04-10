---
sidebar_position: 4
title: Componentes
---

Anatomía de un componente, clasificación y reglas de composición.

## Anatomía

Un componente tiene una sola responsabilidad: renderizar y capturar interacciones. No llama servicios, no tiene lógica de negocio, no sabe de dónde vienen los datos.

```tsx
// ✅ componente correcto
function UserCard({ name, email, onEdit }: UserCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <button onClick={onEdit}>Editar</button>
    </div>
  )
}

// ❌ componente con lógica de negocio
function UserCard({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)
  useEffect(() => { fetch(`/api/users/${userId}`).then(...) }, [])
  // ...
}
```

## Clasificación

**Átomo** — el bloque más pequeño. No depende de otros componentes del proyecto.
`Button`, `Input`, `Icon`, `Badge`

**Molécula** — combinación de átomos con una función específica.
`SearchField`, `FormField`, `UserAvatar`

**Organismo** — sección de UI con lógica propia, compuesta de moléculas y átomos.
`Header`, `ProductCard`, `CheckoutSummary`

**Página / Template** — composición de organismos. Recibe datos del exterior.
`ProductDetailsPage`, `CheckoutPage`

## Reglas de composición

```ts
// ✅ los átomos no importan moléculas ni organismos
// ✅ las moléculas importan átomos
// ✅ los organismos importan moléculas y átomos
// ❌ los átomos no importan nada del proyecto
```

## Props

```tsx
// ✅ props explícitas con interface
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

// ❌ props como objeto genérico
function Button(props: any) {}

// ❌ demasiadas props — señal de que el componente hace demasiado
function UserCard({ id, name, email, role, avatar, onEdit, onDelete, onShare, isAdmin }: ...) {}
```

## Componentes puros

Prefiere componentes sin estado cuando sea posible. El estado vive en el hook, no en el componente.

```tsx
// ✅ componente puro, fácil de testear
function StatusBadge({ status }: { status: Status }) {
  const labels = { idle: 'Pendiente', loading: 'Cargando', success: 'Listo', error: 'Error' }
  return <span>{labels[status]}</span>
}
```
