import { Swiper, SwiperProps } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Children, ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'

interface SliderProps{
    settings: SwiperProps
    children: ReactNode
}
export default function Slider({settings,children}:SliderProps){
    return(
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
    {children}
  </Swiper>
    )
}