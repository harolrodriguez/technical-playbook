---
sidebar_position: 2
title: Dependency Scanning
---

Cómo mantener las dependencias seguras: auditoría de vulnerabilidades, actualización de paquetes y gestión de riesgos.

## Auditoría de dependencias

### npm audit

Verifica vulnerabilidades conocidas en tus dependencias:

```bash
npm audit
```

Muestra vulnerabilidades con severidad (low, moderate, high, critical).

### Arreglar automáticamente

```bash
npm audit fix
```

Actualiza paquetes a versiones que arreglan vulnerabilidades.

### Auditoría en CI

Agrega a tu pipeline:

```bash
npm audit --audit-level=moderate
```

Falla si hay vulnerabilidades de severidad moderate o superior.

## Herramientas de scanning

| Herramienta | Propósito |
|-------------|----------|
| **npm audit** | Auditoría de dependencias npm |
| **Snyk** | Scanning continuo de vulnerabilidades |
| **Dependabot** | Actualizaciones automáticas de dependencias |
| **OWASP Dependency-Check** | Scanning de dependencias Java/Python |

## Dependabot

GitHub Dependabot actualiza automáticamente dependencias vulnerables.

### Configuración

Crea `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    reviewers:
      - "tech-lead"
```

Dependabot abrirá PRs automáticamente para actualizaciones.

## Política de actualización

**Crítico (CVSS 9-10)**: Actualizar inmediatamente, deployar en horas.

**Alto (CVSS 7-8.9)**: Actualizar en el sprint actual.

**Moderado (CVSS 4-6.9)**: Actualizar en el próximo sprint.

**Bajo (CVSS 0-3.9)**: Actualizar cuando sea conveniente.

## Evitar problemas comunes

**Problema: Dependencia vulnerable sin fix disponible**  
Solución: Usa `npm audit --fix --force` (con cuidado) o busca alternativa.

**Problema: Actualización rompe el código**  
Solución: Revisa el changelog. Actualiza en una rama y testea bien.

**Problema: Demasiadas vulnerabilidades**  
Solución: Prioriza por severidad. Actualiza las críticas primero.

## Referencia

- [Secrets Management](/handbook/engineering-standards/security/secrets-management)
- [Minimum Privilege](/handbook/engineering-standards/security/minimum-privilege)
