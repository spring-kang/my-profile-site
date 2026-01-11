import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8B5CF6',
        'primary-indigo': '#6366F1',
        'accent-pink': '#EC4899',
        'accent-cyan': '#06B6D4',
        'bg-light': '#F8FAFC',
        'bg-card': '#FFFFFF',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
