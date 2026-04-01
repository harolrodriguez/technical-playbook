---
sidebar_position: 1
title: DORA Metrics
---

Las cuatro métricas de DORA (Deployment Frequency, Lead Time, MTTR, Change Failure Rate), qué miden y cómo las usamos para mejorar como equipo.

## Por qué DORA

Las métricas DORA son el estándar de la industria para medir la performance de equipos de ingeniería. No miden velocidad de escritura de código; miden qué tan bien el equipo entrega valor de forma confiable.

Son un diagnóstico, no un objetivo en sí mismas. Si una métrica está mal, hay que entender por qué, no solo mejorar el número.

## Las cuatro métricas

### Deployment Frequency
**Qué mide**: Con qué frecuencia el equipo deploya a producción.

**Por qué importa**: Los equipos que deplovan frecuentemente tienen ciclos de feedback más cortos, menos riesgo por deploy y más confianza en su proceso.

**Niveles de referencia**:
- Elite: múltiples veces al día
- High: entre una vez al día y una vez a la semana
- Medium: entre una vez a la semana y una vez al mes
- Low: menos de una vez al mes

### Lead Time for Changes
**Qué mide**: Tiempo desde que un commit se hace hasta que está en producción.

**Por qué importa**: Un lead time largo indica fricción en el proceso: PRs que tardan en revisarse, pipelines lentos, procesos de aprobación pesados.

**Niveles de referencia**:
- Elite: menos de 1 hora
- High: entre 1 día y 1 semana
- Medium: entre 1 semana y 1 mes
- Low: más de 1 mes

### Mean Time to Recovery (MTTR)
**Qué mide**: Tiempo promedio para recuperarse de un incidente en producción.

**Por qué importa**: Los incidentes van a ocurrir. Lo que diferencia a los equipos es qué tan rápido los detectan y resuelven.

**Niveles de referencia**:
- Elite: menos de 1 hora
- High: menos de 1 día
- Medium: entre 1 día y 1 semana
- Low: más de 1 semana

### Change Failure Rate
**Qué mide**: Porcentaje de deploys que causan un incidente o requieren rollback.

**Por qué importa**: Una tasa alta indica problemas en testing, en el proceso de review o en la calidad del código.

**Niveles de referencia**:
- Elite: 0-15%
- High: 16-30%
- Medium/Low: más de 30%

## Cómo las usamos

Revisamos las métricas DORA mensualmente en la retrospectiva del equipo. No para presionar, sino para identificar qué parte del proceso tiene más fricción y dónde invertir para mejorar.

Si una métrica está en nivel Low o Medium, se abre una conversación sobre las causas raíz, no sobre los números.
