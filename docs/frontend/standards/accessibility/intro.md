---
sidebar_position: 1
title: Introducción a Accesibilidad
---

Accesibilidad no es un checklist que se corre al final. Es una restricción de diseño que aplica desde el primer componente, igual que el tipado o el naming.

## Nuestro compromiso: WCAG 2.2 Nivel AA

WCAG 2.2 (octubre 2023) define 87 criterios de conformidad organizados en tres niveles:

| Nivel | Criterios | Descripción |
|-------|-----------|-------------|
| A | 32 | Mínimo absoluto. Sin esto, el contenido es inutilizable para algunos usuarios |
| AA | +24 (56 total) | **Nuestro objetivo.** Estándar legal en la mayoría de jurisdicciones |
| AAA | +31 (87 total) | Accesibilidad mejorada. Aplicar cuando sea posible, no requerido |

Cumplir AA significa cumplir **todos** los criterios A y AA — los niveles son acumulativos.

## Los cuatro principios POUR

WCAG organiza todos los criterios bajo cuatro principios:

| Principio | Pregunta | Criterios A+AA |
|-----------|----------|----------------|
| [Perceptible](./perceptible) | ¿Puede el usuario percibir el contenido? | 1.x — 16 criterios |
| [Operable](./operable) | ¿Puede el usuario interactuar con la interfaz? | 2.x — 20 criterios |
| [Comprensible](./comprensible) | ¿Puede el usuario entender el contenido y la UI? | 3.x — 11 criterios |
| [Robusto](./robusto) | ¿Funciona con tecnologías de asistencia? | 4.x — 2 criterios |

## Criterios nuevos en WCAG 2.2

Nueve criterios nuevos respecto a 2.1, enfocados en accesibilidad cognitiva y móvil:

- **2.4.11** Focus Not Obscured (Minimum) — A
- **2.4.12** Focus Not Obscured (Enhanced) — AA
- **2.4.13** Focus Appearance — AAA
- **2.5.7** Dragging Movements — AA
- **2.5.8** Target Size (Minimum) — AA
- **3.2.6** Consistent Help — A
- **3.3.7** Redundant Entry — A
- **3.3.8** Accessible Authentication (Minimum) — AA
- **3.3.9** Accessible Authentication (Enhanced) — AAA

## Criterio eliminado

**4.1.1 Parsing** fue eliminado en WCAG 2.2. Los navegadores modernos manejan errores de parsing de forma robusta. Ver [Eliminado](./eliminado).

## Herramientas de verificación

| Herramienta | Qué detecta | Cobertura |
|---|---|---|
| axe DevTools | Violaciones automáticas | ~30-40% de criterios |
| Lighthouse | Score general + violaciones | ~30% |
| WAVE | Visualización de estructura | ~25% |
| VoiceOver / NVDA | Experiencia real con screen reader | Manual |
| WebAIM Contrast Checker | Contraste de color | Manual |

Las herramientas automáticas detectan entre el 30-40% de los problemas. El resto requiere testing manual.

## Cómo usar esta sección

Cada página cubre los criterios de un principio, organizados por nivel (A primero, AA después). Cada criterio incluye:
- Qué requiere
- Cómo implementarlo en código
- Cómo verificarlo

Para el proceso de verificación antes de hacer merge, ver [Testing Checklist](./testing-checklist).
