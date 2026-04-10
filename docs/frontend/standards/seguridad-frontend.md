---
sidebar_position: 9
title: Seguridad Frontend
---

Protección contra XSS, manejo seguro de tokens y variables de entorno desde la perspectiva del dev frontend.

## XSS — Cross-Site Scripting

```tsx
// ✅ React escapa automáticamente
<p>{userInput}</p>

// ❌ dangerouslySetInnerHTML sin sanitizar
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ si necesitas renderizar HTML, sanitiza primero
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

## Tokens de autenticación

```ts
// ✅ tokens en memoria o httpOnly cookies (el backend los gestiona)
// Los tokens nunca van en localStorage si contienen datos sensibles

// ❌ token en localStorage expuesto a XSS
localStorage.setItem('auth_token', token)

// ✅ si necesitas persistencia, usa sessionStorage o cookies httpOnly
```

## Variables de entorno

```ts
// ✅ solo variables públicas en el cliente (prefijo VITE_)
const apiUrl = import.meta.env.VITE_API_URL

// ❌ secrets en variables de entorno del cliente
const stripeSecret = import.meta.env.VITE_STRIPE_SECRET_KEY
// cualquier variable VITE_ es visible en el bundle
```

## Validación de inputs

```ts
// ✅ valida en el cliente para UX, pero nunca confíes solo en el cliente
function validarEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// La validación real siempre ocurre en el backend
```

## Dependencias

Corre `npm audit` antes de cada release. Ver política completa en [Handbook → Seguridad → Gestión de Dependencias](/handbook/security/dependencias).

## Content Security Policy

Configura CSP en el servidor para limitar qué scripts pueden ejecutarse. No es responsabilidad del dev frontend configurarlo, pero sí reportar si algo lo rompe.
