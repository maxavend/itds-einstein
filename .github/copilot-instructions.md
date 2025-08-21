Perfecto, Maxi. Tomé tus reglas y les añadí lo que pediste (icónicos con React-Icons, flujo “MCP ➜ listado de componentes ➜ confirmación ➜ desarrollo por carpeta con README ➜ integración final”, y el criterio de variables Tailwind). Aquí tienes el **.md** listo para copiar.

# Copilot · Figma MCP → React + Tailwind 3.4.17

## Alcance y fuentes de verdad

* **Diseño**: Figma (Variables + Auto Layout) vía **Dev Mode MCP Server**. Consulta el servidor MCP para extraer componentes, variables y layout.
* **Código**: React + TypeScript + Tailwind **v3.4.17**. Usa utilidades por defecto; **extiende** solo lo necesario (tokens custom).

---

## Reglas de mapeo de variables (Figma → Tailwind)

### Colores (custom variables)

* Variables **semánticas** de Figma → **CSS Custom Properties** en `styles/tokens.css` (p. ej. `--color-bg-default`, `--color-primary-500`).
* Exponerlas en `tailwind.config.ts` dentro de `theme.extend.colors` con `var(--...)` para usarlas como `bg-[...]`, `text-[...]`, `border-[...]` o con nombres alias (p. ej. `bg-bg` → `var(--color-bg-default)`). 

**Ejemplo `tailwind.config.ts` (v3.4.17):**

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg-default)',
        primary: {
          50:  'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
        },
      },
      // Ejemplo si necesitas un spacing custom:
      spacing: {
        'input': 'var(--spacing-input)', // solo si no existe en Tailwind
      },
    },
  },
  plugins: [],
} satisfies Config
```

### Spacing / Tipografía / Radius (NO custom por defecto)

* **Traduce** tokens de Figma a utilidades Tailwind (`p-4`, `px-4`, `py-4`, `gap-4`, `text-sm`, `font-medium`, `rounded-md`, etc.).
* **Solo extiende** si el token **no existe** en Tailwind (p. ej. `spacing-input`).

---

## Layout: Auto Layout (Figma) → Flex/Grid (Tailwind)

* **Horizontal** → `flex flex-row items-* justify-* gap-*`.
* **Vertical** → `flex flex-col items-* justify-* gap-*`.
* Usa `grid grid-cols-*` si hay columnas explícitas; respeta padding/gap/margins con utilidades (`min-w-*`, `min-h-*`, `max-w-*` cuando aplique).

---

## Reemplazo de íconos (Figma → React-Icons)

* **Regla**: Reemplaza cada ícono de Figma por su equivalente en **React-Icons** (biblioteca estándar de íconos para React).
* Importa solo los íconos necesarios desde su **pack** (ej. `fa`, `lu`, `io5`, etc.). 

**Ejemplo de uso:**

```tsx
import { FaChevronRight } from 'react-icons/fa'

export function NextAction() {
  return (
    <button className="inline-flex items-center gap-2">
      Siguiente <FaChevronRight aria-hidden />
    </button>
  )
}
```

---

## Flujo Copilot + MCP (paso a paso)

1. **Análisis (MCP)**: Ejecuta el MCP sobre la **selección** en Figma y devuelve:

   * Variables aplicadas (color/spacing/tipografía/radius) y props de Auto Layout (dirección, gap, padding, alineación).
   * **Mapa** Figma → Tailwind/CSS vars y **lista de gaps** que requieren `theme.extend` (ej. `spacing-input`).
2. **Primer output** (obligatorio):

   > “Se mapearon los componentes **A**, **B**, **C**. ¿Comenzamos con **A**?”
3. **Desarrollo por componente** (confirmado por el usuario):

   * Crea `src/components/[Name]/index.tsx` **desacoplado**, con props tipadas (basadas en las props de Figma) y estilos via Tailwind.
   * Genera `src/components/[Name]/README.md` con: uso, props, decisiones de mapeo y accesibilidad.
   * Si falta un token/clase, propone **extensión mínima** en `theme.extend`.
4. **Itera**: Repite el paso 3 para **B**, **C**, … hasta cubrir toda la selección.
5. **Integración final**: Pregunta

   > “¿Procedemos a armar la vista seleccionada integrando los componentes ya creados?”
   > y genera el layout de la selección reutilizando los componentes.

---

## Estructura de proyecto (sugerida)

```
src/
├─ components/
│  └─ [ComponentName]/
│     ├─ index.tsx
│     ├─ [ComponentName].test.tsx
│     └─ README.md
├─ action/        # acciones específicas de dominio
│  └─ [component-name]/index.tsx
├─ forms/         # patrones de formularios
│  └─ [component-name]/index.tsx
├─ hooks/
├─ lib/
└─ styles/
   ├─ globals.css
   └─ tokens.css   # CSS vars sincronizadas desde Figma
