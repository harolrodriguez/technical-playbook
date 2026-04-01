---
sidebar_position: 2
title: Métricas de Calidad
---

Métricas que usamos para medir la salud del código: cobertura de tests, deuda técnica, bugs escapados a producción y cómo actuar sobre ellas.

## Cobertura de tests

**Objetivo**: 80% de cobertura en código de negocio crítico.

La cobertura es un indicador, no un objetivo en sí mismo. Un 80% con tests que realmente validan comportamiento es mejor que un 95% con tests que solo ejecutan código sin assertions útiles.

Lo que sí importa:
- Los happy paths están cubiertos
- Los edge cases conocidos tienen tests
- Los errores y excepciones tienen tests
- El código nuevo no baja la cobertura existente

## Bugs escapados a producción

**Qué medimos**: Bugs reportados por usuarios o detectados en producción que deberían haber sido capturados en testing.

**Por qué importa**: Un bug escapado es costoso: afecta usuarios, requiere hotfix urgente y genera desconfianza. Más importante que el número es entender por qué escapó.

**Proceso**: Cada bug P0 o P1 en producción tiene un análisis de causa raíz: ¿por qué no lo detectamos antes? ¿Qué test faltaba? ¿Qué parte del proceso falló?

## Deuda técnica

**Qué medimos**: Número de ítems de deuda registrados y tendencia (¿está creciendo o bajando?).

No medimos la deuda en horas o puntos de forma absoluta, sino la tendencia. Si la deuda crece sprint a sprint sin que se pague, es una señal de alerta.

Ver [Tech Debt](/handbook/ways-of-working/tech-debt) para el proceso completo.

## Tiempo de build y tests

**Objetivo**: El pipeline de CI completo en menos de 10 minutos.

Un pipeline lento desincentiva el feedback rápido. Si los tests tardan 30 minutos, los Devs los corren menos y los problemas se detectan más tarde.

Si el pipeline supera los 10 minutos, se prioriza optimizarlo.

## Revisión de métricas

Las métricas de calidad se revisan en la retrospectiva mensual junto con las DORA metrics. El Tech Lead es responsable de presentar el estado y proponer acciones si alguna métrica está fuera de rango.
