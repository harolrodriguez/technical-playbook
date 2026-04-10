---
sidebar_position: 2
title: Perceptible
---

La información y los componentes de la interfaz deben presentarse de formas que el usuario pueda percibir.

## 1.1 Alternativas de texto

### 1.1.1 Contenido no textual — Nivel A

Todo contenido no textual tiene una alternativa en texto que cumple el mismo propósito.

```tsx
// ✅ imagen informativa
<img src="grafico-ventas.png" alt="Gráfico de ventas Q1 2024: aumento del 23%" />

// ✅ imagen decorativa — alt vacío, el screen reader la ignora
<img src="separador.png" alt="" role="presentation" />

// ✅ icono con función
<button aria-label="Cerrar modal">
  <CloseIcon aria-hidden="true" />
</button>

// ✅ input con imagen como label
<input type="image" src="buscar.png" alt="Buscar" />

// ❌ sin alt
<img src="logo.png" />

// ❌ alt no descriptivo
<img src="grafico.png" alt="imagen" />
```

---

## 1.2 Medios temporizados

### 1.2.1 Solo audio y solo video (pregrabado) — Nivel A

Proporciona una alternativa para contenido de solo audio o solo video pregrabado.

```html
<!-- ✅ audio con transcripción -->
<audio controls src="podcast.mp3">
  Tu navegador no soporta audio.
</audio>
<a href="transcripcion.html">Leer transcripción</a>
```

### 1.2.2 Subtítulos (pregrabado) — Nivel A

Los videos con audio tienen subtítulos sincronizados.

```html
<video controls>
  <source src="demo.mp4" type="video/mp4" />
  <track kind="subtitles" src="subtitulos-es.vtt" srclang="es" label="Español" default />
</video>
```

### 1.2.3 Audiodescripción o alternativa multimedia (pregrabado) — Nivel A

Los videos tienen audiodescripción o alternativa en texto.

### 1.2.4 Subtítulos (en vivo) — Nivel AA

Los streams en vivo con audio tienen subtítulos en tiempo real.

### 1.2.5 Audiodescripción (pregrabado) — Nivel AA

Los videos pregrabados tienen audiodescripción para el contenido visual importante.

---

## 1.3 Adaptable

### 1.3.1 Información y relaciones — Nivel A

La estructura y las relaciones transmitidas visualmente están disponibles en el código.

```tsx
// ✅ estructura semántica
<table>
  <caption>Ventas por región Q1 2024</caption>
  <thead>
    <tr>
      <th scope="col">Región</th>
      <th scope="col">Ventas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Norte</td>
      <td>$120,000</td>
    </tr>
  </tbody>
</table>

// ✅ formulario con relaciones explícitas
<fieldset>
  <legend>Dirección de envío</legend>
  <label htmlFor="calle">Calle</label>
  <input id="calle" type="text" />
</fieldset>

// ❌ tabla de datos sin headers
<table>
  <tr><td>Región</td><td>Ventas</td></tr>
  <tr><td>Norte</td><td>$120,000</td></tr>
</table>
```

### 1.3.2 Secuencia significativa — Nivel A

El orden de lectura del DOM coincide con el orden visual cuando el orden importa.

```tsx
// ✅ el DOM refleja el orden visual
<article>
  <h2>Título del artículo</h2>
  <p>Introducción...</p>
  <p>Desarrollo...</p>
</article>

// ❌ orden visual logrado con CSS que no coincide con el DOM
// (el screen reader lee en orden del DOM, no visual)
```

### 1.3.3 Características sensoriales — Nivel A

Las instrucciones no dependen únicamente de forma, tamaño, ubicación, orientación o sonido.

```tsx
// ❌ depende solo de posición visual
<p>Haz clic en el botón de la derecha para continuar</p>

// ✅ identifica por nombre o función
<p>Haz clic en "Continuar" para avanzar</p>
```

### 1.3.4 Orientación — Nivel AA

El contenido no restringe la orientación a solo vertical u horizontal, salvo que sea esencial.

```css
/* ❌ bloquea orientación */
@media (orientation: landscape) {
  body { display: none; }
}

/* ✅ adapta el layout sin bloquear */
@media (orientation: landscape) {
  .sidebar { display: flex; }
}
```

### 1.3.5 Identificar el propósito del input — Nivel AA

