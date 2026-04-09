---
sidebar_position: 3
title: Gestión de Dependencias
---

Las dependencias son código de terceros que corre en nuestros sistemas. Cada una es una superficie de ataque potencial y una deuda de mantenimiento.

Antes de agregar una dependencia: ¿realmente la necesitamos o podemos implementarlo nosotros en menos tiempo del que vamos a invertir en mantenerla?

---

## Criterios para aprobar una nueva dependencia

1. **Mantenimiento activo** — ¿Tiene commits recientes? ¿Responden los issues?
2. **Comunidad** — ¿Suficientes usuarios como para que los bugs se detecten rápido?
3. **Licencia** — MIT y Apache 2.0 son seguros. GPL puede ser problemático.
4. **Tamaño** — ¿El bundle size es razonable para lo que aporta?
5. **Alternativas** — ¿Ya tenemos algo que hace lo mismo?

---

## Auditoría de seguridad

Corremos `npm audit` (o equivalente) en cada PR y en CI.

```bash
# Verificar vulnerabilidades
npm audit

# Fix automático
npm audit fix

# En CI — falla si hay moderate o superior
npm audit --audit-level=moderate
```

| Severidad | Acción |
|-----------|--------|
| Critical (CVSS 9-10) | Fix inmediato, bloquea el deploy |
| High (CVSS 7-8.9) | Fix en el sprint actual |
| Moderate (CVSS 4-6.9) | Fix en los próximos 2 sprints |
| Low (CVSS 0-3.9) | Registrar y priorizar según capacidad |

---

## Actualizaciones

- Patch y minor: al menos una vez por sprint
- Major: planificar, revisar breaking changes y testear antes de mergear
- Usamos Dependabot o Renovate para automatizar la detección

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

---

## Respuesta ante CVEs

Cuando se publica un CVE que afecta a una de nuestras dependencias:

1. Evaluar si el vector de ataque aplica a nuestro uso
2. Si aplica: actualizar en menos de 48h para Critical/High, en el sprint para Moderate
3. Si no aplica: documentar por qué y monitorear si cambia la evaluación

---

## Dependencias abandonadas

Si una dependencia deja de tener mantenimiento activo:
1. Evaluar el riesgo — ¿tiene CVEs sin parchear? ¿es crítica?
2. Buscar alternativa mantenida
3. Planificar la migración como deuda técnica con prioridad según el riesgo
