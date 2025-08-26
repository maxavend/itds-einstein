import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: 'var(--screen-soft)',
          DEFAULT: 'var(--color-neutral-default)',
          medium: 'var(--color-neutral-medium)',
          high: 'var(--color-neutral-high)',
        },
        bg: {
          DEFAULT: 'var(--color-bg-default)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
        },
        accent: {
          soft: 'var(--color-accent-soft)',
        },
        theme: {
          primary: 'var(--color-theme-primary)',
        },
        fill: {
          0: 'var(--fill-0)',
        },
      },
    },
  },
  plugins: [],
}

export default config