Los campos de formulario tienen atributos `autocomplete` que identifican su propósito.

```html
<!-- ✅ autocomplete correcto -->
<input type="text" autocomplete="given-name" />
<input type="email" autocomplete="email" />
<input type="tel" autocomplete="tel" />
<input type="text" autocomplete="street-address" />
```

---

## 1.4 Distinguible

### 1.4.1 Uso del color — Nivel A

El color no es el único medio visual para transmitir información.

```tsx
// ❌ solo color indica el error
<input style={{ borderColor: isError ? 'red' : 'gray' }} />

// ✅ color + icono + texto
<input
  style={{ borderColor: isError ? 'red' : 'gray' }}
  aria-invalid={isError}
  aria-describedby={isError ? 'error-msg' : undefined}
/>
{isError && (
  <span id="error-msg" role="alert">
    <ErrorIcon aria-hidden="true" /> Email inválido
  </span>
)}
```

### 1.4.2 Control de audio — Nivel A

Si el audio se reproduce automáticamente por más de 3 segundos, hay un mecanismo para pausarlo o silenciarlo.

### 1.4.3 Contraste mínimo — Nivel AA

El texto tiene una relación de contraste de al menos 4.5:1 (texto normal) o 3:1 (texto grande ≥18px o ≥14px bold).

```css
/* ✅ contraste suficiente */
color: #1a1a1a; /* sobre fondo blanco: 18.1:1 */
color: #595959; /* sobre fondo blanco: 7:1 */

/* ❌ contraste insuficiente */
color: #aaaaaa; /* sobre fondo blanco: 2.3:1 */
```

Verifica con [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### 1.4.4 Cambio de tamaño del texto — Nivel AA

El texto puede redimensionarse hasta el 200% sin pérdida de contenido o funcionalidad.

```css
/* ✅ usa unidades relativas */
font-size: 1rem;
font-size: 1.125rem;

/* ❌ unidades fijas que no escalan */
font-size: 14px; /* no escala con las preferencias del usuario */
```

### 1.4.5 Imágenes de texto — Nivel AA

Usa texto real en lugar de imágenes de texto cuando sea posible.

### 1.4.10 Reflow — Nivel AA

El contenido puede presentarse sin scroll horizontal a 400% de zoom (equivalente a 320px de ancho).

```css
/* ✅ layout que se adapta */
.container {
  max-width: 100%;
  overflow-wrap: break-word;
}

/* ❌ ancho fijo que causa scroll horizontal */
.container {
  width: 1200px;
}
```

### 1.4.11 Contraste de componentes no textuales — Nivel AA

Los componentes de UI (bordes de inputs, iconos, indicadores de estado) tienen contraste de al menos 3:1 contra el fondo adyacente.

```css
/* ✅ borde de input con contraste suficiente */
border: 1px solid #767676; /* 4.5:1 sobre blanco */

/* ❌ borde demasiado claro */
border: 1px solid #cccccc; /* 1.6:1 sobre blanco */
```

### 1.4.12 Espaciado de texto — Nivel AA

No hay pérdida de contenido al aplicar estos estilos:
- Altura de línea ≥ 1.5 veces el tamaño de fuente
- Espaciado entre párrafos ≥ 2 veces el tamaño de fuente
- Espaciado entre letras ≥ 0.12 veces el tamaño de fuente
- Espaciado entre palabras ≥ 0.16 veces el tamaño de fuente

```css
/* ✅ no uses altura fija en contenedores de texto */
.card { min-height: 100px; } /* min, no height fijo */

/* ❌ altura fija que corta el texto al aumentar espaciado */
.card { height: 100px; overflow: hidden; }
```

### 1.4.13 Contenido en hover o focus — Nivel AA

El contenido que aparece al hacer hover o focus (tooltips, popovers) es:
- **Descartable**: se puede cerrar sin mover el foco (Escape)
- **Hoverable**: el puntero puede moverse sobre el contenido sin que desaparezca
- **Persistente**: no desaparece hasta que el usuario lo descarte o pierda relevancia

```tsx
// ✅ tooltip que cumple los tres requisitos
function Tooltip({ content, children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') setVisible(false) }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div role="tooltip" onMouseEnter={() => setVisible(true)}>
          {content}
        </div>
      )}
    </div>
  )
}
```
