---
sidebar_position: 1
---

# GitOps

GitOps es una infraestructura basada en código y procedimientos operativos que utilizan Git como sistema de control de código fuente. Es una evolución de la infraestructura como código (IaC) y una práctica recomendada de DevOps.

## ¿Qué es GitOps?

GitOps es la práctica de usar solicitudes de incorporación de cambios de Git para verificar e implementar automáticamente modificaciones en la infraestructura del sistema.

En esencia, GitOps garantiza que la infraestructura en la nube de un sistema se pueda reproducir de inmediato en función del estado de un repositorio de Git.

## Principios de GitOps

### 1. Git como fuente única de verdad

El repositorio de Git contiene la definición completa del estado deseado de la infraestructura.

### 2. Solicitudes de incorporación de cambios para cambios

Todos los cambios en la infraestructura se realizan a través de solicitudes de incorporación de cambios (pull requests).

### 3. Sincronización automática

La infraestructura se sincroniza automáticamente con el estado del repositorio.

### 4. Auditoría completa

Todos los cambios quedan registrados en el historial de Git.

## Flujo de trabajo de GitOps

```
1. Desarrollador hace cambios en el código de infraestructura
2. Crea una solicitud de incorporación de cambios
3. Revisión y aprobación
4. Fusión en la rama principal
5. Sistema de CI/CD detecta el cambio
6. Valida y prueba los cambios
7. Implementa automáticamente en la infraestructura
8. Infraestructura se sincroniza con el repositorio
```

## Ventajas de GitOps

### 1. Reproducibilidad

La infraestructura se puede reproducir de inmediato basándose en el estado del repositorio.

### 2. Auditoría

Todos los cambios quedan registrados en el historial de Git con quién, cuándo y por qué.

### 3. Reversión rápida

Si algo sale mal, puedes revertir a un estado anterior simplemente revirtiendo un commit.

### 4. Colaboración

Los cambios se revisan antes de implementarse, mejorando la calidad.

### 5. Automatización

Los cambios se implementan automáticamente sin intervención manual.

## Herramientas de GitOps

### Kubernetes

- **ArgoCD**: Sincronización continua de aplicaciones
- **Flux**: Operador de GitOps para Kubernetes

### Terraform

- **Terraform Cloud**: Gestión de estado y ejecución remota
- **Atlantis**: Automatización de Terraform con pull requests

### Otros

- **Pulumi**: Infraestructura como código en lenguajes de programación
- **CloudFormation**: Infraestructura como código para AWS

## Ejemplo de GitOps con Kubernetes

```yaml
# deployment.yaml en el repositorio
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-aplicacion
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-aplicacion
  template:
    metadata:
      labels:
        app: mi-aplicacion
    spec:
      containers:
      - name: mi-aplicacion
        image: mi-imagen:v1.0.0
        ports:
        - containerPort: 8080
```

Cuando cambias la versión de la imagen a `v1.0.1` y fusionas el cambio, ArgoCD automáticamente:
1. Detecta el cambio
2. Valida el manifiesto
3. Implementa la nueva versión
4. Verifica que el estado coincida con el repositorio

## Mejores prácticas de GitOps

### 1. Mantén el repositorio limpio

- Usa ramas para cambios
- Revisa todos los cambios antes de fusionar
- Mantén un historial limpio

### 2. Automatiza todo

- Validación de cambios
- Pruebas de infraestructura
- Implementación

### 3. Monitoreo y alertas

- Monitorea la sincronización
- Alerta si la infraestructura se desvía del estado deseado
- Registra todos los cambios

### 4. Seguridad

- Usa RBAC para controlar quién puede hacer cambios
- Requiere aprobación para cambios críticos
- Audita todos los cambios

## Resumen

- GitOps usa Git como fuente única de verdad para la infraestructura
- Los cambios se realizan a través de solicitudes de incorporación de cambios
- La infraestructura se sincroniza automáticamente
- Proporciona auditoría completa y reversión rápida
- Es especialmente útil con Kubernetes y otras plataformas en la nube

---

**Fuente**: [Atlassian - GitOps](https://www.atlassian.com/es/git/tutorials/gitops)
