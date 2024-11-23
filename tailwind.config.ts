import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        wave: 'wave 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          // ...

          colors: {
            background: '#000',
            success: '#00e4d9',
          },
        },
        dark: {
          // ...
          colors: {
            success: '#00e4d9',
            default: {
              500: '#ffffff',
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
