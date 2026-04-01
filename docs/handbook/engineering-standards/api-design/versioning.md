---
sidebar_position: 2
title: API Versioning
---

Estrategia de versionado de APIs: cómo evolucionar sin romper clientes existentes.

## Estrategia: URL versioning

Incluye la versión en la URL:

```
/api/v1/users
/api/v2/users
```

**Ventajas:**
- Claro y explícito
- Fácil de cachear
- Fácil de routear

**Desventajas:**
- Duplica código
- Requiere mantener múltiples versiones

## Alternativas

### Header versioning

```
GET /api/users
Accept: application/vnd.api+json;version=1
```

Menos común, más complejo.

### Query parameter

```
GET /api/users?version=1
```

Menos recomendado, puede causar problemas de caché.

## Ciclo de vida de una versión

1. **v1**: Versión actual, en producción
2. **v2**: Nueva versión, en desarrollo
3. **v1 + v2**: Ambas en producción (período de transición)
4. **v2**: Versión actual, v1 deprecada
5. **v2**: v1 removida después de 6-12 meses

## Deprecación

Cuando introduces una nueva versión:

1. Anuncia la deprecación con 6 meses de anticipación
2. Agrega headers de deprecación:

```
Deprecation: true
Sunset: Wed, 21 Dec 2024 23:59:59 GMT
Link: </api/v2/users>; rel="successor-version"
```

3. Loggea uso de versiones antiguas
4. Después del período, remueve la versión

## Cambios que requieren nueva versión

**Cambios que requieren v2:**
- Remover un campo
- Cambiar el tipo de un campo
- Cambiar la estructura de respuesta
- Cambiar el significado de un parámetro

**Cambios que NO requieren v2:**
- Agregar un campo nuevo (backward compatible)
- Agregar un parámetro opcional nuevo
- Agregar un nuevo endpoint

## Ejemplo

### v1 (actual)

```json
GET /api/v1/users/123
{
  "id": "123",
  "name": "Juan",
  "email": "juan@example.com"
}
```

### v2 (nueva)

Cambio: Separar `name` en `firstName` y `lastName`

```json
GET /api/v2/users/123
{
  "id": "123",
  "firstName": "Juan",
  "lastName": "Pérez",
  "email": "juan@example.com"
}
```

### Período de transición

Ambas versiones disponibles:

```
GET /api/v1/users/123  → Funciona (legacy)
GET /api/v2/users/123  → Funciona (nueva)
```

Con headers de deprecación en v1:

```
Deprecation: true
Sunset: Wed, 21 Dec 2024 23:59:59 GMT
Link: </api/v2/users/123>; rel="successor-version"
```

## Evitar problemas comunes

**Problema: Demasiadas versiones activas**  
Solución: Mantén máximo 2 versiones. Depreca agresivamente.

**Problema: Clientes no migran a nueva versión**  
Solución: Comunica bien. Ofrece herramientas de migración. Fija fecha de sunset.

**Problema: Cambios incompatibles sin nueva versión**  
Solución: Revisa en code review. Usa semantic versioning.

## Referencia

- [Response Structure](/handbook/engineering-standards/api-design/response-structure)
- Backend: [Breaking Changes](/backend/api-design/breaking-changes)
