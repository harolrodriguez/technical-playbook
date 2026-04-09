---
sidebar_position: 1
title: Agilidad *
---

# Agilidad

Cómo practicamos agilidad en el equipo. No seguimos Scrum al pie de la letra — tomamos lo que funciona y lo adaptamos a nuestra realidad.

---

## Principios que guían el trabajo

- El trabajo se organiza por valor, no por proyectos o silos
- Los equipos son estables y acumulan conocimiento del dominio
- Entregamos de forma incremental, no al final
- Priorizamos terminar sobre empezar
- Los problemas se hacen visibles, no se esconden

---

## Sprints

Trabajamos en sprints de **2 semanas**. Empiezan el lunes y terminan el viernes de la segunda semana.

La duración es fija. Si algo no entra, se mueve al siguiente sprint o se renegocia el alcance — el sprint no se extiende.

---

## Eventos

| Evento | Cuándo | Duración | Propósito |
|--------|--------|----------|-----------|
| Sprint Planning | Lunes de inicio, mañana | 2h máx | Acordar qué entra y cómo se hace |
| Daily Standup | Todos los días, misma hora | 15 min | Sincronizar, no reportar |
| Refinamiento | Mitad del sprint | 1h | Preparar el backlog del próximo sprint |
| Sprint Review | Viernes de cierre, tarde | 1h | Mostrar lo construido y recoger feedback |
| Retrospectiva | Viernes de cierre, después del review | 1h | Identificar qué cambiar |

**Reglas de los eventos:**
- El daily es del equipo, no para el EM ni el PO
- Cada retro termina con al menos un action item concreto con dueño y fecha
- El review incluye stakeholders relevantes, no solo el equipo

---

## Flujo de trabajo

Los ítems avanzan por estados con políticas de salida claras. No se avanza sin cumplirlas.

**Historias:**
`Por hacer` → `En Progreso` → `En QA` → `Certificado por QA` → `Validado por PO` → `Terminado`

**Features:**
`Backlog` → `En Refinamiento` → `En Implementación` → `Terminado`

**Reglas:**
- Limitar el WIP — el trabajo en progreso tiene un tope
- Los bloqueos se hacen visibles de inmediato
- Todo es trazable de historia a feature a épica

---

## Anti-patterns que evitamos

**Sprint como deadline**: El sprint no es una promesa de entrega. Si algo no está listo, se habla.

**Daily como reporte**: Si alguien está bloqueado, el equipo lo ayuda — no es un check-in para el manager.

**Retro sin cambios**: Una retro donde se habla pero no se cambia nada es tiempo perdido.

**Scope creep silencioso**: Si el PO agrega trabajo sin quitar algo, el equipo lo señala.

---

## Métricas que miramos

- **Lead Time** — desde que entra al backlog hasta producción
- **Throughput** — historias completadas por sprint
- **WIP** — trabajo en progreso activo
- **Predictibilidad** — qué tan bien cumplimos lo que comprometimos
- **Calidad** — defectos encontrados en QA o producción

---

## Ver también

- [Estimación](./estimacion)
- [Slicing de Historias](./slicing)
- [Priorización de Bugs](./priorizacion-de-bugs)
- [Tech Debt](./tech-debt)
