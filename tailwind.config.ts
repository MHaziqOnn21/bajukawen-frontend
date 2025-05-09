
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				baju: {
					primary: '#9b87f5',
					secondary: '#7E69AB',
					tertiary: '#6E59A5',
					light: '#D6BCFA',
					soft: '#E5DEFF',
					pink: '#FFDEE2',
					peach: '#FDE1D3',
					background: '#fff9f9',
					text: '#5a4a4a',
					heading: '#8b5a5a',
					subtext: '#a78a8a',
					'tab-inactive': '#b8a6a6',
					'tab-active': '#8b5a5a',
					'input-border': '#e8d6d6',
					'input-focus': '#e8b6b6',
					'divider': '#b8a6a6',
					'footer': '#b8a6a6',
					'footer-link': '#8b5a5a',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
      backgroundImage: {
        'header-gradient': 'linear-gradient(to bottom, #f8e3e3, #f5c8c8)',
        'button-gradient': 'linear-gradient(to bottom, #f5c8c8, #e8b6b6)',
        'button-hover-gradient': 'linear-gradient(to bottom, #e8b6b6, #d9a3a3)',
        'purple-gradient': 'linear-gradient(to right, #9b87f5, #7E69AB)',
        'purple-hover-gradient': 'linear-gradient(to right, #7E69AB, #6E59A5)',
      },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
