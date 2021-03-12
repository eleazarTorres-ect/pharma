import ClientComponent from "./ClientComponent";

const ClientContainer = () => {
  return (
    <div
      className="h-auto w-full flex flex-wrap justify-center
                  py-10
                  px-2 sm:px-24 md:px-24 lg:px-48"
      id="clients"
    >
      <div
        className="public_semibold  justify-center text-center text-pharma-A-400 text-3xl"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        Partner Laboratories
      </div>
      <div className="flex flex-wrap justify-center">
        <ClientComponent id="1" title="Alpha Inc"></ClientComponent>
        <ClientComponent id="2" title="Tailwind Corp."></ClientComponent>
        <ClientComponent id="3" title="Flutter"></ClientComponent>
        <ClientComponent id="4" title="Vhade Inc."></ClientComponent>
        <ClientComponent id="5" title="Homex Corp."></ClientComponent>
        <ClientComponent id="6" title="Accentuate Inc."></ClientComponent>
        <ClientComponent id="7" title="Angular Corp."></ClientComponent>
      </div>
    </div>
  );
};

export default ClientContainer;
