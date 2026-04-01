---
sidebar_position: 2
title: Herramientas Aprobadas
---

Listado de herramientas aprobadas por categoría. Usar herramientas fuera de esta lista requiere aprobación del Tech Lead o Architect.

## Editores

| Herramienta | Notas |
|-------------|-------|
| VS Code | Recomendado. Extensiones del equipo en `.vscode/extensions.json` |
| Cursor | Aprobado. Misma configuración que VS Code |
| JetBrains IDEs | Aprobado para quienes lo prefieran |

## Control de versiones

| Herramienta | Notas |
|-------------|-------|
| Git | Obligatorio |
| GitHub | Plataforma oficial del equipo |
| GitHub CLI (`gh`) | Recomendado para flujos de PR desde terminal |

## Runtime y lenguajes

| Herramienta | Versión | Notas |
|-------------|---------|-------|
| Node.js | LTS actual | Gestionar con nvm |
| TypeScript | 5.x | Obligatorio en proyectos nuevos |
| Python | 3.11+ | Para scripts y herramientas internas |

## Contenedores e infraestructura

| Herramienta | Notas |
|-------------|-------|
| Docker | Para servicios locales de infraestructura |
| Docker Compose | Para orquestar servicios locales |

## Testing

| Herramienta | Uso |
|-------------|-----|
| Vitest / Jest | Tests unitarios e integración |
| Playwright | Tests end-to-end |
| Postman / Bruno | Testing manual de APIs |

## Comunicación y gestión

| Herramienta | Uso |
|-------------|-----|
| Slack | Comunicación del equipo |
| Jira / Linear | Gestión de tareas (según el equipo) |
| Notion | Documentación no técnica |
| Figma | Diseño de UI |

## IA

Ver [Uso de IA](/handbook/tooling-and-setup/uso-de-ia) para la política completa.

## Cómo proponer una herramienta nueva

1. Evaluar si alguna herramienta existente resuelve el problema
2. Proponer al Tech Lead con: caso de uso, alternativas consideradas y trade-offs
3. Si tiene impacto en seguridad o costos, involucrar al Architect
4. Si se aprueba, agregar a esta lista con notas de uso
