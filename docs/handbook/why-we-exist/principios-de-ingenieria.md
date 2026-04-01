---
sidebar_position: 2
title: Principios de Ingeniería
---

Los valores que guían cada decisión técnica del equipo. No son reglas rígidas sino criterios para razonar bien ante situaciones ambiguas o de trade-off.

## Simplicidad sobre cleverness

El código más fácil de mantener es el que cualquier persona del equipo puede leer y entender sin contexto previo. Preferimos soluciones directas sobre soluciones ingeniosas. Si necesitas explicar por qué hiciste algo así, probablemente hay una forma más simple.

## Claridad de contratos

Cada capa del sistema tiene una responsabilidad clara. Los contratos entre capas (APIs, interfaces, eventos) son explícitos, versionados y documentados. Nadie debería tener que leer la implementación para entender qué hace una interfaz.

## Ownership real

Quien construye algo es responsable de que funcione en producción. Eso incluye monitoreo, alertas y responder cuando algo falla. No existe "ya lo entregué al equipo de ops".

## Feedback rápido

Preferimos ciclos cortos de validación. Tests que corren en segundos, deploys frecuentes, PRs pequeños. Cuanto más tarde en descubrir un error, más caro es corregirlo.

## Decisiones reversibles vs irreversibles

Distinguimos entre decisiones que se pueden deshacer fácilmente (tipo de variable, nombre de función) y las que no (esquema de base de datos, contrato de API pública). Las primeras las tomamos rápido. Las segundas merecen más deliberación y documentación.

## Deuda técnica explícita

La deuda técnica que no está documentada no existe para el equipo. Si tomamos un atajo, lo registramos. Si sabemos que algo va a necesitar refactor, lo anotamos. La deuda invisible es la que destruye la velocidad a largo plazo.

## Seguridad por diseño

La seguridad no es una capa que se agrega al final. Se considera desde el diseño: mínimo privilegio, validación de inputs, manejo correcto de secrets. Ver [Security](/handbook/security/secrets-y-variables).

## Documentación como parte del trabajo

Una feature sin documentación no está terminada. Eso incluye READMEs actualizados, decisiones de arquitectura registradas y APIs documentadas. El código explica el cómo; la documentación explica el por qué.
