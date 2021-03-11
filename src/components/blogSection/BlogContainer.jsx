import BlogComponent from "./BlogComponent";

const BlogContainer = () => {
  return (
    <div
      className="h-auto xl:h-screen w-full flex-wrap justify-center
                  py-10
                  px-2 sm:px-24 md:px-24 lg:px-48"
      id="blog"
    >
      <div className="public_semibold  justify-center 2xl:justify-center text-center text-pharma-A-400 text-3xl">
        Latest News
      </div>
      <div className="flex flex-wrap justify-center">
        <BlogComponent
          id="1"
          title="New Vaccine Available"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></BlogComponent>
        <BlogComponent
          id="2"
          title="Copper Mask Health Issues"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></BlogComponent>
        <BlogComponent
          id="3"
          title="3000 New Covid Cases"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></BlogComponent>
      </div>
    </div>
  );
};

export default BlogContainer;
