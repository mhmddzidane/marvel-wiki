import { header } from "../../public/home";
import ImageWrapper from "../atoms/ImageWrapper";

const Header = () => {
  return (
    <div className="text-white mt-10 md:mt-20 mx-10 py-5">
      <div className="flex">
        <h3 className="font-semibold text-xl">Welcome</h3>
        <hr className="border-1 w-1/4 border-white mt-4 ml-2" />
      </div>
      <h5 className="text-5xl font-bold my-2 z-10 relative uppercase">
        Find everything about
        <br /> marvel universe
      </h5>
      <h5 className="my-4">
        You can enjoy the latest information about
        <br /> marvel characters, comics, movies ,etc
      </h5>
      <ImageWrapper
        src={header}
        alt="header image"
        className="absolute right-0 top-[30vh] md:top-12 h-[200px] w-[400px]  md:h-[400px] md:w-[900px]"
      />
    </div>
  );
};

export default Header;
