import type { Config } from 'tailwindcss';

const config: Config = {
	// @ts-ignore
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0, 0, 0.2, 1)'
      },
      transitionDuration: {
        '225': '225ms'
      },
      fill: {
        star: 'var(--fill-star)'
      },
      colors: {
        footer: 'var(--footer)',
        checkout: 'var(--checkout)',
        topBar: 'var(--top-bar)',
        navBar: 'var(--nav-bar)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          disabled: 'hsl(var(--primary-disabled))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          star: 'hsl(var(--muted-star))',
          'star-foreground': 'hsl(var(--muted-star-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        'border-secondary': 'hsl(var(--secondary))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        'star-rating': 'hsl(var(--star-rating))',
        'star-rating-foreground': 'hsl(var(--star-rating-foreground))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        button: 'var(--button-radius)',
        card: 'var(--card-radius)'
      },
      boxShadow: {
        card: 'var(--card-shadow)',
        primary: 'var(--primary-shadow)',
        secondary: 'var(--secondary-shadow)',
        button: 'var(--button-shadow)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      },
      backgroundImage: {
        'btn-primary': 'var(--btn-primary)',
        'btn-primary-hover': 'var(--btn-primary-hover)',
        'btn-primary-disabled': 'var(--primary-disabled)',
        'btn-secondary': 'var(--btn-secondary)',
        'btn-secondary-hover': 'var(--btn-secondary-hover)',
        'btn-secondary-disabled': 'var(--secondary-disabled)'
      },
      maskImage: {
        'fade-left': 'linear-gradient(to right, white 0%, transparent 100%)'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
};
export default config;
