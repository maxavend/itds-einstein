export type AvatarSize = 'L' | 'M' | 'S'
export type AvatarType = 'Name' | 'Img'
export type AvatarState = 'Default' | 'Hover' | 'Pressed'

export interface AvatarProps {
  size?: AvatarSize
  type?: AvatarType
  state?: AvatarState
  name?: string
  src?: string
}
