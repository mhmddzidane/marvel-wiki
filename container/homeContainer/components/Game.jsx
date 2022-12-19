import React from "react";
import ImageWrapper from "../../../components/atoms/ImageWrapper";
import { gotg, miles, snap, suns } from "../../../public/home";

const Game = () => {
  return (
    <div className=" text-white">
      <p className="mx-10 font-bold text-3xl mt-16">
        Enjoy New Marvel Game
        <br />
        Now On PC!
      </p>
      <div className=" flex mt-5">
        <div className="relative w-2/5 ">
          <a href="https://store.steampowered.com/app/368260/Marvels_Midnight_Suns/">
            <ImageWrapper
              src={suns}
              alt="miles"
              className="relative w-full h-[200px] md:h-[300px]"
            />
            <div className="opacity-0 absolute flex flex-col top-0 backdrop-blur-sm w-full h-full text-center hover:opacity-95">
              <p className="font-bold text-4xl mt-28">Midnight Suns</p>
            </div>
          </a>
        </div>
        <div className="relative w-3/5 ">
          <a href="https://www.marvelsnap.com/">
            <ImageWrapper
              src={snap}
              alt="miles"
              className="relative w-full h-[200px] md:h-[300px]"
            />
            <div className="opacity-0 absolute flex flex-col top-0 backdrop-blur-sm w-full h-full text-center hover:opacity-95">
              <p className="font-bold text-4xl mt-28">Marvel Snap</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="relative w-3/5 ">
          <a href="https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/">
            <ImageWrapper
              src={gotg}
              alt="miles"
              className="relative w-full h-[200px] md:h-[300px]"
            />
            <div className="opacity-0 absolute flex flex-col top-0 backdrop-blur-sm w-full h-full text-center hover:opacity-95">
              <p className="font-bold text-4xl mt-28">
                Guardians of the galaxy
              </p>
            </div>
          </a>
        </div>
        <div className="relative w-2/5 ">
          <a href="https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/">
            <ImageWrapper
              src={miles}
              alt="miles"
              className="relative w-full h-[200px] md:h-[300px]"
            />
            <div className="opacity-0 absolute flex flex-col top-0 backdrop-blur-sm w-full h-full text-center hover:opacity-95">
              <p className="font-bold text-4xl mt-28">
                Spiderman : Miles Morales
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
