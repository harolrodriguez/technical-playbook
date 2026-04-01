---
sidebar_position: 8
title: Submodules & Subtrees
---

Cómo gestionar repositorios dentro de repositorios: submodules para dependencias externas y subtrees para código compartido.

## Submodules

Un submodule es una referencia a otro repositorio Git dentro de tu repositorio.

### Agregar un submodule

```bash
git submodule add https://github.com/org/repo.git path/to/submodule
```

Esto crea un archivo `.gitmodules` que registra la referencia.

### Clonar un repo con submodules

```bash
git clone --recurse-submodules https://github.com/org/repo.git
```

O si ya clonaste sin submodules:

```bash
git submodule update --init --recursive
```

### Actualizar un submodule

```bash
cd path/to/submodule
git pull origin main
cd ..
git add path/to/submodule
git commit -m "chore: update submodule"
```

### Problemas con submodules

Submodules son complicados y pueden causar problemas:
- Otros desarrolladores olvidan actualizar submodules
- Los cambios en submodules no se sincronizan automáticamente
- Difícil de debuggear si algo falla

**Alternativa**: Usa subtrees o npm packages.

## Subtrees

Un subtree es una copia de otro repositorio dentro del tuyo. A diferencia de submodules, el código está completamente integrado.

### Agregar un subtree

```bash
git subtree add --prefix=path/to/subtree https://github.com/org/repo.git main --squash
```

El `--squash` combina todo el historial del repo externo en un commit.

### Actualizar un subtree

```bash
git subtree pull --prefix=path/to/subtree https://github.com/org/repo.git main --squash
```

### Pushear cambios a un subtree

```bash
git subtree push --prefix=path/to/subtree https://github.com/org/repo.git main
```

## Submodules vs Subtrees

| Aspecto | Submodules | Subtrees |
|--------|-----------|----------|
| **Complejidad** | Complejo | Más simple |
| **Historial** | Separado | Integrado |
| **Sincronización** | Manual | Manual |
| **Cambios locales** | Difícil de compartir | Fácil de compartir |
| **Mejor para** | Dependencias externas | Código compartido |

## Recomendación

Para ACITY:
- **Usa npm packages** para dependencias externas (mejor que submodules)
- **Usa subtrees** si necesitas código compartido entre repos
- **Evita submodules** a menos que sea absolutamente necesario
