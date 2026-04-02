---
sidebar_position: 1
---

# Git Init

El comando `git init` crea un nuevo repositorio de Git. Puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git, o para inicializar un nuevo repositorio vacío.

## ¿Qué hace git init?

Cuando ejecutas `git init`, se crea un subdirectorio `.git` en el directorio de trabajo actual que contiene todos los metadatos de Git necesarios para el nuevo repositorio.

### Contenido del directorio .git

- **objects/**: Almacena todos los objetos de Git (commits, árboles, blobs)
- **refs/**: Almacena referencias a commits (ramas, etiquetas)
- **HEAD**: Apunta a la rama actualmente extraída
- **config**: Configuración del repositorio
- **hooks/**: Scripts que se ejecutan en eventos de Git

## Uso básico

### Inicializar un repositorio en el directorio actual

```bash
cd /path/to/your/project
git init
```

Esto crea un subdirectorio `.git` en el directorio actual y lo convierte en un repositorio de Git.

### Inicializar un repositorio en un nuevo directorio

```bash
git init <directory>
```

Esto crea un nuevo directorio y lo inicializa como un repositorio de Git.

```bash
git init my-project
cd my-project
```

## Repositorios bare

Un repositorio bare es un repositorio sin directorio de trabajo. Se usa típicamente como repositorio central en un servidor.

```bash
git init --bare <directory>
```

Por convención, los repositorios bare tienen la extensión `.git`:

```bash
git init --bare my-project.git
```

### Diferencia entre repositorio normal y bare

| Aspecto | Normal | Bare |
|--------|--------|------|
| Directorio de trabajo | Sí | No |
| Directorio .git | Sí | No (contenido en la raíz) |
| Uso | Desarrollo local | Servidor central |
| Push | No recomendado | Recomendado |

## Configuración personalizada

### Cambiar la ubicación de .git

Por defecto, `git init` crea `.git` en el directorio actual. Puedes cambiar esto:

```bash
git init --separate-git-dir=/path/to/git/dir
```

O usando la variable de entorno:

```bash
export GIT_DIR=/path/to/git/dir
git init
```

## Comparación: git init vs git clone

| Comando | Propósito | Resultado |
|---------|-----------|-----------|
| `git init` | Crear un nuevo repositorio | Repositorio vacío |
| `git clone` | Copiar un repositorio existente | Repositorio con historial |

**Nota**: `git clone` internamente llama a `git init` primero, luego copia los datos del repositorio existente.

## Ejemplo práctico

### Crear un nuevo proyecto con Git

```bash
# Crear un nuevo directorio
mkdir my-project
cd my-project

# Inicializar Git
git init

# Crear un archivo
echo "# Mi Proyecto" > README.md

# Preparar el archivo
git add README.md

# Crear la primera confirmación
git commit -m "Commit inicial"

# Ver el historial
git log
```

### Convertir un proyecto existente a Git

```bash
# Ir al directorio del proyecto
cd /path/to/existing/project

# Inicializar Git
git init

# Preparar todos los archivos
git add .

# Crear la primera confirmación
git commit -m "Commit inicial"
```

## Reinicializar un repositorio

Si ejecutas `git init` en un directorio que ya tiene un repositorio `.git`, es seguro hacerlo. No reemplazará la configuración existente:

```bash
git init
# Reinitializing existing Git repository in /path/to/project/.git/
```

## Plantillas de git init

Git permite usar plantillas personalizadas al inicializar un repositorio:

```bash
git init --template=/path/to/template
```

Las plantillas pueden incluir hooks predeterminados, archivos de configuración, etc.

## Resumen

- `git init` crea un nuevo repositorio de Git
- Crea un directorio `.git` con todos los metadatos necesarios
- Es seguro ejecutarlo múltiples veces en el mismo directorio
- Los repositorios bare se usan típicamente como repositorios centrales en servidores
- Es el primer comando que ejecutas cuando empiezas un nuevo proyecto con Git

---

**Fuente**: [Atlassian - git init](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-init)
