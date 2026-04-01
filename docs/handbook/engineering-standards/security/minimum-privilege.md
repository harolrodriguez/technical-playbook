---
sidebar_position: 3
title: Minimum Privilege
---

Principio de mínimo privilegio: cómo otorgar solo los permisos necesarios y nada más.

## Principio

Cada usuario, servicio o proceso debe tener **solo los permisos que necesita** para hacer su trabajo. Nada más.

Esto reduce el daño si algo se compromete.

## En el código

### Variables de entorno

No expongas secrets innecesariamente:

```typescript
// ❌ Malo: Expone el secret en el cliente
const API_KEY = process.env.STRIPE_SECRET_KEY;

// ✅ Bueno: Solo en el servidor
const stripeSecret = process.env.STRIPE_SECRET_KEY;
// El cliente nunca lo ve
```

### Permisos de archivos

```bash
# ❌ Malo: Todos pueden leer
chmod 644 .env

# ✅ Bueno: Solo el propietario
chmod 600 .env
```

### Acceso a base de datos

```sql
-- ❌ Malo: Usuario con todos los permisos
GRANT ALL ON *.* TO 'app'@'localhost';

-- ✅ Bueno: Solo permisos necesarios
GRANT SELECT, INSERT, UPDATE ON database.* TO 'app'@'localhost';
```

## En infraestructura

### IAM (Identity and Access Management)

Otorga roles específicos, no acceso total:

```yaml
# ❌ Malo
Role: Administrator

# ✅ Bueno
Role: ReadOnlyS3Access
Role: CloudWatchLogsWrite
```

### Secretos en CI/CD

Solo expone secrets a jobs que los necesitan:

```yaml
# GitHub Actions
jobs:
  deploy:
    environment: production
    secrets:
      STRIPE_KEY: ${{ secrets.STRIPE_KEY }}
```

## En equipos

### Acceso a repositorios

- **Developers**: Push a `develop`, PR a `main`
- **Tech Lead**: Merge a `main`
- **DevOps**: Deploy a producción

No des acceso a todos a todo.

### Acceso a datos

- **Frontend**: Datos públicos
- **Backend**: Datos necesarios para la lógica
- **QA**: Datos de prueba, no datos reales

## Auditoría

Revisa regularmente quién tiene acceso a qué:

```bash
# AWS
aws iam list-users
aws iam list-attached-user-policies --user-name username

# GitHub
gh api repos/org/repo/collaborators
```

## Evitar problemas comunes

**Problema: Alguien tiene acceso que ya no necesita**  
Solución: Revisa accesos regularmente. Revoca lo que no se usa.

**Problema: Todos tienen acceso a production**  
Solución: Limita a Tech Lead y DevOps. Otros usan staging.

**Problema: Secrets expuestos en logs**  
Solución: Redacta secrets en logs. Usa herramientas de masking.

## Referencia

- [Secrets Management](/handbook/engineering-standards/security/secrets-management)
- [Dependency Scanning](/handbook/engineering-standards/security/dependency-scanning)
