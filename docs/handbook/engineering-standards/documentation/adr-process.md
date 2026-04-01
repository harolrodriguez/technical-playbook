---
sidebar_position: 2
title: ADR Process
---

Cómo documentar decisiones arquitectónicas: qué es un ADR, cuándo escribir uno y cómo hacerlo.

## Qué es un ADR

Un ADR (Architecture Decision Record) es un documento que registra una decisión arquitectónica importante, el contexto, las alternativas consideradas y las consecuencias.

## Cuándo escribir un ADR

Escribe un ADR cuando:
- Tomas una decisión que afecta múltiples equipos
- Eliges entre múltiples opciones técnicas
- Estableces un patrón que otros seguirán
- Cambias una decisión anterior

**No escribas ADR para**:
- Decisiones menores (qué variable usar)
- Cambios de implementación (refactors)
- Decisiones temporales

## Estructura

```markdown
# ADR-001: Usar PostgreSQL como base de datos principal

## Status
Accepted

## Context
Necesitamos elegir una base de datos para almacenar datos de usuarios.
Consideramos PostgreSQL, MongoDB y DynamoDB.

## Decision
Usaremos PostgreSQL porque:
- Soporte para transacciones ACID
- Mejor para datos relacionales
- Comunidad activa
- Costo predecible

## Alternatives Considered
- MongoDB: Flexible pero sin transacciones ACID
- DynamoDB: Serverless pero caro a escala

## Consequences
- Positivas: Transacciones confiables, queries complejas
- Negativas: Necesita mantenimiento, escalado vertical limitado
- Riesgos: Puede no escalar a millones de registros

## Follow-up
- Implementar replicación para alta disponibilidad
- Monitorear performance a medida que crece
```

## Campos

| Campo | Descripción |
|-------|------------|
| **Status** | Proposed, Accepted, Deprecated, Superseded |
| **Context** | Por qué necesitamos tomar esta decisión |
| **Decision** | Qué decidimos y por qué |
| **Alternatives** | Qué otras opciones consideramos |
| **Consequences** | Qué cambia como resultado |
| **Follow-up** | Qué necesita hacerse después |

## Ubicación

Guarda ADRs en `docs/adr/` con nombre `ADR-NNN-titulo.md`:

```
docs/
├── adr/
│   ├── ADR-001-postgresql-database.md
│   ├── ADR-002-react-framework.md
│   └── ADR-003-microservices-architecture.md
```

## Proceso

1. **Proponer**: Crea un ADR en status "Proposed"
2. **Discutir**: Comparte con el equipo, recopila feedback
3. **Aceptar**: Cambia status a "Accepted" después de consenso
4. **Implementar**: Ejecuta la decisión
5. **Revisar**: Después de 3-6 meses, verifica si sigue siendo válida

## Ejemplo completo

```markdown
# ADR-002: Usar React para Frontend

## Status
Accepted

## Context
Necesitamos elegir un framework para el frontend.
Consideramos React, Vue y Angular.

## Decision
Usaremos React porque:
- Comunidad más grande
- Mejor para componentes reutilizables
- Mejor performance
- Más ofertas de trabajo

## Alternatives Considered
- Vue: Más fácil de aprender pero comunidad más pequeña
- Angular: Más completo pero más complejo

## Consequences
- Positivas: Componentes reutilizables, performance, comunidad
- Negativas: Curva de aprendizaje, muchas librerías para elegir
- Riesgos: Cambios frecuentes en el ecosistema

## Follow-up
- Establecer estándares de componentes
- Crear guía de testing
- Evaluar librerías de estado (Redux, Zustand, etc.)
```

## Referencia

- [README Standards](/handbook/engineering-standards/documentation/readme-standards)
- [Inline Comments](/handbook/engineering-standards/documentation/inline-comments)
