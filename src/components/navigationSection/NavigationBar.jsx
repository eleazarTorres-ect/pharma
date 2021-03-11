import $ from "jquery";
import React, { Component } from "react";
import MenuComponent from "./MenuComponent";
import LogoNavComponent from "./LogoNavComponent";
import Logo1 from "../../assets/img/asset001.svg";
const NavigationBar = () => {
  const navPadding =
    "px-2 py-2  sm:py-4 sm:px-24 md:px-24 lg:px-48  shadow-md border-bottom-2  ";
  const navDisplay =
    "fixed z-50 flex justify-center md:justify-end w-full bg-white ";
  return (
    <nav className={navDisplay + navPadding}>
      <div className="flex flex-grow items-center hidden md:flex">
        <LogoNavComponent image={Logo1} />
      </div>
      <div className="flex items-center public_thin text-xs">
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Home"
        />
        <MenuComponent
          linkReference="#aboutUs"
          id="aboutUsNav"
          status="inactive"
          label="About"
        />
        <MenuComponent
          linkReference="#services"
          id="servicesNav"
          status="inactive"
          label="Services"
        />
        <MenuComponent
          linkReference="#blog"
          id="blogNav"
          status="inactive"
          label="Blog"
        />
        <MenuComponent
          linkReference="#contactUs"
          id="contactUsNav"
          status="inactive"
          label="Contact"
        />
      </div>
    </nav>
  );
};
export default NavigationBar;
