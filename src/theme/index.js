import { createTheme } from "@mui/material/styles";
import { deepOrange, grey } from "@mui/material/colors";

const theme = {
  lightTheme: createTheme({
    palette: {
      mode: "light",
      background: {
        default: grey[200],
      },
      google: {
        main: deepOrange["A700"],
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  }),

  darkTheme: createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  }),
};

export default theme;
