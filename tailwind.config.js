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
  