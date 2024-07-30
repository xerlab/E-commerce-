/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        B100: "#F0F1FF",
        B200: "#E3E5FF",
        B300: "#B7BFFF",
        B400: "#A8B2FF",
        B500: "#97A6FF",
        B600: "#869AFF",
        B700: "#728FFF",
        B800: "#5C83FF",
        B900: "#4078FF",
      },
      neutral: {
        B100: "#E6E7E8",
        B200: "#B6B7BC",
        B300: "#878A92",
        B400: "#71747E",
        B500: "#5C5F6A",
        B600: "#474B57",
        B700: "#333845",
        B800: "#202533",
        B900: "#0E1422",

        W100: "#F6F6F6",
        W200: "#E9E9EB",
        W900: "#FFFFFF",
      },
      semantic: {
        B100: "#E8EFFD",
        B200: "#D1DEFB",
        B300: "#BACEFA",
        B400: "#A3BEF8",
        B500: "#8CADF6",
        B600: "#759DF4",
        B700: "#5E8CF3",
        B800: "#477CF1",
        B900: "#306CEF",

        G100: "#D5E5D7",
        G200: "#C1D8C4",
        G300: "#98BE9E",
        G400: "#83B18B",
        G500: "#6FA479",
        G600: "#5A9868",
        G700: "#458B56",
        G800: "#2C7F45",
        G900: "#057234",

        R100: "#FBD9D0",
        R200: "#F8C5B9",
        R300: "#EE9F8D",
        R400: "#E88C77",
        R500: "#E17862",
        R600: "#D9644E",
        R700: "#D14F3A",
        R800: "#C83727",
        R900: "#BE1313",

        Y100: "#FFF1D8",
        Y200: "#FFEAC4",
        Y300: "#FFDC9E",
        Y400: "#FFD58A",
        Y500: "#FDCF76",
        Y600: "#FBC862",
        Y700: "#F9C14C",
        Y800: "#F6BB33",
        Y900: "#F3B40A",
      },
    },
    extend: {
      fontFamily: { sans: ["Inter"] },
      borderRadius: {
        step1: ".25rem",
      },
    },
  },
  plugins: [],
};
