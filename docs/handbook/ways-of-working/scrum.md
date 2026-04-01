---
sidebar_position: 1
title: Scrum & Agile Model
---

Cómo practicamos Scrum y el modelo ágil en ACITY: estructura organizacional, roles, eventos y flujos de trabajo para entregar valor de forma continua.

## Modelo Operativo Ágil

Nuestro modelo ágil se organiza en torno a **Value Streams** (flujos de valor) que transforman demanda estratégica en impacto medible. Cada Value Stream es un sistema integrado con liderazgo claro, ejecución coordinada y soporte transversal.

### Principios clave

- **Orientación a valor end-to-end**: El trabajo se organiza por flujos de valor y resultados de negocio, no por proyectos o silos
- **Equipos estables**: Los equipos permanecen en el tiempo, acumulan conocimiento del dominio y reducen dependencias
- **Liderazgo compartido**: Negocio, tecnología y agilidad comparten responsabilidad sobre los resultados
- **Mejora continua**: Se optimiza el Value Stream completo para acelerar la entrega de valor
- **Entrega incremental**: Los equipos entregan valor de forma incremental y continua (Sprints)

---

## Estructura Organizacional

### Value Stream (Flujo de Valor)

Un Value Stream organiza personas y capacidades en torno a la entrega continua de valor a un cliente o segmento específico, asegurando foco, fluidez y responsabilidad clara por el impacto en el negocio.

**Checklist de activación de un Value Stream:**
- [ ] Segmento de cliente o línea de negocio claramente definida
- [ ] Flujo de valor identificable de punta a punta (desde idea hasta resultado)
- [ ] Product Manager definido con ownership sobre todo el VS
- [ ] Backlog único y priorizado que represente el valor del flujo completo
- [ ] Objetivos estratégicos y métricas de negocio explícitas (OKRs / KPIs)
- [ ] Capacidad dedicada o priorizada en equipos de Discovery & Delivery
- [ ] Habilitadores definidos (Facilitadores, Project Manager, etc.)

### Triada de Liderazgo del Value Stream

La gobernanza se sostiene en una triada que equilibra estrategia, priorización y ejecución:

| Rol | Responsabilidades |
|-----|------------------|
| **Product Manager** | Gestiona y estructura la demanda. Define la hoja de ruta del Producto y prioriza el backlog del VS según objetivos de negocio. Canaliza necesidades de stakeholders. Valida que el valor entregado cumpla objetivos esperados. |
| **Arquitecto de Solución** | Define la estrategia técnica y arquitectura de la solución del VS. Asegura coherencia técnica end-to-end y calidad de la solución. Acompaña a equipos en decisiones técnicas clave. |
| **Agile Coach** | Diseña y cuida el modelo operativo ágil del VS. Acompaña a equipos y líderes en prácticas ágiles y mejora continua. Mejora el flujo de valor mediante métricas, feedback y ajustes del sistema de trabajo. |

### Equipos de Discovery & Delivery

Equipos multidisciplinarios estables orientados a productos o capacidades estratégicas:

- **Composición**: Backend, Frontend, QA, Líder Técnico, entre otros
- **Capacidad**: Dedicada y enfoque de largo plazo
- **Responsabilidad**: Evolución continua del producto o capacidad
- **Autonomía**: Se autoorganizan para cumplir objetivos del equipo y del Value Stream

### Habilitadores

Especialistas que trabajan de manera transversal y parcial con múltiples equipos:

- **Facilitador Ágil (FA)**: Protege el Sprint Goal, elimina impedimentos, facilita eventos, hace visibles problemas del sistema
- **Gestor Ágil de Proyecto (GAP)**: Orquesta stakeholders externos, escala riesgos organizacionales, asegura alineamiento con áreas no ágiles
- **Product Owner (PO)**: Gestiona el backlog del equipo, refina necesidades, prioriza trabajo, valida incrementos

### Chapters

Capa organizacional orientada a alineación técnica y desarrollo de capacidades:

- **Agrupación**: Por disciplina (Frontend, Backend, QA, Liderazgo Técnico)
- **Propósito**: Definir estándares, promover buenas prácticas, asegurar consistencia técnica
- **Responsabilidad del Chapter Lead**: Desarrollar al Chapter, asegurar excelencia técnica, facilitar mentoring, impulsar innovación

