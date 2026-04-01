---
sidebar_position: 4
title: Proveedores Externos
---

Servicios y proveedores externos aprobados para usar en proyectos: criterios de evaluación, proceso de aprobación y gestión de licencias.

## Proveedores aprobados

### Infraestructura y cloud
| Proveedor | Uso |
|-----------|-----|
| AWS | Infraestructura principal |
| Vercel / Netlify | Deploy de frontends estáticos |
| Cloudflare | CDN, DNS, protección DDoS |

### Bases de datos y storage
| Proveedor | Uso |
|-----------|-----|
| PostgreSQL (RDS) | Base de datos relacional principal |
| Redis (ElastiCache) | Cache y sesiones |
| S3 | Almacenamiento de archivos |

### Observabilidad
| Proveedor | Uso |
|-----------|-----|
| Datadog / New Relic | APM y métricas |
| Sentry | Error tracking |
| PagerDuty | Alertas y on-call |

### Comunicación y notificaciones
| Proveedor | Uso |
|-----------|-----|
| SendGrid / SES | Email transaccional |
| Twilio | SMS y comunicaciones |

## Criterios para aprobar un nuevo proveedor

Antes de incorporar un proveedor externo, evaluar:

1. **Seguridad**: ¿Tiene SOC 2 o certificaciones equivalentes? ¿Cómo maneja los datos?
2. **Confiabilidad**: ¿Cuál es su SLA? ¿Tiene historial de outages?
3. **Costo**: ¿El modelo de pricing escala bien con nuestro uso?
4. **Vendor lock-in**: ¿Qué tan difícil es migrar si necesitamos cambiar?
5. **Soporte**: ¿Tiene soporte técnico accesible?

## Proceso de aprobación

1. El Dev o Tech Lead propone el proveedor con la evaluación de los criterios anteriores
2. El Architect revisa el impacto en la arquitectura
3. El EM revisa el impacto en costos y contratos
4. Si se aprueba, se agrega a esta lista y se documenta el caso de uso

## Gestión de licencias y contratos

- Los contratos con proveedores los gestiona el EM o quien tenga el rol de operaciones
- Las licencias de software se registran en el inventario del equipo
- Las renovaciones se revisan anualmente para evaluar si el proveedor sigue siendo la mejor opción
