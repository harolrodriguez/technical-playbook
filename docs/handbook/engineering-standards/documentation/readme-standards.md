---
sidebar_position: 6
title: Cómo Escribir Documentación Técnica
---

Principios para escribir documentación que se lea, se entienda y se mantenga viva.

## El problema con la documentación

La mayoría de la documentación técnica no se lee porque está mal escrita, está desactualizada o no responde las preguntas que el lector tiene.

Documentar bien no es escribir mucho. Es escribir lo correcto para la persona correcta en el momento correcto.

## Principios

**Escribe para el lector, no para ti**: Antes de escribir, pregúntate quién va a leer esto y qué pregunta está tratando de responder. Un README para un Dev nuevo es distinto a un ADR para el Architect.

**Lo que no se mantiene, no sirve**: La documentación desactualizada es peor que no tener documentación porque genera confianza falsa. Si no puedes comprometerte a mantenerla, no la escribas.

**Código > prosa para el cómo**: Para explicar cómo usar algo, un ejemplo de código vale más que tres párrafos. Para explicar por qué se tomó una decisión, la prosa es mejor.

**Sé específico**: "Puede fallar en algunos casos" no ayuda. "Falla cuando el campo `userId` es null" sí ayuda.

## Qué documentar

| Qué | Dónde | Quién |
|-----|-------|-------|
| Cómo usar un servicio o módulo | README del repo | Dev que lo construyó |
| Por qué se tomó una decisión de arquitectura | ADR | Tech Lead / Architect |
| Contrato de una API | OpenAPI / tipos TypeScript | Dev que expone la API |
| Proceso del equipo | Este handbook | Quien lo define |
| Runbook de incidente | Sección de observabilidad | Dev + Tech Lead |

## Qué no documentar

- Cosas que el código ya explica claramente
- Decisiones temporales que van a cambiar pronto (mejor un TODO con ticket)
- Detalles de implementación que solo importan mientras estás escribiendo el código

## Estructura recomendada para un README

```markdown
# Nombre del servicio

Una línea que explica qué hace.

## Cómo correrlo localmente

Pasos concretos, sin asumir contexto.

## Variables de entorno

Tabla con nombre, descripción y si es requerida.

## Cómo deployar

O link a donde está documentado.

## Decisiones de diseño relevantes

Links a ADRs si existen.
```

## Cuándo documentar

Al mismo tiempo que escribes el código, no después. La documentación que se deja para después no se escribe.

Si una feature no está documentada, no cumple el [Definition of Done](/handbook/ways-of-working/definition-of-ready-done).
