import Logo1 from "../../assets/img/pharma-06.svg";
const LeftContainer = () => {
  return (
    <div className=" flex flex-wrap w-full lg:w-1/2 content-center justify-center">
      <div className="flex flex-grow flex-wrap content-center justify-center">
        <img className="h-48 lg:h-full" src={Logo1} />
      </div>
    </div>
  );
};

export default LeftContainer;
