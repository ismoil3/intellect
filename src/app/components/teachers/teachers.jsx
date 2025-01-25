"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";

// Teacher data
const TEACHERS = [
  {
    id: 1,
    name: "Салимзода Абдурахим",
    image:
      "https://webadminapi.softclub.tj/Images/a05188eb-1b92-463e-b364-026e618bb804.png",
    description:
      "Таҷрибаи 3 сол дар тарҳрезии UX/UI вебсайтҳо ва замимаҳои мобилӣ. Дар ТАҚХ Ҳумо ба ҳайси дизайн кор кардааст. Ҳоло дар RIO кор мекунад. Муаллими курси UX/UI дизайн дар академия Intellect.",
  },
  {
    id: 2,
    name: "Каримов Фирдавс",
    image:
      "https://webadminapi.softclub.tj/Images/4a6b0bdc-494c-41f2-89ee-55eb30b92dba.png",
    description:
      "Таҷрибаи 5 сол дар барномасозии веб. Дар ширкати Алиф кор кардааст. Ҳоло дар Intellect ба ҳайси муаллими курси JavaScript кор мекунад.",
  },
  {
    id: 3,
    name: "Раҷабов Умед",
    image:
      "https://webadminapi.softclub.tj/Images/17f755f4-82bf-4245-9767-fcd93e9d7e4f.png",
    description:
      "Таҷрибаи 4 сол дар соҳаи барномасозӣ. Дар лоиҳаҳои гуногун иштирок кардааст. Муаллими курси Python дар академия Intellect.",
  },
  {
    id: 4,
    name: "Наҷибуллоҳ Шамсудинов",
    image:
      "https://webadminapi.softclub.tj/Images/52bc5e18-61e0-4dc1-9461-6054f24c86fa.png",
    description:
      "Таҷрибаи 6 сол дар соҳаи барномасозӣ. Дар ширкатҳои бузурги IT кор кардааст. Муаллими курси react дар академия Softclub.",
  },
  {
    id: 5,
    name: "Шарипов Фаррух",
    image:
      "https://webadminapi.softclub.tj/Images/32a741c0-6cd2-47f9-a644-b98093ae7193.png",
    description:
      "Таҷрибаи 3 сол дар соҳаи маркетинг. Дар ширкатҳои гуногун кор кардааст. Муаллими курси маркетинг дар академия Intellect.",
  },
];

export default function TeachersSlider() {
  const [mounted, setMounted] = useState(false);
  const { darkMode } = useSettingStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent SSR issues with Swiper
  }

  return (
    <Container>
      <h1
        className={`text-3xl text-center font-bold ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Наши преподаватели
      </h1>
      <br />
      <br />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Ensure all breakpoints are well defined
          320: {
            slidesPerView: 1, // Mobile devices
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2, // Tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Desktop
            spaceBetween: 24,
          },
        }}
        className="!pb-12"
      >
        {TEACHERS.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div
              className={`max-w-[400px] ${
                darkMode ? "bg-[#161F2D]" : "bg-white"
              } overflow-hidden flex flex-col justify-between items-start font-main h-[250px] sm:h-[250px] sm:max-h-[250px] p-6 rounded-2xl`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <img
                  className="w-[80px] h-[80px] rounded-full object-cover"
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                />
                <div>
                  <h2
                    className={`xs2:text-[16px] md:text-xl font-bold ${
                      !darkMode ? "text-gray-900" : "text-[#FAFAFA]"
                    }`}
                  >
                    {teacher.name}
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-trueGray700 text-start dark:text-trueGray200 text-[14px] font-[500] mb-[5px]">
                  <p>{teacher.description}</p>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
