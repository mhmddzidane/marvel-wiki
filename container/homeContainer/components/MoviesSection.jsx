import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import ImageWrapper from "../../../components/atoms/ImageWrapper";
import { studios } from "../../../public/home";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const MoviesSection = ({ getMovies }) => {
  return (
    <div className="px-10 py-5 mt-28 bg-fixed bg-center bg-cover mcu-img ">
      <div className="flex justify-center">
        <ImageWrapper src={studios} alt="mcu" className="relative w-80 h-20" />
      </div>
      {getMovies != null ? (
        <Swiper
          spaceBetween={5}
          slidesPerView={5}
          modules={[Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <div className="flex ">
            {getMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="flex  justify-center mt-10">
                  <ImageWrapper
                    src={movie.image}
                    alt="cover"
                    className="relative h-[350px] w-[300px] cursor-pointer rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 "
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      ) : (
        <p>loadings</p>
      )}
    </div>
  );
};

export default MoviesSection;
