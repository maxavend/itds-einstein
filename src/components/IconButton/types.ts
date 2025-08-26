import type { ReactNode } from 'react'

export type IconButtonSize = 'L' | 'M' | 'S'
export type IconButtonType = 'Default' | 'Filled'
export type IconButtonState = 'Default' | 'Hover' | 'Pressed' | 'Disabled' | 'Loading'
export type IconButtonColor = 'Theme' | 'Tonal' | 'Danger'

export interface IconButtonProps {
  icon?: ReactNode | null
  badge?: boolean
  size?: IconButtonSize
  type?: IconButtonType
  state?: IconButtonState
  color?: IconButtonColor
}
