"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
      "https://mms.businesswire.com/media/20250107967213/en/2344627/5/Print_1800x2400JonU.jpg",
    description:
      "Таҷрибаи 3 сол дар тарҳрезии UX/UI вебсайтҳо ва замимаҳои мобилӣ. Дар ТАҚХ Ҳумо ба ҳайси дизайн кор кардааст. Ҳоло дар RIO кор мекунад. Муаллими курси UX/UI дизайн дар академия Intellect.",
  },
  {
    id: 2,
    name: "Каримов Фирдавс",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVrxInRDXHGknoxzub3DIMhuHwuwRau1mDA&s",
    description:
      "Таҷрибаи 5 сол дар барномасозии веб. Дар ширкати Алиф кор кардааст. Ҳоло дар Intellect ба ҳайси муаллими курси JavaScript кор мекунад.",
  },
  {
    id: 3,
    name: "Раҷабов Умед",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcHEc7GKS8AMFJf8qBjpRgpIGQQieC2VFmg&s",
    description:
      "Таҷрибаи 4 сол дар соҳаи барномасозӣ. Дар лоиҳаҳои гуногун иштирок кардааст. Муаллими курси Python дар академия Intellect.",
  },
  {
    id: 4,
    name: " Шамсудин",
    image:
      "https://www.cambridgenetwork.co.uk/sites/default/files/styles/article_main/public/JPH.jpg?itok=yh-yQzry",
    description:
      "Таҷрибаи 6 сол дар соҳаи барномасозӣ. Дар ширкатҳои бузурги IT кор кардааст. Муаллими курси tib 4 дар академия Intellect.",
  },
  {
    id: 5,
    name: "Шарипов Фаррух",
    image:
      "https://mma.prnewswire.com/media/873524/Bishop_Fox_headshot_rose__002.jpg?w=300",
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
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1, // Small mobile devices
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // Tablets
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3, // Laptops and desktops
            spaceBetween: 32,
          },
        }}
        className="!pb-12"
      >
        {TEACHERS.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div
              className={`max-w-[400px] ${
                darkMode ? "bg-[#161F2D]" : "bg-white"
              } overflow-hidden flex flex-col justify-between items-start font-main h-[250px] p-6 rounded-2xl`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <img
                  className="w-[80px] h-[80px] rounded-full object-cover"
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                />
                <div>
                  <h2
                    className={`text-lg font-bold ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {teacher.name}
                  </h2>
                </div>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {teacher.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
