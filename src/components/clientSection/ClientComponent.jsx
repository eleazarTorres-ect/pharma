import Logo1 from "../../assets/img/pharma-08.svg";
import Logo2 from "../../assets/img/pharma-09.svg";
import Logo3 from "../../assets/img/pharma-10.svg";
import Logo4 from "../../assets/img/pharma-11.svg";
import Logo5 from "../../assets/img/pharma-12.svg";
import Logo6 from "../../assets/img/pharma-13.svg";
import Logo7 from "../../assets/img/pharma-14.svg";

const ClientComponent = ({ id, title }) => {
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
  if (id == 5) {
    imageUrl = Logo5;
  }
  if (id == 6) {
    imageUrl = Logo6;
  }
  if (id == 7) {
    imageUrl = Logo7;
  }
  return (
    <div className="max-w-sm h-28 w-28 md:w-36 md:h-36 rounded overflow-hidden flex flex-wrap content-between justify-center  m-5 py-2 md:py-5 xl:py-10  hover:shadow-xl transform hover:scale-110 transition duration-150 ease-in-out ">
      <div>
        <div className="flex flex-wrap  justify-center content-center">
          <img className="h-16 w-auto" src={imageUrl} alt={title} />
        </div>
        <div className="px-1 md:px-4 py-auto  text-center">
          <div className="public_semibold text-pharma-A-400 text-center text-sm md:text-md mb-2">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
