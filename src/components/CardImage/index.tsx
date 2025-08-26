export default function CardImage() {
  return (
    <div className="bg-[var(--color-bg-default)] rounded-[16px] shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.2)] p-4 w-full">
      <div className="bg-neutral-100 rounded-[16px] w-full h-56" />
      <div className="mt-4">
        <h3 className="text-[20px] font-bold text-[var(--color-neutral-high)]">Gestión de techos</h3>
        <p className="text-[14px] text-[var(--color-neutral-medium)] mt-2">Encuentra información de mercadería en techos.</p>
      </div>
    </div>
  )
}
