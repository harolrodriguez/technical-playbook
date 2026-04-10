---
sidebar_position: 6
title: Integración de APIs
---

Cómo consumimos APIs desde el frontend. La capa HTTP nunca vive en los componentes.

## La regla

Los componentes no llaman APIs. Los hooks no llaman APIs directamente. Las llamadas HTTP viven en la capa de servicios, que el hook consume.

```
Component → Hook → Service → HTTP
```

## Servicio

```ts
// services/userService.ts
export const userService = {
  getById: async (id: string): Promise<User> => {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) throw new Error('Error al obtener usuario')
    return response.json()
  },

  update: async (id: string, data: UpdateUserData): Promise<User> => {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Error al actualizar usuario')
    return response.json()
  },
}
```

## Con TanStack Query

```ts
// hooks/useUser.ts
export function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userService.getById(id),
  })
}

export function useUpdateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserData }) =>
      userService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['user', id] })
    },
  })
}
```

## Manejo de errores

```ts
// ✅ errores tipados en la respuesta
type ApiResponse<T> = { status: 200 | 201; data: T } | { status: 400 | 500; error: string }

// ✅ errores de red separados de errores de negocio
try {
  const result = await userService.getById(id)
  if (result.status !== 200) {
    // error de negocio — mostrar al usuario
  }
} catch (error) {
  // error de red — reintentar o mostrar estado de error genérico
}
```

## Variables de entorno

```ts
// ✅ base URL desde variable de entorno
const API_BASE = import.meta.env.VITE_API_BASE_URL

// ❌ URL hardcodeada
const response = await fetch('https://api.produccion.com/users')
```
