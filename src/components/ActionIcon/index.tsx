import { type ReactNode } from 'react'
import { MdNotifications } from 'react-icons/md'

/**
 * Icono de acción con badge opcional.
 * @param hasBadge Muestra el badge de notificación.
 * @param icon Permite reemplazar el ícono por defecto.
 * @param size Tamaño visual del icono ('S', 'M', 'L').
 * @param type Variante de color ('Neutral', 'Theme').
 * @param state Estado visual ('Default', 'Hover', 'Pressed', 'Disabled').
 */
export type ActionIconProps = {
  hasBadge?: boolean
  icon?: ReactNode
  size?: 'L' | 'M' | 'S'
  type?: 'Neutral' | 'Theme'
  state?: 'Default' | 'Hover' | 'Pressed' | 'Disabled'
}

export default function ActionIcon({
  hasBadge = true,
  icon,
  size = 'S',
  type = 'Neutral',
}: ActionIconProps) {
  // map sizes to Tailwind utilities
  const sizeMap = {
    S: 'w-8 h-8',
    M: 'w-10 h-10',
    L: 'w-12 h-12',
  }

  const iconSizeMap = {
    S: 'w-5 h-5',
    M: 'w-6 h-6',
    L: 'w-7 h-7',
  }

  // color variants
  const iconColor = type === 'Theme' ? 'text-theme-primary' : 'text-neutral-default'
  const badgeColor = 'bg-theme-accent'

  return (
    <span className={`relative inline-flex items-center justify-center ${sizeMap[size]} rounded-input bg-transparent`} aria-label="Notificaciones">
      {icon || <MdNotifications className={`${iconSizeMap[size]} ${iconColor}`} aria-hidden />}
      {hasBadge && (
        <span className={`absolute -top-1 -right-1 block w-3 h-3 ${badgeColor} rounded-full border border-neutral-white`} aria-label="Tienes notificaciones" />
      )}
    </span>
  )
}
