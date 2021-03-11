import React, { Component } from "react";
import BannerContainer from "../components/bannerSection/BannerContainer";
import GeneralFlowContainer from "../components/generalFlowSection/GeneralFlowContainer";
import NavigationBar from "../components/navigationSection/NavigationBar";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <section className="flex content-center justify-between w-full">
        <BannerContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <GeneralFlowContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
