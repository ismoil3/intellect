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
        "https://webadminapi.softclub.tj/Images/71056323-1cb6-4df9-ba1a-dcd842f59ff2.png",
      date: "21.08.2024",
      likes: 34,
      comments: 7,
      title: "Chat-GPT",
      description:
        "Ба аксарияти мардуми сайёра аллакай маълум аст, ки Chat-GPT...",
      link: "/blog/132",
    },
    {
      imageUrl:
        "https://webadminapi.softclub.tj/Images/71056323-1cb6-4df9-ba1a-dcd842f59ff2.png",
      date: "22.08.2024",
      likes: 28,
      comments: 10,
      title: "AI in Education",
      description: "Технологияҳои AI дар таълим истифода мешаванд...",
      link: "/blog/133",
    },
    {
      imageUrl:
        "https://webadminapi.softclub.tj/Images/71056323-1cb6-4df9-ba1a-dcd842f59ff2.png",
      date: "23.08.2024",
      likes: 42,
      comments: 15,
      title: "Future of Coding",
      description: "Оянда дар соҳаи барномасозӣ чӣ гуна хоҳад буд...",
      link: "/blog/134",
    },
    {
      imageUrl:
        "https://webadminapi.softclub.tj/Images/71056323-1cb6-4df9-ba1a-dcd842f59ff2.png",
      date: "24.08.2024",
      likes: 37,
      comments: 8,
      title: "Cybersecurity Trends",
      description: "Равандҳои нави амнияти кибернетикӣ дар соли 2024...",
      link: "/blog/135",
    },
  ];

  return (
    <Container>
      <br />
      <h1
        className={`text-3xl text-center font-bold ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Latest News
      </h1>{" "}
      <br />
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
        observer={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            centeredSlides: true,
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
              className={`card-wrNews ${
                darkMode ? "dark:bg-[#161F2D]" : "bg-[#FAFAFA]"
              } text-start flex flex-col justify-between items-baseline p-2 rounded-2xl container max-w-[320px] min-w-[320px] h-[426px]`}
            >
              <main>
                {/* Image */}
                <div className="flex justify-center">
                  <img
                    width="304px"
                    className="rounded-[10px] h-[220px] object-cover"
                    src={blog.imageUrl || "/placeholder.svg"}
                    alt={blog.title}
                  />
                </div>

                {/* Date, Likes, and Comments */}
                <div className="flex items-center justify-between gap-2 mt-2">
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {blog.date}
                  </p>
                  <div className="py-1 flex rounded-[6px] items-center text-[#64748B]">
                    {/* Likes */}
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary">
                      <span className="text-[#64748B] text-[14px] font-[500]">
                        {blog.likes}
                      </span>
                    </button>

                    {/* Divider */}
                    <div className="h-3 w-[1px] rounded bg-[#CBD5E1] mx-2"></div>

                    {/* Comments */}
                    <Link href={"#"}>
                      <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary">
                        <span className="text-[#64748B] text-[14px] font-[500]">
                          {blog.comments}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </main>

              {/* Title and Description */}
              <div
                className={`p-2 text-start ${
                  darkMode ? "dark:text-[#FAFAFA]" : "text-[#262626]"
                }`}
              >
                <h3 className="text-[16px] font-bold leading-6">
                  {blog.title}
                </h3>
                <p className="text-sm font-normal">{blog.description}</p>
              </div>

              {/* Read More Button */}
              <Link href={blog.link}>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
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
  );
};

export default NewsSlider;
