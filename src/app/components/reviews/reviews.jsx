"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../shared/container/container";
import Image from "next/image";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import { useState, useEffect } from "react"; 
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; 

const Reviews = () => {
  const data = [
    {
      id: "1",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t51.29350-15/312244924_194612132975990_1413613134140106957_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=teaasrUL9gsQ7kNvgFGVSjd&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=Mjk1MzY3NzUxMDc3OTE2OTEyMA%3D%3D.3-ccb7-5&oh=00_AYBJ4xjUydlyf3cvgxEYDobP3QGpVqjGg4BTX6TcvGZ09Q&oe=6796DD2C&_nc_sid=5a0a6d",
    },
    {
      id: "2",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t51.29350-15/329269257_1876355306033878_1853511078390449832_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=DosY0_j1c2AQ7kNvgFVDeX0&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzAzMjMzNTkyMzEyNzcyNjAxMg%3D%3D.3-ccb7-5&oh=00_AYAo-FqKjZCd5j_XsfPt-pc6ISbtaoaseV19HXFWJ3vOWw&oe=6796F735&_nc_sid=5a0a6d",
    },
    {
      id: "3",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t51.29350-15/329488420_572466558128163_7921583078628932966_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=CS3ZqIE9gFYQ7kNvgEQBUoj&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzAzMzMzNjQxNzU3MjU1NTAwOA%3D%3D.3-ccb7-5&oh=00_AYD1bHIGj9w7rs22glvJJ3jZid0hePepkkqHYkkEl8PLZg&oe=6796F172&_nc_sid=5a0a6d",
    },
    {
      id: "4",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t51.29350-15/329606670_1216426268999692_1414158266995041673_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=jLDfKURwNqoQ7kNvgFd2Cjx&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzA0MDA3NDEwMjY1NjE1MzU3Ng%3D%3D.3-ccb7-5&oh=00_AYAUwn-qgH_hdDO6Zz3mn8nvEmvDWSLPSXantgByZdEtRQ&oe=6796F921&_nc_sid=5a0a6d",
    },
    {
      id: "5",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t51.29350-15/356252482_292705796539166_8330240478369325024_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=f25bI7UNf0oQ7kNvgEV8IbE&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzEzMzY4OTM1MzYyNDQ3MjkzOA%3D%3D.3-ccb7-5&oh=00_AYCcuzFQkGZtvW6Q6sw-kjAbV0FVqJRWz0uRaYac3IpHhA&oe=6796FF42&_nc_sid=5a0a6d",
    },
    {
      id: "6",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/363969200_17967752720533950_4011937437823916169_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=qc04mS6nOI8Q7kNvgH1V7-Z&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzE1NzU1ODcwNzMxODcxNTc3NQ%3D%3D.3-ccb7-5&oh=00_AYDF6ErLOFikWxBlrm6bmJZuMS8YESdW-WfgYfDfoI97nA&oe=6796E64F&_nc_sid=5a0a6d",
    },
    {
      id: "7",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/386637586_17976652910533950_7921683295474961515_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=jeXQJDsgMrsQ7kNvgG0bZkr&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzIwNTQ0NzMxNTAwNjkwNDE4NQ%3D%3D.3-ccb7-5&oh=00_AYDur64ezME3gPSLVkQrWo9OBVew8SZ2Ifo0X6EixK0XkQ&oe=6796F625&_nc_sid=5a0a6d",
    },
    {
      id: "8",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/387059995_17977150547533950_7188474883484416960_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=WbXy0d8mCXYQ7kNvgHa4pEA&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzIwODMyMDEwMTcwMjM0MjAwNg%3D%3D.3-ccb7-5&oh=00_AYAW7Kcywrrs0kEtoNIT8Azay7NPfUUQEM8FPAcjlyBWIA&oe=6796E354&_nc_sid=5a0a6d",
    },
    {
      id: "9",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/391699223_17977867922533950_8974390688525171683_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=jTyUKjy7OfoQ7kNvgEFiF4a&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzIxMjAzNTk4NTk5ODQ5NjYwOQ%3D%3D.3-ccb7-5&oh=00_AYCECLQHFIvO8cpsOBFXlPFK9M5fFJAk2goFEZ14CDcVBg&oe=679700F2&_nc_sid=5a0a6d",
    },
    {
      id: "10",
      url: "https://instagram.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/391695493_17977867961533950_5479087461668318322_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdyu4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHISskl1GUyndfvco6prSKGMT7twptYJsdfGtqaigr2WC65jo1G-z1_Fin7MTeNlWI&_nc_ohc=ITucpkpyOLkQ7kNvgHOtOK9&_nc_gid=87896495e7d747d190bfb5f359ea99de&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzIxMjAzNjA1NzU0NDgwNzE5NQ%3D%3D.3-ccb7-5&oh=00_AYD0XaBWZyaZDhbjrUzSObUo8p7MUvt6J6t4o5Lk2zNizA&oe=6796FA86&_nc_sid=5a0a6d",
    },
  ];

  const { darkMode } = useSettingStore();
  const [selectedImage, setSelectedImage] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  
  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index); 
  };

  
  const handleClose = () => {
    setSelectedImage(null);
  };

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        switch (event.key) {
          case "ArrowLeft":
            
            setCurrentIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : data.length - 1
            );
            break;
          case "ArrowRight":
            
            setCurrentIndex((prevIndex) =>
              prevIndex < data.length - 1 ? prevIndex + 1 : 0
            );
            break;
          case "Escape":
            
            handleClose();
            break;
          default:
            break;
        }
      }
    };

    
    window.addEventListener("keydown", handleKeyDown);

    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, data.length]);

  
  useEffect(() => {
    if (selectedImage) {
      setSelectedImage(data[currentIndex].url);
    }
  }, [currentIndex, data, selectedImage]);

  return (
    <Container>
      <div className={`py-10`}>
        <section className="text-center">
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Что говорят наши студенты о нас
          </h1>
          <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Реальные отзывы и впечатления от наших учеников
          </p>
          <div className="mt-10">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: `swiper-pagination-bullet ${
                  darkMode ? "dark-bullet" : "light-bullet"
                }`,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="reviews-slider"
            >
              {data.length > 0 &&
                data.map((el, index) => (
                  <SwiperSlide key={el.id}>
                    <div
                      className={`p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-white text-gray-800 hover:bg-gray-100"
                      }`}
                      onClick={() => handleImageClick(el.url, index)} 
                    >
                      <Image
                        src={el.url}
                        width={200}
                        height={200}
                        alt={`Review ${el.id}`}
                        className="rounded-lg cursor-pointer"
                        onError={(e) => {
                          e.currentTarget.src = "/image.png";
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Full-Screen Image Modal */}
      <Dialog
        open={!!selectedImage} 
        onClose={handleClose} 
        maxWidth="xs" 
        fullWidth 
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            position: "relative", 
          }}
        >
          {selectedImage && (
            <>
              <Image
                src={selectedImage}
                alt="Full Screen Image"
                width={800}
                height={800}
                style={{ width: "100%", height: "auto", maxHeight: "90vh" }}
              />
              {/* Close Button */}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Reviews;
