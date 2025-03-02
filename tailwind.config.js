/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#1f2937',
        accent: '#4f46e5',
        dark: '#111827',
        light: '#f9fafb'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#0070f3',
              '&:hover': {
                color: '#0056b3',
              },
            },
            h1: {
              fontWeight: '800',
              marginBottom: '1.5rem',
            },
            h2: {
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            code: {
              color: '#4f46e5',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 