import React from 'react'
// Inline chevron icon to avoid external dependencies
function ChevronRightSvg() {
  return (
    <svg className="w-4 h-4 text-theme-primary" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.175 5.575L0.275 1.675C0.0916667 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916667 0.458333 0.275 0.275C0.458333 0.0916667 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916667 1.675 0.275L6.275 4.875C6.375 4.975 6.44583 5.08333 6.4875 5.2C6.52917 5.31667 6.55 5.44167 6.55 5.575C6.55 5.70833 6.52917 5.83333 6.4875 5.95C6.44583 6.06667 6.375 6.175 6.275 6.275L1.675 10.875C1.49167 11.0583 1.25833 11.15 0.975 11.15C0.691667 11.15 0.458333 11.0583 0.275 10.875C0.0916667 10.6917 0 10.4583 0 10.175C0 9.89167 0.0916667 9.65833 0.275 9.475L4.175 5.575Z" fill="currentColor" />
    </svg>
  )
}

export type NavigationListItemProps = {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export default function NavigationListItem({ title, subtitle, icon = null, onClick }: NavigationListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-neutral-white flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.2)]"
    >
      <div className="flex-none bg-neutral-softest rounded-2xl p-4 flex items-center justify-center">{icon}</div>
      <div className="flex-1 text-left">
        <div className="font-dm font-bold text-base text-neutral-strongest leading-[20px]">{title}</div>
        {subtitle && <div className="font-dm font-medium text-sm text-neutral-default leading-[16px]">{subtitle}</div>}
      </div>
      <div className="flex-none text-theme-primary">
        <ChevronRightSvg />
      </div>
    </button>
  )
}