---

## Flujos de Trabajo (Kanban)

El flujo de trabajo define cómo los ítems (épicas, features, enablers, historias) avanzan desde una idea hasta su entrega en producción.

### Flujo de Épicas

**Estados:**

1. **Ideas** → Iniciativas identificadas, sin análisis detallado
2. **Refinamiento** → Se analiza la iniciativa para definir hipótesis de valor, alcance y viabilidad
   - **Política de salida**: Hipótesis de negocio definida, épica aprobada por Sponsor/PM
3. **Implementación** → La épica se ejecuta mediante Features y Habilitadores
   - **Política de salida**: Validación del Product Manager
4. **Terminado** → La iniciativa ha sido completada y su valor validado

### Flujo de Features / Habilitadores

**Estados:**

1. **Backlog** → Ítems identificados y priorizados, pendientes de detalle
2. **En Refinamiento** → Se detallan y preparan para implementación
   - **Política de salida**: Definición clara, desglose de historias, owner definido, aprobación del PM
3. **En Implementación** → Desarrollo activo mediante historias
   - **Política de salida**: Validación del Product Manager
4. **Terminado** → Entregado, integrado y listo para usar

### Flujo de Historias

**Estados:**

1. **Por hacer** → Historias priorizadas, listas para el equipo
2. **En Progreso** → Desarrollo en curso
3. **En QA** → Validación funcional y técnica
4. **Certificado por QA** → Cumple criterios de calidad
5. **Validado por PO** → Cumple valor esperado y criterios de aceptación
6. **Terminado** → Desplegado en producción

### Reglas clave del flujo

- No avanzar sin cumplir políticas de salida de cada estado
- Limitar trabajo en progreso (especialmente en historias)
- Priorizar terminar sobre empezar
- Hacer visibles bloqueos
- Todo debe ser trazable de punta a punta

---

## Sprints

Trabajamos en sprints de **2 semanas**. El sprint empieza el lunes y termina el viernes de la segunda semana.

**La duración es fija.** Si algo no entra en el sprint, se mueve al siguiente o se renegocia el alcance, no se extiende el sprint.

---

## Eventos Ágiles

### Planificación Conjunta (PI Planning)

**Propósito**: Alinear a equipos y stakeholders en objetivos, prioridades y compromisos del PI (Program Increment).

- **Participantes**: Triada del VS, Team Members, Habilitadores, Stakeholders clave
- **Frecuencia**: Trimestral
- **Duración**: 4 horas
- **Resultado**: Plan del Q por equipo orientado a objetivos, dependencias mapeadas

**Agenda:**
1. Objetivos y contexto del PI
2. Prioridades del Value Stream
3. Objetivos preliminares por equipos
4. Dependencias y riesgos
5. Ajustes de alcance y secuencia
6. Compromisos y cierre

### Sprint Planning

- **Cuándo**: Primer lunes del sprint, mañana
- **Duración**: Máximo 2 horas
- **Objetivo**: Acordar qué entra en el sprint y cómo se va a hacer
- **Quién**: Todo el equipo + PO
- **Output**: Sprint backlog con tareas estimadas y asignadas

### Daily Standup

- **Cuándo**: Todos los días, misma hora
- **Duración**: Máximo 15 minutos
- **Formato**: ¿Qué hice ayer? ¿Qué voy a hacer hoy? ¿Hay algún bloqueo?
- **Regla**: El daily es para sincronizar, no para reportar. Si algo necesita más de 2 minutos, se resuelve después

### Sincro de POs (Value Stream)

**Propósito**: Alinear prioridades de backlog entre equipos para cumplir objetivos del PI y gestionar dependencias.

- **Participantes**: POs, PM
- **Frecuencia**: Semanal
- **Duración**: 60 minutos
- **Resultado**: Prioridades de backlog alineadas, dependencias acordadas

### Sincro de Triada (Value Stream)

**Propósito**: Tomar decisiones rápidas de producto, técnica y forma de trabajo para proteger el flujo de valor.

- **Participantes**: PM, Arquitecto de Solución, Agile Coach
- **Frecuencia**: Quincenal
- **Duración**: 30 minutos
- **Resultado**: Decisiones accionables, bloqueos priorizados, foco claro

