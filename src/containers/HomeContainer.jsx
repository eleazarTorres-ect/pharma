import React, { Component } from "react";
import AboutUsContainer from "../components/aboutUsSection/AboutUsContainer";
import BannerContainer from "../components/bannerSection/BannerContainer";
import GeneralFlowContainer from "../components/generalFlowSection/GeneralFlowContainer";
import NavigationBar from "../components/navigationSection/NavigationBar";
import QuickSearchContainer from "../components/quickSearchSection/QuickSearchContainer";
import ServicesContainer from "../components/servicesSection/ServicesContainer";

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
      <section className="flex content-center justify-between w-full">
        <AboutUsContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <ServicesContainer />
      </section>
      <section className="flex content-center justify-between w-full bg-blue-100">
        <QuickSearchContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
