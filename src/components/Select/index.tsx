
import { type ReactNode } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

/**
 * Select desacoplado, visual-only, inspirado en Figma MCP.
 * Props mapeadas desde Figma.
 * @param helperText Muestra texto de ayuda.
 * @param optional Muestra texto opcional.
 * @param icon Ícono a la izquierda (opcional).
 * @param icon1 Mostrar icono bandera (por defecto true).
 * @param label Mostrar label (por defecto true).
 * @param labelText Texto de la etiqueta.
 * @param optionalText Texto de opcional.
 * @param filledText Valor seleccionado.
 * @param filled Estado de llenado ('True'|'False').
 * @param state Estado visual ('Default'|'Hover'|'Pressed'|'Disabled'|'Error').
 * @param size Tamaño ('L'|'M'|'S').
 */

export type SelectProps = {
  helperText?: string | boolean
  optional?: boolean
  icon?: ReactNode | null
  icon1?: boolean
  label?: boolean
  labelText?: string
  optionalText?: string
  filledText?: string
  state?: 'Default' | 'Hover' | 'Pressed' | 'Disabled' | 'Error'
  size?: 'L' | 'M' | 'S'
  disabled?: boolean
}


export default function Select({
  helperText = false,
  optional = true,
  icon = null,
  icon1 = true,
  label = true,
  labelText = 'Placeholder',
  optionalText = '(Opcional)',
  filledText = 'Select',
  state = 'Default',
  size = 'L',
  disabled = false,
}: SelectProps) {
  // Tamaños y paddings según Figma
  const sizeMap = {
    L: 'px-4 py-3 text-base',
    M: 'px-3 py-2 text-sm',
    S: 'px-2 py-1 text-xs',
  }
  // Colores y estados
  const stateMap = {
    Default: 'bg-neutral-white border-neutral-soft text-neutral-default',
    Hover: 'bg-neutral-white border-theme-primary text-neutral-default',
    Pressed: 'bg-neutral-softest border-theme-primary text-neutral-default',
    Disabled: 'bg-neutral-softest border-neutral-disabled text-neutral-soft',
    Error: 'bg-neutral-white border-red-500 text-red-500',
  }
  // Use Tailwind class mapped to the CSS token --rounded-input
  const base = 'flex items-center w-full gap-3 rounded-input border font-medium focus-visible:ring-2 focus-visible:ring-theme-primary transition disabled:opacity-50 disabled:cursor-not-allowed font-dm bg-neutral-white';
  const classes = [
    base,
    sizeMap[size] || sizeMap.M,
    stateMap[state] || stateMap.Default,
  ].join(' ');

  return (
    <div className="relative w-full font-dm">
      {label && (labelText || optional) && (
        <div className="absolute -top-2 left-3 bg-neutral-white px-2 flex gap-1 text-xs font-medium leading-500 text-neutral-default z-10">
          {/* label uses left-3 to align with px-3/px-4 paddings in different sizes */}
          {labelText && <span className="leading-500">{labelText}</span>}
          {optional && <span className="truncate leading-500">{optionalText}</span>}
        </div>
      )}
      <button
        type="button"
        className={classes}
        disabled={disabled || state === 'Disabled'}
        aria-haspopup="listbox"
        aria-expanded="false"
      >
        {icon1 && icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
        <span className="flex-1 text-left truncate leading-500">{filledText}</span>
        <MdKeyboardArrowDown className="w-4 h-4 text-neutral-soft" aria-hidden />
      </button>
      {helperText && typeof helperText === 'string' && (
        <div className="flex items-center gap-1 px-1 mt-1 text-xs leading-500 text-neutral-default">
          <div className="w-3 h-3 relative shrink-0" aria-hidden>
            <svg className="block w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83333 8.75C5.99861 8.75 6.13715 8.6941 6.24896 8.58229C6.36076 8.47049 6.41667 8.33195 6.41667 8.16667V5.83333C6.41667 5.66806 6.36076 5.52951 6.24896 5.41771C6.13715 5.3059 5.99861 5.25 5.83333 5.25C5.66806 5.25 5.52951 5.3059 5.41771 5.41771C5.3059 5.52951 5.25 5.66806 5.25 5.83333V8.16667C5.25 8.33195 5.3059 8.47049 5.41771 8.58229C5.52951 8.6941 5.66806 8.75 5.83333 8.75Z" fill="currentColor" />
              <path d="M5.83333 4.08333C5.99861 4.08333 6.13715 4.02743 6.24896 3.91563C6.36076 3.80382 6.41667 3.66528 6.41667 3.5C6.41667 3.33472 6.36076 3.19618 6.24896 3.08438C6.13715 2.97257 5.99861 2.91667 5.83333 2.91667C5.66806 2.91667 5.52951 2.97257 5.41771 3.08438C5.3059 3.19618 5.25 3.33472 5.25 3.5C5.25 3.66528 5.3059 3.80382 5.41771 3.91563C5.52951 4.02743 5.66806 4.08333 5.83333 4.08333Z" fill="currentColor" />
            </svg>
          </div>
          <div className="text-neutral-default">{helperText}</div>
        </div>
      )}
    </div>
  )
}
