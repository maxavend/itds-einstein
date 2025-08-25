import { type ReactNode } from 'react'

/**
 * Avatar circular con fondo y texto.
 * @param children Texto o ícono dentro del avatar (usualmente iniciales).
 * @param bgColor Clase de fondo opcional (por defecto usa theme-softest).
 * @param size Tamaño visual ('M' = 36px, 'L' = 48px).
 */
export type AvatarProps = {
  children: ReactNode
  bgColor?: string
  size?: 'M' | 'L'
}

export default function Avatar({
  children,
  bgColor = 'bg-theme-softest',
  size = 'M',
}: AvatarProps) {
  const sizeClass = size === 'L' ? 'w-12 h-12 text-lg leading-none' : 'w-9 h-9 text-base leading-none'
  return (
    <span
      className={`inline-flex items-center justify-center ${bgColor} rounded-full ${sizeClass} font-extrabold text-neutral-default select-none`}
      aria-label="Avatar"
    >
      {children}
    </span>
  )
}
