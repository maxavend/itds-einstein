# ActionIcon

Componente de icono de acción con badge de notificación opcional.

## Props

- `hasBadge?: boolean` — Muestra el badge de notificación (por defecto: `true`).
- `icon?: ReactNode` — Permite reemplazar el ícono por defecto.
- `size?: 'L' | 'M' | 'S'` — Tamaño visual del icono (solo 'M' implementado).
- `type?: 'Neutral' | 'Theme'` — Variante de color (solo 'Neutral' implementado).
- `state?: 'Default' | 'Hover' | 'Pressed' | 'Disabled'` — Estado visual (solo 'Default' implementado).

## Accesibilidad
- Usa `aria-label` para describir la acción.
- El badge tiene `aria-label` para lectores de pantalla.

## Uso

```tsx
import ActionIcon from './ActionIcon'

<ActionIcon hasBadge />
```

## Notas
- Solo implementa el caso de uso actual: tamaño 'M', tipo 'Neutral', estado 'Default'.
- El ícono por defecto es `MdNotifications` de react-icons.
