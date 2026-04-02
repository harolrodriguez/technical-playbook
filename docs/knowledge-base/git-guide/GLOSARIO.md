---
sidebar_position: 99
---

# Glosario de Git

Términos y conceptos clave en Git.

## A

**Alias**: Acceso rápido a un comando de Git. Ejemplo: `git config --global alias.co checkout`

**Amend**: Modificar el commit anterior. Ejemplo: `git commit --amend`

**Archivo**: Unidad básica de datos en Git. Puede estar rastreado o sin rastrear.

## B

**Bare Repository**: Repositorio sin directorio de trabajo. Se usa típicamente como repositorio central en un servidor.

**Bisect**: Herramienta para encontrar el commit que introdujo un error mediante búsqueda binaria.

**Blame**: Comando que muestra quién modificó cada línea de un archivo.

**Branch**: Línea de desarrollo independiente. Permite trabajar en cambios sin afectar otras ramas.

## C

**Checkout**: Cambiar entre ramas o commits. Ejemplo: `git checkout main`

**Cherry-pick**: Aplicar un commit específico a la rama actual.

**Clone**: Copiar un repositorio remoto a tu máquina local.

**Commit**: Instantánea de los cambios en un punto en el tiempo. Contiene cambios, autor, fecha y mensaje.

**Conflicto**: Situación donde Git no puede fusionar automáticamente cambios de dos ramas.

**Config**: Comando para configurar Git. Ejemplo: `git config --global user.name "Nombre"`

## D

**Detached HEAD**: Estado donde HEAD no apunta a una rama, sino a un commit específico.

**Diff**: Comando que muestra las diferencias entre dos versiones de un archivo o entre commits.

**Directorio de trabajo**: Los archivos que estás editando en tu máquina local.

## E

**Entorno de ensayo (Staging Area)**: Área intermedia entre el directorio de trabajo y el historial de commits. Aquí preparas cambios antes de confirmar.

**Etiqueta (Tag)**: Referencia a un punto específico en el historial. Se usa típicamente para marcar versiones.

## F

**Fast-forward**: Tipo de fusión donde Git simplemente mueve el puntero hacia adelante sin crear un commit de fusión.

**Fetch**: Descargar cambios de un repositorio remoto sin fusionarlos.

**Flujo de trabajo**: Conjunto de prácticas y procesos que un equipo usa con Git.

**Fusión (Merge)**: Integrar cambios de una rama a otra.

## G

**Garbage Collection (gc)**: Proceso de limpieza del repositorio que elimina objetos inaccesibles y comprime datos.

**Git**: Sistema de control de versiones distribuido.

**GitOps**: Práctica de usar Git como fuente única de verdad para la infraestructura.

**Glosario**: Este documento.

## H

**HEAD**: Referencia al commit actual. Apunta a la rama en la que estás trabajando.

**Hook**: Script que se ejecuta automáticamente en eventos de Git.

**Historial**: Secuencia de commits en un repositorio.

## I

**Índice**: Otro nombre para el entorno de ensayo.

**Inicializar**: Crear un nuevo repositorio con `git init`.

## L

**Log**: Comando que muestra el historial de commits.

**LFS (Large File Storage)**: Extensión de Git para rastrear archivos grandes.

## M

**Main/Master**: Rama principal del repositorio. Típicamente contiene código de producción.

**Merge**: Fusionar cambios de una rama a otra.

**Merge commit**: Commit especial creado cuando se fusionan dos ramas con cambios divergentes.

## O

**Origin**: Nombre predeterminado del repositorio remoto principal.

## P

**Patch**: Conjunto de cambios que se pueden aplicar a un archivo o repositorio.

**Pick**: En rebase interactivo, usar un commit sin modificarlo.

**Pull**: Obtener cambios de un repositorio remoto y fusionarlos.

**Push**: Enviar cambios a un repositorio remoto.

## R

**Rebase**: Reorganizar commits en una nueva base. Reescribe el historial.

**Reflog**: Registro de referencias. Muestra el historial de cambios en HEAD.

**Remote**: Repositorio en un servidor (como GitHub, GitLab, Bitbucket).

**Repositorio**: Almacenamiento virtual de un proyecto con su historial completo.

**Reset**: Deshacer cambios moviendo HEAD a un commit anterior.

**Revert**: Crear un nuevo commit que invierte los cambios de un commit anterior.

## S

**Squash**: En rebase interactivo, combinar múltiples commits en uno.

**SSH**: Protocolo seguro para comunicación remota. Se usa para autenticación en Git.

**Stash**: Guardar cambios temporalmente sin confirmarlos.

**Status**: Comando que muestra el estado actual del repositorio.

## T

**Tag**: Referencia a un punto específico en el historial. Se usa para marcar versiones.

**Three-way merge**: Tipo de fusión donde Git crea un nuevo commit de fusión.

## U

**Untracked**: Archivo que Git no está rastreando.

**Upstream**: Rama remota de la que tu rama local obtiene cambios.

## V

**Versión**: Instantánea específica del código en un punto en el tiempo.

## W

**Working directory**: Los archivos que estás editando en tu máquina local.

## Z

**Zona de preparación**: Otro nombre para el entorno de ensayo.

---

## Términos por categoría

### Comandos principales

- `git add`: Preparar cambios
- `git branch`: Administrar ramas
- `git checkout`: Cambiar entre ramas
- `git clone`: Clonar repositorio
- `git commit`: Confirmar cambios
- `git diff`: Ver diferencias
- `git fetch`: Descargar cambios
- `git init`: Inicializar repositorio
- `git log`: Ver historial
- `git merge`: Fusionar ramas
- `git pull`: Obtener y fusionar cambios
- `git push`: Enviar cambios
- `git rebase`: Reorganizar commits
- `git reset`: Deshacer cambios
- `git revert`: Invertir cambios
- `git status`: Ver estado
- `git tag`: Crear etiquetas

### Conceptos

- Commit
- Rama
- Merge
- Rebase
- Remote
- Repository
- Staging Area
- HEAD
- Conflict
- Fast-forward

### Flujo de trabajo

- Clone
- Branch
- Commit
- Push
- Pull
- Merge
- Tag
- Release

### Configuración

- Config
- Alias
- SSH
- Remote
- Hook

---

**Fuente**: Basado en los tutoriales de Atlassian sobre Git
