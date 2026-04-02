---
sidebar_position: 4
---

# Por qué usar Git

Pasar de un sistema de control de versiones centralizado a Git cambia la forma en que tu equipo de desarrollo crea software. Esta transformación afecta a toda la organización.

## Beneficios para desarrolladores

### 1. Flujo de trabajo de rama de función

Una de las mayores ventajas de Git son sus capacidades de ramificación. A diferencia de los sistemas centralizados, las ramas de Git son baratas y fáciles de fusionar.

**Ventajas**:
- Proporciona un entorno aislado para cada cambio
- Garantiza que la rama principal siempre contenga código de calidad para producción
- Permite representar el trabajo de desarrollo con la misma granularidad que tu backlog ágil
- Cada ticket puede abordarse en su propia rama de función

### 2. Desarrollo distribuido

Git es un sistema de control de versiones distribuido. Cada desarrollador obtiene su propio repositorio local con un historial completo de confirmaciones.

**Ventajas**:
- Agiliza el funcionamiento de Git (no necesita conexión de red para crear confirmaciones)
- Permite inspeccionar versiones anteriores de un archivo sin conexión
- Facilita el escalado de tu equipo de ingeniería
- Evita bloqueos cuando alguien rompe la rama de producción
- Crea un entorno más fiable (si alguien borra su repositorio, puede clonar el de otra persona)

### 3. Solicitudes de incorporación de cambios

Muchas herramientas de gestión de código fuente, como Bitbucket, mejoran la funcionalidad básica de Git con solicitudes de incorporación de cambios.

**Ventajas**:
- Permite a los responsables del proyecto realizar un seguimiento de los cambios más fácilmente
- Permite a los desarrolladores iniciar debates sobre su trabajo antes de integrarlo
- Funciona como un hilo de comentarios adjunto a una rama de funciones
- Permite pedir ayuda al resto del equipo
- Proporciona una revisión formal del código para desarrolladores júnior

### 4. Comunidad

En muchos círculos, Git se ha convertido en el sistema de control de versiones esperado para nuevos proyectos. Si tu equipo usa Git, lo más probable es que no tengas que formar a los nuevos empleados sobre tu flujo de trabajo, porque ya estarán familiarizados con el desarrollo distribuido.

## Beneficios para la organización

### 1. Velocidad

Git permite que los equipos trabajen de forma más rápida e inteligente. Los desarrolladores pueden trabajar en paralelo sin bloqueos.

### 2. Flexibilidad

Git soporta diversos flujos de trabajo sin imponer una forma determinada de trabajar. Esto permite que cada equipo encuentre el flujo que mejor se adapta a sus necesidades.

### 3. Confiabilidad

El desarrollo distribuido crea un entorno más fiable. No hay un único punto de fallo como en los sistemas centralizados.

### 4. Escalabilidad

Git facilita el escalado de tu equipo de ingeniería. Los desarrolladores pueden trabajar de forma independiente sin interferir con el trabajo de otros.

### 5. Integración continua

Git es la base para implementar prácticas de integración continua y entrega continua (CI/CD).

## Comparación con sistemas centralizados

### SVN (Subversion)

**Problemas con SVN**:
- Si alguien rompe la rama de producción, otros desarrolladores no pueden añadir sus cambios hasta que se corrija
- Requiere conexión de red para crear confirmaciones
- Las ramas son costosas y lentas
- El historial está centralizado en un servidor

**Ventajas de Git sobre SVN**:
- No hay bloqueos cuando alguien rompe la rama
- Puedes trabajar sin conexión de red
- Las ramas son baratas y rápidas
- Cada desarrollador tiene el historial completo

## Conclusión

Git no es solo para el desarrollo de software ágil, sino también para las empresas ágiles. Proporciona la flexibilidad, confiabilidad y velocidad que las organizaciones modernas necesitan para competir en el mercado actual.

---

**Fuente**: [Atlassian - Por qué usar Git](https://www.atlassian.com/es/git/tutorials/why-git)
