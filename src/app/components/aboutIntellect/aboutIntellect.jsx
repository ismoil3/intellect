"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Card } from "@mui/material";
import Image from "next/image";
import Container from "../shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";

export default function AboutIntellect() {
  const { darkMode } = useSettingStore();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Container>
      <div className="py-12">
        {/* Hero Section */}
        <div
          className={`grid rounded-[1.5rem] justify-between ${
            darkMode ? "bg-gray-800" : "bg-[#F4F6F7]"
          } md:grid-cols-2 gap-8 items-center mb-16`}
          data-aos="fade-up" // Add AOS animation
        >
          <div className="p-[20px]">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-[#9370DB]"
              }`}
            >
              <span>Intellect</span> —
            </h1>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              это образовательный центр, предоставляющий услуги по подготовке
              к экзаменам для 4 и 5 кластеров, олимпиадам по химии и биологии,
              а также изучению анатомии, физиологии и биохимии. Центр также
              проводит курсы иностранных языков и направлен на развитие
              академического потенциала студентов.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[250px] rounded-2xl overflow-hidden">
            <Image
              src="/INTELLECT.jpg"
              alt="intellect Academy graduates"
              fill
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <Card
            sx={{
              padding: "1.5rem",
              backgroundColor: darkMode ? "#1f2937 " : "#F4F6F7",
              borderRadius: "1.5rem",
            }}
            data-aos="fade-right" // Add AOS animation
          >
            <div className="w-16 h-16 mb-4 rounded-3xl bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h2
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Опыт работы
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Этот образовательный центр имеет более чем 10-летний опыт работы
              и за это время добился больших успехов.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card
            sx={{
              padding: "1.5rem",
              backgroundColor: darkMode ? "#1f2937 " : "#F4F6F7",
              borderRadius: "1.5rem",
            }}
            data-aos="fade-left" // Add AOS animation
          >
            <div className="w-16 h-16 mb-4 rounded-3xl bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
            </div>
            <h2
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Наши выпускники
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              у нас было более 2000+ выпускников, и они были приняты в
              университеты по своему выбору, а некоторые сейчас работают
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}