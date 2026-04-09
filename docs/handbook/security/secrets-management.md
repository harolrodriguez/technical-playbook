---
sidebar_position: 1
title: Secrets y Variables de Entorno
---

Cómo manejar secrets, API keys y variables de entorno de forma segura. Qué nunca debe ir en el repositorio y cómo gestionarlo correctamente.

## Regla fundamental

**Ningún secret va en el repositorio.** Nunca. Ni en ramas de feature, ni en commits que "se van a revertir", ni en archivos que "están en .gitignore".

Si un secret llega al repositorio, se considera comprometido y debe rotarse inmediatamente, aunque el repo sea privado.

## Qué es un secret

- API keys y tokens de servicios externos
- Credenciales de base de datos
- Claves privadas (SSH, JWT, certificados)
- Contraseñas de cualquier tipo
- Tokens de acceso a infraestructura

## Cómo gestionar secrets

### En desarrollo local

Usar archivos `.env.local` o `.env` que están en `.gitignore`. El repositorio debe tener un `.env.example` con las variables necesarias pero sin valores reales.

```bash
# .env.example — esto SÍ va en el repo
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your-secret-here
STRIPE_API_KEY=sk_test_...
```

Los valores reales se obtienen del vault del equipo, no por Slack ni por email.

### En CI/CD

Los secrets se configuran como variables de entorno en el sistema de CI (GitHub Actions secrets, etc.). Nunca se hardcodean en los archivos de configuración del pipeline.

### En producción

Los secrets de producción se gestionan con un servicio dedicado (AWS Secrets Manager, HashiCorp Vault, etc.). Los servicios los leen en runtime, no los tienen hardcodeados.

## .gitignore obligatorio

Todo repositorio debe tener en `.gitignore`:

```
.env
.env.local
.env.*.local
*.pem
*.key
```

## Qué hacer si un secret se expone

1. Rotar el secret inmediatamente (no esperar a investigar)
2. Notificar al Tech Lead y al EM
3. Revisar los logs para detectar uso no autorizado
4. Documentar el incidente
5. Investigar cómo llegó al repo y corregir el proceso

La rotación va primero. La investigación va después.

## Auditoría

Periódicamente se auditan los repositorios con herramientas de detección de secrets (git-secrets, truffleHog). Si se encuentra algo, se sigue el proceso de exposición aunque sea antiguo.
