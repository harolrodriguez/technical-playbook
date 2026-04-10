---
sidebar_position: 3
title: Operable
---

Los componentes de la interfaz y la navegación deben ser operables por todos los usuarios.

## 2.1 Accesible por teclado

### 2.1.1 Teclado — Nivel A

Toda la funcionalidad está disponible mediante teclado, sin requerir tiempos específicos entre pulsaciones.

```tsx
// ✅ elementos nativos son accesibles por teclado automáticamente
<button onClick={handleSubmit}>Enviar</button>
<a href="/perfil">Ver perfil</a>
<input type="text" />
<select>...</select>

// ✅ elemento custom con soporte de teclado
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
>
  Acción
</div>

// ❌ funcionalidad solo disponible con mouse
<div onMouseOver={showMenu}>Menú</div>
```

### 2.1.2 Sin trampa de teclado — Nivel A

El foco del teclado puede moverse hacia y desde cualquier componente usando solo el teclado.

```tsx
// ✅ modal que atrapa el foco correctamente y lo libera al cerrar
function Modal({ onClose, children }) {
  const modalRef = useRef(null)

  useEffect(() => {
    // atrapa el foco dentro del modal
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    firstElement?.focus()
    return () => document.removeEventListener('keydown', handleTab)
  }, [])

  return (
    <div ref={modalRef} role="dialog" aria-modal="true">
      {children}
      <button onClick={onClose}>Cerrar</button>
    </div>
  )
}
```

### 2.1.4 Atajos de teclado con caracteres — Nivel A

Los atajos que usan solo letras, signos de puntuación o números pueden desactivarse o remapearse.

---

## 2.2 Tiempo suficiente

### 2.2.1 Tiempo ajustable — Nivel A

Si hay límites de tiempo, el usuario puede desactivarlos, ajustarlos o extenderlos (excepto en tiempo real como subastas).

```tsx
// ✅ sesión con advertencia y opción de extender
function SessionTimeout({ onExtend, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos

  return timeLeft < 60 ? (
    <div role="alert">
      <p>Tu sesión expira en {timeLeft} segundos</p>
      <button onClick={onExtend}>Extender sesión</button>
    </div>
  ) : null
}
```

### 2.2.2 Pausar, detener, ocultar — Nivel A

El contenido que se mueve, parpadea o se desplaza automáticamente puede pausarse, detenerse u ocultarse.

```tsx
// ✅ carrusel con control de pausa
function Carousel({ slides }) {
  const [paused, setPaused] = useState(false)

  return (
    <div>
      <button
        onClick={() => setPaused(!paused)}
        aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
      >
        {paused ? '▶' : '⏸'}
      </button>
      {/* lógica del carrusel */}
    </div>
  )
}
```

---

## 2.3 Convulsiones y reacciones físicas

### 2.3.1 Tres destellos o por debajo del umbral — Nivel A

Las páginas no contienen nada que destelle más de 3 veces por segundo, o el destello está por debajo del umbral general y de destellos rojos.

```tsx
// ❌ animación que puede causar convulsiones
@keyframes flash {
  0%, 100% { background: white; }
  50% { background: red; }
}
animation: flash 0.2s infinite; /* 5 destellos/segundo */

// ✅ animación segura
animation: flash 1s infinite; /* 1 destello/segundo */
```

---

## 2.4 Navegable

### 2.4.1 Saltar bloques — Nivel A

Hay un mecanismo para saltar bloques de contenido repetido (como la navegación principal).

```tsx
// ✅ skip link al inicio del documento
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
    >
      Saltar al contenido principal
    </a>
  )
}

// En el layout
<SkipLink />
<nav>...</nav>
<main id="main-content">...</main>
```

### 2.4.2 Página titulada — Nivel A

Las páginas tienen títulos que describen su tema o propósito.

```tsx
// ✅ título descriptivo por página
<title>Checkout — Paso 2: Dirección de envío | TiendaApp</title>
<title>Error 404 — Página no encontrada | TiendaApp</title>

// ❌ título genérico
<title>TiendaApp</title>
```

### 2.4.3 Orden del foco — Nivel A

El orden en que los elementos reciben el foco es lógico y preserva el significado.

```tsx
// ✅ tabIndex solo para elementos que deben estar fuera del orden natural
<div tabIndex={-1} ref={errorRef}>Error: email inválido</div>
// tabIndex={-1} permite enfocar programáticamente sin añadir al orden de tab

// ❌ tabIndex positivo rompe el orden natural
<button tabIndex={3}>Primero visualmente pero tercero en el DOM</button>
<button tabIndex={1}>Segundo visualmente pero primero en el DOM</button>
```

### 2.4.4 Propósito del enlace (en contexto) — Nivel A

