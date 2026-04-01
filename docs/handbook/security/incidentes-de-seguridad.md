---
sidebar_position: 4
title: Incidentes de Seguridad
---

Qué hacer ante un incidente de seguridad: cómo detectarlo, a quién notificar, cómo contenerlo y cómo documentarlo.

## Qué es un incidente de seguridad

- Acceso no autorizado a sistemas o datos
- Exposición de secrets o credenciales
- Brecha de datos de usuarios
- Comportamiento anómalo que sugiere compromiso
- Vulnerabilidad crítica explotable en producción

Ante la duda, tratar como incidente. Es mejor investigar y descartar que ignorar algo real.

## Respuesta inmediata (primeros 30 minutos)

### 1. Contener, no investigar primero
El primer objetivo es limitar el daño. Eso puede significar:
- Revocar credenciales comprometidas
- Deshabilitar un endpoint vulnerable
- Bloquear una IP o rango de IPs
- Hacer rollback de un deploy

No esperes a entender todo el alcance para contener.

### 2. Notificar
- Tech Lead y EM inmediatamente (Slack directo, no canal general)
- Si hay datos de usuarios comprometidos, el EM notifica a quien corresponda legalmente

### 3. Preservar evidencia
Antes de hacer cambios, capturar logs, screenshots y cualquier evidencia del incidente. Los logs se borran o rotan; hay que guardarlos.

## Investigación

Una vez contenido el incidente:
1. Determinar el vector de ataque: ¿cómo entró?
2. Determinar el alcance: ¿qué datos o sistemas fueron afectados?
3. Determinar el tiempo de exposición: ¿desde cuándo?
4. Identificar si hay otros vectores similares sin explotar

## Comunicación

- Comunicación interna: canal privado de incidente, no el canal general del equipo
- Comunicación externa: solo el EM o quien tenga el rol de comunicaciones
- No especular públicamente sobre el alcance hasta tener datos

## Post-incidente

Todo incidente de seguridad tiene un post-mortem. Ver [Post-mortems](/handbook/metrics/post-mortems).

El post-mortem de seguridad incluye adicionalmente:
- Análisis de si el incidente era prevenible
- Cambios de proceso o controles para evitar recurrencia
- Revisión de sistemas similares que podrían tener la misma vulnerabilidad
