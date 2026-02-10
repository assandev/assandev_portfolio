import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05040A',
        'text-primary': '#F6F6F7',
        'text-muted': 'rgba(246, 246, 247, 0.65)',
        warm: '#E6E1D8',
        purple: {
          accent: '#a855f7',
          glow: '#A05AF0',
        },
        pink: {
          accent: '#ec4899',
        },
        slate: {
          light: '#94a3b8',
          DEFAULT: '#64748b',
          border: '#475569',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
