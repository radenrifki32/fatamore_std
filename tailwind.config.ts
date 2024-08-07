// import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

// export default {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         primary: ['Inter', ...defaultTheme.fontFamily.sans],
//         headNow: ['Heading Now', 'sans-serif'],
//         poppins: ['var(--font-poppins)'],
//       },
//       colors: {
//         primary: {
//           // Customize it on globals.css :root
//           50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
//           100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
//           200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
//           300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
//           400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
//           500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
//           600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
//           700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
//           800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
//           900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
//           950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
//         },
//         dark: '#222222',
//       },
//       keyframes: {
//         flicker: {
//           '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
//             opacity: '0.99',
//             filter:
//               'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
//           },
//           '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
//             opacity: '0.4',
//             filter: 'none',
//           },
//         },
//         shimmer: {
//           '0%': {
//             backgroundPosition: '-700px 0',
//           },
//           '100%': {
//             backgroundPosition: '700px 0',
//           },
//         },
//       },
//       animation: {
//         flicker: 'flicker 3s linear infinite',
//         shimmer: 'shimmer 1.3s linear infinite',
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
// } satisfies Config;

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        headNow: ['Heading Now', 'sans-serif'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        dark: '#222222',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
} satisfies Config;

export default config;
