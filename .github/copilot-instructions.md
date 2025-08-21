# Copilot · Figma MCP → React + Tailwind 3.4.17

## Alcance y fuentes de verdad
- **Diseño**: Figma (Variables + Auto Layout) vía **Dev Mode MCP Server**. Copilot debe consultar el servidor MCP para extraer componentes, variables y layout.
- **Código**: React + TypeScript + Tailwind CSS **v3.4.17**.
- **Principio**: Usa utilidades de Tailwind por defecto; **extiende** solo lo necesario (tokens custom).

---

## Reglas de mapeo de Variables (Figma → Tailwind)
### Colores (custom variables)
- Variables semánticas de Figma → **CSS variables** en `tokens.css` → expuestas en `tailwind.config.ts` para usarlas como `bg-*`, `text-*`, `border-*`.
- Mantén nombres semánticos (ej. `--color-bg-default`, `--color-primary-500`). No acoples a valores hex.

### Spacing / Tipografía / Radius (NO custom)
- Interpreta variables de Figma (ej. `spacing-4 = 1rem`) y aplica utilidades Tailwind equivalentes (`p-4`, `px-4`, `py-4`, `gap-4`, `rounded-md`, clases de tipografía, etc.).
- Solo **extiende** si el token **no existe** en Tailwind (ej. `spacing-input`).

---

## Layout: Auto Layout (Figma) → Flex/Grid (Tailwind)
- **Horizontal** → `flex flex-row items-* justify-* gap-*`.
- **Vertical** → `flex flex-col items-* justify-* gap-*`.
- Usa `grid grid-cols-*` cuando haya columnas explícitas.
- Respeta padding/gap/margins con utilidades Tailwind; usa `min-w-*/min-h-*`/`max-w-*` si hay límites.

---

## Estructura de proyecto (sugerida)
```
src/
├─ components/
│  └─ [ComponentName]/
│     ├─ index.tsx
│     ├─ [ComponentName].test.tsx
│     └─ README.md
├─ action/
│  └─ [component-name]/
│     └─ index.tsx
├─ forms/
│  └─ [component-name]/
│     └─ index.tsx
├─ hooks/
├─ lib/
└─ styles/
   ├─ globals.css
   └─ tokens.css   # CSS vars generadas desde Figma
```
- Usa `index.tsx` por carpeta. Tests junto al componente. `tokens.css` se sincroniza desde Figma (script/CI).

---

## Reglas de desarrollo
1. Componentes funcionales, **props tipadas** (`Props`) + JSDoc breve.
2. Composición > herencia. Lógica compleja → `src/hooks`.
3. **No recrear** componentes existentes en la librería; si falta, documenta el gap.
4. **Accesibilidad**: `aria-*`, roles, foco visible, contraste según tokens.
5. **Estados**: `hover`, `focus`, `disabled`, `aria-pressed`/`data-*` según corresponda.

---

## Flujo Copilot + MCP (paso a paso)
1) **Ejecuta MCP de Figma** sobre el frame/archivo actual y obtén: variables (color/spacing/typography/radius) + props de Auto Layout (dirección, gap, padding, alineación).  
2) **Plan de mapeo**: Figma var → utilidades Tailwind / CSS vars. Lista *gaps* que requieren `theme.extend` (ej. `spacing-input`).  
3) **Generación**: crea `src/components/[Name]/index.tsx` usando utilidades Tailwind y sin estilos inline si hay utilidad equivalente.  
4) **Extensión mínima**: añade tokens custom en `tailwind.config.ts` dentro de `theme.extend` y úsalos.  
5) **Verificación**: compara contra Auto Layout; ajusta (flex vs grid, gaps, padding, alignment) sin CSS ad-hoc.

---

## Snippets de prompt
**Inicial por componente**
> Ejecuta el MCP de Figma en este frame. Devuélveme: 1. variables aplicadas, 2. props de Auto Layout, 3. mapeo recomendado a Tailwind, 4. tokens a extender. Luego genera `src/components/[Name]/index.tsx` (React+TS+Tailwind) justificando cada mapeo en comentarios.

**Extender tokens necesarios**
> Si un token no existe en Tailwind, propone la **mínima** extensión en `theme.extend.*` y úsalo en el componente.

**Chequeo**
> Compara con Auto Layout. Si no coincide (alineación/gaps/padding), sugiere clases alternativas (grid vs flex) sin CSS personalizado.

---

## Ejemplo mínimo
```tsx
// src/components/Card/index.tsx
import { type ReactNode } from 'react'

type CardProps = {
  title: string
  actions?: ReactNode
  children?: ReactNode
}

export default function Card({ title, actions, children }: CardProps) {
  return (
    <section
      className="flex flex-col gap-4 p-4 rounded-lg bg-bg"
      /* bg-bg = var(--color-bg-default) definido en tokens.css y mapeado en tailwind.config.ts */
    >
      <header className="flex items-center justify-between">
        <h2 className="text-base font-medium">{title}</h2>
        {actions}
      </header>
      <div>{children}</div>
    </section>
  )
}
```

---

## Checklist de aceptación
- [ ] MCP ejecutado y mapeo documentado (Figma → Tailwind/CSS var).
- [ ] **Sin** estilos inline si existe utilidad Tailwind equivalente.
- [ ] Extensiones en `theme.extend` **mínimas y justificadas**.
- [ ] Layout fiel al Auto Layout (dirección, gaps, padding, alignment).
- [ ] Tokens de color via **CSS vars** y utilidades Tailwind.
- [ ] Props tipadas + a11y básica.
- [ ] Test visual o story básico.
- [ ] Documentación breve en `README.md` del componente.