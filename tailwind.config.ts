import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
        poppins: 'var(--font-poppins)',
      },

      colors: {
        black: {
          50: '#000204',
          100: '#00070A',
          200: '#091D26',
          300: '#091E26',
          500: '#00131C',
          600: '#00111A',
          700: '#001119',
          800: '#0D1D25',
          900: '#000A0F', 
        },

        back: {
          100: '#00010F',
        }
       },

      keyframes: {
        fullWidth: {
          '0%': {
            width: '0%',
            opacity: '0',
            backgroundColor: 'red'
          },

          "50%": {
            width: '50%',
            opacity: '1'
          },

          "100%": {
            width: '100%',
          }
        }
      },

      animation: {
        fullWidth: 'fullWidth 1s ease-in-out forward'
      }
    },
  },
  plugins: [],
}
export default config
