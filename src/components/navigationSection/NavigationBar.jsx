import $ from "jquery";
import MenuComponent from "./MenuComponent";
import LogoNavComponent from "./LogoNavComponent";
import Logo1 from "../../assets/img/asset001.svg";
const NavigationBar = () => {
  return (
    <nav className="fixed z-50 flex flex-wrap items-center justify-center w-full px-10 py-2 bg-white shadow-md border-bottom-2 sm:py-4 sm:px-24 md:px-24 lg:px-48">
      <LogoNavComponent image={Logo1} />

      <div
        className="justify-center hidden w-full text-xs lg:inline-flex lg:flex-shrink lg:w-auto"
        id="navigation"
      >
        <header className="flex flex-col flex-wrap items-start justify-center w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
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
            label="About Us"
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
            label="Contact Us"
          />
        </header>
      </div>
    </nav>
  );
};
export default NavigationBar;
