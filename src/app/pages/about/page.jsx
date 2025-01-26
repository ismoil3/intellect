"use client";
import React, { useState, useRef } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReactPlayer from "react-player";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import Container from "@/app/components/shared/container/container";
import TeachersSlider from "@/app/components/teachers/teachers";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playerRef = useRef(null); // Референс барои ReactPlayer
  const { darkMode } = useSettingStore();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Қатъи видео ва бозгашт ба аввали он
    }
  };

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-50";
  const modalBgColor = darkMode ? "bg-gray-900" : "bg-white";

  return (
    <>
      <Container>
        {/* Матни аввалия */}
        <div>
          <h1
            className={`text-[#0B95CE] text-[28px] sm:text-[52px] font-bold `}
          >
            Intellect
          </h1>
          <p
            className={`text-[16px] sm:text-[22px] max-w-[800px] font-medium ${textColor}`}
          >
            Миссия Intellect — дать возможность каждому быть актуальным и
            востребованным специалистом прямо сейчас. Вне зависимости от
            возраста и географии.
          </p>
        </div>

        {/* Тасвир ва модал */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "50px",
          }}
        >
          {/* Тугмаи кушодани модал */}
          <div
            onClick={handleOpen}
            style={{ position: "relative", cursor: "pointer", width: "100%" }}
          >
            <img
              src="https://cdn.skillbox.pro/wbd-front/skillbox-static/company/video-preview.webp"
              alt="Video Thumbnail"
              style={{
                width: "100%",
                borderRadius: "32px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease",
                minHeight: "200px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "16px",
              }}
            >
              <button
                style={{
                  color: "#fff",
                  fontSize: "3rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Модал бо видео */}
          <Modal open={isOpen} onClose={handleClose}>
            <Box
              sx={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: 24,
                borderRadius: 2,
                overflow: "hidden",
                maxWidth: "90%",
                width: "800px",
                maxHeight: "90%",
                display: "flex",
                flexDirection: "column",
                bgcolor: modalBgColor,
              }}
            >
              {/* Тугмаи бастани модал */}
              <IconButton
                onClick={handleClose}
                sx={{
                  color: darkMode ? "white" : "black",
                  zIndex: "100",
                  position: "absolute",
                  top: "0",
                  right: "0px",
                }}
              >
                <HighlightOffIcon sx={{ fontSize: "40px" }} />
              </IconButton>

              {/* Видео */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ReactPlayer
                  ref={playerRef} // Референс барои ReactPlayer
                  url="https://cdn.skillbox.pro/wbd-front/skillbox-static/general/video/Skillbox-IT.webm"
                  controls
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Modal>
        </div>

        {/* Статистика */}
        <div className="flex flex-col items-center mt-[50px] lg:flex-row lg:justify-between">
          <div className="max-w-lg mx-auto mb-12 lg:mb-0 lg:mr-12">
            <h2 className={`text-2xl font-medium lg:text-3xl ${textColor}`}>
              {
                "Мы предлагаем большой выбор курсов для профессионального и личностного развития."
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full max-w-4xl">
            <div className={`rounded-lg p-8 ${bgColor}`}>
              <div className={`text-5xl font-bold mb-2 ${textColor}`}>787</div>
              <div
                className={`text-gray-600 ${darkMode ? "text-gray-400" : ""}`}
              >
                Курсов
              </div>
            </div>

            <div className={`rounded-lg p-8 ${bgColor}`}>
              <div className={`text-5xl font-bold mb-2 ${textColor}`}>578</div>
              <div
                className={`text-gray-600 ${darkMode ? "text-gray-400" : ""}`}
              >
                Кураторов
              </div>
            </div>

            <div
              className={`rounded-lg p-8 sm:col-span-2 lg:col-span-1 ${bgColor}`}
            >
              <div className={`text-5xl font-bold mb-2 ${textColor}`}>
                1 275 549
              </div>
              <div
                className={`text-gray-600 ${darkMode ? "text-gray-400" : ""}`}
              >
                Пользователей
              </div>
            </div>
          </div>
        </div>

        {/* team */}
        <section className="container mx-auto mt-[60px] px-2">
          <div>
            <h1
              className={`text-3xl text-center font-bold ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Наши преподаватели
            </h1>
            <br />
            <br />
          </div>
          <div className="grid md:grid-cols-2 gap-[28px]">
            <div
              className={`flex flex-col gap-6 backdrop-blur-sm px-10 py-7 rounded-[16px] ${
                darkMode
                  ? "bg-[#1E293B] bg-opacity-50"
                  : "bg-[#FFFFFF66] bg-opacity-10"
              }`}
              style={{
                background: darkMode
                  ? "linear-gradient(rgba(30, 41, 59, 0.5) 0%, rgba(30, 41, 59, 1) 100%)"
                  : "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(255, 255, 255) 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row justify-self-start sm:items-center gap-[28px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIjPOy02fH2Rgf-dbij6nWY9SjUKg-uMFqA&s"
                  alt="john"
                  loading="lazy"
                  width="100px"
                  height="100px"
                  className="w-[140px] h-[140px] rounded-[50%]"
                />
                <div>
                  <h3
                    className={`font-bold text-[20px] leading-7 text-start ${
                      darkMode ? "text-[#0EA5E9]" : "text-teritary"
                    } mb-[6px]`}
                  >
                    john jones
                  </h3>
                  <div className="w-[35%] border-b-[3px] border-[#94A3B8]"></div>
                  <p
                    className={`text-[#737373] font-normal text-[12px] mt-[6px] leading-4 ${
                      darkMode ? "text-gray-400" : ""
                    }`}
                  >
                    Муассис ва роҳбари Intellect
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`font-normal text-[14px] leading-[20px] ${
                    darkMode ? "text-trueGray100" : "text-trueGray800"
                  }`}
                >
                  Тӯли чанд сол, мо кӯшиш мекунем, ки курсҳои муфиду дастрасро
                  фароҳам созем. Омодаем таҷрибаву донишҳои худро ба нафароне,
                  ки хоҳиши дар соҳаи илм рушд карданро доранд, диҳем.!
                </p>
                <p
                  className={`font-semibold text-[14px] italic my-3 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  «Дар Intellect мо як гурӯҳи муаллимони ботаҷрибаро ҷамъ
                  овардем, ки ба шумо дар омӯхтану фаҳмидани ҳама масъалаҳои
                  дарси кумак мекунанд»
                </p>
                <p
                  className={`font-normal text-[14px] mb-3 leading-[20px] ${
                    darkMode ? "text-trueGray100" : "text-trueGray800"
                  }`}
                >
                  Барои мо хеле муҳим аст, ки ҳангоми омӯзиши курс корҳои амалӣ
                  низ бисёр бошанд. Бинобар ин ҳама муаллимон лоиҳаҳои худро
                  месозанд, ки ба шумо имкон медиҳад, ки на танҳо асосҳои
                  назариявиро омӯзед, балки ҳолатҳои воқеиро дар амал бинед.
                </p>
                <p
                  className={`font-semibold text-[14px] italic ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  «Донишҷӯёнамонро то дами кор ёфтанашон дастгирӣ мекунем.»
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col gap-6 backdrop-blur-sm px-10 py-7 rounded-[16px] ${
                darkMode
                  ? "bg-[#1E293B] bg-opacity-50"
                  : "bg-[#FFFFFF66] bg-opacity-10"
              }`}
              style={{
                background: darkMode
                  ? "linear-gradient(rgba(30, 41, 59, 0.5) 0%, rgba(30, 41, 59, 1) 100%)"
                  : "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(255, 255, 255) 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row justify-self-start sm:items-center gap-[28px]">
                <img
                  src="https://image.tmdb.org/t/p/h632/tk30wLMsyPxRoBp8Yk7pwqq0OtD.jpg"
                  alt="Nurullah"
                  loading="lazy"
                  width="100px"
                  height="100px"
                  className="w-[140px] h-[140px] rounded-[50%]"
                />
                <div>
                  <h3
                    className={`font-bold text-[20px] leading-7 text-start ${
                      darkMode ? "text-[#0EA5E9]" : "text-teritary"
                    } mb-[6px]`}
                  >
                   Islam Makhachev
                  </h3>
                  <div className="w-[35%] border-b-[3px] border-[#94A3B8]"></div>
                  <p
                    className={`text-[#737373] font-normal text-[12px] mt-[6px] leading-4 ${
                      darkMode ? "text-gray-400" : ""
                    }`}
                  >
                    Ҳаммуассиси Intellect
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`font-normal text-[14px] leading-[20px] ${
                    darkMode ? "text-trueGray100" : "text-trueGray800"
                  }`}
                >
                  Дар манзараи бошукӯҳи Тоҷикистон, ки анъана бо сарҳадҳои фардо
                  мувофиқат мекунад, академияи мо барои шахсони кунҷков ва
                  навоварон ҳамчун чароғак аст.
                </p>
                <p
                  className={`font-semibold text-[14px] italic my-3 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  «Мо худро ба ҳар як донишҷӯ хоҳишманд ва ба ҳар орзуе, ки
                  то ҳол амалӣ нагардидааст, мебахшем»
                </p>
                <p
                  className={`font-normal text-[14px] mb-3 leading-[20px] ${
                    darkMode ? "text-trueGray100" : "text-trueGray800"
                  }`}
                >
                  Мо ба қудрати илм боварӣ дорем ва кӯшиш мекунем, ки
                  байни орзуҳо ва воқеият масофаи дур набошад. Ҷаҳонбинии мо аз
                  чорчӯба берун аст: мо ҳаваси амалкуниро бедор мекунем,
                  мушкилиҳои воқеиро ҳал карда, дарҳоро ба имкониятҳои беохир
                  мекушоем.
                </p>
                <p
                  className={`font-semibold text-[14px] italic ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  «Якҷоя мо на танҳо ҳамқадами замону навовариҳо ҳастем, балки
                  онро барои Тоҷикистон ва берун аз он муайян мекунем»
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <br />
      <br />
      <TeachersSlider />
    </>
  );
};

export default About;
