import { type ReactNode } from 'react'
import { FaChevronRight } from 'react-icons/fa'

/**
 * Button desacoplado según Figma MCP
 * - Paddings, gap, radius, tipografía y colores fieles a tokens Figma
 * - Variantes: primary, secondary, tertiary, tonal, danger, dangerText
 * - Estados: default, hover, active, disabled, loading
 * - Íconos: left/right, solo ícono
 * - Accesibilidad: aria-*, roles, foco visible
 */
export type ButtonProps = {
	children?: ReactNode
	variant?: 'primary' | 'secondary' | 'tertiary' | 'tonal' | 'danger' | 'dangerText'
	size?: 'l' | 'm' | 's'
	disabled?: boolean
	loading?: boolean
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	iconOnly?: boolean
	ariaLabel?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
}

export default function Button({
	children,
	variant = 'primary',
	size = 'l',
	disabled = false,
	loading = false,
	leftIcon,
	rightIcon,
	iconOnly = false,
	ariaLabel,
	type = 'button',
	onClick,
}: ButtonProps) {
	// Mapeo de paddings y gap según Figma (tokens: --space-200:8, --space-400:16, --space-600:24, --space-800:32)
	// L: px-8 py-4 gap-2 (32px x 16px, gap 8px)
	// M: px-6 py-3 gap-2 (24px x 12px, gap 8px)
	// S: px-4 py-2 gap-2 (16px x 8px, gap 8px)
	// Ajuste: Figma usa line-height 20px en L (text-base/medium), para que el alto total sea 52px y no 56px
	const sizes = {
		l: iconOnly ? 'w-13 h-13 text-base leading-[20px]' : 'px-8 py-4 gap-2 text-base leading-[20px]',
		m: iconOnly ? 'w-10 h-10 text-sm leading-[16px]' : 'px-6 py-3 gap-2 text-sm leading-[16px]',
		s: iconOnly ? 'w-8 h-8 text-xs leading-[14px]' : 'px-4 py-2 gap-2 text-xs leading-[14px]',
	}
	// Tipografía: font-dm, font-medium, text-base/sm/xs según size
	// Radius: rounded-full (Figma: 9999)
	// Layout: flex-row, items-center, justify-center
	const base = 'inline-flex items-center justify-center font-dm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';
	// Colores: solo tokens extendidos en Tailwind
	const variants = {
		primary: 'bg-theme-primary text-neutral-white hover:bg-theme-hover active:bg-theme-pressed',
		secondary: 'bg-transparent text-theme-primary border border-theme-primary hover:bg-theme-hover/10 active:bg-theme-hover/20',
		tertiary: 'bg-transparent text-theme-primary hover:bg-theme-hover/10 active:bg-theme-hover/20',
		tonal: 'bg-tonal-default text-theme-primary hover:bg-tonal-hover active:bg-tonal-pressed',
		danger: 'bg-feedback-error-default text-neutral-white hover:bg-feedback-error-hover active:bg-feedback-error-pressed',
		dangerText: 'bg-transparent text-feedback-error-default hover:bg-feedback-error-softer active:bg-feedback-error-hover/20',
	}
	// Spinner accesible (usa color actual)
	const spinner = (
		<svg className="animate-spin mr-2 h-5 w-5 text-current" viewBox="0 0 24 24" fill="none" aria-hidden>
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
		</svg>
	)
	return (
		<button
			type={type}
			className={[
				base,
				sizes[size],
				variants[variant],
				loading ? 'cursor-wait' : '',
				iconOnly ? 'aspect-square justify-center' : '',
			].join(' ')}
			aria-label={iconOnly ? ariaLabel : undefined}
			aria-disabled={disabled || loading}
			disabled={disabled || loading}
			onClick={onClick}
			tabIndex={0}
			role="button"
		>
			{/* Spinner loading accesible */}
			{loading && spinner}
			{/* Ícono izquierdo (React-Icons) */}
			{!iconOnly && leftIcon && <span className="mr-2" aria-hidden>{leftIcon}</span>}
			{/* Solo ícono: ejemplo con FaChevronRight si no se pasa leftIcon/rightIcon */}
			{iconOnly && !leftIcon && !rightIcon && <FaChevronRight aria-hidden />}
			{/* Texto */}
			{iconOnly ? null : <span>{children}</span>}
			{/* Ícono derecho (React-Icons) */}
			{!iconOnly && rightIcon && <span className="ml-2" aria-hidden>{rightIcon}</span>}
		</button>
	)
}
