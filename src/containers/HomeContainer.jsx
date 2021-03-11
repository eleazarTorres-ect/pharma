import React from "react";
import AboutUsContainer from "../components/aboutUsSection/AboutUsContainer";
import BannerContainer from "../components/bannerSection/BannerContainer";
import BlogContainer from "../components/blogSection/BlogContainer";
import ClientContainer from "../components/clientSection/ClientContainer";
import ContactUsContainer from "../components/contactSection/ContactUsSection";
import GeneralFlowContainer from "../components/generalFlowSection/GeneralFlowContainer";
import NavigationBar from "../components/navigationSection/NavigationBar";
import QuickSearchContainer from "../components/quickSearchSection/QuickSearchContainer";
import ServicesContainer from "../components/servicesSection/ServicesContainer";

const HomeContainer = () => {
  //TODO Testimony Section
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
      <section className="flex content-center justify-between w-full">
        <QuickSearchContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <ClientContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <BlogContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <ContactUsContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
