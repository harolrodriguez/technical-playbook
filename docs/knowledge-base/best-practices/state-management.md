---
sidebar_position: 2
title: State Management
---

Patrones para gestionar estado: cuándo usar estado local, global, y cómo evitar que el estado se vuelva caótico.

## Principios

**Minimiza estado**: Cuanto menos estado, menos bugs. Calcula lo que puedas.

**Centraliza estado compartido**: Si múltiples componentes necesitan los mismos datos, no los dupliques.

**Normaliza datos**: Evita estructuras anidadas profundas que son difíciles de actualizar.

**Inmutabilidad**: No mutes estado directamente. Crea nuevas referencias.

## Niveles de estado

### 1. Estado local (componente)

Para datos que solo ese componente necesita:

```typescript
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '' });
```

**Cuándo usarlo**: Formularios, toggles, UI state.

### 2. Estado compartido (contexto)

Para datos que múltiples componentes necesitan:

```typescript
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

**Cuándo usarlo**: Datos de usuario, tema, idioma.

### 3. Estado global (store)

Para datos que toda la app necesita:

```typescript
// Redux, Zustand, Jotai, etc.
const userStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

**Cuándo usarlo**: Autenticación, configuración global, datos que cambian frecuentemente.

## Estructura de estado

### ❌ Malo: Anidado profundo

```typescript
{
  user: {
    profile: {
      personal: {
        name: 'Juan',
        email: 'juan@example.com'
      }
    }
  }
}
```

Actualizar `name` requiere:

```typescript
setUser({
  ...user,
  profile: {
    ...user.profile,
    personal: {
      ...user.profile.personal,
      name: 'Nuevo nombre'
    }
  }
});
```

### ✅ Bueno: Normalizado

```typescript
{
  users: {
    '123': { id: '123', name: 'Juan', email: 'juan@example.com' }
  },
  currentUserId: '123'
}
```

Actualizar es simple:

```typescript
setState({
  users: {
    ...state.users,
    '123': { ...state.users['123'], name: 'Nuevo nombre' }
  }
});
```

## Patrones comunes

### Derived state

No guardes datos que puedas calcular:

```typescript
// ❌ Malo
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0);

// ✅ Bueno
const [items, setItems] = useState([]);
const itemCount = items.length;
```

### Computed selectors

Para datos complejos, usa selectores:

```typescript
const selectUserEmail = (state) => state.users[state.currentUserId]?.email;
const userEmail = selectUserEmail(state);
```

### Async state

Para datos que vienen de una API:

```typescript
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetchData()
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

## Evitar problemas comunes

**Problema: Estado desincronizado**  
Solución: Usa una única fuente de verdad. No dupliques datos.

**Problema: Actualizaciones lentas**  
Solución: Normaliza el estado. Evita estructuras anidadas.

**Problema: Demasiado estado global**  
Solución: Mantén solo lo que realmente es global. El resto, local.

**Problema: Mutaciones accidentales**  
Solución: Usa immer o spread operator. Nunca mutes directamente.
