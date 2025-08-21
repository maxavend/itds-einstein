# Copilot · Figma MCP → React + Tailwind 3.4.17 (instrucciones finales)

## Alcance y fuentes de verdad
- **Diseño:** Figma (Variables + Auto Layout) vía **Dev Mode MCP Server**. El agente debe consultar MCP para extraer **componentes, variables, props de Auto Layout y código sugerido** de la selección.  
- **Código:** React + TypeScript + Tailwind **v3.4.17**. Usa utilidades por defecto; **extiende** solo lo necesario (tokens de color personalizados). **Importa** `styles/tokens.css` en los estilos globales para que las `var(--*)` existan en runtime.

---

## Política de tokens (Figma → CSS vars → Tailwind)
1) **Modelo de capas**
- **Primitivos** en CSS (p. ej. `--primary-50..900`).
- **Semánticos** en CSS que **referencian** a primitivos (p. ej. `--theme-primary: var(--primary-500)`).

2) **Exposición en Tailwind**  
- En `tailwind.config.ts` **solo expones semánticos** dentro de `theme.extend.colors`, apuntando a `var(--...)`.  
- **Regla dura:** Si existe `--theme-primary` en Figma/CSS, la clase debe ser `bg-theme-primary`. Evita nombres confusos tipo `bg-bg-button`.

3) **Arbitrarios y política**  
- Usa valores arbitrarios `[...]` (p. ej. `rounded-[14px]`) **solo como puente temporal**. Si un valor se repite, promuévelo a token y expón en el theme.

4) **Importación obligatoria**  
- **Siempre** importa `styles/tokens.css` en el CSS global.

### `tokens.css` (ejemplo mínimo)
```css
:root {
  /* PRIMITIVOS */
  --primary-50:  #EAF1FE;
  --primary-100: #D7E4FD;
  --primary-200: #B3CBFB;
  --primary-500: #2F6FEB;

  --neutral-100: #EDEDED;   /* texto/fondo claro */
  --neutral-900: #0B0B0C;   /* fondo base oscuro */
  --error-600:   #DC2626;

  /* SEMÁNTICOS (alias → primitivos) */
  --theme-primary:    var(--primary-500);
  --theme-hover:      var(--primary-600); /* o crea --primary-700 y apúntalo */
  /* si usas pressed/focus:
     --theme-pressed:  var(--primary-600);
     --theme-focus:    var(--primary-500);
  */

  --color-bg-default: var(--neutral-900);
  --color-fg-default: var(--neutral-100);
  --color-bg-error:   var(--error-600);

  --color-border-soft:   rgba(255, 255, 255, .12);
  --color-border-softer: rgba(255, 255, 255, .06);
}
```

### `tailwind.config.ts` (v3.4.17)
```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: 'var(--theme-primary)',
          hover:   'var(--theme-hover)',
          // pressed: 'var(--theme-pressed)',
          // focus:   'var(--theme-focus)',
        },
        surface: 'var(--color-bg-default)',
        fg:      'var(--color-fg-default)',
        error:   'var(--color-bg-error)',
        border: {
          soft:   'var(--color-border-soft)',
          softer: 'var(--color-border-softer)',
        },
        primary: {
          50:  'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          500: 'var(--primary-500)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

## Layout: Auto Layout (Figma) → Flex/Grid (Tailwind)
- **Horizontal** → `flex flex-row items-* justify-* gap-*`
- **Vertical** → `flex flex-col items-* justify-* gap-*`
- **Grid** → `grid grid-cols-*` cuando existan columnas explícitas.  
- Respeta padding/gap/margins con utilidades.

**Regla:** genera **componentes solo para Component Instances**; los frames con Auto Layout se implementan como layout (flex/grid).

---

## Reemplazo de íconos (Figma → React-Icons)
- Reemplaza cada ícono de Figma por su equivalente en **React-Icons.**
- Importa **solo** los íconos necesarios desde react-icons/md (pack Material Design).

```tsx
import { MdChevronRight } from 'react-icons/md'
export function NextAction() {
  return (
    <button className="inline-flex items-center gap-2">
      Siguiente <MdChevronRight aria-hidden />
    </button>
  )
}
```

---

## Flujo Copilot + MCP (paso a paso)
1) **Análisis (MCP)** sobre la selección → devuelve props, variables, mapeo y gaps.  
2) **Primer output:** “Se mapearon **A, B, C**. ¿Comenzamos con **A**?”. Usa nombres exactos de Figma.  
3) **Orden:** primero extiende tokens de color, luego genera el primer componente.  
4) **Desarrollo:** `src/components/[Name]/index.tsx` con props tipadas, README.md con uso/props/a11y, sin inline si existe utilidad.  
5) **Itera:** repite para B, C…  
6) **Integración final:** pregunta si armar la vista completa con componentes ya creados.

---

## Reglas de desarrollo
1) Funcionales + props tipadas (`Props`) con JSDoc.  
2) No recrear componentes existentes; documenta gaps.  
3) Accesibilidad: `aria-*`, roles, foco visible (`focus-visible:ring-*`).  
4) Estados: `hover`, `active`, `disabled`, `aria-pressed`.  
5) Sin inline si existe utilidad; arbitrarios solo como puente.

---

## Ejemplo mínimo
```tsx
// src/components/Card/index.tsx
import { type ReactNode } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

type CardProps = {
  title: string
  actions?: ReactNode
  children?: ReactNode
}

export default function Card({ title, actions, children }: CardProps) {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-md bg-surface">
      <header className="flex items-center justify-between">
        <h2 className="text-base font-medium inline-flex items-center gap-2 text-fg">
          <FaInfoCircle aria-hidden /> {title}
        </h2>
        {actions}
      </header>
      <div>{children}</div>
    </section>
  )
}
```

---

## Checklist de aceptación
- [ ] MCP ejecutado y mapeo documentado.  
- [ ] Salida inicial con nombres exactos.  
- [ ] Componentes desacoplados + README.  
- [ ] React-Icons reemplazando íconos.  
- [ ] Sin estilos inline si existe utilidad.  
- [ ] Extensiones en `theme.extend.colors` mínimas y justificadas.  
- [ ] Layout fiel a Auto Layout.  
- [ ] Tipografía importada y configurada en Tailwind.  
- [ ] Foco visible y estados presentes.
