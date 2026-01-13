
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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useMemo } from "react";

export const Header = ({ search, products, setSearch ,setOpen}) => {
    // const searchData = useMemo(() => {
    //     return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    // }, [search]);

    return (
        <Box>

            <Box sx={{
                pl: 5,
                pr: 5,
                mt: 30,
            }}>
                {/* <Box >


                    {search && open && (
                        <Paper
                            
                            sx={{
                                position: "absolute",
                                // top: "64px",        // height of AppBar
                                top : "70px",
                                 left: "50%",
                                transform: "translateX(-50%)",
                                width: 300,
                                maxHeight: 300,
                                overflowY: "auto",
                                zIndex: 1300
                            }}>
                            {searchData.length === 0 && (
                                <Box sx={{ p: 1 }}>No result</Box>
                            )}
                            {searchData.map((item) => (
                                <Box key={item.id}
                                    sx={{
                                        p: 1,
                                        cursor: "pointer",
                                        "&:hover": { background: "#fofofo" }
                                    }}
                                    onClick={() => {
                                        setSearch(item.title);
                                        setOpen(false);
                                    }}>
                                    {item.title}
                                </Box>
                            ))}
                        </Paper>
                    )}
                </Box> */}
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
            </Box>

        </Box>
    )
}