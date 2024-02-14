import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      //Softwares:
      managementBlue: "#00b8ff", // 'gestiona'
      initializationGray: "#dcdcdc", // 'start'
      skyBlue: "#008cff", // 'lite'
      navyBlue: "#003e9c", // 'standard'
      amethyst: "#7921a1", // 'master'
      onyx: "#212121", // 'expert'
      orchid: "#542ca7", // 'bonus'
      sunsetOrange: "#ec801b", // 'monitor'
      wineRed: "#970153", // 'project'
      midnightBlue: "#000059", // 'conexa'
      oceanGreen: "#22786b", // 'okr' (Objectives and Key Results)
      limeGreen: "#8dc63f", // 'diário'
      aquamarine: "#009da4", // 'quattrus'
      iceberg: "#7ac8cc", // Hover state for header icons
      charcoal: "#31353c", // 'Menu lateral'
      steelGray: "#5a5d63", // Hover state for sidebar menu

      // EGU
      cloudGray: "#F1F3F4",
      mintGreen: "#00BD8D",
      sunflowerYellow: "#E8B722",
      coralRed: "#FF5858",

      // Table Lines and Header Accents
      mercuryGray: "#C1C2C5",

      // Table Row Hover Background
      frost: "#EDF8F9",

      // Disabled Icons
      slateGray: "#AFB0B2",

      // Faróis e Metas (Beacons and Goals)
      royalBlue: "#328AEC",
      skyBlueLight: "#5EBCE4",

      // Context Menu Hover Background
      ghostGray: "#F3F3F3",

      // Status Variants
      foam: "#E6F9F4",
      cream: "#FDF8E9",
      blush: "#FFEFEF",
      regalBlue: "#205CAA",

      // Negative Button Hover Background
      platinum: "#E6E6E6",

      // FCA (Financial Compliance Assurance)
      sapphireBlue: "#445DE2",
      tangerine: "#FFA944",
      turquoise: "#01B2D9",
      babyBlue: "#80D8EC",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
