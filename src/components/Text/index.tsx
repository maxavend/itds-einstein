import type { TextProps } from './types'

export default function Text({ text = 'Body text', type = 'Headline', weight = 'Bold', size = 'XL' }: TextProps) {
  const classMap: Record<string, string> = {
    'Text|Bold|L': 'text-[16px] font-bold leading-[20px] text-neutral-high',
    'Headline|Bold|XL': 'text-[24px] font-bold leading-[1.2] text-neutral-high',
    'Headline|Bold|L': 'text-[20px] font-bold leading-[26px] text-neutral-high',
  }

  const key = `${type}|${weight}|${size}`
  const classes = classMap[key] ?? 'text-base'

  return (
    <div className={classes} style={{ fontFamily: "DM Sans, sans-serif" }}>
      {text}
    </div>
  )
}
