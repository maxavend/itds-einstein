# CardImage

Componente de tarjeta con imagen de fondo y contenido textual.

## Props
- `imageUrl?: string` — URL de la imagen de fondo (opcional, fallback a gris neutro).
- `title: string` — Título principal.
- `description?: string` — Descripción secundaria.
- `children?: ReactNode` — Slot para contenido adicional.

## Accesibilidad
- La imagen decorativa tiene `aria-label`.
- El contenido textual es semántico (`h2`, `p`).

## Uso
```tsx
import CardImage from './CardImage'

<CardImage title="Gestión de techos" description="Encuentra información de mercadería en techos." />
```

## Notas
- Usa tokens de color y radio desde Tailwind.
- El alto y layout siguen el diseño de Figma.
