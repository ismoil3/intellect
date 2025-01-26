"use client";
import Container from "@/app/components/shared/container/container";
import { IconButton, Modal, Box } from "@mui/material";
import { ShieldClose } from "lucide-react"; // Corrected import
import React, { useState } from "react";
import ReactPlayer from "react-player";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <div>
        <h1 className="text-[#0B95CE] text-[28px] sm:text-[52px] font-bold">
          Intellect
        </h1>
        <p className="text-[16px] sm:text-[22px] max-w-[800px] font-medium">
          Миссия Intellect — дать возможность каждому быть актуальным и
          востребованным специалистом прямо сейчас. Вне зависимости от возраста
          и географии.
        </p>
      </div>
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
            src="https://cdn.skillbox.pro/wbd-front/skillbox-static/company/video-preview.webp" // Сурат барои thumbnail
            alt="Video Thumbnail"
            style={{
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
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

        {/* Модал бо MUI */}
        <Modal open={isOpen} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 2,
              overflow: "hidden",
              maxWidth: "90%",
              width: "800px",
              maxHeight: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Тугмаи бастан */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: 2,
                bgcolor: "background.default",
              }}
            >
              <IconButton onClick={handleClose} sx={{ color: "text.primary" }}>
                <ShieldClose />
              </IconButton>
            </Box>

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
                url="https://cdn.skillbox.pro/wbd-front/skillbox-static/general/video/Skillbox-IT.webm" // URL видеои шумо
                playing
                controls
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};

export default About;
