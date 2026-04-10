---
sidebar_position: 6
title: Criterio Eliminado — 4.1.1 Parsing
---

## 4.1.1 Parsing — Eliminado en WCAG 2.2

Este criterio fue **eliminado en WCAG 2.2** (octubre 2023). Ya no es un requisito de conformidad.

### Qué requería

El criterio original exigía que el HTML fuera válido: elementos con IDs únicos, etiquetas correctamente anidadas y cerradas, atributos sin duplicados.

### Por qué se eliminó

Los navegadores modernos y las tecnologías de asistencia manejan errores de parsing de forma robusta. El intent original del criterio — asegurar que el contenido sea interpretado correctamente — ya está cubierto por los estándares de los navegadores actuales.

La W3C determinó que el criterio ya no aportaba valor diferencial en el contexto tecnológico actual.

### Qué significa para el equipo

- **No es un requisito de conformidad WCAG 2.2** — no necesitas validar HTML para cumplir AA
- **Sigue siendo una buena práctica** — el HTML válido es más predecible y fácil de mantener
- **Los linters ya lo cubren** — ESLint con `eslint-plugin-jsx-a11y` detecta problemas de markup que afectan la accesibilidad

### Buenas prácticas que se mantienen (aunque no sean requisito WCAG)

```html
<!-- ✅ IDs únicos en el documento -->
<label for="email-principal">Email</label>
<input id="email-principal" type="email" />

<!-- ❌ IDs duplicados — confunde a screen readers y CSS -->
<input id="email" type="email" />
<input id="email" type="text" />

<!-- ✅ etiquetas correctamente anidadas -->
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<!-- ❌ anidamiento incorrecto -->
<ul>
  <div>Elemento 1</div>
</ul>
```

### Referencia

- [W3C — Understanding WCAG 2.2: 4.1.1 Parsing (Obsolete)](https://www.w3.org/WAI/WCAG22/Understanding/parsing)
- [W3C — What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
