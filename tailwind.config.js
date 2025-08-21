/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  'neutral-white': 'var(--neutral-white)',
  'neutral-strongest': 'var(--neutral-strongest)',
  'neutral-default': 'var(--neutral-default)',
  'neutral-soft': 'var(--neutral-soft)',
  'neutral-softer': 'var(--neutral-softer)',
  'neutral-softest': 'var(--neutral-softest)',
  'theme-primary': 'var(--theme-primary)',
  'theme-hover': 'var(--theme-hover)',
  'theme-pressed': 'var(--theme-pressed)',
  'theme-softest': 'var(--theme-softest)',
  'tonal-default': 'var(--tonal-default)',
  'tonal-hover': 'var(--tonal-hover)',
  'tonal-pressed': 'var(--tonal-pressed)',
  'feedback-error-default': 'var(--feedback-error-default)',
  'feedback-error-hover': 'var(--feedback-error-hover)',
  'feedback-error-pressed': 'var(--feedback-error-pressed)',
  'feedback-error-softer': 'var(--feedback-error-softer)',
  'screen-base': 'var(--screen-base)',
  'shadows-soft': 'var(--shadows-soft)',
      },
      fontFamily: {
  dm: ['DM Sans', 'sans-serif'],
  sans: ['DM Sans', 'sans-serif'],
  // Solo tokens de color extendidos
      },
    },
  },
  plugins: [],
}