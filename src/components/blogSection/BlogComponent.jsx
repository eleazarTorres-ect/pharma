import Logo1 from "../../assets/img/blog.jpg";
import Logo2 from "../../assets/img/blog.jpg";
import Logo3 from "../../assets/img/blog.jpg";
import Logo4 from "../../assets/img/blog.jpg";

const BlogComponent = ({ id, title, description }) => {
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

  return (
    <div className="max-w-sm h-80 xl:h-96 2xl:h-96 w-64 md:w-56 lg:w-60 xl:w-72  rounded overflow-hidden flex flex-wrap content-between   m-3 py-2 md:py-5 xl:py-10  hover:shadow-xl transform hover:scale-110 transition duration-150 ease-in-out shadow-lg">
      <div>
        <div className="flex flex-wrap w-full justify-center content-center mb-2">
          <img
            className="h-36 m-0 w-56 h-auto md:w-full md:h-auto"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className=" px-4 py-auto  text-center">
          <div className="public_semibold text-pharma-A-400 text-center text-md mb-2">
            {title}
          </div>
          <p className="px-4 text-pharma-B-300 text-xs 2xl:text-sm">
            {description}
          </p>
          <div className="public_semibold text-pharma-A-400 text-center text-sm mt-4 mb-2">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
