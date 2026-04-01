---
sidebar_position: 3
title: Code Review
---

Qué revisar en un PR, cómo dar feedback constructivo y cómo recibirlo. El code review es una conversación técnica, no un juicio.

## El objetivo del code review

El code review no existe para encontrar errores (aunque los encuentra). Existe para:
- Compartir conocimiento del codebase entre el equipo
- Asegurar que el código cumple los estándares acordados
- Detectar problemas de diseño antes de que lleguen a producción
- Mantener la coherencia técnica del sistema

## Qué revisar

**Corrección**: ¿El código hace lo que dice que hace? ¿Cubre los edge cases?

**Legibilidad**: ¿Se puede entender sin contexto adicional? ¿Los nombres son claros?

**Tests**: ¿Los tests cubren los casos importantes? ¿Son tests que realmente fallarían si el código estuviera roto?

**Seguridad**: ¿Hay inputs sin validar? ¿Hay secrets hardcodeados? ¿Hay superficies de ataque nuevas?

**Performance**: ¿Hay queries N+1? ¿Hay operaciones costosas en loops?

**Contratos**: ¿Los cambios de API son backward compatible? ¿Se documentaron los breaking changes?

## Cómo dar feedback

**Sé específico**: "Este nombre no es claro" no ayuda. "Considera renombrar `data` a `userProfile` para que sea más descriptivo" sí ayuda.

**Explica el por qué**: No solo qué cambiar, sino por qué. Eso enseña y genera menos fricción.

**Distingue entre bloqueante y sugerencia**: Usa prefijos para claridad:
- `[bloqueante]` — Debe resolverse antes de mergear
- `[sugerencia]` — Sería mejor así, pero no es obligatorio
- `[pregunta]` — No entiendo esto, ¿puedes explicar?
- `[nit]` — Detalle menor, a tu criterio

**Aprueba cuando está listo**: No esperes perfección. Si el código es correcto, seguro y legible, aprueba aunque no lo hubieras escrito exactamente igual.

## Cómo recibir feedback

- El feedback es sobre el código, no sobre ti
- Si no entiendes un comentario, pregunta antes de cambiar
- Si no estás de acuerdo, argumenta con datos o razonamiento técnico
- Si el desacuerdo persiste, el Tech Lead desempata

## SLA de review

Un PR asignado debe tener primera respuesta en menos de **24 horas hábiles**. Si no puedes revisarlo en ese tiempo, avisa para que se reasigne.

## Aprobaciones requeridas

- PRs normales: 1 aprobación
- Cambios de arquitectura o contratos de API: 2 aprobaciones, incluyendo Tech Lead
- Cambios en infraestructura o CI/CD: Tech Lead o Architect
