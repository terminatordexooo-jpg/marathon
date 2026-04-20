/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#010101',
        accent: {
          DEFAULT: '#C967E8',
          light: '#FA93FA',
          mid: '#983AD6',
          deep: '#6B21A8',
        },
        mac: {
          red: '#ff5f57',
          yellow: '#febc2e',
          green: '#28c840',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 7vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        glow: '0 0 8px #C967E8',
        'glow-lg': '0 0 40px rgba(201, 103, 232, 0.35)',
        'glow-xl': '0 20px 60px -10px rgba(152, 58, 214, 0.45)',
      },
      backgroundImage: {
        'radial-accent':
          'radial-gradient(ellipse at center, rgba(201,103,232,0.18) 0%, transparent 70%)',
        'radial-accent-soft':
          'radial-gradient(ellipse at center, rgba(201,103,232,0.06) 0%, transparent 70%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        previewScroll: {
          '0%':   { transform: 'scale(0.333) translateY(0)' },
          '100%': { transform: 'scale(0.333) translateY(-1400px)' },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        previewScroll: 'previewScroll 14s ease-in-out infinite alternate',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
