---
sidebar_position: 7
title: Testing Checklist
---

Cómo verificar que tu feature es accesible antes de hacer merge. Las herramientas automáticas detectan el 30-40% de los problemas — el resto requiere verificación manual.

## Automático — en cada PR

### axe DevTools
1. Abre DevTools → pestaña "axe DevTools"
2. "Scan ALL of my page"
3. Cero errores críticos antes de mergear

### Lighthouse
1. DevTools → Lighthouse → "Analyze page load"
2. Score de Accessibility ≥ 90

### En tests automatizados

```ts
import { axe } from 'jest-axe'

test('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<MiComponente />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

---

## Manual — para features con interacción

### Teclado (5 minutos)
1. Desconecta el mouse
2. Tab para navegar, Enter/Space para activar, Escape para cerrar

- [ ] Llego a todos los elementos interactivos
- [ ] El foco es visible en todo momento
- [ ] No hay trampas de teclado
- [ ] El orden de Tab es lógico
- [ ] Los modales atrapan el foco y lo devuelven al cerrar
- [ ] Los menús se cierran con Escape

### Screen reader — VoiceOver (macOS)
Cmd + F5 para activar. VO + flechas para navegar.

- [ ] Las imágenes tienen alt text descriptivo
- [ ] Los botones con iconos tienen aria-label
- [ ] Los formularios tienen labels asociados
- [ ] Los errores se anuncian con role="alert"
- [ ] Los mensajes de estado se anuncian con aria-live
- [ ] La estructura de headings es lógica (h1 → h2 → h3)
- [ ] Los links tienen texto descriptivo

### Contraste
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

- [ ] Texto normal: ≥ 4.5:1
- [ ] Texto grande (≥18px o ≥14px bold): ≥ 3:1
- [ ] Iconos interactivos y bordes de inputs: ≥ 3:1

---

## Checklist por tipo de componente

### Formularios
- [ ] Todos los inputs tienen `<label>` con `htmlFor` / `id`
- [ ] Campos requeridos marcados con `aria-required="true"`
- [ ] Errores con `role="alert"` o `aria-describedby`
- [ ] Sugerencias de corrección en los mensajes de error
- [ ] No bloquea el pegado de contraseñas
- [ ] No requiere CAPTCHA sin alternativa accesible

### Modales y Dialogs
- [ ] `role="dialog"` y `aria-modal="true"`
- [ ] `aria-labelledby` apuntando al título
- [ ] El foco va al modal al abrirse
- [ ] El foco queda atrapado dentro del modal
- [ ] Se cierra con Escape
- [ ] El foco vuelve al elemento que lo abrió al cerrar

### Tablas de datos
- [ ] `<caption>` descriptivo
- [ ] `<th>` con `scope="col"` o `scope="row"`
- [ ] No uses tablas para layout

### Imágenes
- [ ] Informativas: alt descriptivo del contenido
- [ ] Decorativas: `alt=""` y `role="presentation"`
- [ ] Iconos funcionales: `aria-label` en el botón, `aria-hidden="true"` en el icono

### Navegación
- [ ] Skip link al inicio del documento
- [ ] `<nav>` con `aria-label` si hay múltiples navs
- [ ] Breadcrumbs con `aria-label="Ruta de navegación"` y `aria-current="page"` en el último elemento

### Contenido dinámico
- [ ] Mensajes de estado: `aria-live="polite"`
- [ ] Errores críticos: `role="alert"`
- [ ] Contadores y resultados de búsqueda: `aria-live="polite"` + `aria-atomic="true"`

---

## Criterios WCAG 2.2 de mayor impacto (priorizar)

| Criterio | Nivel | Qué verificar |
|---|---|---|
| 1.1.1 Contenido no textual | A | Alt text en imágenes |
| 1.4.3 Contraste mínimo | AA | 4.5:1 en texto |
| 2.1.1 Teclado | A | Toda la funcionalidad accesible por teclado |
| 2.4.7 Foco visible | AA | Indicador de foco visible |
| 3.3.1 Identificación de errores | A | Errores descritos en texto |
| 3.3.2 Etiquetas o instrucciones | A | Labels en formularios |
| 4.1.2 Nombre, rol, valor | A | ARIA correcto en componentes custom |
| 4.1.3 Mensajes de estado | AA | aria-live en contenido dinámico |
| 2.5.8 Tamaño del objetivo | AA | Targets táctiles ≥ 24×24px |
| 3.3.7 Entrada redundante | A | No pedir datos ya ingresados |
