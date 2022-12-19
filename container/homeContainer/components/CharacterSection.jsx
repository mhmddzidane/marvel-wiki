import ImageWrapper from "../../../components/atoms/ImageWrapper";

const CharacterSection = ({ getCharacters }) => {
  return (
    <div className="text-white mt-20 mx-10">
      <p className="font-bold text-3xl ">Find out about these characters!</p>
      {getCharacters != null ? (
        <div className="flex flex-row flex-wrap text-white  justify-center">
          {getCharacters?.map((comic, index) => (
            <div key={index} className="mx-5">
              <ImageWrapper
                src={comic.image}
                width={300}
                height={300}
                alt="comic cover"
                className="relative w-[150px] h-[150px] my-5 hover:scale-110 ease-in-out transition-transform cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default CharacterSection;
