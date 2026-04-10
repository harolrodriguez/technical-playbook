---
sidebar_position: 8
title: Accesibilidad — Reglas Mínimas
---

Reglas que todo dev debe cumplir en todo componente. No son opcionales.

Para principios WCAG y cómo verificar, ver [Quality → Principios WCAG](../quality/principios-wcag).

## HTML semántico primero

```tsx
// ✅ usa el elemento correcto
<button onClick={handleClick}>Enviar</button>
<a href="/perfil">Ver perfil</a>
<nav>, <main>, <header>, <footer>, <section>

// ❌ divs con comportamiento
<div onClick={handleClick}>Enviar</div>
<div onClick={() => navigate('/perfil')}>Ver perfil</div>
```

## Imágenes

```tsx
// ✅ alt descriptivo
<img src="avatar.png" alt="Foto de perfil de María García" />

// ✅ decorativa — alt vacío
<img src="divider.png" alt="" />

// ❌ sin alt
<img src="avatar.png" />
```

## Formularios

```tsx
// ✅ label asociado al input
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ error anunciado al screen reader
<input aria-describedby="email-error" />
<span id="email-error" role="alert">Email inválido</span>

// ❌ placeholder como único label
<input type="email" placeholder="Email" />
```

## Foco y teclado

```css
/* ✅ foco visible siempre */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* ❌ nunca elimines el outline sin reemplazarlo */
:focus { outline: none; }
```

## Contraste mínimo

- Texto normal: 4.5:1
- Texto grande (18px+ o 14px+ bold): 3:1
- Iconos interactivos: 3:1

Verifica con [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## ARIA — solo cuando el HTML no alcanza

```tsx
// ✅ ARIA para enriquecer semántica cuando no hay elemento nativo
<div role="alert">{errorMessage}</div>
<button aria-expanded={isOpen} aria-controls="menu">Menú</button>

// ❌ ARIA redundante sobre HTML semántico
<button role="button">Click</button>
<h1 role="heading">Título</h1>
```
