import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7a00ff",
          secondary: "#00ed87",
          accent: "#008fff",
          neutral: "#25251a",
          "base-100": "#1f2527",
          info: "#008aff",
          success: "#4bcc5d",
          warning: "#c75000",
          error: "#db0017",
        },
      },
    ],
  },
}
export default config