El propósito de cada enlace puede determinarse por el texto del enlace o por su contexto.

```tsx
// ✅ texto descriptivo
<a href="/producto/123">Ver detalles del iPhone 15 Pro</a>

// ✅ contexto hace el enlace comprensible
<article>
  <h3>iPhone 15 Pro</h3>
  <a href="/producto/123">Ver detalles</a> {/* "Ver detalles" es claro en contexto */}
</article>

// ❌ sin contexto
<a href="/producto/123">Haz clic aquí</a>
<a href="/producto/456">Más información</a>
```

### 2.4.5 Múltiples formas — Nivel AA

Hay más de una forma de localizar una página dentro de un sitio (excepto si es resultado de un proceso).

Ejemplos: menú de navegación + buscador, mapa del sitio, breadcrumbs.

### 2.4.6 Encabezados y etiquetas — Nivel AA

Los encabezados y etiquetas describen el tema o propósito.

```tsx
// ✅ encabezados descriptivos
<h1>Configuración de cuenta</h1>
<h2>Información personal</h2>
<h2>Seguridad</h2>
<h3>Cambiar contraseña</h3>

// ❌ encabezados genéricos
<h2>Sección 1</h2>
<h2>Sección 2</h2>
```

### 2.4.7 Foco visible — Nivel AA

El indicador de foco del teclado es visible.

```css
/* ✅ foco visible y con contraste suficiente */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* ❌ nunca elimines el outline sin reemplazarlo */
:focus {
  outline: none;
}
```

### 2.4.11 Foco no obstruido (mínimo) — Nivel A *(nuevo en 2.2)*

Cuando un elemento recibe el foco, no está completamente oculto por otro contenido (como un header sticky).

```css
/* ✅ scroll-padding para compensar headers fijos */
html {
  scroll-padding-top: 80px; /* altura del header fijo */
}
```

---

## 2.5 Modalidades de entrada

### 2.5.1 Gestos de puntero — Nivel A

Las funciones que usan gestos multipunto (pinch, swipe) tienen alternativas de un solo punto.

```tsx
// ✅ slider con gestos Y botones alternativos
function Slider({ value, onChange }) {
  return (
    <div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button onClick={() => onChange(value - 1)}>−</button>
      <button onClick={() => onChange(value + 1)}>+</button>
    </div>
  )
}
```

### 2.5.2 Cancelación de puntero — Nivel A

Las funciones no se activan en el evento `mousedown` o `touchstart` (down-event), sino en el up-event, permitiendo cancelar.

```tsx
// ❌ activa en down-event, no se puede cancelar
<button onMouseDown={handleDelete}>Eliminar</button>

// ✅ activa en up-event (comportamiento por defecto de onClick)
<button onClick={handleDelete}>Eliminar</button>
```

### 2.5.3 Etiqueta en el nombre — Nivel A

Para componentes con etiqueta visible, el nombre accesible contiene el texto visible.

```tsx
// ✅ el aria-label incluye el texto visible
<button aria-label="Buscar productos">
  <SearchIcon /> Buscar
</button>

// ❌ aria-label reemplaza el texto visible con algo diferente
<button aria-label="Iniciar búsqueda">
  Buscar
</button>
```

### 2.5.4 Actuación por movimiento — Nivel A

Las funciones activadas por movimiento del dispositivo tienen alternativas de UI y pueden desactivarse.

### 2.5.7 Movimientos de arrastre — Nivel AA *(nuevo en 2.2)*

Las funciones que requieren arrastrar tienen alternativas de un solo puntero.

```tsx
// ✅ drag-and-drop con alternativa de botones
function SortableList({ items, onReorder }) {
  return items.map((item, index) => (
    <div key={item.id} draggable>
      {item.name}
      {/* alternativa: botones de subir/bajar */}
      <button
        onClick={() => onReorder(index, index - 1)}
        disabled={index === 0}
        aria-label={`Mover ${item.name} arriba`}
      >↑</button>
      <button
        onClick={() => onReorder(index, index + 1)}
        disabled={index === items.length - 1}
        aria-label={`Mover ${item.name} abajo`}
      >↓</button>
    </div>
  ))
}
```

### 2.5.8 Tamaño del objetivo (mínimo) — Nivel AA *(nuevo en 2.2)*

Los objetivos táctiles tienen al menos 24×24 píxeles CSS, o hay suficiente espacio alrededor.

```css
/* ✅ objetivo táctil mínimo */
button {
  min-width: 24px;
  min-height: 24px;
}

/* ✅ mejor práctica: 44×44px para comodidad */
button {
  min-width: 44px;
  min-height: 44px;
}

/* ❌ objetivo demasiado pequeño */
.icon-button {
  width: 16px;
  height: 16px;
}
```
