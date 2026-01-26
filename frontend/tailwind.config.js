export default {
	darkMode: ["class"],
	content: [
	  "./index.css",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			'canela': ['Canela', 'serif'],
			'inter': ['Inter', 'sans-serif'],
			'sectra': ['GT Sectra', 'serif'],
			'serif': ['Canela', 'Times New Roman', 'serif'],
			'sans': ['Inter', 'system-ui', 'sans-serif'],
		  },
		colors: {
			// Old Money Editorial Palette
			'prussian': '#003153', // Deep, muted, vintage blue - luxury canvas
			'navy-soft': '#0F2A44', // Navy softened with grey - premium card color
			'navy-soft-2': '#102E4A', // Alternative navy softened with grey
			'ivory': '#F5F3EF',     // Cream for text blocks and headlines
			'light-grey': '#D8D8D8', // Body copy - calm and readable
			'slate-grey': '#A0A0A0', // Faded text, footers, captions
			'gold': '#D4AF37',       // Muted, slightly warm gold for accents
			'warm-gold': '#C9A66B',  // Alternative warm gold
			'taupe': '#8B7D6B',      // Warm taupe for secondary text and borders
			'burgundy': '#8B4C5C',   // Soft burgundy for minimal accents
			'charcoal': '#2C2C2C',   // Almost charcoal for deep elements

			// Extended palette for gradients and variations
			'prussian-light': '#1a4a6b', // Lighter prussian for gradients
			'prussian-dark': '#001a33',  // Darker prussian for depth
			'ivory-soft': '#F8F6F0',     // Softer ivory
			'gold-muted': '#B8860B',     // More muted gold
			'taupe-light': '#A89984',    // Lighter taupe
		},
		fontSize: {
			'xs': ['0.75rem', { lineHeight: '1.5' }],
			'sm': ['0.875rem', { lineHeight: '1.6' }],
			'base': ['1rem', { lineHeight: '1.6' }],
			'lg': ['1.125rem', { lineHeight: '1.7' }],
			'xl': ['1.25rem', { lineHeight: '1.7' }],
			'2xl': ['1.5rem', { lineHeight: '1.7' }],
			'3xl': ['1.875rem', { lineHeight: '1.7' }],
			'4xl': ['2.25rem', { lineHeight: '1.6' }],
			'5xl': ['3rem', { lineHeight: '1.5' }],
			'6xl': ['3.75rem', { lineHeight: '1.4' }],
			'7xl': ['4.5rem', { lineHeight: '1.3' }],
			'8xl': ['6rem', { lineHeight: '1.2' }],
			'9xl': ['8rem', { lineHeight: '1.1' }],
		},
		letterSpacing: {
			'tighter': '-0.05em',
			'tight': '-0.025em',
			'normal': '0',
			'wide': '0.025em',
			'wider': '0.05em',
			'widest': '0.1em',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		boxShadow: {
			'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
			'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		},
		backdropBlur: {
			'xs': '2px',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  