import { type ReactNode } from 'react'

/**
 * Seleccion: Pantalla principal de selección/test.
 * - Colores y tipografía mapeados a tokens Figma → CSS vars/Tailwind.
 * - Layout: flex-col, centrado, gap-6 (24px), padding 0.
 * - Extiende solo si el token no existe en Tailwind.
 */

type SeleccionProps = {
  /** Acciones o children adicionales */
  children?: ReactNode
  /** Callback para el botón */
  onIrAlTest?: () => void
}

export default function Seleccion({ children, onIrAlTest }: SeleccionProps) {
  return (
    <section
      className="flex flex-col items-end justify-center w-full h-full bg-neutral-white p-0"
      /* bg-neutral-white = var(--neutral-white) definido en tokens.css y mapeado en tailwind.config.ts */
      data-node-id="354:52811"
    >
      <main
        className="flex flex-col items-center justify-center gap-6 w-full grow min-w-px min-h-px bg-neutral-white p-0"
        /* gap-6 = 24px (spacing-6), grow/min-w/min-h para layout Figma */
        data-node-id="354:52812"
      >
        <header className="flex flex-col items-center gap-3 w-full text-center p-0" data-node-id="354:52813">
          <h1
            className="text-5xl font-bold font-dm-sans text-neutral-strongest leading-tight"
            /* text-5xl/font-bold = 48px/700, font-dm-sans = DM Sans, text-neutral-strongest = var(--neutral-strongest) */
            data-node-id="354:52814"
          >
            Pantalla principal de test sin ITDS
          </h1>
          <p
            className="text-base font-medium font-dm-sans text-neutral-default leading-[20px] w-[711px]"
            /* text-base/font-medium = 16px/500, text-neutral-default = var(--neutral-default), leading-5 = 20px */
            data-node-id="354:52815"
          >
            Esta es la página de inicio. Al clickear en 'Ir al test', serás redirigido a la pantalla de pruebas. Si no hay contenido disponible, aparecerá una notificación.
          </p>
        </header>
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-strongest text-neutral-white font-medium font-dm-sans text-base leading-5 overflow-clip"
          /* px-8/py-4 = padding, rounded-full = 9999px, bg-neutral-strongest = var(--neutral-strongest), text-neutral-white = var(--neutral-white) */
          onClick={onIrAlTest}
          data-node-id="354:52818"
        >
          <span className="whitespace-pre">Ir al test</span>
          {/* Icono flecha derecha SVG */}
          <svg className="size-5" fill="none" viewBox="0 0 6 10" aria-hidden="true">
            <path
              d="M3.47917 4.64583L0.229167 1.39583C0.0763889 1.24306 0 1.04861 0 0.8125C0 0.576389 0.0763889 0.381944 0.229167 0.229167C0.381944 0.0763889 0.576389 0 0.8125 0C1.04861 0 1.24306 0.0763889 1.39583 0.229167L5.22917 4.0625C5.3125 4.14583 5.37153 4.23611 5.40625 4.33333C5.44097 4.43056 5.45833 4.53472 5.45833 4.64583C5.45833 4.75695 5.44097 4.86111 5.40625 4.95833C5.37153 5.05556 5.3125 5.14583 5.22917 5.22917L1.39583 9.0625C1.24306 9.21528 1.04861 9.29167 0.8125 9.29167C0.576389 9.29167 0.381944 9.21528 0.229167 9.0625C0.0763889 8.90972 0 8.71528 0 8.47917C0 8.24306 0.0763889 8.04861 0.229167 7.89583L3.47917 4.64583Z"
              fill="currentColor"
            />
          </svg>
        </button>
        {children}
      </main>
    </section>
  )
}
