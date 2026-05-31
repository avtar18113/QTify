import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousal.css";

const LeftButton = ({ onClick, disabled }) => {
  if (disabled) return null;

  return (
    <button className="carousel-btn carousel-left" onClick={onClick}>
      ❮
    </button>
  );
};

const RightButton = ({ onClick, disabled }) => {
  if (disabled) return null;

  return (
    <button className="carousel-btn carousel-right" onClick={onClick}>
      ❯
    </button>
  );
};

const Carousal = ({ data, renderItem }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="carousel-wrapper">
      <LeftButton
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
      />

      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: {
            spaceBetween: 18,
          },
          768: {
            spaceBetween: 24,
          },
          1024: {
            spaceBetween: 32,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="carousel-slide">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <RightButton
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default Carousal;