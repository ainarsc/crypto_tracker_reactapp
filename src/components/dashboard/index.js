import React from "react";
import Navigation from "../navigation";
import { Dashboard as Main } from "./Dashboard";
import { useSelector } from "react-redux";
import LoadingCircle from "../ui/LoadingCircle";

const Dashboard = () => {
  const { fetching } = useSelector(state => state.session);

  return fetching ? (
    <LoadingCircle />
  ) : (
    <Navigation>
      <Main />
    </Navigation>
  );
};

export default Dashboard;
