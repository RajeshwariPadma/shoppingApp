
import CardMedia from "@mui/material/CardMedia"
import shopping_img from "../../assets/shopping_img.jpg";
import shopping_img1 from "../../assets/shopping_img1.jpg";
import shopping_img2 from "../../assets/shopping_img2.jpg";
import shopping_img3 from "../../assets/shopping_img3.jpg";
import shopping_img4 from "../../assets/shopping_img4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Header = () => {

    return (
        <>
            <Swiper
                direction="horizontal"
                loop={true}
                modules={[Navigation, Pagination, Scrollbar]}
                pagination={{ clickable: true }}
                navigation
                //   scrollbar={{ draggable: true }}
                style={{
                    height: "500px",
                    width: "70%",

                }} // optional
            >
                <SwiperSlide><CardMedia component="img" src={shopping_img2} 
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} /></SwiperSlide>
                <SwiperSlide><CardMedia component="img" src={shopping_img1}
                 sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} /></SwiperSlide>
                <SwiperSlide><CardMedia component="img" src={shopping_img} 
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} /></SwiperSlide>
                <SwiperSlide><CardMedia component="img" src={shopping_img3} 
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} /></SwiperSlide>
                <SwiperSlide><CardMedia component="img" src={shopping_img4} 
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} /></SwiperSlide>
            </Swiper>
        </>

    )
}