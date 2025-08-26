import type { IconButtonProps } from './types'
import { MdNotificationsNone } from 'react-icons/md'

export default function IconButton({ icon = null, badge = false, size = 'L', state = 'Default' }: IconButtonProps) {
  const base = 'box-border inline-flex items-center justify-center' // common

  // size mapping (use Tailwind spacing util when possible, otherwise inline rounded via var)
  const sizeMap: Record<string, string> = {
    L: 'p-2',
    M: 'p-[6px]',
    S: 'p-[6px] text-sm',
  }

  const classes = [base, sizeMap[size]].join(' ')

  return (
    <button className={classes} aria-pressed={state === 'Pressed'} disabled={state === 'Disabled'}>
      {icon ?? <MdNotificationsNone aria-hidden />}
      {badge ? <span className="sr-only">con notificación</span> : null}
    </button>
  )
}
