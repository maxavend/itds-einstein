import { type ReactNode } from 'react'

/**
 * Card con imagen de fondo y contenido textual.
 * @param imageUrl URL de la imagen de fondo (opcional, fallback a gris neutro).
 * @param title Título principal.
 * @param description Descripción secundaria.
 * @param children Slot para contenido adicional.
 */
export type CardImageProps = {
  imageUrl?: string
  title: string
  description?: string
  children?: ReactNode
}

export default function CardImage({
  imageUrl,
  title,
  description,
  children,
}: CardImageProps) {
  return (
    <section className="bg-neutral-white flex flex-col gap-4 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2)] p-4 w-full justify-start items-start">
      <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-neutral-softest">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
          aria-label="Imagen ilustrativa"
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-dm font-bold text-xl text-neutral-strongest leading-[26px]">{title}</h2>
        {description && (
          <p className="font-dm font-medium text-sm text-neutral-default leading-4 whitespace-pre-wrap">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
