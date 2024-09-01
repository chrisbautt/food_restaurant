import type { Config } from "tailwindcss";
import { keepTheme } from "keep-react/keepTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "blue": "#35b8be",
      "blue-hover": "#32afb4",
      "gray": "#546285",
      "light-gray": "#eeeeee",
      "white": "#ffffff",
      "black": "#000000",
    },
  },
  plugins: [],
};
export default keepTheme(config);
