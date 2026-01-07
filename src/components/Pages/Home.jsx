import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, flex } from "@mui/system"
import { useEffect, useState } from "react"
import { Header } from "./Header";

// const dataa =  fetch('https://fakestoreapi.com/products');

export const Home = ({products , productsDetails}) => {
   

    useEffect(() => {
        console.log(productsDetails());
    }, []);

    console.log(products)
    return (
        <>
        <Box sx={{ pl : 10,
           pr : 10,
           backgroundColor : "red"}}>
<Box sx={ {mt : 10 ,
          
                display : "flex",
                gap : 5,
                backgroundColor : "blue"

            }}>
                {products.map((device) => {
                    return (
                        <Box  
                        // sx={{ display : "inline-block"}}
                        >
                            <Card key={device.id}
                                sx={{
                                    width: 180,
                                    height: 220,
                                    
                                }}>
                                <CardMedia component="img"
                                    image={device.images ? device.images[0] : device.image}
                                    alt={device.title}
                                    // width={120}
                                    // height={120}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                      
                                    
                                    }} />
                                <CardContent >{device.title} </CardContent>
                            </Card>
                        </Box>

                    )
                })}
            </Box>
        </Box>
            
        </>
    )
}
