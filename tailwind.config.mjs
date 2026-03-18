/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterDisplay', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#0f172a',
        accent: '#3b82f6',
        subtle: '#64748b',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
