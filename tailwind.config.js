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
  'neutral-strongest': 'var(--neutral-filled)',
        'neutral-default': 'var(--neutral-default)',
        'neutral-soft': 'var(--neutral-soft)',
        'neutral-softest': 'var(--neutral-softest)',
        'neutral-disabled': 'var(--neutral-disabled)',
        'neutral-hover': 'var(--neutral-hover)',
        'neutral-filled': 'var(--neutral-filled)',
        'theme-primary': 'var(--theme-primary)',
        'theme-contrast': 'var(--theme-contrast)',
        'theme-accent': 'var(--theme-accent)',
        'theme-hover': 'var(--theme-hover)',
        'theme-softest': 'var(--theme-softest)',
        'theme-softer': 'var(--theme-softer)',
        'tonal-default': 'var(--tonal-default)',
        'tonal-hover': 'var(--tonal-hover)',
      },
      borderRadius: {
        'input': 'var(--rounded-input)',
      },
      lineHeight: {
        '500': 'var(--line-height-500)',
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}