---
sidebar_position: 3
title: Principios WCAG
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
<img src="logo.png" alt="Logo de la empresa" />
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

**Navegación por teclado**: todos los elementos interactivos son accesibles con Tab, Enter y Space.

**Focus visible**:
```css
button:focus-visible {
  outline: 2px solid var(--color-focus);
}
```

### 3. Comprensible

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
<div role="alert">Error: El email debe ser válido (ej: juan@example.com)</div>
```

### 4. Robusto

**HTML semántico**:
```html
<!-- ❌ Malo -->
<div onclick="navigate()">Ir al perfil</div>

<!-- ✅ Bueno -->
<a href="/perfil">Ir al perfil</a>
```

## Herramientas de verificación

| Herramienta | Propósito |
|---|---|
| axe DevTools | Auditoría automática en el navegador |
| Lighthouse | Incluye score de accesibilidad |
| WAVE | Evaluador visual de accesibilidad |
| VoiceOver / NVDA | Verificación con screen reader real |

## Ver también

- [Standards → Accesibilidad](../standards/accesibilidad) — reglas mínimas de implementación
- [Quality → Testing Checklist](./testing-checklist) — cómo verificar antes de hacer merge
