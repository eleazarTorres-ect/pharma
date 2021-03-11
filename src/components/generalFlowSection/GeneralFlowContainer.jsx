import FlowStepComponent from "./FlowStepComponent";

const GeneralFlowContainer = () => {
  return (
    <div
      className="h-auto w-full flex flex-wrap justify-center
                  py-10
                  px-2 sm:px-24 md:px-24 lg:px-48"
      id="generalFlow"
    >
      <FlowStepComponent
        id="1"
        title="1 - Find Medicine"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
      ></FlowStepComponent>
      <FlowStepComponent
        id="2"
        title="2 - Upload Prescription"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
      ></FlowStepComponent>
      <FlowStepComponent
        id="3"
        title="3 - Enter Shipping Details"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
      ></FlowStepComponent>
      <FlowStepComponent
        id="4"
        title="4 - Select Payment Options"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
      ></FlowStepComponent>
      <FlowStepComponent
        id="5"
        title="5 - Wait for your Order"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
      ></FlowStepComponent>
    </div>
  );
};

export default GeneralFlowContainer;
