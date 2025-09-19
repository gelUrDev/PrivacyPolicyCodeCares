import { createTheme } from "@mui/material/styles";
import { COLORS, FONTS } from "./constants/design";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.primary,
      dark: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.background,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.text,
      secondary: COLORS.textLight,
    },
  },
  typography: {
    fontFamily: FONTS.main,
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.background,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
