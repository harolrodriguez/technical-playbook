---
sidebar_position: 5
title: Robusto
---

El contenido debe ser suficientemente robusto para ser interpretado por una amplia variedad de agentes de usuario, incluidas las tecnologías de asistencia.

## 4.1 Compatible

### 4.1.2 Nombre, rol, valor — Nivel A

Para todos los componentes de la interfaz, el nombre, el rol y los valores pueden determinarse programáticamente. Los estados, propiedades y valores que el usuario puede establecer pueden ser configurados por el usuario, y los cambios se notifican a los agentes de usuario.

```tsx
// ✅ botón nativo — nombre, rol y estado automáticos
<button disabled={isLoading}>
  {isLoading ? 'Cargando...' : 'Enviar'}
</button>

// ✅ componente custom con ARIA completo
<div
  role="checkbox"
  aria-checked={isChecked}
  aria-label="Acepto los términos y condiciones"
  tabIndex={0}
  onClick={() => setIsChecked(!isChecked)}
  onKeyDown={(e) => {
    if (e.key === ' ' || e.key === 'Enter') setIsChecked(!isChecked)
  }}
/>

// ✅ input con nombre accesible
<label htmlFor="nombre">Nombre completo</label>
<input id="nombre" type="text" />

// ✅ botón con icono — nombre accesible via aria-label
<button aria-label="Eliminar elemento">
  <TrashIcon aria-hidden="true" />
</button>

// ❌ div sin rol ni nombre accesible
<div onClick={handleClick} style={{ cursor: 'pointer' }}>
  Hacer clic aquí
</div>

// ❌ input sin label
<input type="text" placeholder="Nombre" />
```

**Patrones comunes que requieren ARIA:**

```tsx
// Acordeón
<button
  aria-expanded={isOpen}
  aria-controls={`panel-${id}`}
  id={`header-${id}`}
>
  {title}
</button>
<div
  id={`panel-${id}`}
  role="region"
  aria-labelledby={`header-${id}`}
  hidden={!isOpen}
>
  {content}
</div>

// Tabs
<div role="tablist" aria-label="Secciones de configuración">
  <button role="tab" aria-selected={activeTab === 'perfil'} aria-controls="panel-perfil">
    Perfil
  </button>
  <button role="tab" aria-selected={activeTab === 'seguridad'} aria-controls="panel-seguridad">
    Seguridad
  </button>
</div>
<div id="panel-perfil" role="tabpanel" aria-labelledby="tab-perfil" hidden={activeTab !== 'perfil'}>
  ...
</div>

// Combobox / Autocomplete
<input
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
  aria-autocomplete="list"
  aria-controls="suggestions-list"
  aria-activedescendant={selectedOption ? `option-${selectedOption}` : undefined}
/>
<ul id="suggestions-list" role="listbox">
  {options.map(option => (
    <li key={option.id} id={`option-${option.id}`} role="option" aria-selected={option.id === selectedOption}>
      {option.label}
    </li>
  ))}
</ul>

// Dialog / Modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirmar eliminación</h2>
  <p id="dialog-description">Esta acción no se puede deshacer.</p>
  <button onClick={onConfirm}>Confirmar</button>
  <button onClick={onCancel}>Cancelar</button>
</div>

// Live regions — para contenido que cambia dinámicamente
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

<div role="alert"> {/* aria-live="assertive" implícito */}
  {errorMessage}
</div>
```

### 4.1.3 Mensajes de estado — Nivel AA

Los mensajes de estado pueden determinarse programáticamente a través del rol o las propiedades, de forma que puedan ser anunciados por las tecnologías de asistencia sin recibir el foco.

```tsx
// ✅ mensaje de éxito anunciado sin mover el foco
<div aria-live="polite">
  {submitSuccess && 'Formulario enviado correctamente'}
</div>

// ✅ error crítico anunciado inmediatamente
<div role="alert">
  {criticalError}
</div>

// ✅ contador de resultados de búsqueda
<div aria-live="polite" aria-atomic="true">
  {`${results.length} resultados encontrados`}
</div>

// ✅ progreso de carga
<div aria-live="polite">
  {isLoading ? 'Cargando resultados...' : ''}
</div>

// ❌ mensaje que aparece visualmente pero no se anuncia
<div className={styles.successMessage}>
  {submitSuccess && 'Enviado correctamente'}
</div>
```

**Cuándo usar cada tipo de live region:**

| Tipo | Urgencia | Cuándo usar |
|------|----------|-------------|
| `aria-live="polite"` | Baja | Mensajes de estado, contadores, actualizaciones no críticas |
| `aria-live="assertive"` / `role="alert"` | Alta | Errores críticos, alertas de seguridad |
| `role="status"` | Baja | Confirmaciones de acciones completadas |
| `role="log"` | Baja | Historial de chat, logs de actividad |
| `role="timer"` | Baja | Contadores de tiempo |
