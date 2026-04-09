---
sidebar_position: 1
title: WCAG Principles
---

Principios de accesibilidad web: cómo hacer que tu aplicación sea usable por todos.

## WCAG 2.1 Nivel AA

Nos comprometemos a cumplir WCAG 2.1 Nivel AA. Esto significa:

- **Perceptible**: La información es presentable a todos
- **Operable**: Los usuarios pueden navegar y usar la interfaz
- **Comprensible**: El contenido es claro y predecible
- **Robusto**: Compatible con tecnologías de asistencia

## Principios clave

### 1. Perceptible

**Texto alternativo para imágenes**:
```html
<img src="logo.png" alt="ACITY logo" />
```

**Contraste suficiente**:
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1

**Contenido no solo visual**:
```html
<!-- ❌ Malo -->
<div style="color: red">Error</div>

<!-- ✅ Bueno -->
<div role="alert" style="color: red">Error: Email inválido</div>
```

### 2. Operable

**Navegación por teclado**:
```html
<!-- ✅ Bueno: Todos los elementos interactivos son accesibles por teclado -->
<button>Click me</button>
<a href="/page">Link</a>
<input type="text" />
```

**Focus visible**:
```css
button:focus {
  outline: 2px solid blue;
}
```

**Sin trampas de teclado**:
```typescript
// ❌ Malo: El usuario queda atrapado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') e.preventDefault();
});

// ✅ Bueno: Tab funciona normalmente
```

### 3. Comprensible

**Lenguaje claro**:
- Usa palabras simples
- Evita jerga
- Explica abreviaturas

**Etiquetas claras**:
```html
<!-- ❌ Malo -->
<input type="email" placeholder="Email" />

<!-- ✅ Bueno -->
<label for="email">Email</label>
<input id="email" type="email" />
```

**Mensajes de error claros**:
```html
<!-- ❌ Malo -->
<div>Error</div>

<!-- ✅ Bueno -->
<div role="alert">Error: El email debe ser válido (ej: juan@example.com)</div>
```

### 4. Robusto

**HTML semántico**:
```html
<!-- ❌ Malo -->
<div onclick="navigate()">Click</div>

<!-- ✅ Bueno -->
<button>Click</button>
```

**ARIA cuando sea necesario**:
```html
<div role="button" tabindex="0" aria-label="Close menu">×</div>
```

## Checklist rápido

- [ ] Todas las imágenes tienen alt text
- [ ] Contraste de color es suficiente
- [ ] Navegación por teclado funciona
- [ ] Focus es visible
- [ ] Formularios tienen labels
- [ ] Mensajes de error son claros
- [ ] HTML es semántico
- [ ] ARIA se usa correctamente

## Herramientas

| Herramienta | Propósito |
|-------------|----------|
| **axe DevTools** | Auditoría de accesibilidad |
| **WAVE** | Evaluador de accesibilidad |
| **Lighthouse** | Incluye auditoría de accesibilidad |
| **Screen readers** | NVDA, JAWS, VoiceOver |

## Referencia

- Frontend: [Accesibilidad Frontend](/frontend/cross-cutting/accesibilidad)
- QA: [Accessibility Testing](/qa/performance-security/accessibility-testing)
