---
sidebar_position: 2
title: Gestión de Dependencias
---

Cómo auditamos, actualizamos y monitoreamos dependencias. Proceso para responder ante CVEs y criterios para aprobar nuevas librerías.

## Principio base

Las dependencias son código de terceros que corre en nuestros sistemas. Cada dependencia que agregamos es una superficie de ataque potencial y una deuda de mantenimiento.

Antes de agregar una dependencia, preguntarse: ¿realmente la necesitamos o podemos implementar esto nosotros mismos en menos tiempo del que vamos a invertir en mantener esta librería?

## Criterios para aprobar una nueva dependencia

1. **Mantenimiento activo**: ¿Tiene commits recientes? ¿Responden los issues?
2. **Comunidad**: ¿Tiene suficientes usuarios como para que los bugs se detecten rápido?
3. **Licencia**: ¿La licencia es compatible con nuestro uso? (MIT, Apache 2.0 son seguros; GPL puede ser problemático)
4. **Tamaño**: ¿El bundle size es razonable para lo que aporta?
5. **Alternativas**: ¿Ya tenemos algo que hace lo mismo?

## Auditoría de seguridad

Corremos `npm audit` (o equivalente) en cada PR y en CI. Los resultados se clasifican:

| Severidad | Acción |
|-----------|--------|
| Critical | Fix inmediato, bloquea el deploy |
| High | Fix en el sprint actual |
| Moderate | Fix en los próximos 2 sprints |
| Low | Registrar y priorizar según capacidad |

## Actualizaciones

- Las actualizaciones de patch y minor se hacen regularmente (al menos una vez por sprint)
- Las actualizaciones de major se planifican: se revisan los breaking changes y se testea antes de mergear
- Usamos Dependabot o Renovate para automatizar la detección de actualizaciones

## Respuesta ante CVEs

Cuando se publica un CVE que afecta a una de nuestras dependencias:

1. Evaluar si el vector de ataque aplica a nuestro uso
2. Si aplica: actualizar en menos de 48h para Critical/High, en el sprint para Moderate
3. Si no aplica: documentar por qué y monitorear si cambia la evaluación

## Dependencias abandonadas

Si una dependencia deja de tener mantenimiento activo:
1. Evaluar el riesgo (¿tiene CVEs sin parchear? ¿es una dependencia crítica?)
2. Buscar alternativa mantenida
3. Planificar la migración como deuda técnica con prioridad según el riesgo
