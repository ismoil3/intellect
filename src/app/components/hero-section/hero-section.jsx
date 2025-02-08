"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import Container from "../shared/container/container"

const slides = [
  {
    image: "https://online.omuz.tj/static/media/Medicine.fde59c6182ce11503721.png",
    title: "Касби духтуриро интихоб кунед",
    description: "ва дар беҳбудии саломатии ҷомеа саҳм гузоред",
    color: "blue",
  },
  {
    image: "https://online.omuz.tj/static/media/banner-big-Gavel1.21457a35e05a268a114f.jpg",
    title: "Ҳуқуқшинос шавед",
    description: "ва дар ҳифзи адолати ҷомеа саҳмгузор бошед",
    color: "green",
  },
]

export default function HeroSection() {
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [swiper])

  const handlePrev = () => swiper && swiper.slidePrev()
  const handleNext = () => swiper && swiper.slideNext()

  return (
    <Container>
      <div className="relative max-h-[400px] mt-[30px] rounded-3xl overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col justify-center p-8 ${ slide.color === "blue" ? "bg-blue-500" : "bg-green-500"}`}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 text-white">{slide.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#21" passHref>
                    <motion.span className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      Номнавис шавед
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-full object-fill object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => swiper && swiper.slideTo(index)}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors duration-300 rounded-full p-2"
        onClick={handlePrev}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors duration-300 rounded-full p-2"
        onClick={handleNext}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
    </Container>
  )
}

