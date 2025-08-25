import React from "react";
import './tabs.css';
import Badge from "../Badge";


export type TabStyle = "Default" | "Box" | "Tonal";
export type TabState = "Default" | "Hover" | "Disabled";

export interface TabItem {
  label: string;
  lIcon?: boolean;
  iconL?: React.ReactNode;
  badge?: boolean;
  badgeContent?: React.ReactNode;
  style?: TabStyle;
  active?: boolean;
  state?: TabState;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  onTabChange?: (index: number) => void;
  className?: string;
}

/**
 * Tabs: Contenedor de pestañas, usa Tab y Badge.
 */

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabChange,
  className = "",
}) => {
  // Mapeo de estilos visuales según Figma
  const getTabClasses = (tab: TabItem) => {
    const style = tab.style || "Default";
    const state: TabState = tab.state || (tab.disabled ? "Disabled" : tab.active ? "Default" : "Default");
    const active = !!tab.active;

    // Colores y bordes según variante
    if (style === "Box") {
      if (state === "Disabled") {
        return "bg-neutral-white text-neutral-soft border border-neutral-softest rounded-full cursor-not-allowed opacity-60";
      }
      if (active) {
        return "bg-neutral-white text-theme-primary border border-theme-accent rounded-full shadow-sm";
      }
      return "bg-neutral-white text-theme-primary border border-neutral-softest rounded-full hover:border-theme-accent hover:text-theme-primary";
    }
    if (style === "Tonal") {
      if (state === "Disabled") {
        return "bg-tonal-default text-neutral-soft rounded-full cursor-not-allowed opacity-60";
      }
      if (active) {
        return "bg-tonal-default text-theme-primary rounded-full shadow-sm";
      }
      return "bg-tonal-default text-theme-primary rounded-full hover:bg-tonal-hover hover:text-theme-primary";
    }
    // Default
    if (state === "Disabled") {
      return "bg-transparent text-neutral-soft border-b-2 border-neutral-softest rounded-full cursor-not-allowed opacity-60";
    }
    if (active) {
      return "bg-transparent text-theme-primary border-b-2 border-theme-accent rounded-full shadow-none";
    }
    return "bg-transparent text-theme-primary border-b-2 border-neutral-softest rounded-full hover:border-theme-accent hover:text-theme-primary";
  };

  return (
    // outer wrapper permite overflow visible para que el contenido se vea fuera del contenedor
    <div className={`relative w-full overflow-visible ${className}`} role="tablist">
      {/* inner rail scrollable: use padding on rail and negative margin on wrapper to create visual overflow without calc hacks */}
      <div
        className="flex gap-2 px-2 py-2 overflow-x-auto overflow-y-visible flex-nowrap whitespace-nowrap snap-x snap-mandatory tabs-scroll-hide"
        // enable smooth touch scrolling on iOS
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {tabs.map((tab, idx) => {
          const isDisabled = tab.disabled || tab.state === "Disabled";
          return (
            <button
              key={tab.label + idx}
              type="button"
              className={`inline-flex items-center gap-2 px-4 py-2 font-medium text-base transition-colors select-none shrink-0 snap-start ${getTabClasses(tab)}`}
              role="tab"
              onClick={() => !isDisabled && onTabChange?.(idx)}
              disabled={isDisabled}
              aria-selected={!!tab.active}
              tabIndex={isDisabled ? -1 : 0}
            >
              {tab.lIcon && (tab.iconL || null)}
              <span>{tab.label}</span>
              {tab.badge && tab.badgeContent && <Badge>{tab.badgeContent}</Badge>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
