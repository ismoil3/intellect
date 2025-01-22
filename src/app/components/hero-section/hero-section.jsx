"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Button } from "@mui/material";
import Container from "../shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    const progressValue = 1 - progress; // Прогресси боқимонда
    progressCircle.current.style.setProperty("--progress", progressValue);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const { darkMode } = useSettingStore();

  return (
    <div className={`transition-colors duration-500 ${darkMode ? "dark" : ""}`}>
      <Container>
        <br />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {/* Слайдҳо */}
          <SwiperSlide>
            <img
              src="https://online.omuz.tj/static/media/banner-big-Gavel1.21457a35e05a268a114f.jpg"
              alt="Development Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-[60px] left-[24px] lg:left-[60px] text-start text-white dark:text-gray-200">
              <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold font-main">
                Ҳуқуқшинос шавед
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-light font-main">
                ва дар ҳифзи адолати ҷомеа саҳмгузор бошед
              </p>
              <Link href="#21">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#1a73e8" : "#0098f3",
                    color: "#ffffff",
                    padding: "12px 24px",
                    mt: "16px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: darkMode ? "#1557b5" : "#007acc",
                      boxShadow: "none",
                    },
                  }}
                >
                  Номнавис шавед
                </Button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://online.omuz.tj/static/media/Medicine.fde59c6182ce11503721.png"
              alt="Development Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-[60px] left-[24px] lg:left-[60px] text-start text-white dark:text-gray-200">
              <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold font-main">
                Касби духтуриро интихоб кунед
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-light font-main">
                ва дар беҳбудии саломатии ҷомеа саҳм гузоред
              </p>
              <Link href="#21">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#1a73e8" : "#0098f3",
                    color: "#ffffff",
                    padding: "12px 24px",
                    mt: "16px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: darkMode ? "#1557b5" : "#007acc",
                      boxShadow: "none",
                    },
                  }}
                >
                  Номнавис шавед
                </Button>
              </Link>
            </div>
          </SwiperSlide>

          {/* Прогресс-кружок */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </Container>
    </div>
  );
}
