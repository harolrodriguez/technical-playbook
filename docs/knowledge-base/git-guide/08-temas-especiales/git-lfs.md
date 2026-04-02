---
sidebar_position: 3
---

# Git LFS - Large File Storage

Git LFS (Large File Storage) es una extensión de Git que reduce el impacto de los archivos grandes en tu repositorio al descargar las versiones relevantes de forma lenta.

## ¿Por qué Git LFS?

Git es un sistema de control de versiones distribuido, lo que significa que todo el historial del repositorio se transfiere al cliente durante la clonación. Para proyectos que contienen archivos grandes, especialmente archivos que se modifican regularmente, esto puede tardar mucho tiempo.

## ¿Cómo funciona Git LFS?

Git LFS reemplaza los archivos grandes de tu repositorio por pequeños archivos de puntero. Durante el uso normal, no verás estos archivos de puntero, ya que Git LFS se ocupa de ellos automáticamente.

### Proceso

1. Al añadir un archivo a tu repositorio, Git LFS reemplaza su contenido por un puntero
2. El contenido del archivo se almacena en una memoria caché local de Git LFS
3. Cuando envías cambios, los archivos de Git LFS se transfieren al almacenamiento remoto
4. Cuando extraes una confirmación, los punteros se sustituyen por archivos de la caché local o se descargan del almacenamiento remoto

## Instalación

### macOS

```bash
brew install git-lfs
git lfs install
```

### Linux

```bash
# Debian/Ubuntu
sudo apt-get install git-lfs
git lfs install

# Fedora
sudo dnf install git-lfs
git lfs install
```

### Windows

```bash
# Con Chocolatey
choco install git-lfs

# O descarga desde https://git-lfs.github.com
git lfs install
```

## Uso básico

### Rastrear archivos con Git LFS

```bash
git lfs track "*.psd"
git lfs track "*.mp4"
git lfs track "*.zip"
```

Esto crea o actualiza el archivo `.gitattributes`.

### Ver archivos rastreados

```bash
git lfs ls-files
```

### Agregar archivos

```bash
git add archivo-grande.psd
git commit -m "Agregar archivo grande"
git push
```

## Archivos comunes para rastrear

```bash
# Imágenes
git lfs track "*.psd"
git lfs track "*.ai"
git lfs track "*.jpg"
git lfs track "*.png"

# Video
git lfs track "*.mp4"
git lfs track "*.mov"
git lfs track "*.avi"

# Audio
git lfs track "*.mp3"
git lfs track "*.wav"

# Archivos comprimidos
git lfs track "*.zip"
git lfs track "*.rar"
git lfs track "*.7z"

# Ejecutables
git lfs track "*.exe"
git lfs track "*.dll"
```

## Ejemplo práctico

```bash
# Instalar Git LFS
git lfs install

# Crear un repositorio
git init mi-proyecto
cd mi-proyecto

# Rastrear archivos grandes
git lfs track "*.mp4"

# Agregar el archivo .gitattributes
git add .gitattributes
git commit -m "Configurar Git LFS"

# Agregar un archivo grande
cp /ruta/a/video.mp4 .
git add video.mp4
git commit -m "Agregar video"

# Enviar cambios
git push origin main
```

## Clonar un repositorio con Git LFS

```bash
git clone https://github.com/usuario/proyecto.git
```

Git LFS automáticamente descargará los archivos grandes.

### Clonar sin descargar archivos grandes

```bash
git clone --depth 1 https://github.com/usuario/proyecto.git
```

Luego descarga los archivos cuando los necesites:

```bash
git lfs pull
```

## Ventajas de Git LFS

- **Clones más rápidos**: Solo descargas los archivos que necesitas
- **Menos espacio en disco**: Los archivos grandes se almacenan en un servidor separado
- **Mejor rendimiento**: Las operaciones de Git son más rápidas
- **Transparente**: Funciona sin cambiar tu flujo de trabajo

## Limitaciones

- Requiere que el servidor soporte Git LFS
- Los archivos grandes se almacenan en un servidor separado
- Puede haber costos adicionales por almacenamiento

## Resumen

- Git LFS permite rastrear archivos grandes sin ralentizar Git
- Reemplaza archivos grandes con punteros
- Los archivos se descargan bajo demanda
- Ideal para proyectos con imágenes, videos, ejecutables, etc.
- Funciona de forma transparente con Git

---

**Fuente**: [Atlassian - Git LFS](https://www.atlassian.com/es/git/tutorials/git-lfs)
