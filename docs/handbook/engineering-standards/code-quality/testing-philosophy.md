---
sidebar_position: 1
title: Testing Philosophy
---

Principios generales de testing que aplican a Frontend, Backend y QA: qué testear, cuándo testear y cómo escribir tests que sean útiles.

## Pirámide de testing

```
        /\
       /  \        E2E (pocos, lentos, valiosos)
      /----\
     /      \      Integration (moderados)
    /--------\
   /          \    Unit (muchos, rápidos, baratos)
  /____________\
```

**Unit tests**: Prueban funciones individuales. Rápidos, baratos, muchos.

**Integration tests**: Prueban cómo interactúan múltiples componentes. Moderados en cantidad y velocidad.

**E2E tests**: Prueban flujos completos desde la perspectiva del usuario. Lentos, caros, pocos.

## Principios

**Test lo importante**: No todo necesita test. Enfócate en:
- Lógica crítica (pagos, autenticación, cálculos)
- Comportamiento que es fácil de romper
- Casos de error

**No testees detalles de implementación**: Testea el comportamiento, no cómo se implementa.

```typescript
// ❌ Malo: Testea detalles de implementación
expect(component.state.isLoading).toBe(false);

// ✅ Bueno: Testea comportamiento
expect(screen.getByText('User data loaded')).toBeInTheDocument();
```

**Tests deben ser independientes**: Un test no debe depender de otro. Cada test debe poder correr solo.

**Tests deben ser determinísticos**: Siempre pasan o siempre fallan. No "a veces".

## Cobertura

**Objetivo**: 80% de cobertura de código.

- Menos del 80%: Hay lógica importante sin testear
- Más del 80%: Probablemente estés testeando detalles innecesarios

La cobertura no es el objetivo. El objetivo es tener tests útiles.

## Tipos de tests

| Tipo | Cuándo | Herramientas |
|------|--------|-------------|
| Unit | Funciones, componentes simples | Jest, Vitest |
| Integration | Múltiples componentes, APIs | Jest, Vitest |
| E2E | Flujos completos | Cypress, Playwright |
| Performance | Velocidad de carga | Lighthouse, WebPageTest |
| Security | Vulnerabilidades | OWASP ZAP, npm audit |

## Cuándo escribir tests

**Antes de escribir código** (TDD): Escribe el test primero, luego el código.

**Mientras escribes código**: Escribe tests a medida que avanzas.

**Después de escribir código**: Mejor que nada, pero menos ideal.

**Cuando encuentras un bug**: Escribe un test que lo reproduzca, luego arréglalo.

## Evitar problemas comunes

**Problema: Tests que pasan pero el código está roto**  
Solución: Verifica que el test falla sin el código. Escribe el test primero.

**Problema: Tests lentos**  
Solución: Usa mocks para dependencias externas. Corre tests en paralelo.

**Problema: Tests flaky (a veces pasan, a veces fallan)**  
Solución: Evita timeouts arbitrarios. Usa waits explícitos. Aísla tests.

**Problema: Demasiados tests**  
Solución: Enfócate en tests que aportan valor. Elimina tests redundantes.

## Referencia

- Frontend: [Testing Frontend](/frontend/quality/testing)
- Backend: [Testing Backend](/backend/quality/testing)
- QA: [Testing Strategy](/qa/strategy/piramide-de-testing)
