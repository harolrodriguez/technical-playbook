---
sidebar_position: 4
title: Incidentes de Seguridad
---

Cómo respondemos ante un incidente de seguridad. La velocidad de respuesta importa — cada minuto cuenta cuando hay una brecha activa.

---

## Qué es un incidente de seguridad

- Secret o credencial expuesta (en repo, logs, Slack, etc.)
- Acceso no autorizado a sistemas o datos
- Vulnerabilidad crítica explotable en producción
- Comportamiento anómalo que sugiere compromiso

---

## Proceso de respuesta

**1. Contener** — Actuar primero, investigar después.
- Revocar o rotar el secret/credencial comprometida
- Revocar accesos sospechosos
- Si hay brecha activa: aislar el sistema afectado

**2. Notificar** — Avisar al Tech Lead y al EM inmediatamente. No esperar a tener toda la información.

**3. Investigar** — Una vez contenido:
- Revisar logs para detectar uso no autorizado
- Determinar el alcance — qué datos o sistemas fueron afectados
- Identificar cómo ocurrió

**4. Remediar** — Corregir la causa raíz, no solo el síntoma.

**5. Documentar** — Registrar qué pasó, cómo se respondió y qué se cambia para que no vuelva a ocurrir.

---

## Secret expuesto en el repositorio

1. Rotar el secret inmediatamente — aunque el repo sea privado
2. Notificar al Tech Lead y al EM
3. Revisar el historial de git para entender desde cuándo estuvo expuesto
4. Revisar logs de uso del secret
5. Limpiar el historial si es necesario (`git filter-branch` o BFG)
6. Documentar el incidente

---

## Ver también

- [Secrets y Variables de Entorno](./secrets-management)
- [Mínimo Privilegio](./minimo-privilegio)