```

---

## Reglas de desarrollo

1. Componentes funcionales, **props tipadas** (`Props`) + JSDoc breve; composición > herencia.
2. **No recrear** componentes ya existentes en tu librería interna; si falta, documenta el gap.
3. **Accesibilidad**: `aria-*`, roles, foco visible y contraste según tokens.
4. **Estados**: `hover`, `focus`, `disabled`, `aria-pressed`/`data-*` cuando aplique.
5. **Sin estilos inline** si existe utilidad Tailwind equivalente.

---

## Snippets de prompt (para Copilot/Agente)

**Inicial por componente**

> Ejecuta el MCP en esta **selección**. Devuélveme: 1. variables aplicadas, 2. props de Auto Layout, 3. mapeo Figma→Tailwind/CSS vars, 4. tokens a extender. Luego responde: “Se mapearon **A, B, C**. ¿Comenzamos con **A**?”. Si digo **sí**, genera `src/components/A/index.tsx` (React+TS+Tailwind), reemplaza íconos por **React-Icons** y crea `README.md` con uso/props/a11y. Repite hasta terminar **B, C…**, y al final pregunta si integramos todos en la vista.

**Extender tokens necesarios**

> Si un token no existe en Tailwind, propone la **mínima** extensión en `theme.extend` y úsalo en el componente.

**Chequeo de layout**

> Compara con Auto Layout. Si no coincide (alineación/gaps/padding), sugiere clases alternativas (grid vs flex) sin CSS ad-hoc.

---

## Ejemplo mínimo

```tsx
// src/components/Card/index.tsx
import { type ReactNode } from 'react'
import { FaInfoCircle } from 'react-icons/fa' // icono sustituyendo el de Figma

type CardProps = {
  title: string
  actions?: ReactNode
  children?: ReactNode
}

export default function Card({ title, actions, children }: CardProps) {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-md bg-bg">
      {/* bg-bg = var(--color-bg-default) (tokens.css) → mapeado en tailwind.config.ts */}
      <header className="flex items-center justify-between">
        <h2 className="text-base font-medium inline-flex items-center gap-2">
          <FaInfoCircle aria-hidden /> {title}
        </h2>
        {actions}
      </header>
      <div>{children}</div>
    </section>
  )
}
```

> Nota: `rounded-md` y utilidades equivalentes están disponibles en Tailwind v3.4.\*; usa `rounded-[var(--radius-lg)]` si tu radius es variable.

---

## Checklist de aceptación

* [ ] MCP ejecutado sobre la **selección** y mapeo documentado (Figma → Tailwind/CSS vars). ([help.figma.com][1])
* [ ] Salida inicial: **lista de componentes** detectados y confirmación para empezar.
* [ ] Componentes **desacoplados**, con props tipadas (desde Figma) y README por carpeta.
* [ ] **React-Icons** reemplazando íconos de Figma; imports por pack. ([Npm][9])
* [ ] **Sin** estilos inline si existe utilidad Tailwind. ([tailwindcss.com][6])
* [ ] Extensiones en `theme.extend` **mínimas y justificadas** (p. ej. `spacing-input`).
* [ ] Layout fiel al Auto Layout (dirección, gap, padding, alignment).
* [ ] Tokens de color vía **CSS vars** y utilidades Tailwind. ([figma2wp.com][4])
* [ ] Test visual o story básico.

