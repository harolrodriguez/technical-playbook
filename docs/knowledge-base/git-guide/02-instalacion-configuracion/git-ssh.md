---
sidebar_position: 3
---

# SSH de Git

Una clave SSH es una credencial de acceso para el protocolo de red SSH (Secure Shell). Este protocolo de red segura con autenticación y cifrado se utiliza para la comunicación remota entre máquinas.

## ¿Cómo funciona SSH?

SSH usa un par de claves para iniciar un protocolo de enlace seguro:

- **Clave pública**: La "cerradura" que entregas a las partes remotas
- **Clave privada**: La "llave" que guardas en un lugar seguro

Las partes remotas cifran datos con la clave pública, y tú los abres con la clave privada.

## Generar una clave SSH

### En macOS y Linux

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@example.com"
```

Este comando creará una nueva clave SSH usando tu correo electrónico como etiqueta.

**Pasos**:

1. Se te pedirá que introduzcas un archivo donde guardar la clave. Presiona Enter para aceptar la ubicación predeterminada (`~/.ssh/id_rsa`):

```
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

2. Se te solicitará una frase de contraseña segura. Esto añade una capa adicional de seguridad:

```
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

### En Windows

Usa Git Bash (incluido con Git para Windows):

1. Abre Git Bash
2. Ejecuta el mismo comando que en macOS/Linux:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@example.com"
```

O usa el Subsistema de Windows para Linux si está disponible.

## Agregar la clave a ssh-agent

`ssh-agent` es un programa que guarda las claves privadas (como un llavero).

### macOS y Linux

1. Inicia ssh-agent:

```bash
eval "$(ssh-agent -s)"
```

Deberías ver algo como:

```
> Agent pid 59566
```

2. Añade tu clave SSH:

```bash
ssh-add -K ~/.ssh/id_rsa
```

### Windows (Git Bash)

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## Agregar la clave pública a tu cuenta

### En Bitbucket

1. Copia tu clave pública:

```bash
cat ~/.ssh/id_rsa.pub
```

2. Ve a tu cuenta de Bitbucket
3. Selecciona **Configuración personal** > **Claves SSH**
4. Pega tu clave pública

### En GitHub

1. Copia tu clave pública:

```bash
cat ~/.ssh/id_rsa.pub
```

2. Ve a **Settings** > **SSH and GPG keys**
3. Haz clic en **New SSH key**
4. Pega tu clave pública

## Verificar la conexión

### Bitbucket

```bash
ssh -T git@bitbucket.org
```

Deberías ver:

```
authenticated as username.
You can use git to connect to Bitbucket. Type 'exit' to disconnect.
```

### GitHub

```bash
ssh -T git@github.com
```

Deberías ver:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

## Usar SSH con Git

Una vez configurado SSH, puedes clonar repositorios usando SSH:

```bash
git clone git@bitbucket.org:username/repository.git
```

O cambiar un repositorio existente de HTTPS a SSH:

```bash
git remote set-url origin git@bitbucket.org:username/repository.git
```

## Solución de problemas

### Permiso denegado

Si recibes "Permission denied (publickey)", verifica:

1. Que tu clave privada está en `~/.ssh/id_rsa`
2. Que los permisos son correctos:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

3. Que tu clave pública está agregada a tu cuenta

### ssh-agent no funciona

Reinicia ssh-agent:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## Mejores prácticas

1. **Usa una frase de contraseña fuerte** para proteger tu clave privada
2. **Nunca compartas tu clave privada** con nadie
3. **Guarda tu clave privada en un lugar seguro**
4. **Usa claves diferentes para diferentes máquinas** si es posible
5. **Rota tus claves regularmente** por seguridad

---

**Fuente**: [Atlassian - SSH de Git](https://www.atlassian.com/es/git/tutorials/git-ssh)
