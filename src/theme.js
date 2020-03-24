import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121",
      dark: "#212121"
    },
    background: {
      paper: "#181818"
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
