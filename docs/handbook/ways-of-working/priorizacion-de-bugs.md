---
sidebar_position: 4
title: Priorización de Bugs
---

Cómo clasificamos y priorizamos bugs por severidad e impacto. Incluye SLA de respuesta por tier y el proceso de escalamiento.

## Tiers de severidad

### P0 — Crítico
**Definición**: El sistema está caído o hay pérdida de datos en producción. Afecta a todos los usuarios o a una función core del negocio.

**Ejemplos**: API principal sin respuesta, datos corruptos, falla de autenticación generalizada.

**SLA**: Respuesta en menos de 30 minutos. Fix o mitigación en menos de 2 horas.

**Proceso**: Notificación inmediata al on-call, al Tech Lead y al EM. Se abre un canal de incidente. Todo lo demás se pausa.

### P1 — Alto
**Definición**: Feature importante degradada o rota para un subconjunto significativo de usuarios. Hay workaround pero es costoso.

**Ejemplos**: Falla en el flujo de pago para ciertos métodos, error en reportes para algunos usuarios.

**SLA**: Respuesta en menos de 2 horas. Fix en el mismo día o al día siguiente.

**Proceso**: Se asigna a un Dev inmediatamente. El Tech Lead está al tanto.

### P2 — Medio
**Definición**: Feature secundaria rota o comportamiento incorrecto que tiene workaround razonable.

**Ejemplos**: Filtro que no funciona correctamente, mensaje de error confuso, UI desalineada.

**SLA**: Entra al sprint actual o al siguiente según capacidad.

**Proceso**: Se crea el ticket con contexto suficiente y se prioriza en el próximo refinamiento.

### P3 — Bajo
**Definición**: Problema cosmético o de baja frecuencia que no afecta la funcionalidad.

**Ejemplos**: Typo en un mensaje, icono incorrecto, comportamiento inconsistente en edge case raro.

**SLA**: Se acumula en el backlog y se trabaja cuando hay capacidad.

## Proceso de reporte

Todo bug debe tener:
- Descripción del comportamiento actual vs esperado
- Pasos para reproducirlo
- Ambiente donde ocurre (producción, staging, local)
- Impacto estimado (cuántos usuarios, qué función)
- Screenshots o logs si están disponibles

Un bug sin pasos de reproducción no se puede trabajar. Se devuelve al reportante para que lo complete.

## Escalamiento

Si un bug P1 no tiene asignado en 2 horas, el EM escala. Si un P0 no tiene respuesta en 30 minutos, cualquier persona del equipo puede escalar directamente.