### Sprint Review

- **Cuándo**: Último viernes del sprint, tarde
- **Duración**: 1 hora
- **Objetivo**: Mostrar lo que se construyó y recoger feedback
- **Quién**: Todo el equipo + stakeholders relevantes

### Demo (Value Stream)

**Propósito**: Validar el valor entregado por el Value Stream frente a los objetivos del PI.

- **Participantes**: Triada del VS, Triada de Teams, Team Members, Stakeholders, Usuarios
- **Frecuencia**: Cierre del PI (o mensual si requiere validación frecuente)
- **Duración**: 90–120 minutos
- **Resultado**: Feedback validado, decisiones de continuidad/ajuste/descarte

### Retrospectiva

- **Cuándo**: Último viernes del sprint, después del review
- **Duración**: 1 hora
- **Objetivo**: Identificar qué funcionó, qué no y qué vamos a cambiar
- **Regla**: Al menos un action item concreto por retro, con dueño y fecha

### Retro (Value Stream)

**Propósito**: Identificar y priorizar mejoras end-to-end del Value Stream.

- **Participantes**: Triada del VS, Teams, Team Members, Habilitadores, Stakeholders clave
- **Frecuencia**: Trimestral (cierre del PI)
- **Duración**: 2–3 horas
- **Resultado**: Mejoras priorizadas, experimentos definidos, acuerdos para el siguiente PI

### Refinamiento

- **Cuándo**: Mitad del sprint
- **Duración**: 1 hora
- **Objetivo**: Preparar el backlog para el próximo sprint: clarificar, estimar y priorizar

---

## Prácticas Ágiles

### Redacción de Épicas, Features e Historias

Una estructura clara asegura que el trabajo esté alineado a valor, con entendimiento común entre negocio, producto y tecnología.

#### Épica

```
Nombre: Corto, claro y orientado a valor

Descripción:
- Contexto actual
- Problema u oportunidad
- Impacto en negocio/usuario

Hipótesis de negocio:
Creemos que [acción]
Generará [resultado]
Para [usuario/segmento]
Se medirá con [métricas]

Beneficios esperados: Valor de negocio (ingresos, ahorro, eficiencia, NPS, etc.)

Métricas de éxito:
- Leading indicators
- Lagging indicators

Alcance inicial: Lista de features a alto nivel

Supuestos: Qué asumimos que es cierto

Riesgos: Qué podría salir mal

Criterios de aceptación: Condiciones para dar la épica por cumplida
```

#### Feature / Enabler

```
Nombre: Claro y orientado a valor

Descripción:
Como [usuario] quiero [función] para [beneficio]

Criterios de aceptación: 3–5 condiciones clave

Dependencias: Equipos / sistemas (si aplica)
```

#### Historia / Enabler

```
Nombre: Claro y orientado a valor

Descripción:
Como [usuario] quiero [función] para [beneficio]

Criterios de aceptación: 3–5 condiciones clave

Dependencias: Equipos / sistemas (si aplica)
```

### Estimación Relativa

La estimación relativa permite dimensionar el trabajo comparándolo con otros elementos, en lugar de estimarlo en tiempo exacto.

**Unidad**: Story Points (1, 2, 3, 5, 8)  
**Responsable**: Equipo de delivery  
**Momento**: Refinamiento o planificación de sprint

**Regla clave**: Si una historia supera los 8 puntos, debe ser dividida (slicing) antes de ser planificada.

#### Proceso de Estimación (3C)

**Card (Qué estamos estimando)**
- El PO presenta la historia
- Se comparten criterios de aceptación a nivel general
- El equipo entiende el objetivo y valor

**Conversation (Construimos entendimiento compartido)**
- El equipo conversa para aclarar dudas funcionales y técnicas
- Se utiliza una historia de referencia (pivot) como base de comparación
- Se consideran tres dimensiones:
  - **Complejidad**: Grado de dificultad técnica
  - **Esfuerzo**: Cantidad de trabajo necesario
  - **Incertidumbre**: Nivel de desconocimiento o riesgo

**Confirmation (Alineamos y cerramos)**
- El equipo estima usando Fibonacci (1, 2, 3, 5, 8, 13, 21)
- Si hay diferencias relevantes, se discuten supuestos y se busca entendimiento común

