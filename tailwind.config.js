/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0A0710',
          900: '#06040A',
          800: '#0E0A16',
          700: '#15101F',
          600: '#1E1830',
          500: '#2A2240',
        },
        cream: '#F4EEE4',
        rose: {
          DEFAULT: '#E8A7B5',
          light: '#F2C9D2',
          deep: '#C26F8A',
        },
        terra: {
          DEFAULT: '#C26F4A',
          light: '#E8B4A0',
          deep: '#7A361B',
        },
        plum: {
          DEFAULT: '#9B6BFF',
          light: '#C7A9FF',
          deep: '#5A2EB8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        glowPulse: 'glowPulse 5s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
