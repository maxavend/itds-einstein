import type { AvatarProps } from './types'

export default function Avatar({ size = 'L', type = 'Name', name = 'U' }: AvatarProps) {
  const sizeMap: Record<string, string> = {
    L: 'w-10 h-10',
    M: 'w-[30px] h-[30px]',
    S: 'w-8 h-8',
  }

  return (
    <div className={`inline-flex items-center justify-center rounded-full bg-fill-0 ${sizeMap[size]} text-white`} aria-hidden>
      {type === 'Name' ? <span className="text-[10.67px] font-medium">{name}</span> : <img src="" alt="avatar" className="w-full h-full object-cover rounded-full" />}
    </div>
  )
}
