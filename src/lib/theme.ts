"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    background: {
      default: '#FFFFFF',
    },
    common: {
      black: '#31353C',
      white: '#FFFFFF',
    },
    grey: {
      100: '#F1F3F4',
      200: '#F3F3F3',
      300: '#E6E6E6',
      400: '#C1C2C5',
      500: '#AFB0B2',
      600: '#5A5D63',
    },
    info: { main: '#619DF2' },
    primary: {
      main: '#009DA4',
      light: '#7AC8CC'
    },
    success: { main: '#00BD8D', light: '#E6F9F4' },
    warning: { main: '#E8B722', light: '#FDF8E9'  },
    error: { main: '#FF5858', light: '#FFEFEF' },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
