---
sidebar_position: 3
title: Uso de IA
---

Qué herramientas de IA están permitidas, para qué casos de uso, cuáles son los límites y por qué la revisión humana siempre es obligatoria.

## Herramientas aprobadas

| Herramienta | Uso aprobado |
|-------------|-------------|
| GitHub Copilot | Autocompletado y generación de código en el editor |
| Cursor | Editor con IA integrada para generación y refactor |
| ChatGPT / Claude | Consultas técnicas, exploración de ideas, borradores de documentación |
| Kiro | Asistente de desarrollo integrado en el IDE |

## Para qué usar IA

**Sí:**
- Generar boilerplate y código repetitivo
- Explorar soluciones a problemas técnicos
- Escribir borradores de documentación
- Refactorizar código con instrucciones claras
- Generar tests para código existente
- Explicar código que no entiendes

**Con cuidado:**
- Diseño de arquitectura (la IA puede sugerir, el equipo decide)
- Código de seguridad crítico (siempre requiere revisión experta)
- Lógica de negocio compleja (puede generar código que parece correcto pero no lo es)

## Límites

**Nunca:**
- Pegar código de producción con datos reales en herramientas de IA externas
- Pegar secrets, API keys o credenciales en prompts
- Pegar PII (datos personales de usuarios) en herramientas de IA
- Asumir que el código generado por IA es correcto sin revisarlo

## La revisión humana es obligatoria

El código generado por IA se trata igual que cualquier otro código: pasa por code review, tiene tests y cumple los estándares del equipo.

"Lo generó la IA" no es una excusa para saltear el proceso. El Dev que mergea el código es responsable de él, independientemente de cómo se generó.

## Privacidad y datos

Antes de usar una herramienta de IA con código del proyecto, verificar:
- ¿Los datos del prompt se usan para entrenar el modelo?
- ¿Hay datos sensibles en el código que vas a compartir?

En caso de duda, usar herramientas con modo privado o consultar al Tech Lead.
