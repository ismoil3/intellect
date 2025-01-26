"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import Container from "../shared/container/container";

const NewsSlider = () => {
  const { darkMode } = useSettingStore();

  const blogData = [
    {
      imageUrl:
        "https://www.digiexam.com/hs-fs/hubfs/Digiexam_AI%20in%20education_Illustration_v1.2.png?width=1920&name=Digiexam_AI%20in%20education_Illustration_v1.2.png", // Example image URL
      date: "22.08.2024",
      likes: 28,
      comments: 10,
      title: "AI in Education",
      description: "Технологияҳои AI дар таълим истифода мешаванд...",
      link: "/blog/133",
    },

    {
      imageUrl:
        "https://mondo.com/wp-content/uploads/2024/03/green-tech-sustainability-innovations-in-the-tech-sector-2024.jpg", // Example image URL
      date: "28.08.2024",
      likes: 38,
      comments: 10,
      title: "Green Tech",
      description:
        "Технологияҳои сабз барои ҳифзи муҳити зист чӣ аҳамият доранд...",
      link: "/blog/139",
    },
    // New entries with images
    {
      imageUrl: "/image.png", // Example image URL
      date: "29.08.2024",
      likes: 40,
      comments: 15,
      title: "Интеллект ва таҳсилоти муосир",
      description:
        "Чӣ гуна таҳсилоти муосир метавонад ақли инсонро ташаккул диҳад...",
      link: "/blog/140",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBp9DCFAhw6GtZnQj45bmiQWDXTlX4b83dw&s", // Example image URL
      date: "30.08.2024",
      likes: 55,
      comments: 18,
      title: "Дарсҳои интеллектӣ барои кластерҳои 4,5",
      description:
        "Дарсҳои интеллектӣ барои кластерҳои 4,5 чӣ гуна тарҳрезии мешаванд...",
      link: "/blog/141",
    },
    {
      imageUrl:
        "https://play-lh.googleusercontent.com/J72YL1-ti04pGRtiiZ_3PnYaXgOfG36knxoNTy4BvzuGUxsQ9GYFPqMGro2BWc3g9xg-", // Example image URL
      date: "31.08.2024",
      likes: 70,
      comments: 30,
      title: "Олимпиадаи интеллектӣ",
      description:
        "Олимпиадаҳои интеллектӣ чӣ гуна ба рушди донишҷӯён мусоидат мекунанд...",
      link: "/blog/142",
    },
  ];

  return (
    <div id="news">
      <Container>
        <br />
        <h1
          className={`text-3xl text-center font-bold ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Latest News
        </h1>
        <br />
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${
                  darkMode ? "dark:bg-[#161F2D]" : "bg-[#FAFAFA]"
                } text-start flex flex-col justify-between items-baseline p-2 rounded-2xl max-w-[320px] h-[426px] mx-auto`}
              >
                <div className="flex justify-center">
                  <img
                    width="304px"
                    className="rounded-[10px] h-[220px] object-cover"
                    src={blog.imageUrl || "/placeholder.svg"}
                    alt={blog.title}
                  />
                </div>
                <div className="flex items-center justify-between w-full mt-2 text-sm">
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {blog.date}
                  </p>
                  <div className="flex items-center text-[#64748B]">
                    <span className="text-[14px] font-medium">
                      {blog.likes} Likes
                    </span>
                    <span className="mx-2 text-[#CBD5E1]">|</span>
                    <span className="text-[14px] font-medium">
                      {blog.comments} Comments
                    </span>
                  </div>
                </div>
                <div
                  className={`p-2 ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  <h3 className="text-[16px] font-bold leading-6">
                    {blog.title}
                  </h3>
                  <p className="text-sm">{blog.description}</p>
                </div>
                <Link href={blog.link}>
                  <button
                    className="text-primary hover:underline mt-2"
                    type="button"
                  >
                    Подробнее
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default NewsSlider;
