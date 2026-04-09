---
sidebar_position: 2
title: Estimación & Slicing
---

Cómo dimensionamos el trabajo y cómo lo partimos cuando es demasiado grande. Son dos pasos del mismo flujo: primero estimas, y si supera los 8 puntos, sliceas.

---

## Estimación Relativa

Estimamos comparando ítems entre sí, no en horas. Esto es más preciso porque considera complejidad, esfuerzo e incertidumbre a la vez.

**Unidad**: Fibonacci (1, 2, 3, 5, 8, 13, 21)  
**Responsable**: Equipo de delivery  
**Momento**: Refinamiento o Sprint Planning

**Regla clave**: Historia > 8 puntos → hay que slicear antes de planificarla.

### Proceso 3C

**1. Card** — El PO presenta la historia y sus criterios de aceptación. El equipo entiende el objetivo, sin entrar aún en detalle técnico.

**2. Conversation** — El equipo conversa para aclarar dudas. Se usa una historia pivot como referencia (ej. "esta es un 3"). Se evalúan tres dimensiones:
- **Complejidad** — dificultad técnica
- **Esfuerzo** — cantidad de trabajo
- **Incertidumbre** — nivel de desconocimiento o riesgo

**3. Confirmation** — El equipo vota con Fibonacci. Si hay dispersión grande (ej. 2 vs 13), se discuten supuestos y se revota.

---

## Slicing

Cuando una historia es muy grande, se divide en partes más pequeñas que sigan siendo funcionales y entregables por sí solas.

### Vertical, no horizontal

❌ **Horizontal** — cada capa técnica se entrega por separado (Backend → Frontend → QA). Sin valor funcional hasta el final.

✅ **Vertical** — cada slice incluye todas las capas necesarias para ser funcional. Entrega valor desde el primer corte y permite feedback inmediato.

### Técnica SPIDR

| Técnica | Cuándo usarla | Ejemplo |
|---------|--------------|---------|
| **S – Spike** | Alta incertidumbre técnica o de negocio | Investigar integración con nuevo proveedor de pagos |
| **P – Path** | Múltiples flujos o escenarios de usuario | Depósito con tarjeta / billetera digital / cripto |
| **I – Interface** | Funcionalidad en múltiples canales o dispositivos | Torneos desde móvil / app / desktop |
| **D – Data** | Volumen o tipos de datos complejos | Ranking online / físico / combinado / con exportación |
| **R – Rule** | Múltiples reglas de negocio o validaciones | Bono sin requisitos → con depósito mínimo → con rollover |

### Checklist de un buen slice

- [ ] Tiene valor para el usuario (aunque sea parcial)
- [ ] Es independiente — no bloquea a otros
- [ ] Se puede probar — criterios claros
- [ ] Cabe en un sprint
- [ ] Incluye todas las capas necesarias (vertical)

---

## Ver también

- [Agilidad](./scrum)
- [Priorización de Bugs](./priorizacion-de-bugs)
- [Tech Debt](./tech-debt)
