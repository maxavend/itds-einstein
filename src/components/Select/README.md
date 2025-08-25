# Select

Componente desacoplado de select visual, inspirado en Figma MCP.

## Props
- `labelText?: string` — Etiqueta del select.
- `optional?: boolean` — Muestra texto opcional.
- `filledText?: string` — Valor seleccionado.
- `icon?: ReactNode` — Ícono a la izquierda (opcional).
- `helperText?: string` — Texto de ayuda (opcional).
- `disabled?: boolean` — Estado deshabilitado.

## Accesibilidad
- Usa `aria-haspopup`, `aria-expanded` y `disabled`.
- Foco visible con `focus-visible:ring-theme-primary`.

## Uso
```tsx
import Select from './Select'

<Select filledText="Santa Isabel" icon={<BanderaIcon />} />
```

## Notas
- Solo visual, no implementa menú desplegable.
- Usa tokens de color y radio desde Tailwind.
