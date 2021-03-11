import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const BannerContainer = () => {
  return (
    <div
      className="h-auto lg:h-screen  w-full flex flex-col-reverse sm:flex-row justify-between
                py-20 sm:py-20 
                px-2 sm:px-24 md:px-24 lg:px-48"
      id="home"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default BannerContainer;
