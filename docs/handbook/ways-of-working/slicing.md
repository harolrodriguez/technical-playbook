---
sidebar_position: 3
title: Slicing de Historias
---

<cite index="1-1">Capacitación: Slicing de Historias</cite> - Cómo dividir historias grandes en partes pequeñas, independientes y con valor que se puedan completar en un sprint.

## ¿Por qué Slicing?

<cite index="1-3">Los principales desafíos al estimar historias incluyen: dificultad para identificar el valor mínimo, entregar por capas técnicas en lugar de por valor, historias aún demasiado grandes y ambiguas, incremento de producto muy grande, falta de conocimiento de técnicas de slicing, stakeholders que quieren todo el producto y no incrementos, alargar los sprints para poder terminar el trabajo, y necesidad de negociación con POs.</cite>

El slicing resuelve estos problemas permitiendo:
- Entregar valor temprano y continuo
- Reducir riesgo e incertidumbre
- Facilitar estimación y planificación
- Habilitar feedback rápido del usuario

## Vertical vs Horizontal

### Slicing Horizontal (❌ Evitar)

<cite index="1-7,1-8,1-9">Entrega por capas aisladas (gelatina, carlota, bizcochuelo). Cada entrega parcial no es tan disfrutable por sí sola. El valor completo y feedback llega solo al final cuando se unen las partes.</cite>

**Problema**: Cada capa técnica se entrega por separado (Backend → Frontend → QA), sin valor funcional hasta el final.

### Slicing Vertical (✅ Preferido)

<cite index="1-11,1-12,1-13">Cada porción incluye todas las capas (gelatina, carlota, bizcochuelo). El disfrutable y funcional (valor completo) desde el primer corte. Permite feedback y ajustes inmediatos.</cite>

**Ventaja**: Cada slice es una porción completa con todas las capas, entregable y funcional por sí sola.

### Conclusión

<cite index="1-16,1-17,1-18,1-19,1-20">Una HU bien hecha aplica slice vertical. Incluye todas las capas necesarias para ser funcional. Entrega valor real al usuario desde la primera entrega. Facilita obtener feedback temprano. Reduce el riesgo de entregar partes inútiles o incompletas.</cite>

---

## Técnica S.P.I.D.R.

<cite index="1-23,1-24,1-25">S.P.I.D.R es una técnica que permite dividir historias grandes en más pequeñas y manejables. Mantiene valor funcional en cada corte. Tipos de división: Caminos, Interfaces, Datos, Reglas, Spikes.</cite>

### S – Spike

**Definición**: <cite index="1-48,1-49">Es un trabajo exploratorio o de investigación para reducir incertidumbre técnica o de negocio antes de desarrollar la HU real. No entrega valor directo al usuario final, pero sí conocimiento para construir el producto.</cite>

**Cuándo usarlo**: Cuando hay alta incertidumbre técnica o de negocio.

**Ejemplo**: 
- Investigación de pasarelas de pago con criptomonedas
- Integración técnica mínima con un nuevo proveedor

### P – Path (Camino)

**Definición**: <cite index="1-26">Significa dividir una HU según el flujo o camino que sigue el usuario dentro del sistema para cumplir un objetivo.</cite>

**Cuándo usarlo**: Cuando hay múltiples flujos o escenarios de usuario.

**Ejemplo**: <cite index="1-27,1-28,1-29">Como jugador quiero recargar saldo para poder apostar en el casino online. Depósito con tarjeta de crédito. Depósito con billetera digital (Yape, Plin). Depósito con criptomonedas.</cite>

### I – Interface (Interfaz)

**Definición**: <cite index="1-30,1-31">Significa dividir una HU según el canal, dispositivo o punto de interacción que el usuario utiliza. Considerar métricas para elegir: tráfico por dispositivo, perfil de usuario, etc.</cite>

**Cuándo usarlo**: Cuando la funcionalidad se necesita en múltiples dispositivos o canales.

**Ejemplo**: <cite index="1-32,1-33,1-34">Como jugador quiero participar en torneos de póker para competir por premios. Participar en torneos desde navegador móvil. Participar en torneos desde la App. Participar desde Desktop (iOS, Android, Linux, Windows).</cite>

### D – Data (Datos)

**Definición**: <cite index="1-35">Significa partir una HU grande según el tipo, rango o cantidad de datos que necesita manejar, para no intentar cubrir todos de golpe.</cite>

**Cuándo usarlo**: Cuando el volumen o complejidad de datos es grande.

**Ejemplo**: <cite index="1-36,1-37,1-38,1-39,1-40">Como administrador quiero ver el ranking de jugadores para entregar premios. Ranking solo jugadores online. Ranking solo jugadores de casino físico. Ranking combinado, pero últimos 30 días. Ranking combinado de todo el año con exportación a Excel.</cite>

### R – Rule (Regla)

**Definición**: <cite index="1-41,1-42">Significa dividir una HU según las reglas de negocio o validaciones que se aplican. Se empieza con las reglas mínimas para que la funcionalidad sea útil, y luego se agregan más complejas.</cite>

**Cuándo usarlo**: Cuando hay múltiples reglas de negocio o validaciones.

**Ejemplo**: <cite index="1-43,1-44,1-45,1-46,1-47">Como jugador quiero acceder a un bono de bienvenida para aumentar mi saldo inicial. Sin requisitos → bono se otorga al registrarse. Depósito mínimo → bono solo si deposita ≥ S/ 20. Restricción de juegos → bono solo usable en slots. Requisito de rollover → debe apostar 20× el valor del bono antes de retirar.</cite>

---

## Cuándo Aplicar Slicing

<cite index="1-52">Durante el refinamiento: Insumos UX/UI (wireframes, figma, etc), Comprensión de HUs, Estimación relativa preliminar HUs (1,2,3,5,8,13…) con LT o especialistas, Aplicar Slicing para HUs de tamaño >8.</cite>

**Momento clave**: El slicing se realiza durante el refinamiento, antes de que la historia entre al sprint.

---

## Impacto en el Burndown

<cite index="1-53,1-54">Las historias asociadas al burndown tienen como 5 a 8 puntos, cuasi ideal para un sprint de 10 días. El burndown muestra entregas cortas y progresivas, con un patrón escalonado típico del slicing.</cite>

**Beneficios visibles**:
- Historias de tamaño manejable (5-8 puntos)
- Entregas progresivas durante el sprint
- Patrón escalonado en el burndown (no lineal)
- Mayor predictibilidad

---

## Checklist: ¿Es un buen slice?

Un buen slice debe cumplir:

- [ ] Tiene valor para el usuario (aunque sea parcial)
- [ ] Es independiente (no bloquea a otros)
- [ ] Se puede probar (criterios claros)
- [ ] Cabe en un sprint
- [ ] Incluye todas las capas necesarias (vertical, no horizontal)
- [ ] Sigue INVEST (especial foco en "V" de Valuable)

---

## Referencia

- [Scrum & Agile Model](/handbook/ways-of-working/scrum)
- [Estimación](/handbook/ways-of-working/estimacion)
- [Definition of Ready / Done](/handbook/ways-of-working/definition-of-ready-done)
