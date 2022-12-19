import React from "react";
import Applayout from "../../components/templates";
import FindContainer from "../../container/findContainer";
import { FindProvider } from "../../providers/findProviders";

const Find = () => {
  const headList = {
    title: "Find | Marvel Wiki",
    description: "This page about find page",
  };

  return (
    <FindProvider>
      <Applayout {...headList}>
        <FindContainer />
      </Applayout>
    </FindProvider>
  );
};

export default Find;
