---
sidebar_position: 2
title: Testing Checklist
---

Cómo verificar que tu aplicación es accesible: herramientas, técnicas y checklist.

## Herramientas automáticas

### axe DevTools

1. Abre DevTools
2. Ve a la pestaña "axe DevTools"
3. Click en "Scan ALL of my page"
4. Revisa los problemas encontrados

### Lighthouse

1. Abre DevTools
2. Ve a "Lighthouse"
3. Click en "Analyze page load"
4. Revisa la sección "Accessibility"

### WAVE

1. Ve a https://wave.webaim.org/
2. Ingresa la URL
3. Revisa los problemas encontrados

## Testing manual

### Navegación por teclado

1. Desconecta el mouse
2. Usa Tab para navegar
3. Usa Enter/Space para activar botones
4. Usa Arrow keys para menus

**Checklist:**
- [ ] Puedo navegar a todos los elementos interactivos
- [ ] El focus es visible en todo momento
- [ ] No hay trampas de teclado
- [ ] El orden de tab es lógico

### Screen reader

Usa VoiceOver (macOS), NVDA (Windows) o JAWS:

1. Activa el screen reader
2. Navega la página
3. Verifica que todo se lee correctamente

**Checklist:**
- [ ] Las imágenes tienen alt text
- [ ] Los botones tienen labels
- [ ] Los formularios tienen labels
- [ ] Los errores se anuncian
- [ ] La estructura es clara

### Contraste de color

Usa https://webaim.org/resources/contrastchecker/:

1. Ingresa el color del texto
2. Ingresa el color de fondo
3. Verifica que el ratio es >= 4.5:1

**Checklist:**
- [ ] Texto normal: >= 4.5:1
- [ ] Texto grande: >= 3:1
- [ ] Iconos: >= 3:1

## Checklist completo

### Estructura

- [ ] Usa HTML semántico (`<button>`, `<a>`, `<form>`, etc.)
- [ ] Usa headings correctamente (`<h1>`, `<h2>`, etc.)
- [ ] Usa listas para contenido en lista (`<ul>`, `<ol>`)
- [ ] Usa `<label>` para inputs

### Imágenes

- [ ] Todas las imágenes tienen `alt` text
- [ ] El `alt` text describe la imagen
- [ ] Las imágenes decorativas tienen `alt=""`

### Formularios

- [ ] Todos los inputs tienen labels
- [ ] Los labels están asociados con `for` y `id`
- [ ] Los errores se muestran claramente
- [ ] Los campos requeridos están marcados

### Navegación

- [ ] El focus es visible
- [ ] El orden de tab es lógico
- [ ] No hay trampas de teclado
- [ ] Los menus son navegables por teclado

### Color

- [ ] El contraste es suficiente (>= 4.5:1)
- [ ] La información no se comunica solo por color
- [ ] Los links son distinguibles

### Contenido

- [ ] El lenguaje es claro
- [ ] Las abreviaturas se explican
- [ ] Los videos tienen subtítulos
- [ ] Los audios tienen transcripción

### ARIA

- [ ] Se usa ARIA solo cuando es necesario
- [ ] Los roles ARIA son correctos
- [ ] Los atributos ARIA son correctos
- [ ] No hay ARIA que contradiga HTML semántico

## Automatizar testing

### axe-core

```typescript
import { axe } from 'jest-axe';

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Lighthouse CI

```bash
npm install --save-dev @lhci/cli
lhci autorun
```

## Referencia

- [WCAG Principles](/handbook/engineering-standards/accessibility/wcag-principles)
- Frontend: [Accesibilidad Frontend](/frontend/cross-cutting/accesibilidad)
- QA: [Accessibility Testing](/qa/performance-security/accessibility-testing)
