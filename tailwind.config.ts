import type { Config } from "tailwindcss";

const colors = {
  darkCyan: {
    100: "#d8e6e1",
    200: "#b1ccc2",
    300: "#8ab3a4",
    400: "#639985",
    500: "#3c8067",
    600: "#306652",
    700: "#244d3e",
    800: "#183329",
    900: "#0c1a15",
  },
  cream: {
    100: "#fcfbf9",
    200: "#faf7f4",
    300: "#f7f3ee",
    400: "#f5efe9",
    500: "#f2ebe3",
    600: "#c2bcb6",
    700: "#918d88",
    800: "#615e5b",
    900: "#302f2d",
  },
  darkBlue: {
    100: "#d2d3d5",
    200: "#a4a7aa",
    300: "#777b80",
    400: "#494f55",
    500: "#1c232b",
    600: "#161c22",
    700: "#11151a",
    800: "#0b0e11",
    900: "#060709",
  },
  grayishBlue: {
    100: "#e2e3e7",
    200: "#c4c7d0",
    300: "#a7aab8",
    400: "#898ea1",
    500: "#6c7289",
    600: "#565b6e",
    700: "#414452",
    800: "#2b2e37",
    900: "#16171b",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      borderColor: colors,
      backgroundColor: colors,
      boxShadowColor: colors,

      fontFamily: {
        montserrat: ["var(--montserrat)"],
        fraunces: ["var(--fraunces)"],
      },

    },
  },
  plugins: [],
};
export default config;
