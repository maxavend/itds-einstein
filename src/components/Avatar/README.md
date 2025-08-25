# Avatar

Componente de avatar circular con fondo y texto (iniciales).

## Props
- `children: ReactNode` — Texto o ícono dentro del avatar (usualmente iniciales).
- `bgColor?: string` — Clase de fondo opcional (por defecto `bg-theme-softest`).
- `size?: 'M' | 'L'` — Tamaño visual (`M`=36px, `L`=48px; por defecto `M`).

## Accesibilidad
- Usa `aria-label="Avatar"`.
- El contenido debe ser legible y tener contraste suficiente.

## Uso
```tsx
import Avatar from './Avatar'

<Avatar>SA</Avatar>
```

## Notas
- El borde blanco y el fondo usan tokens de color.
- El tamaño y tipografía se ajustan según la prop `size`.
