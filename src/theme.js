import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#101010"
    },
    secondary: {
      main: "#ff1744"
    },
    background: {
      default: "#202020",
      paper: "#151515"
    },
    divider: "#373737",
    text: {
      primary: "#fff",
      secondary: "#ff1744"
    }
  },

  shape: {
    borderRadius: 2
  },
  typography: {
    fontFamily: "monospace"
  },
  spacing: 2
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
