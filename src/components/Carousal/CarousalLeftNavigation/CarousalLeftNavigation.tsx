import React, { useEffect, useState } from "react";
//@ts-ignore
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftNav } from "../../assets/leftNav.svg";
import style from "../Carousal.module.css";

export const CarousalLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState();
  useEffect(() => {
    swiper.on("slideChange", () => {
      //@ts-ignore
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={style.leftNavigation}>
      {!isBeginning && (
        <LeftNav
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
};
