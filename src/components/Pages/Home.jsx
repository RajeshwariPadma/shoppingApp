import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, flex } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import { Header } from "./Header";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";
// const dataa =  fetch('https://fakestoreapi.com/products');

export const Home = ({ products, productsDetails }) => {

    const [index, setIndex] = useState(0);
    const [isAnimated, setAnimated] = useState(true);
    const CARD_WIDTH = 220;      // card + gap
const VISIBLE_CARDS = 6; // how many fit in the container

const maxIndex = products.length - VISIBLE_CARDS;

    useEffect(() => {
        if (!isAnimated) return;

        const move = setInterval(() => {
            setIndex((prev) => (prev - 1) % products.length)
        }, 2000);

        return () => clearInterval(move);
    }, [isAnimated, products.length]);

    const goPrev = () => {
        if (index === 0) return;
        setAnimated(false);
        setIndex((prev) => (prev - 1));
    };

    const goNext = () => {
        if (index >= maxIndex) return;
        setAnimated(false);
        setIndex(prev => (prev + 1));
    }

//     useEffect(() => {
//   console.log("Current index:", index);
// }, [index]);
    useEffect(() => {
        console.log(productsDetails());
    }, []);

    // console.log(products)
    return (
        <>
            <Box
                sx={{
                    // backgroundColor : "red",
                    // m: 10
                }}>
                    
                    
                <Box sx={{
                    pl: 5,
                    pr: 5,
                    // mt: 10,
                    backgroundColor: "#e4d2f9a0",
                    // overflowX: "scroll",
                    // "::-webkit-scrollbar": { display: "none" },
                    overflow : "hidden",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: 5,
                    boxShadow: "2px 2px 2px #180a03"
                }}>
                    

                    { index > 0 && <Button
                        onClick={goPrev}
                      
                        sx={{
                            position: "absolute",
                            top: "50%",
                            //  bottom: "20%",
                            left: "-10px",
                            transition : "transform 0.5s ease",
                            //  transform : `translateX(${index * 190})`,
                            transform: "translateY(-50%)",
                            zIndex: 10
                        }}>
                        <ArrowBackIosIcon  sx={{fontWeight : "bold",
                            fontSize : 40,
                            color : "black",
                            p : 2,
                            "&:hover" : {
                                backgroundColor : "hsla(20, 2%, 24%, 0.25)",
                                 borderRadius : 5
                            }
                        }}/>
                    </Button>}
                    
                    <Box sx={{

                        pt: 10,
                        pb: 10,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                        transition: "transform 5s linear",
                        // animation: "move 20s linear infinite ",
                        // // backgroundColor: "orange",
                        // animationPlayState: "paused",
                        // "&:hover": {
                        //      animationPlayState: "running"
                        // },
                        // "@keyframes move": {

                        //     "0%": { transform: "translateX()" },
                        //     "100%": { transform: "translateX(-9000px)" }
                        // },
                         transition: "transform 0.1s ease",
                         transform: `translateX(-${index * CARD_WIDTH}px)`,
                    }}>

                        {products.map((device, i) => {
                            return (
                                <Box>
                                    <Card key={device.id}
                                        sx={{
                                            width: 180,
                                            height: 220,
                                            boxShadow: "2px 2px 2px black",
                                            "&:hover": {
                                                border: "2px solid black",
                                                transform: "scale(1.05)",

                                            },
                                            // transition: "0.3s",
                                            borderRadius: 5

                                        }}>
                                        <CardMedia component="img"
                                            image={device.images ? device.images[0] : device.image}
                                            alt={device.title}

                                            sx={{
                                                width: 120,
                                                height: 120,
                                                p: 2,
                                                pl: 4

                                            }}
                                        />
                                        <CardContent sx={{
                                            fontSize: 15,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: 140,
                                            textAlign: "center"
                                        }}>{device.title} </CardContent>
                                    </Card>
                                </Box>

                            )
                        })}
                    </Box>
                    {index < maxIndex &&   <Button
                        onClick={goNext}
        
                        sx={{
                            position: "absolute",
                            top: "50%",
                            //  bottom: "20%",
                            right: "-10px",
                            transform: "translateY(-50%)",
                            zIndex: 10,
                           
                            
                        }}>
                        <ArrowForwardIosIcon sx={{fontWeight : "bold",
                            fontSize : 40,
                            color : "black",
                            p : 2,
                            "&:hover" : {
                                backgroundColor : "hsla(20, 2%, 24%, 0.25)",
                                 borderRadius : 5
                            }
                        }}/>
                    </Button> }
                   
                    
                </Box>
            </Box>
        </>
    )
}
