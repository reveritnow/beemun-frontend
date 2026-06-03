import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf0',
        cream: '#f8f2e7',
        forest: '#31452b',
        sage: '#6f7f58',
        charcoal: '#1f2a1f',
        sand: '#e2d5bb',
      },
    },
  },
  plugins: [],
}

export default config
