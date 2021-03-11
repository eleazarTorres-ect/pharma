import Logo1 from "../../assets/img/pharma-01.svg";
import Logo2 from "../../assets/img/pharma-02.svg";
import Logo3 from "../../assets/img/pharma-03.svg";
import Logo4 from "../../assets/img/pharma-04.svg";
import Logo5 from "../../assets/img/pharma-05.svg";

const FlowStepComponent = ({ id, title, description }) => {
  var imageUrl;
  var btnDefault;
  if (id == 1) {
    imageUrl = Logo1;
    btnDefault = "flex justify-center";
  }
  if (id == 2) {
    imageUrl = Logo2;
    btnDefault = "flex justify-center invisible";
  }
  if (id == 3) {
    imageUrl = Logo3;
    btnDefault = "flex justify-center invisible";
  }
  if (id == 4) {
    imageUrl = Logo4;
    btnDefault = "flex justify-center invisible";
  }
  if (id == 5) {
    imageUrl = Logo5;
    btnDefault = "flex justify-center invisible";
  }
  return (
    <div className="max-w-sm h-80 w-64 md:w-56 lg:w-64 2xl:w-96  rounded overflow-hidden flex flex-wrap content-between   m-5 py-2 md:py-5 xl:py-10  hover:shadow-xl transform hover:scale-110 transition duration-150 ease-in-out shadow-lg">
      <div>
        <div className="flex flex-wrap  justify-center content-center">
          <img className="h-24  w-auto" src={imageUrl} alt={title} />
        </div>
        <div className=" px-4 py-auto  text-center">
          <div className="public_semibold text-pharma-A-400 text-center text-md mb-2">
            {title}
          </div>
          <p className="px-4 text-pharma-B-300 text-sm md:text-xs 2xl:text-sm">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className={btnDefault}>
            <button className="border primary-color-A-400 px-3 py-2 text-xs rounded-full mt-2 text-white w-48">
              <a href="#quickSearchSection">GO TO QUICK SEARCH </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowStepComponent;
