import Logo1 from "../../assets/img/asset001.svg";
import SubscriptionComponent from "./SubscriptionComponent";
const LeftContainer = () => {
  return (
    <div className="flex flex-wrap content-center w-full lg:w-1/2">
      <div>
        <div className="public_regular text-3xl text-center lg:text-left">
          Welcome to
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start">
          <img className="h-16 -ml-2" src={Logo1} />
        </div>
        <div className="public_regular text-lg lg:text-xl text-center lg:text-left">
          Your All-in-One Pharmaceutical Website
        </div>
        <div className="public_regular mt-2 text-sm text-pharma-B-300 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start">
          <SubscriptionComponent />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
