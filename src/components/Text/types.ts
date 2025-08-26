export type TextType = 'Headline' | 'Title' | 'Text' | 'Caption'
export type TextWeight = 'Bold' | 'Medium' | 'Regular'
export type TextSize = 'XL' | 'L' | 'M' | 'S'

export interface TextProps {
  text?: string
  type?: TextType
  weight?: TextWeight
  size?: TextSize
}
