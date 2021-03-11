import Logo1 from "../../assets/img/asset001.svg";
import { BrowserRouter, NavLink } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="flex flex-wrap content-center w-full lg:w-1/2">
      <div>
        <div className="public_semibold text-2xl text-white text-left">
          Search if medicine is available in our pharmacy.
        </div>

        <div className="public_regular mt-2 text-sm text-white  text-left mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <BrowserRouter>
          <NavLink
            to="/about"
            className="poppins_semiBold underline p-1 mt-4 text-white text-lg"
          >
            Go to store &#8594;
          </NavLink>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default LeftContainer;
