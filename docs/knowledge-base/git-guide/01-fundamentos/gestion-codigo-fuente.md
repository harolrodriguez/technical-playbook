---
sidebar_position: 3
---

# Gestión del Código Fuente (SCM)

La gestión de código fuente (SCM) se utiliza para hacer un seguimiento de las modificaciones realizadas en un repositorio de código fuente.

## Definición

SCM es un sinónimo de control de versiones. Hace un seguimiento del historial de cambios activo de un código base y ayuda a resolver conflictos al fusionar modificaciones realizadas por varios colaboradores.

## Importancia de las herramientas SCM

### Problema: Conflictos de desarrollo

Cuando varios desarrolladores trabajan en un código base compartido:
- Distintos desarrolladores pueden trabajar en funciones aparentemente aisladas
- Estas funciones pueden usar módulos de código compartido
- Los cambios pueden entrar en conflicto

**Antes de SCM**: Los desarrolladores editaban archivos directamente y los colocaban en ubicaciones remotas mediante FTP. El Desarrollador 1 hacía cambios y el Desarrollador 2, sin saberlo, sobrescribía el trabajo del Desarrollador 1.

### Solución: Control de versiones

SCM ofrece protecciones para:
- Rastrear cambios de cada desarrollador
- Identificar áreas de conflicto
- Evitar la sobrescritura
- Comunicar puntos de conflicto a los desarrolladores

## Ventajas de SCM

### 1. Deshacer cambios

SCM rastrea todo el historial de cambios, permitiendo "deshacer" cambios realizados en el código base. Puede revertir al instante el código a un punto anterior en el tiempo.

### 2. Notas de versión

Un registro de historial claro y bien conservado puede servir como notas de lanzamiento, ofreciendo información y transparencia sobre el progreso del proyecto.

### 3. Reducción de sobrecarga

SCM reduce la sobrecarga de comunicación de un equipo y aumenta la velocidad de publicación. Los desarrolladores pueden trabajar de forma independiente en ramas distintas y fusionarlas al final.

### 4. Eficiencia de recursos

SCM es de gran ayuda para los equipos de ingeniería y reduce los costos de desarrollo al permitir utilizar los recursos de ingeniería de manera más eficiente.

## Prácticas recomendadas para SCM

### 1. Hacer confirmaciones frecuentes

Las confirmaciones son económicas y fáciles de hacer. Deben hacerse con frecuencia para registrar los cambios realizados en un código base. Cada confirmación es una instantánea a la que se puede revertir el código base si es necesario.

### 2. Trabajar desde la versión más reciente

Es fácil que una copia local del código base quede detrás respecto a la copia global. Utiliza `git pull` o `git fetch` para recuperar el código más reciente antes de hacer ningún cambio. Esto ayudará a evitar conflictos en el momento de la fusión.

### 3. Crear notas detalladas

Cada confirmación tiene su correspondiente entrada de registro. Es importante dejar mensajes de registro de confirmaciones descriptivos y explicativos. Estos mensajes deben explicar por qué se han creado las confirmaciones y cuál es su contenido.

### 4. Revisar cambios antes de la confirmación

SCM ofrece un "entorno de ensayo" que puede usarse para recopilar un grupo de cambios antes de escribirlos en una confirmación. Este entorno se puede usar para gestionar y revisar los cambios antes de crear la instantánea de confirmación.

### 5. Usar ramas

La ramificación es un potente mecanismo de SCM que permite a los desarrolladores crear una línea de desarrollo independiente. Las ramas deben usarse con frecuencia, ya que son rápidas y económicas. Permiten que varios desarrolladores trabajen en paralelo en líneas de desarrollo distintas.

### 6. Acordar un flujo de trabajo

De forma predeterminada, los sistemas de SCM ofrecen métodos de contribución muy libres. Es importante que los equipos establezcan patrones de colaboración compartidos. Los flujos de trabajo de SCM establecen patrones y procesos para fusionar ramas.

## Conclusión

SCM es una herramienta inestimable para el desarrollo de software moderno. Los mejores equipos de software la utilizan y tu equipo también debería hacerlo. Es muy fácil de configurar en un nuevo proyecto y proporciona un retorno de la inversión alto.

---

**Fuente**: [Atlassian - Gestión del Código Fuente](https://www.atlassian.com/es/git/tutorials/source-code-management)
