---
sidebar_position: 4
---

# Archivo .gitignore

El archivo `.gitignore` le indica a Git qué archivos debe ignorar. Los archivos ignorados no se rastrean ni se confirman.

## ¿Qué archivos ignorar?

Típicamente, ignoras:
- **Cachés de dependencias**: `/node_modules`, `/packages`
- **Código compilado**: `.o`, `.pyc`, `.class`
- **Directorios de salida**: `/bin`, `/out`, `/target`
- **Archivos generados en tiempo de ejecución**: `.log`, `.lock`, `.tmp`
- **Archivos del sistema**: `.DS_Store`, `Thumbs.db`
- **Configuración de IDE**: `.idea/workspace.xml`, `.vscode/settings.json`
- **Archivos de configuración local**: `.env`, `config.local.js`

## Ubicación del archivo

El archivo `.gitignore` se coloca en la raíz del repositorio:

```
mi-proyecto/
├── .gitignore
├── src/
├── README.md
└── ...
```

## Patrones básicos

### Ignorar un archivo específico

```
archivo.log
```

### Ignorar todos los archivos con una extensión

```
*.log
*.tmp
*.pyc
```

### Ignorar un directorio

```
/directorio
directorio/
```

### Ignorar archivos en cualquier directorio

```
**/*.log
```

### Ignorar archivos en un directorio específico

```
src/**/*.log
```

## Patrones avanzados

### Anular un patrón

```
*.log
!importante.log
```

Esto ignora todos los archivos `.log` excepto `importante.log`.

### Patrones con caracteres especiales

```
# Signo de interrogación: exactamente un carácter
debug?.log

# Corchetes: un carácter del conjunto
debug[0-9].log

# Rango: un carácter del rango
debug[0-5].log

# Negación: cualquier carácter excepto los del conjunto
debug[!0-5].log
```

## Ejemplo de .gitignore completo

```
# Dependencias
node_modules/
/packages
*.egg-info/
dist/
build/

# Archivos compilados
*.o
*.pyc
*.class
*.jar

# Archivos de log
*.log
logs/

# Archivos temporales
*.tmp
*.temp
*.swp
*~

# Archivos del sistema
.DS_Store
Thumbs.db

# Configuración de IDE
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Archivos de configuración local
.env
.env.local
config.local.js

# Archivos de compilación
dist/
build/
.next/

# Archivos de prueba
coverage/
.nyc_output/

# Archivos de caché
.cache/
.eslintcache
```

## Archivos .gitignore compartidos

Es una buena práctica compartir `.gitignore` en el repositorio:

```bash
git add .gitignore
git commit -m "Agregar .gitignore"
```

Esto asegura que todos los desarrolladores ignoren los mismos archivos.

## Reglas personales de .gitignore

Además del `.gitignore` compartido, puedes tener reglas personales:

```bash
# Editar .git/info/exclude
nano .git/info/exclude
```

Esto no se comparte con otros desarrolladores.

## Reglas globales de .gitignore

Puedes crear un `.gitignore` global para tu máquina:

```bash
# Crear un archivo global
nano ~/.gitignore_global

# Configurar Git para usarlo
git config --global core.excludesfile ~/.gitignore_global
```

## Depuración de .gitignore

### Ver qué archivos Git está rastreando

```bash
git ls-files
```

### Ver qué archivos están siendo ignorados

```bash
git check-ignore -v <archivo>
```

```bash
git check-ignore -v *.log
```

### Listar todos los archivos ignorados

```bash
git status --ignored
```

## Omitir un archivo previamente confirmado

Si un archivo ya fue confirmado pero ahora quieres ignorarlo:

```bash
# Dejar de rastrear el archivo
git rm --cached <archivo>

# Agregar a .gitignore
echo "<archivo>" >> .gitignore

# Confirmar los cambios
git commit -m "Dejar de rastrear <archivo>"
```

## Confirmar un archivo ignorado

Si necesitas confirmar un archivo que está en `.gitignore`:

```bash
git add -f <archivo>
git commit -m "Agregar archivo ignorado"
```

## Almacenar un archivo ignorado

Si quieres guardar cambios en un archivo ignorado sin confirmarlo:

```bash
git stash
```

## Resumen

- `.gitignore` le dice a Git qué archivos ignorar
- Se coloca en la raíz del repositorio
- Soporta patrones con caracteres especiales
- Debe compartirse en el repositorio
- Puedes tener reglas personales y globales
- Usa `git check-ignore` para depurar

---

**Fuente**: [Atlassian - .gitignore](https://www.atlassian.com/es/git/tutorials/saving-changes/gitignore)
