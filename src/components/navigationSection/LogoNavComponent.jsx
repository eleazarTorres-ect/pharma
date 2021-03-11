import Logo1 from "../../assets/img/asset001.svg";
const LogoNavComponent = ({ image }) => {
  return (
    <div className="inline-flex items-center flex-shrink-0 ">
      <img className="h-8 " src={image} />
    </div>
  );
};

export default LogoNavComponent;
