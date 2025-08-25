import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'accent' | 'neutral' | 'theme';
  size?: 'S' | 'M';
}

/**
 * Badge: Etiqueta pequeña para resaltar estados o cantidades.
 * Usa colores semánticos de Tailwind: bg-theme-primary, bg-theme-accent, bg-neutral-soft, etc.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = 'accent',
  size = 'S',
}) => {
  const sizeMap: Record<string, string> = {
    S: 'px-2 py-0.5 text-xs',
    M: 'px-3 py-0.5 text-sm',
  }

  const variantMap: Record<string, string> = {
    accent: 'bg-theme-accent text-theme-contrast',
    neutral: 'bg-neutral-soft text-neutral-default',
    theme: 'bg-theme-primary text-theme-contrast',
  }

  return (
    <span
      className={`inline-flex items-center ${sizeMap[size]} rounded-full font-medium ${variantMap[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge;
