import Logo1 from "../../assets/img/pharma-01.svg";
import Logo2 from "../../assets/img/pharma-05.svg";
import Logo3 from "../../assets/img/pharma-04.svg";
import Logo4 from "../../assets/img/pharma-07.svg";

const ServicesComponent = ({ id, title, description }) => {
  var imageUrl;
  if (id == 1) {
    imageUrl = Logo1;
  }
  if (id == 2) {
    imageUrl = Logo2;
  }
  if (id == 3) {
    imageUrl = Logo3;
  }
  if (id == 4) {
    imageUrl = Logo4;
  }

  return (
    <div
      className="max-w-sm h-80 xl:h-60 2xl:h-72 w-64 md:w-56 lg:w-60 xl:w-96  rounded overflow-hidden flex flex-wrap content-between   m-3 py-2 md:py-5 xl:py-10  hover:shadow-xl transform hover:scale-110 transition duration-150 ease-in-out shadow-lg"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
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
      </div>
    </div>
  );
};

export default ServicesComponent;
