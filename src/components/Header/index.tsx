import IconButton from '../IconButton'
import Avatar from '../Avatar'
import NavigationExpandMore from '../NavigationExpandMore'

export default function Header() {
  return (
    <header className="bg-[var(--color-bg-default)] w-full">
      <div className="flex h-12 items-center justify-between px-4 py-[13px] w-full">
        <div className="font-medium text-[15px] text-[var(--color-neutral-high)] w-[54px]">10:02</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 bg-[var(--color-bg-default)] rounded-[26px]">
            <div className="w-4 h-4">
              {/* logo svg preserved in page-level MCP code originally; use NavExpand for dropdown */}
            </div>
            <div className="text-[14px] font-medium text-[var(--color-neutral-medium)]">J501 - Bilbao</div>
            <div className="pl-2">
              <NavigationExpandMore />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-[6px] rounded-full">
              <IconButton size="S" />
            </div>
            <div className="mr-[-8px] p-px rounded-full bg-[var(--color-accent-soft)]">
              <Avatar size="M" name="N" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="text-[24px] font-bold text-[var(--color-neutral-medium)]">Hola, Nombre 👋🏽</div>
      </div>
    </header>
  )
}
