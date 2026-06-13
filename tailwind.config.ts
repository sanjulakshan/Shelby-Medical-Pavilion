import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Color Palette
        medical: '#FBFDFE',     // Medical White
        navy: {
          DEFAULT: '#0A2540',   // Deep Blue
          600: '#123a63',
          700: '#0d2c4d',
        },
        teal: {
          DEFAULT: '#0E9DA8',   // Teal
          light: '#3FBFC9',
        },
        emerald: {
          DEFAULT: '#10B981',   // Emerald Accent
        },
        graysoft: '#F1F5F9',    // Soft Grey
        ink: '#1E293B',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 37, 64, 0.12)',
        card: '0 4px 24px -8px rgba(10, 37, 64, 0.10)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
} satisfies Config;
