import ImageWrapper from "../../../components/atoms/ImageWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";
import { comic } from "../../../public/home";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ComicsSection = ({ getComics }) => {
  return (
    <div className="px-10 py-3 mt-20 md:mt-32 bg-fixed bg-center bg-cover custom-img ">
      <div className="flex  justify-center">
        <ImageWrapper src={comic} alt="logo" className="relative w-40 h-32 " />
      </div>
      {getComics != null ? (
        <Swiper
          // breakpoints={{
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },

          //   768: {
          //     width: 768,
          //     slidesPerView: 2,
          //   },
          // }}
          spaceBetween={5}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          <div className="flex text-white  ">
            {getComics?.map((comic, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-[#040f13] px-1 h-[400px] rounded-xl">
                  <ImageWrapper
                    src={comic.image}
                    alt="comic cover"
                    la
                    className="relative h-[250px] w-[200px] my-5 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 ease-in-out transition-transform cursor-pointer"
                  />
                  <div className="text-center">
                    <p className="mt-2 font-bold text-white">{comic.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default ComicsSection;
