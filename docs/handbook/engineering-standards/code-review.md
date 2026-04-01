---
sidebar_position: 4
title: Code Review
---

Cómo revisamos un PR en ACITY: qué mirar, cómo dar feedback y cómo recibirlo. El code review es una conversación técnica, no un juicio.

## El objetivo del code review

El code review no existe solo para encontrar errores. Existe para:
- Compartir conocimiento del codebase entre el equipo
- Asegurar que el código cumple los estándares acordados
- Detectar problemas de diseño antes de que lleguen a producción
- Mantener la coherencia técnica del sistema

---

## Antes de empezar a revisar

Antes de leer una sola línea de código, verifica:

1. ¿El PR tiene título y descripción claros?
2. ¿El PR apunta a la rama correcta según [GitFlow](/handbook/engineering-standards/branching-strategy)?
3. ¿El CI está pasando?
4. ¿El tamaño del PR es razonable (menos de 400 líneas)?

Si alguno de estos puntos falla, puedes devolver el PR con un comentario antes de revisarlo en detalle. No es bloquear por bloquear, es mantener el estándar.

---

## Qué revisar

### Corrección
- ¿El código hace lo que dice que hace?
- ¿Cubre los edge cases relevantes?
- ¿Hay condiciones de error que no se manejan?

### Legibilidad
- ¿Se puede entender sin contexto adicional?
- ¿Los nombres de variables, funciones y clases son descriptivos?
- ¿La lógica compleja tiene comentarios que expliquen el "por qué"?

### Tests
- ¿Los tests cubren los casos importantes, incluyendo casos de error?
- ¿Son tests que realmente fallarían si el código estuviera roto?
- ¿Hay casos de borde que no están cubiertos?

### Seguridad
- ¿Hay inputs sin validar?
- ¿Hay secrets o credenciales hardcodeadas?
- ¿Hay superficies de ataque nuevas (endpoints sin auth, queries sin sanitizar)?

### Performance
- ¿Hay queries N+1?
- ¿Hay operaciones costosas dentro de loops?
- ¿Se están cargando datos innecesarios?

### Contratos y compatibilidad
- ¿Los cambios de API son backward compatible?
- ¿Se documentaron los breaking changes?
- ¿Los cambios en el schema de base de datos tienen migración?

---

## Cómo dar feedback

**Sé específico.** "Este nombre no es claro" no ayuda. "Considera renombrar `data` a `userProfile` para que sea más descriptivo" sí ayuda.

**Explica el por qué.** No solo qué cambiar, sino por qué. Eso enseña y genera menos fricción.

**Distingue entre bloqueante y sugerencia.** Usa estos prefijos en tus comentarios:

| Prefijo | Significado |
|---------|-------------|
| `[bloqueante]` | Debe resolverse antes de mergear |
| `[sugerencia]` | Sería mejor así, pero no es obligatorio |
| `[pregunta]` | No entiendo esto, ¿puedes explicar? |
| `[nit]` | Detalle menor, a tu criterio |

Ejemplo:
```
[bloqueante] Este endpoint no valida que el usuario tenga permisos sobre el recurso.
Un usuario podría acceder a datos de otro usuario con solo cambiar el ID en la URL.

[sugerencia] Considera extraer esta lógica a un helper para que sea reutilizable.

[nit] Prefiero `userId` sobre `user_id` para mantener consistencia con el resto del codebase.
```

**Aprueba cuando está listo.** No esperes perfección. Si el código es correcto, seguro y legible, aprueba aunque no lo hubieras escrito exactamente igual.

---

## Cómo recibir feedback

- El feedback es sobre el código, no sobre ti
- Si no entiendes un comentario, pregunta antes de cambiar
- Si no estás de acuerdo, argumenta con datos o razonamiento técnico
- Si el desacuerdo persiste, el Tech Lead desempata
- Responde todos los comentarios antes de pedir re-review: con el cambio hecho, con una explicación de por qué no lo cambiaste, o con una pregunta si no entendiste

---

## SLA de review

| Situación | Tiempo esperado |
|-----------|----------------|
| Primera respuesta a un PR asignado | Menos de **24 horas hábiles** |
| Re-review tras cambios del autor | Menos de **24 horas hábiles** |
| PR urgente (hotfix) | Menos de **2 horas** |

Si no puedes revisar en ese tiempo, avisa para que se reasigne.

---

## Aprobaciones requeridas

| Tipo de cambio | Aprobaciones requeridas |
|----------------|------------------------|
| PRs normales (`feature/*`, `bugfix/*`) | 1 aprobación |
| Cambios de arquitectura o contratos de API | 2 aprobaciones, incluyendo Tech Lead |
| `release/*` → `main` | 2 aprobaciones, incluyendo Tech Lead |
| `hotfix/*` → `main` | 1 aprobación del Tech Lead (review exprés) |
| Cambios en infraestructura o CI/CD | Tech Lead o Architect |

---

## Merge

Una vez aprobado el PR:
- El **autor** es responsable de hacer el merge (no el reviewer)
- Usar **Squash and Merge** para ramas `feature/*` y `bugfix/*` hacia `develop`, para mantener el historial limpio
- Usar **Merge Commit** para `release/*` y `hotfix/*` hacia `main`, para preservar el historial del release
- Eliminar la rama después del merge
