import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#121212"
    },
    secondary: {
      main: "#ff3814"
    },

    background: {
      paper: "#121212"
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

theme = responsiveFontSizes(theme);

export default theme;
