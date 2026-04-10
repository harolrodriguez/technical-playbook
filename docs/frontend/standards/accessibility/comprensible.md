---
sidebar_position: 4
title: Comprensible
---

La información y el funcionamiento de la interfaz deben ser comprensibles.

## 3.1 Legible

### 3.1.1 Idioma de la página — Nivel A

El idioma predeterminado de la página puede determinarse programáticamente.

```html
<!-- ✅ idioma declarado en el html -->
<html lang="es">

<!-- ✅ inglés -->
<html lang="en">

<!-- ❌ sin atributo lang -->
<html>
```

### 3.1.2 Idioma de las partes — Nivel AA

El idioma de cada pasaje o frase puede determinarse programáticamente cuando difiere del idioma de la página.

```html
<!-- ✅ fragmento en otro idioma -->
<p>
  El término en inglés es
  <span lang="en">accessibility</span>,
  que en español traducimos como accesibilidad.
</p>
```

---

## 3.2 Predecible

### 3.2.1 Al recibir el foco — Nivel A

Recibir el foco no provoca un cambio de contexto automático.

```tsx
// ❌ navega automáticamente al recibir foco
<input onFocus={() => navigate('/otra-pagina')} />

// ❌ envía el formulario al recibir foco
<input onFocus={() => submitForm()} />

// ✅ el foco solo activa el estado visual de foco
<input onFocus={() => setHighlighted(true)} />
```

### 3.2.2 Al introducir datos — Nivel A

Cambiar el valor de un componente no provoca un cambio de contexto automático, a menos que el usuario haya sido informado.

```tsx
// ❌ navega automáticamente al seleccionar
<select onChange={(e) => navigate(e.target.value)}>
  <option value="/inicio">Inicio</option>
  <option value="/perfil">Perfil</option>
</select>

// ✅ requiere confirmación explícita
<select onChange={(e) => setDestino(e.target.value)}>
  <option value="/inicio">Inicio</option>
  <option value="/perfil">Perfil</option>
</select>
<button onClick={() => navigate(destino)}>Ir</button>
```

### 3.2.3 Navegación consistente — Nivel AA

Los mecanismos de navegación que se repiten en múltiples páginas aparecen en el mismo orden relativo.

```tsx
// ✅ el orden del menú es consistente en todas las páginas
// Si en la página A el orden es: Inicio > Productos > Contacto
// En la página B debe ser el mismo orden
```

### 3.2.4 Identificación consistente — Nivel AA

Los componentes con la misma funcionalidad se identifican de forma consistente.

```tsx
// ✅ el mismo icono de búsqueda tiene siempre el mismo aria-label
<button aria-label="Buscar">🔍</button>  // en el header
<button aria-label="Buscar">🔍</button>  // en el sidebar

// ❌ mismo icono, labels diferentes
<button aria-label="Buscar">🔍</button>
<button aria-label="Iniciar búsqueda">🔍</button>
```

### 3.2.6 Ayuda consistente — Nivel A *(nuevo en 2.2)*

Si hay mecanismos de ayuda (chat, teléfono, FAQ, formulario de contacto), aparecen en el mismo lugar relativo en todas las páginas.

---

## 3.3 Asistencia en la entrada

### 3.3.1 Identificación de errores — Nivel A

Si se detecta un error automáticamente, el elemento con error se identifica y el error se describe al usuario en texto.

```tsx
// ✅ error identificado y descrito
<div>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid={!!emailError}
    aria-describedby={emailError ? 'email-error' : undefined}
  />
  {emailError && (
    <span id="email-error" role="alert">
      {emailError}
    </span>
  )}
</div>

// ❌ error solo visual (borde rojo sin texto)
<input style={{ border: emailError ? '1px solid red' : '1px solid gray' }} />
```

### 3.3.2 Etiquetas o instrucciones — Nivel A

Se proporcionan etiquetas o instrucciones cuando el contenido requiere entrada del usuario.

```tsx
// ✅ label + instrucciones para formato
<div>
  <label htmlFor="fecha">Fecha de nacimiento</label>
  <input
    id="fecha"
    type="text"
    placeholder="DD/MM/AAAA"
    aria-describedby="fecha-hint"
  />
  <span id="fecha-hint">Formato: día/mes/año (ej: 15/03/1990)</span>
</div>

// ❌ solo placeholder como instrucción (desaparece al escribir)
<input type="text" placeholder="DD/MM/AAAA" />
```

### 3.3.3 Sugerencia de error — Nivel AA

Si se detecta un error y se conocen sugerencias para corregirlo, se proporcionan al usuario.

```tsx
// ✅ sugerencia específica
{emailError && (
  <span role="alert">
    Email inválido. Asegúrate de incluir @ y un dominio (ej: nombre@ejemplo.com)
  </span>
)}

// ❌ error genérico sin sugerencia
{emailError && <span role="alert">Error en el campo</span>}
```

### 3.3.4 Prevención de errores (legal, financiero, datos) — Nivel AA

Para envíos con consecuencias legales o financieras, las acciones son reversibles, verificables o confirmables.

```tsx
// ✅ confirmación antes de acción irreversible
function DeleteAccount({ onConfirm }) {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
        />
        Entiendo que esta acción es permanente e irreversible
      </label>
      <button onClick={onConfirm} disabled={!confirmed}>
        Eliminar cuenta
      </button>
    </div>
  )
}
```

### 3.3.7 Entrada redundante — Nivel A *(nuevo en 2.2)*

La información que el usuario ya proporcionó en el mismo proceso no se solicita de nuevo, a menos que sea necesario.

```tsx
// ✅ pre-rellena con datos ya ingresados
function ShippingStep({ billingAddress }) {
  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [address, setAddress] = useState(sameAsBilling ? billingAddress : '')

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={sameAsBilling}
          onChange={(e) => {
            setSameAsBilling(e.target.checked)
            if (e.target.checked) setAddress(billingAddress)
          }}
        />
        Igual que la dirección de facturación
      </label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
    </div>
  )
}
```

### 3.3.8 Autenticación accesible (mínimo) — Nivel AA *(nuevo en 2.2)*

El proceso de autenticación no requiere una prueba de función cognitiva (como resolver un acertijo o transcribir texto), a menos que haya una alternativa.

```tsx
// ✅ permite pegar contraseña (no bloquear el portapapeles)
<input
  type="password"
  // ❌ no hagas esto:
  // onPaste={(e) => e.preventDefault()}
/>

// ✅ ofrece alternativas al CAPTCHA de texto
// - CAPTCHA de audio
// - Autenticación por email/SMS
// - Passkeys / biometría
```
