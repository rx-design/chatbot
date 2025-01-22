import type { Config } from 'tailwindcss'
import primeUi from 'tailwindcss-primeui'

export default {
  plugins: [
    primeUi,
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: 'Fredoka", serif',
      },
    },
  },
} satisfies Partial<Config>
