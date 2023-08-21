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
          200: '#091D26',
          300: '#091E26',
          500: '#00131C',
          600: '#00111A',
          700: '#001119',
          800: '#0D1D25',
          900: '#000A0F',
          
        }
       }
    },
  },
  plugins: [],
}
export default config
