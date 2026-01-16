import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This part is crucial! It tells Tailwind where your code lives.
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          bg: '#111111',        // Dark background behind the UI
          stone: '#C6C6C6',     // Main UI gray
          stoneDark: '#8B8B8B', // Darker stone for borders
          stoneLight: '#DBDBDB',// Lighter stone for highlights
          dirt: '#5d4037',
          grass: '#5b8c34',
          title: '#F7E525',     // The yellow Minecraft logo color
        },
      },
      fontFamily: {
        minecraft: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        // These create the 3D blocky look without using images
        'mc-btn': 'inset -4px -4px 0px 0px #555555, inset 4px 4px 0px 0px #FFFFFF',
        'mc-btn-active': 'inset -4px -4px 0px 0px #FFFFFF, inset 4px 4px 0px 0px #555555',
        'mc-panel': 'inset -4px -4px 0px 0px #555555, inset 4px 4px 0px 0px #FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;