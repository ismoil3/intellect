"use client";

import { useState, useEffect } from "react";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TEACHERS = [
  {
    id: 1,
    name: "Салимзода Абдурахим",
    image: "https://mms.businesswire.com/media/20250107967213/en/2344627/5/Print_1800x2400JonU.jpg",
    description: "Таҷрибаи 5 сол дар ҳуқуқшиносӣ. Ҳоло дар Intellect кор мекунад.",
    specialty: "Медицина",
    untrusted: false,
  },
  {
    id: 2,
    name: "Каримов Фирдавс",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVrxInRDXHGknoxzub3DIMhuHwuwRau1mDA&s",
    description: "Муаллими курси кластер 4 дар академия Intellect.",
    specialty: "Юриспруденция",
    untrusted: true,
  },
  {
    id: 3,
    name: "Раҷабов Умед",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcHEc7GKS8AMFJf8qBjpRgpIGQQieC2VFmg&s",
    description: "Муаллими курси химия дар академия Intellect.",
    specialty: "Химия",
    untrusted: false,
  },
  {
    id: 4,
    name: "Шамсудин",
    image: "https://www.cambridgenetwork.co.uk/sites/default/files/styles/article_main/public/JPH.jpg?itok=yh-yQzry",
    description: "Муаллими курси олимпиада дар академия Intellect.",
    specialty: "Олимпиада",
  },
  {
    id: 5,
    name: "Шарипов Фаррух",
    image: "https://mma.prnewswire.com/media/873524/Bishop_Fox_headshot_rose__002.jpg?w=300",
    description: "Муаллими курси физика дар академия Intellect.",
    specialty: "Физика",
  },
];

export default function TeachersCarousel() {
  const { darkMode } = useSettingStore();
  
  // Маълумотро дар консол менависем
  console.log("📌 TEACHERS:", TEACHERS);

  return (
    <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Наши преподаватели
        </h2>

        {/* Агар омӯзгорон набошанд, хатогиро намоиш медиҳад */}
        {TEACHERS.length === 0 ? (
          <p className="text-center text-red-500">❌ Маълумоти омӯзгорон нест.</p>
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="px-4"
          >
            {TEACHERS.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <TeacherCard teacher={teacher} darkMode={darkMode} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

const TeacherCard = ({ teacher, darkMode }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 h-[350px] max-w-[300px] mx-auto ${
        darkMode ? "bg-gray-800" : "bg-white"
      } ${
        teacher.untrusted ? "border-2 border-red-500" : "border-2 border-transparent"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Teacher Image */}
      <div className="relative h-[60%] overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-transform duration-300 ${
            hover ? "scale-110" : "scale-100"
          }`}
          src={teacher.image || "/placeholder.svg"}
          alt={teacher.name}
        />
        {teacher.untrusted && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            ❌ Ноустувор
          </div>
        )}
      </div>

      {/* Teacher Details */}
      <div
        className={`p-4 transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
          {teacher.name}
        </h3>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {teacher.specialty}
        </p>
        <p
          className={`text-xs mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {teacher.description}
        </p>
      </div>

      {/* Hover Overlay for Untrusted Teachers */}
      {teacher.untrusted && !hover && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <span className="text-white text-lg font-bold text-center px-4">
            ❌ Омӯзгор ноустувор аст
          </span>
        </div>
      )}
    </div>
  );
};