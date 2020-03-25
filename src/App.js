import React from "react";
import { useSelector } from "react-redux";
import Routes from "./components/routes";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useSession } from "./firebase";
import Main from "./components/Main";
import Navigation from "./components/navigation";

const App = () => {
  const session = useSelector(state => state.userData);
  useSession(); //Initialize user session

  return session.fetching ? (
    <LoadingCircle />
  ) : (
    <Main>
      <Navigation>
        <Routes />
      </Navigation>
    </Main>
  );
};

export default App;
