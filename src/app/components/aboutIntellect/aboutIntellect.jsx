"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import Container from "../shared/container/container";

export default function AboutIntellect() {
  const { darkMode } = useSettingStore();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Container>
      <div className="py-12 space-y-24">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className={`relative overflow-hidden rounded-3xl ${
            darkMode
              ? "bg-gray-900"
              : "bg-gradient-to-br from-blue-50 to-indigo-100"
          } p-6 md:p-10`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                className={`text-4xl md:text-6xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-blue-600"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  },
                }}
              >
                <span>Intellect</span> —
              </motion.h1>
              <motion.p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  },
                }}
              >
                это образовательный центр, предоставляющий услуги по подготовке
                к экзаменам для 4 и 5 кластеров, олимпиадам по химии и биологии,
                а также изучению анатомии, физиологии и биохимии. Центр также
                проводит курсы иностранных языков и направлен на развитие
                академического потенциала студентов.
              </motion.p>
            </div>
            <motion.div
              className="relative h-[300px] md:h-[400px]"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.6, duration: 0.5 },
                },
              }}
            >
              <Image
                src="/INTELLECT.jpg"
                alt="intellect Academy graduates"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon="✨"
            title="Опыт работы"
            description="Этот образовательный центр имеет более чем 10-летний опыт работы и за это время добился больших успехов."
            darkMode={darkMode}
          />
          <FeatureCard
            icon="🏢"
            title="Наши выпускники"
            description="У нас было более 2000+ выпускников, и они были приняты в университеты по своему выбору, а некоторые сейчас работают."
            darkMode={darkMode}
          />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatisticCounter end={10} suffix="+" label="Лет опыта" darkMode={darkMode} />
          <StatisticCounter end={2000} suffix="+" label="Выпускников" darkMode={darkMode} />
          <StatisticCounter end={50} suffix="+" label="Преподавателей" darkMode={darkMode} />
          <StatisticCounter end={95} suffix="%" label="Успешных студентов" darkMode={darkMode} />
        </div>
      </div>
    </Container>
  );
}

const FeatureCard = ({ icon, title, description, darkMode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 rounded-2xl ${
        darkMode ? "bg-gray-900" : "bg-white"
      } shadow-lg transition-all duration-300`}
    >
      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 p-[2px]">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <h2 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
        {title}
      </h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
    </motion.div>
  );
};

const StatisticCounter = ({ end, suffix = "", label, darkMode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; 
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-4xl font-bold mb-2 ${darkMode ? "text-white" : "text-blue-600"}`}>
        {count}
        {suffix}
      </div>
      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{label}</div>
    </motion.div>
  );
};
