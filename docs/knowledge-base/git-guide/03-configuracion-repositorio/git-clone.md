---
sidebar_position: 2
---

# Git Clone

El comando `git clone` se utiliza para crear una copia de un repositorio de Git existente. Es la forma más común de que los desarrolladores obtengan una copia de trabajo de un repositorio central.

## ¿Qué es git clone?

`git clone` crea una copia completa de un repositorio remoto en tu máquina local. A diferencia de SVN, la "copia de trabajo" es un repositorio de Git completo con su propio historial, administración de archivos y es un entorno completamente aislado del repositorio original.

## Uso básico

### Clonar un repositorio

```bash
git clone <url-del-repositorio>
```

Esto crea un nuevo directorio con el nombre del repositorio y descarga todo el contenido.

```bash
git clone https://github.com/usuario/mi-proyecto.git
cd mi-proyecto
```

### Clonar en un directorio específico

```bash
git clone <url-del-repositorio> <directorio>
```

```bash
git clone https://github.com/usuario/mi-proyecto.git mi-carpeta
cd mi-carpeta
```

## Protocolos soportados

Git soporta varios protocolos para clonar:

### HTTPS

```bash
git clone https://github.com/usuario/mi-proyecto.git
```

**Ventajas**: Funciona detrás de firewalls, no requiere configuración SSH
**Desventajas**: Requiere ingresar credenciales cada vez

### SSH

```bash
git clone git@github.com:usuario/mi-proyecto.git
```

**Ventajas**: Más seguro, no requiere ingresar credenciales si tienes SSH configurado
**Desventajas**: Requiere configuración SSH previa

### Git

```bash
git clone git://github.com/usuario/mi-proyecto.git
```

**Nota**: Menos común, requiere que el servidor tenga el demonio git ejecutándose

## Clonación superficial

Para repositorios muy grandes, puedes clonar solo las confirmaciones recientes:

```bash
git clone --depth <profundidad> <url-del-repositorio>
```

```bash
# Clonar solo las últimas 10 confirmaciones
git clone --depth 10 https://github.com/usuario/mi-proyecto.git
```

**Ventajas**:
- Mucho más rápido
- Usa menos espacio en disco
- Ideal para repositorios con historial muy largo

**Desventajas**:
- No tienes el historial completo
- Algunas operaciones pueden ser limitadas

### Convertir un clon superficial a completo

```bash
git fetch --unshallow
```

## Clonación de ramas específicas

### Clonar solo una rama

```bash
git clone --branch <rama> <url-del-repositorio>
```

```bash
git clone --branch develop https://github.com/usuario/mi-proyecto.git
```

### Clonar una rama específica de forma superficial

```bash
git clone --branch <rama> --depth 1 <url-del-repositorio>
```

## Repositorios bare

Para clonar un repositorio bare (sin directorio de trabajo):

```bash
git clone --bare <url-del-repositorio>
```

Esto crea un repositorio que puede usarse como repositorio central.

## Qué sucede después de clonar

Cuando clonas un repositorio, Git automáticamente:

1. **Crea una conexión remota** llamada `origin` que apunta al repositorio original
2. **Descarga todo el historial** del repositorio
3. **Crea una rama local** que rastrea la rama remota predeterminada (usualmente `main` o `master`)
4. **Extrae la rama predeterminada** en tu directorio de trabajo

### Ver la configuración remota

```bash
git remote -v
```

Deberías ver algo como:

```
origin  https://github.com/usuario/mi-proyecto.git (fetch)
origin  https://github.com/usuario/mi-proyecto.git (push)
```

## Ejemplo práctico

```bash
# Clonar un repositorio
git clone https://github.com/usuario/mi-proyecto.git
cd mi-proyecto

# Ver el historial
git log --oneline

# Ver las ramas
git branch -a

# Ver la configuración remota
git remote -v

# Crear una rama local para trabajar
git checkout -b mi-rama

# Hacer cambios y confirmar
echo "Cambio" >> archivo.txt
git add archivo.txt
git commit -m "Mi cambio"

# Enviar cambios al repositorio remoto
git push origin mi-rama
```

## Opciones útiles

| Opción | Descripción |
|--------|-------------|
| `--depth <n>` | Clonar solo las últimas n confirmaciones |
| `--branch <rama>` | Clonar una rama específica |
| `--bare` | Crear un repositorio bare |
| `--mirror` | Crear un espejo del repositorio |
| `--single-branch` | Clonar solo una rama |
| `--recursive` | Clonar con submódulos |

## Resumen

- `git clone` crea una copia completa de un repositorio remoto
- Automáticamente configura la conexión remota `origin`
- Soporta múltiples protocolos (HTTPS, SSH, Git)
- Permite clonación superficial para repositorios grandes
- Es la forma más común de obtener una copia de trabajo de un repositorio

---

**Fuente**: [Atlassian - git clone](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-clone)
