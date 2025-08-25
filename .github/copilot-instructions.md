# Copilot · Figma MCP → React + Tailwind 3 · Prompt mínimo

**Objetivo:** Traducir una selección de Figma a componentes React tipados y un layout con Tailwind, usando variables de Figma como *source of truth*.

## 1 Stack y fuentes

* **Diseño:** Figma vía **MCP Server** (componentes, variables, Auto Layout, código sugerido).
* **UI:** React + TypeScript + **Tailwind v3**.
* **Tokens:** CSS vars en `styles/tokens.css` (importado globalmente para `var(--*)` en runtime).

## 2 Colors (solo semánticos)

* Extrae las variables de Figma a `styles/tokens.css`.
* Expón las variables de `styles/tokens.css` en `tailwind.config.ts -> theme.extend.colors` apuntando a `var(--...)`.
* **Regla dura:** si existe `--theme-primary` ⇒ usa `bg-theme-primary`. Evita nombres ambiguos (`bg-bg-button`, etc.).

**Ejemplo — `styles/tokens.css`:**

```css
:root{
  --theme-primary: #0055ff;
  --theme-hover: #0047d9;
  --theme-on-primary: #ffffff;
}
```

**Ejemplo — `tailwind.config.ts`:**

```ts
export default {
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--theme-primary)',
        'theme-hover': 'var(--theme-hover)',
        'theme-on-primary': 'var(--theme-on-primary)',
      }
    }
  }
}
```

> **Incremental:** actualiza `tokens.css` y `tailwind.config.ts` **sin** sobrescribirlos; añade y reutiliza.

**NO importar variables que no sean de colors**.

## 3 Utilidades Tailwind (por defecto)

* Spacing, radius, tipografía, etc. ⇒ **usa utilidades core** de Tailwind.
* Mapea tokens de Figma a utilidades por nombre y valor.

  * Ej.: `spacing-4 (1rem)` ⇒ `p-4`, `px-4`, `gap-4`, etc.
  * Ej.: `rounded-sm (4px)` ⇒ `rounded-sm`, `rounded-t-sm`, etc.
  * Ej.: `font-size-16 (1rem)` ⇒ `text-base`.

  * Nota: el `line-height` en Figma suele estar personalizado por componente; respeta el valor de Figma y expónlo como token (por ejemplo `--line-height-500`) en `styles/tokens.css` y/o aplícalo con utilidades Tailwind (`leading-[20px]` o `leading-500`) para mantener la tipografía fiel al diseño.

## 4 Layout (Auto Layout - Tailwind)

* **Horizontal:** `flex flex-row items-* justify-* gap-*`
* **Vertical:** `flex flex-col items-* justify-* gap-*`
* **Grid:** `grid grid-cols-*` cuando haya columnas explícitas.
* **Regla:** genera **componentes solo para **Component Instances** **. Los *frames* con Auto Layout son contenedores de layout (flex/grid), no componentes.

## 5 Flujo por componentes

1. **Scan MCP:** lista *Component Instances* encontradas.
   *“Se mapearon **A**, **B**, **C**. ¿Comenzamos con **A**?”*
2. **Crear componente (por cada instancia):**

   * Ruta: `src/components/[name]/[name].tsx`
   * **Nombre:** camelCase.
   * **Props:** tipadas desde Figma (variantes, estados, contenido).
   * **Estilos:** Tailwind + semánticos (`bg-theme-*`, `text-theme-*`, etc.).
   * **Íconos:** reemplaza íconos de Figma por **react-icons/md** importando **solo** los usados.
   * **Anidados:** si un componente contiene Component Instances dentro, desarróllalos también como componentes individuales antes de ensamblar el principal.
3. **Itera** con B, C, … hasta cubrir la selección.
4. **Integración final:** pregunta
   *“¿Procedemos a armar la vista integrando los componentes?”*
   Luego construye el layout reutilizando lo creado.

## 6 Estructura

```
src/
├─ components/
│  └─ button/
│     └─ button.tsx
├─ action/
├─ forms/
├─ pages/
│  └─ home/
│     └─ home.tsx
├─ hooks/
├─ lib/
└─ styles/
   └─ tokens.css
```

## 7 Pasos operativos (Copilot + MCP)

1. Leer selección con MCP → extraer **componentes, variables, Auto Layout**.
2. Sincronizar **variables de color** → `styles/tokens.css`.
3. Exponer variables en `tailwind.config.ts` → `theme.extend.colors` (`var(--...)`).
4. Mapear **spacing/radius/tipo** de Figma a utilidades Tailwind por nombre y valor de las variables.
5. Listar componentes mapeados y solicitar confirmación.
6. Generar componentes (props tipadas, íconos `react-icons/md`, estilos Tailwind).
7. Integrar en la vista seleccionada (layout con flex/grid).
8. Actualizar `tokens.css` y `tailwind.config.ts` **de forma incremental**.

---

### Notas rápidas

* **Clases semánticas obligatorias:** `bg-theme-…`, `text-theme-…`, `border-theme-…`.
* **No inventes** nombres de color fuera de los semánticos definidos.
* **No** conviertas frames en componentes salvo que sean *Component Instances*.