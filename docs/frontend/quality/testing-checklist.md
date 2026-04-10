---
sidebar_position: 4
title: Checklist de Accesibilidad
---

Cómo verificar que tu feature es accesible antes de hacer merge.

## Automático — antes de cada PR

### axe DevTools
1. Abre DevTools en Chrome/Firefox
2. Ve a la pestaña "axe DevTools"
3. Click en "Scan ALL of my page"
4. Cero errores críticos antes de mergear

### Lighthouse
1. DevTools → Lighthouse
2. "Analyze page load"
3. Score de Accessibility ≥ 90

## Manual — para features con interacción

### Teclado
1. Desconecta el mouse
2. Navega con Tab
3. Activa con Enter / Space
4. Cierra modales con Escape

**Checklist:**
- [ ] Llego a todos los elementos interactivos
- [ ] El foco es visible en todo momento
- [ ] No hay trampas de teclado
- [ ] El orden de Tab es lógico

### Screen reader (VoiceOver en macOS)
1. Cmd + F5 para activar VoiceOver
2. Navega la feature
3. Verifica que todo se anuncia correctamente

**Checklist:**
- [ ] Las imágenes tienen alt text
- [ ] Los botones tienen labels descriptivos
- [ ] Los formularios tienen labels asociados
- [ ] Los errores se anuncian con `role="alert"`
- [ ] La estructura de headings es lógica

### Contraste
Usa [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):
- [ ] Texto normal: ≥ 4.5:1
- [ ] Texto grande: ≥ 3:1
- [ ] Iconos interactivos: ≥ 3:1

## Checklist completo por tipo de elemento

### Imágenes
- [ ] `alt` descriptivo en imágenes informativas
- [ ] `alt=""` en imágenes decorativas

### Formularios
- [ ] Todos los inputs tienen `<label>` asociado
- [ ] Campos requeridos marcados con `aria-required`
- [ ] Errores con `role="alert"` o `aria-describedby`

### Navegación
- [ ] Focus visible en todos los elementos interactivos
- [ ] Sin `outline: none` sin reemplazo
- [ ] Modales atrapan el foco correctamente y lo devuelven al cerrar

### Color
- [ ] La información no se comunica solo por color
- [ ] Los links son distinguibles del texto normal

## Automatizar en CI

```ts
// test de accesibilidad con jest-axe
import { axe } from 'jest-axe'

test('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<MiComponente />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```
