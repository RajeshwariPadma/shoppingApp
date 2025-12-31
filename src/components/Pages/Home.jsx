import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, flex } from "@mui/system"
import { useEffect, useState } from "react"

// const dataa =  fetch('https://fakestoreapi.com/products');

export const Home = () => {
    const [products, setProducts] = useState([]);

    // const productsDetails = async () => {
    //     const response = await fetch('https://dummyjson.com/products?sortBy=title&order=asc');
    //     const newData = await response.json();
    //     setProducts(newData.products);
    //     // setProducts(newData);
    // }

    const productsDetails = async () => {
        const [dummyres, fakeres] = await Promise.all([
            (await fetch('https://dummyjson.com/products?sortBy=title&order=asc')).json(),
            (await fetch('https://fakestoreapi.com/products')).json()
        ]);

        const mergeData = [...dummyres.products, ...fakeres];
        setProducts(mergeData)
    }

    useEffect(() => {
        console.log(productsDetails());
    }, []);

    console.log(products)
    return (
        <>
            <Box sx={ {mt : 20}}>
                {products.map((device) => {
                    return (
                        <Box sx={{ display : "inline-block"}}>
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
        </>
    )
}
