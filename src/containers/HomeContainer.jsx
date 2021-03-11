import React, { Component } from "react";
import BannerContainer from "../components/bannerSection/BannerContainer";
import NavigationBar from "../components/navigationSection/NavigationBar";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <section className="flex content-center justify-between w-full">
        <BannerContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