### Slicing (División de Historias)

Slicing es la práctica de dividir ítems grandes en partes más pequeñas, independientes y con valor.

**Cuándo aplicarlo:**
- Ítems > 8 puntos
- Alta incertidumbre
- Muchas dependencias
- No cabe en un sprint

**Qué debe cumplir un buen slice:**
- Tiene valor para el usuario (aunque sea parcial)
- Es independiente (no bloquea a otros)
- Se puede probar (criterios claros)
- Cabe en un sprint

**Técnica SPIDR:**

| Técnica | Descripción | Ejemplo |
|---------|------------|---------|
| **S – Spike** | Investigación para reducir incertidumbre | Investigar cómo integrar nuevo proveedor de pagos |
| **P – Paths** | Dividir por flujos alternativos o escenarios | Flujo feliz → Error de pago → Usuario abandona |
| **I – Interfaces** | Separar por tipo de interacción | API → Frontend → Notificación |
| **D – Data** | Dividir por tipo o volumen de datos | Apuestas simples → Combinadas → Historial |
| **R – Rules** | Separar por complejidad de reglas de negocio | Validar saldo → Límites → Reglas de fraude |

---

## Anti-patterns que evitamos

**Sprint como deadline fijo**: El sprint no es una promesa de entrega. Es una caja de tiempo para trabajar en lo más importante. Si algo no está listo, se habla, no se esconde.

**Daily como reporte de estado**: El daily no es para el EM ni para el PO. Es para el equipo. Si alguien está bloqueado, el equipo lo ayuda.

**Retro sin action items**: Una retro donde se habla pero no se cambia nada es tiempo perdido. Cada retro debe terminar con al menos un cambio concreto.

**Scope creep silencioso**: Si el PO agrega trabajo al sprint sin quitar algo, el equipo lo señala. El sprint tiene capacidad finita.

---

## Artefactos

### Program Board

El Program Board es un artefacto visual que permite planificar y visualizar la entrega de valor durante un Program Increment (PI).

**Muestra en una sola vista:**
- Las features / stories planificadas por iteración
- Las dependencias entre equipos
- Los hitos clave del PI

**Propósito:**
- Identificar y gestionar dependencias (predecesor / sucesor)
- Facilitar conversaciones de sincronización entre equipos
- Detectar riesgos tempranos en la planificación
- Dar visibilidad del flujo de valor a nivel de programa

---

## Definición de Ready / Done

### Definition of Ready (DoR)

Una historia está lista para entrar al sprint cuando cumple:

- [ ] El objetivo de negocio está claro
- [ ] Los criterios de aceptación están escritos y son verificables
- [ ] Las dependencias están identificadas
- [ ] El diseño de UX está disponible (si aplica)
- [ ] La historia está estimada por el equipo
- [ ] No hay bloqueos conocidos que impidan empezarla

### Definition of Done (DoD)

Una historia está terminada cuando cumple:

- [ ] El código está mergeado a la rama principal
- [ ] Los tests unitarios e integración están escritos y pasan
- [ ] El código pasó code review con al menos un aprobador
- [ ] La feature funciona en el ambiente de staging
- [ ] Los criterios de aceptación fueron verificados por QA
- [ ] La documentación técnica está actualizada (si aplica)
- [ ] No hay deuda técnica nueva sin registrar
- [ ] El PO aceptó la historia

---

## Métricas Clave

**Lead Time**: Tiempo desde que una idea entra al backlog hasta que se entrega en producción.

**Throughput**: Cantidad de historias completadas por sprint.

**WIP (Work In Progress)**: Cantidad de trabajo en progreso. Debe limitarse para mejorar el flujo.

**Predictibilidad**: Capacidad del equipo de cumplir con lo que se comprometió en el sprint.

**Calidad**: Defectos encontrados en QA o producción.

---

## Referencia

- [Definition of Ready / Done](/handbook/ways-of-working/definition-of-ready-done)
- [Estimación](/handbook/ways-of-working/estimacion)
- [Priorización de Bugs](/handbook/ways-of-working/priorizacion-de-bugs)
- [Tech Debt](/handbook/ways-of-working/tech-debt)
