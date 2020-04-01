import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#181818"
    },
    secondary: {
      main: "#ff1744"
    },
    background: {
      default: "#131313",
      paper: "#191919"
    },
    divider: "#ff1744",
    text: {
      primary: "#fff",
      secondary: "#f9fbe7"
    }
  },

  shape: {
    borderRadius: 2
  },
  typography: {
    fontFamily: "monospace"
  },
  spacing: 4
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
