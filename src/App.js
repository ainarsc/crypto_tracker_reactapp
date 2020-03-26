import React from "react";
import { useSelector } from "react-redux";
import Routes from "./components/routes";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useSession } from "./firebase";
import Main from "./components/Main";

const App = () => {
  const { fetching } = useSelector(state => state.session);
  useSession(); //Initialize user session

  return fetching ? (
    <LoadingCircle />
  ) : (
    <Main>
      <Routes />
    </Main>
  );
};

export default App;
