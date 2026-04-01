---
sidebar_position: 5
title: Tech Debt
---

Cómo registramos, priorizamos y pagamos deuda técnica. La deuda no documentada no existe; la deuda sin plan de pago crece sola.

## Qué es deuda técnica

Deuda técnica es cualquier decisión de implementación que fue consciente o inconscientemente subóptima y que tendrá un costo futuro: más tiempo para agregar features, más bugs, más dificultad para entender el código.

No toda deuda es mala. A veces tomar un atajo deliberado para lanzar más rápido es la decisión correcta. Lo que no es aceptable es no registrarla.

## Tipos de deuda

**Deuda deliberada**: Se tomó un atajo a propósito. Se documenta en el momento con el contexto de por qué se hizo y cuándo se planea pagar.

**Deuda accidental**: Se descubre después. Código que nadie entiende, tests que no cubren casos importantes, arquitectura que creció sin diseño.

**Deuda de dependencias**: Librerías desactualizadas, versiones con CVEs conocidos, dependencias sin mantenimiento activo.

## Cómo registrar deuda

Cada ítem de deuda técnica se registra como un ticket en el backlog con:
- Descripción del problema
- Impacto actual (¿qué hace más lento o más frágil?)
- Esfuerzo estimado para resolverlo
- Riesgo de no resolverlo

Los comentarios `// TODO` en el código son válidos para deuda pequeña, pero deben tener un ticket asociado si el fix no es inmediato.

## Cómo priorizamos

La deuda técnica compite con las features por capacidad del equipo. El Tech Lead y el PO deciden juntos cuánta capacidad del sprint se dedica a deuda.

Criterios de priorización:
1. Deuda que bloquea features importantes
2. Deuda que genera bugs frecuentes
3. Deuda que hace el onboarding más difícil
4. Deuda que tiene riesgo de seguridad

## Presupuesto de deuda

Reservamos aproximadamente el **20% de la capacidad del sprint** para deuda técnica. Si la deuda acumulada es alta, ese porcentaje puede subir temporalmente.

Si el equipo nunca trabaja deuda técnica, la velocidad va a bajar con el tiempo. Si solo trabaja deuda, no entrega valor. El balance es la clave.
