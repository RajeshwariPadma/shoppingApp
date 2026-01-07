import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { Box } from "@mui/system"
import shopping_img from "../../assets/shopping_img.jpg";
import shopping_img1 from "../../assets/shopping_img1.jpg";
import shopping_img2 from "../../assets/shopping_img2.jpg";
import shopping_img3 from "../../assets/shopping_img3.jpg";
import shopping_img4 from "../../assets/shopping_img4.jpg";

export const Header = () => {

    const Images = [
        {
            image: shopping_img,
            name: "image1"
        },
        {
            image: shopping_img1,
            name: "image2"
        },
        {
            image: shopping_img2,
            name: "image3"
        },
        {
            image: shopping_img3,
            name: "image4"
        },
        {
            image: shopping_img4,
            name: "image5"
        },

    ]

    return (
        <>
            <Box sx={{ display: "flex",}}> 

                {Images.map((device) => {
                    return (
                        <Box >
                            <Card key={device.id}
                                sx={{
                                    width: 80,
                                    height: 80,
                                   

                                }}>
                                <CardMedia component="img"
                                    image={device.image}
                                    height={80}
                                    width={80}
                                />
                            </Card>
                        </Box>

                    )
                })}
            </Box>


        </>
    )
}