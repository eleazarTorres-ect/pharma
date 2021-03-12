import ServicesComponent from "./SerivcesComponent";

const ServicesContainer = () => {
  return (
    <div
      className="h-auto w-full flex flex-wrap justify-center
                  py-10
                  px-2 sm:px-24 md:px-24 lg:px-48"
      id="services"
    >
      <div
        className="public_semibold  justify-center text-center text-pharma-A-400 text-3xl"
        data-aos="fade-down"
        data-aos-offset="200"
      >
        What We Offer
      </div>
      <div className="flex flex-wrap justify-center">
        <ServicesComponent
          id="1"
          title="Quick Search"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></ServicesComponent>
        <ServicesComponent
          id="2"
          title="Home Delivery"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></ServicesComponent>
        <ServicesComponent
          id="3"
          title="Different Payment Methods"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></ServicesComponent>
        <ServicesComponent
          id="4"
          title="24/7 Support"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
        ></ServicesComponent>
      </div>
    </div>
  );
};

export default ServicesContainer;
