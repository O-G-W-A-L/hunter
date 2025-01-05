export default {
	darkMode: ["class"],
	content: [
	  "./index.css",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  'twitter-blue': '#1DA1F2',
		  teal: {
			950: '#042f2e',
			800: '#006e6b',
			700: '#007f7d',
			500: '#009a94',
			400: '#00b1aa',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  