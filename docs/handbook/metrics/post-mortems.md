---
sidebar_position: 4
title: Post-mortems
---

Cómo hacemos post-mortems blameless: formato, quién participa, cómo documentar el incidente y cómo convertirlo en aprendizaje real.

## Qué es un post-mortem blameless

Un post-mortem blameless parte de la premisa de que los incidentes son fallas del sistema, no de las personas. Las personas toman decisiones razonables con la información que tienen en el momento. Si el sistema permite que esas decisiones lleven a un incidente, el sistema tiene un problema.

El objetivo no es encontrar al culpable. Es entender qué pasó y cómo evitar que vuelva a pasar.

## Cuándo hacer un post-mortem

- Todo incidente P0
- Incidentes P1 que afectaron a usuarios por más de 1 hora
- Cualquier incidente que el equipo considere que tiene aprendizajes importantes

## Quién participa

- El on-call que respondió el incidente
- El Tech Lead del área afectada
- Los Devs que trabajaron en el fix
- El EM (como facilitador, no como juez)
- Opcionalmente: stakeholders que necesiten entender el impacto

## Formato del post-mortem

### Resumen ejecutivo
Una o dos oraciones: qué pasó, cuánto duró, cuál fue el impacto.

### Timeline
Cronología de eventos con timestamps:
- Cuándo empezó el incidente
- Cuándo se detectó
- Cuándo se notificó
- Hitos de la investigación
- Cuándo se contuvo
- Cuándo se resolvió completamente

### Causa raíz
No el síntoma, sino la causa. Usar los "5 por qués" para llegar a la raíz:
- ¿Por qué falló el servicio? → Porque el disco estaba lleno
- ¿Por qué estaba lleno? → Porque los logs no se rotaban
- ¿Por qué no se rotaban? → Porque la configuración de logrotate estaba mal
- ¿Por qué estaba mal? → Porque no había un proceso de revisión de configuración de infraestructura

### Impacto
- Duración del incidente
- Usuarios afectados (número o porcentaje)
- Funcionalidades afectadas
- Impacto en negocio si es cuantificable

### Qué funcionó bien
Reconocer lo que el equipo hizo bien durante la respuesta. Esto es importante para reforzar esos comportamientos.

### Qué no funcionó
Sin culpar a personas. ¿Qué parte del proceso, herramienta o sistema falló?

### Action items
Cada post-mortem termina con action items concretos:
- Descripción del cambio
- Dueño (persona específica, no "el equipo")
- Fecha límite

Sin action items, el post-mortem es solo documentación. Con action items, es aprendizaje.

## Publicación

El post-mortem se publica internamente para todo el equipo de ingeniería. Los incidentes de un equipo son aprendizajes para todos.
