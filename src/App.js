import React from "react";
import { useSelector } from "react-redux";
import Routes from "./components/routes";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useSession } from "./firebase";
import Main from "./components/Main";
import { ThemeProvider } from "@material-ui/styles";
import { dark, light } from "./theme";

const App = () => {
  const darkTheme = useSelector((state) => state.appPreferences.darkMode);
  const { fetching } = useSelector((state) => state.session);
  useSession(); //Initialize user session

  return fetching ? (
    <LoadingCircle />
  ) : (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <Main>
        <Routes />
      </Main>
    </ThemeProvider>
  );
};

export default App;
