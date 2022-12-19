import React from "react";
import Applayout from "../components/templates";
import HomeContainer from "../container/homeContainer";
import { HomeProvider } from "../providers/homeProviders";

const Home = () => {
  const headList = {
    title: "Home | Marvel Wiki",
    description: "This page about home page",
  };

  return (
    <HomeProvider>
      <Applayout {...headList}>
        <HomeContainer />
      </Applayout>
    </HomeProvider>
  );
};

export default Home;
