import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { StoreContext } from "./StoreContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const Cart = ({ products }) => {
    const { cartItems, setCartItems, addToCart, removeFromCart, getTotalAmount } = useContext(StoreContext);

    const CartProducts = products.filter((product) => cartItems[product.id] > 0);


    if (CartProducts.length === 0) {
        return (
            <Typography sx={{
                m: 50,
                fontSize: 20,
                pl: 20
            }}>
                Empty Cart. You Can Add Items To Cart
            </Typography>
        )
    }
    return (
        <Box sx={{
            backgroundColor: "#fcebeb98",
            m: 20,
            gap: 4,
            borderRadius: 5,
            cursor: "pointer",
            pt: 5,
            pb: 5
        }}>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4 , 1fr)",
                gridTemplateRows: "repeat(auto, 1fr)",
                gap: 4,
                p: 5
            }}>
                {CartProducts.map((device) => (

                    <Card key={device.id}
                        sx={{
                            width: "auto",
                            boxShadow: "2px 2px 2px  #3736375e",
                            borderRadius: 4,
                            pr: 5,
                            position: "relative",
                            border: "1px solid #4d4b4b98",
                        }}
                    >
                        <CardMedia component="img"
                            src={device.images ? device.images[0] : device.image}
                            alt={device.title}
                            sx={{
                                width: 180,
                                height: 180,
                                p: (0, 7),

                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                            }} />
                        <CardContent >
                            <Typography sx={{
                                fontSize: 15,
                                color: "black",
                                width: 170,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "Black",
                                    fontWeight: "bold"
                                },
                                pl: 5
                            }}>
                                {device.title}
                            </Typography>

                        </CardContent>
                        <Box sx={{
                            position: "relative",
                            border: "1px solid black",
                            // ml: 7,
                            // mr: 3,
                            // mt: 3,
                            borderRadius: 20,
                            ml: 2,
                            mb: 2,
                            width: "100%"

                        }}>
                            <Button onClick={() => removeFromCart(device.id)}>
                                <RemoveIcon sx={{

                                    fontSize: 30,
                                    color: "black",
                                    "&:hover": {
                                        border: "2px solid black",
                                        borderRadius: 50,
                                        borderColor: "red",

                                    }

                                }} />
                            </Button>
                            <Typography sx={{
                                position: "absolute",
                                top: "17%",
                                left: "45%"
                            }}>{cartItems[device.id]} </Typography>
                            <Button onClick={() => addToCart(device.id)}>
                                <AddIcon sx={{
                                    position: "absolute",
                                    left: "150%",
                                    fontSize: 30,
                                    color: "black",
                                    "&:hover": {
                                        border: "2px solid black",
                                        borderRadius: 50,
                                        borderColor: "green",

                                    }

                                }} />
                            </Button>

                        </Box>
                    </Card>

                ))}

            </Box>
            <Box sx={{
                pl: 5, pt: 3, pb: 1, pr: 5

            }}><hr ></hr></Box>
            <Box sx={{
                pl: 10,

            }}>
                <Typography sx={{
                    fontSize: 40,
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    textUnderlineOffset: 5,

                }}>Payment details</Typography>
                {/* <Typography>{device.tittle} </Typography>
                    <Typography>{device.price} </Typography> */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2
                }}>
                    <Typography sx={{
                        fontSize: 25,
                        fontWeight: "bold"
                    }}>TotalPrice :  </Typography>
                    <Typography sx={{ fontSize: 25 }}>
                        ${getTotalAmount()}
                    </Typography>
                </Box>



            </Box>
        </Box>
    )
}