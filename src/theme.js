import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#311b92"
    },
    secondary: {
      main: "#ff1744"
    },
    background: {
      default: "#131313",
      paper: "#191919"
    },
    divider: "#252525",
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
  spacing: 4
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
