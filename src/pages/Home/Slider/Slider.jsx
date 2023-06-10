import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <>
    <h2 className="text-3xl font-bold text-center my-8 uppercase">At A Glance</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/GkQw2Qb/cricket.jpg" alt="" />
          <h3 className="text-2xl text-center uppercase font-bold text-[#72ff00] -mt-16 ">
            Cricket
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LZvSwtm/football.jpg" alt="" />
          <h3 className="text-2xl text-center uppercase font-bold text-[#72ff00] -mt-16 ">
            Football
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/rsZK7tv/hockey.webp" alt="" />
          <h3 className="text-2xl text-center uppercase font-bold text-[#72ff00] -mt-16 ">
            Hockey
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Cpj7hVC/rugby.png" alt="" />
          <h3 className="text-2xl text-center uppercase font-bold text-[#72ff00] -mt-16 ">
            Rugby
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/1Z4Z8rR/basketball.jpg" alt="" />
          <h3 className="text-2xl text-center uppercase font-bold text-[#72ff00] -mt-16 ">
            Basketball
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
