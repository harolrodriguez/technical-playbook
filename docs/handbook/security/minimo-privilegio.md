---
sidebar_position: 2
title: Mínimo Privilegio
---

Cada persona, servicio o proceso debe tener acceso únicamente a los recursos que necesita para hacer su trabajo, y nada más. Esto reduce el daño si algo se compromete.

Aplica a: acceso de personas a sistemas y repositorios, permisos de servicios en la nube, acceso de aplicaciones a bases de datos, tokens y API keys.

---

## Acceso de personas

**Cómo solicitar acceso:**
1. Identificar exactamente qué recurso se necesita y para qué
2. Solicitar al EM o responsable del sistema
3. Se otorga con el nivel mínimo necesario (lectura si no se necesita escritura)

**Revisión periódica:** cada 6 meses. Si alguien cambió de rol o salió del equipo, sus accesos se revocan inmediatamente.

**Offboarding:** el EM es responsable de revocar todos los accesos el mismo día — GitHub, AWS, bases de datos, herramientas SaaS, gestores de secrets.

---

## Acceso de servicios

Los servicios en producción usan roles con permisos específicos, no credenciales de usuario. Un servicio que solo lee de una tabla no debe tener permisos de escritura.

En AWS se implementa con IAM roles de mínimo privilegio. Nunca se usan access keys de usuario IAM en producción.

```yaml
# ❌ Malo
Role: Administrator

# ✅ Bueno
Role: ReadOnlyS3Access
Role: CloudWatchLogsWrite
```

---

## Acceso a datos de producción

El acceso directo a producción es excepcional, no rutinario:
1. Solicitar acceso temporal con justificación
2. Se otorga con permisos de solo lectura
3. Se registra qué se consultó y por qué
4. El acceso se revoca al terminar

---

## Tokens y API keys

- Cada servicio tiene su propio token — no se comparten
- Los tokens tienen el scope mínimo necesario
- Se rotan periódicamente o ante sospecha de compromiso

---

## En el código

```typescript
// ❌ Expone el secret en el cliente
const API_KEY = process.env.STRIPE_SECRET_KEY;

// ✅ Solo en el servidor
const stripeSecret = process.env.STRIPE_SECRET_KEY;
```

```sql
-- ❌ Usuario con todos los permisos
GRANT ALL ON *.* TO 'app'@'localhost';

-- ✅ Solo permisos necesarios
GRANT SELECT, INSERT, UPDATE ON database.* TO 'app'@'localhost';
```
