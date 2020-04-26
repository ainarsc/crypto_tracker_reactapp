import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

//#3acbe8
//ff1744
let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#101010",
    },
    secondary: {
      main: "#1ff2ac",
    },
    background: {
      default: "#121212",
      paper: "#151515",
    },
    divider: "#333333",
    text: {
      primary: "#fff",
      secondary: "#1ff2ac",
    },
  },

  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: "monospace",
  },
  spacing: 2,
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
