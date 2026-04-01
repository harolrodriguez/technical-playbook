---
sidebar_position: 3
title: Mínimo Privilegio
---

Principio de mínimo privilegio aplicado al acceso de sistemas, servicios y datos. Cómo solicitamos, otorgamos y revocamos accesos.

## El principio

Cada persona, servicio o proceso debe tener acceso únicamente a los recursos que necesita para hacer su trabajo, y nada más.

Esto aplica a:
- Acceso de personas a sistemas y repositorios
- Permisos de servicios en la nube
- Acceso de aplicaciones a bases de datos
- Tokens y API keys

## Acceso de personas

### Cómo solicitar acceso
1. Identificar exactamente qué recurso se necesita y para qué
2. Solicitar al EM o al responsable del sistema
3. El acceso se otorga con el nivel mínimo necesario (lectura si no se necesita escritura, etc.)

### Revisión periódica
Los accesos se revisan cada 6 meses. Si alguien cambió de rol o dejó el equipo, sus accesos se revocan inmediatamente.

### Offboarding
Cuando alguien sale del equipo, el EM es responsable de que todos sus accesos se revoquen el mismo día. Esto incluye:
- GitHub
- AWS / cloud
- Bases de datos
- Herramientas SaaS
- Gestores de secrets

## Acceso de servicios

Los servicios en producción usan roles con permisos específicos, no credenciales de usuario. Un servicio que solo lee de una tabla de base de datos no debe tener permisos de escritura.

En AWS, esto se implementa con IAM roles con políticas de mínimo privilegio. Nunca se usan access keys de usuario IAM en producción.

## Acceso a datos de producción

El acceso directo a la base de datos de producción es excepcional, no rutinario. Para consultas de debugging o análisis:
1. Solicitar acceso temporal con justificación
2. El acceso se otorga con permisos de solo lectura
3. Se registra qué se consultó y por qué
4. El acceso se revoca al terminar

## Tokens y API keys

- Cada servicio o integración tiene su propio token, no comparten
- Los tokens tienen el scope mínimo necesario
- Los tokens se rotan periódicamente o cuando hay sospecha de compromiso
- Ver [Secrets y Variables](/handbook/security/secrets-y-variables) para el manejo seguro
