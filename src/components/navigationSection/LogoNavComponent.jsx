import Logo1 from "../../assets/img/asset001.svg";
const LogoNavComponent = ({ image }) => {
  return (
    <div className="flex flex-grow items-center text-gray-800 font-semibold text-xl tracking-tight">
      <img className="h-8 " src={image} />
    </div>
  );
};

export default LogoNavComponent;
