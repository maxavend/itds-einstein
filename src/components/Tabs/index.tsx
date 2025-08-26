export default function Tabs() {
  return (
    <div className="flex gap-2 items-start">
      <div className="rounded-full border border-[var(--color-border-default)] p-0.5 flex items-center gap-2 px-4 h-10">
        <div className="w-4 h-4" />
        <div className="text-[16px] font-bold text-[var(--color-neutral-medium)]">Tareas</div>
      </div>
      <div className="rounded-full border border-[var(--color-border-default)] p-0.5 flex items-center gap-2 px-4 h-10">
        <div className="text-[16px] font-bold">Herramientas</div>
      </div>
      <div className="rounded-full border border-[var(--color-border-default)] p-0.5 flex items-center gap-2 px-4 h-10">
        <div className="text-[16px] font-bold">Resumen</div>
      </div>
    </div>
  )
}
