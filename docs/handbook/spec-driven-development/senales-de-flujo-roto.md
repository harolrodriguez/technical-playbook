---
sidebar_position: 5
title: Mantenimiento del Flujo
---

El flujo funciona cuando se respeta la secuencia y se mantiene la trazabilidad. Aquí hay indicadores de que el flujo está funcionando bien y cómo mantenerlo.

## Indicadores de un flujo saludable

**Los casos Gherkin existen antes de implementar** — QA tiene todos los escenarios documentados. Backend y Frontend saben exactamente qué implementar.

**Cada caso Gherkin tiene un requerimiento EARS** — no hay ambigüedad sobre qué regla técnica cumple cada caso.

**Los requerimientos EARS están documentados en Swagger** — Backend expone exactamente lo que los casos necesitan.

**Los fixtures tienen trazabilidad** — cada fixture referencia su caso Gherkin y su requerimiento EARS.

**Frontend desarrolla contra fixtures** — no espera al Backend. Todos los estados de UI están cubiertos.

**QA prueba contra fixtures** — no depende de datos reales. Todos los escenarios son reproducibles.

**La integración es trivial** — cuando Backend y Frontend se conectan, todo funciona porque ambos respetaron el contrato.

## Cómo mantener el flujo

**Cuando QA escribe un nuevo caso Gherkin:**
1. Especificar todos los escenarios: happy path, errores, edge cases
2. Asociar con un requerimiento EARS
3. Verificar que el Swagger documenta lo que el caso necesita

**Cuando Backend actualiza el Swagger:**
1. Actualizar los tipos generados
2. Identificar qué fixtures se ven afectados (la trazabilidad lo hace evidente)
3. Actualizar los fixtures
4. Verificar que Frontend no tiene código que asuma la estructura anterior

**Cuando Frontend desarrolla:**
1. Usar los fixtures como fuente de verdad
2. Desarrollar todos los estados: loading, error, vacío, éxito
3. No hacer suposiciones sobre la estructura de datos

**Cuando QA automatiza:**
1. Usar los casos Gherkin como especificación
2. Probar contra los fixtures
3. Verificar que todos los escenarios están cubiertos

## Beneficio: el flujo se auto-mantiene

Con trazabilidad clara y tipos verificables:

- Los cambios en un lado se propagan automáticamente al otro
- TypeScript detecta inconsistencias antes de que causen problemas
- No hay sorpresas en integración
- El sistema escala sin fricción

El flujo no requiere vigilancia constante. Requiere disciplina inicial para establecer la trazabilidad, pero después se auto-mantiene.
