import { useRouter } from "next/router";
import { useState } from "react";
import { useFindContext } from "../../providers/findProviders";
import { logo } from "../../public/home";
import ImageWrapper from "../atoms/ImageWrapper";

const Navbar = () => {
  const [find, setFind] = useState("");
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/find/[query]",
      query: { query: find },
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row mx-10 items-center my-5 text-white">
        <a href="/" className="flex">
          <ImageWrapper
            src={logo}
            alt="logo marvel"
            className="relative w-[120px] h-[50px] cursor-pointer"
          />
          <p className="text-5xl font-medium -mt-1 mx-2">WIKI</p>
        </a>

        <div className="relative w-[400px] flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setFind(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 "
            placeholder="Search Comics, Characters..."
            required
          />
          <button
            onClick={handleClick}
            className=" text-white ml-3 "
            disabled={find ? false : true}
          >
            Search
          </button>
        </div>

        <ul className="flex gap-x-6 ml-auto z-10 font-semibold">
          <li>HOME</li>
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>MOVIES</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
