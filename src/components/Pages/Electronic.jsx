import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from "react";
import { StoreContext } from "../Navigation_Pages/StoreContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AuthContext } from "../Navigation_Pages/AuthContext";
import { WishListContext } from "../Navigation_Pages/WishlistContext";
import { useNavigate } from "react-router";


export const Electronics = ({ products, category }) => {

    const { wishList,  addToWishList, removeFromWishlist } = useContext(WishListContext);
    const { cartItems, setCartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const filterData = products.filter(p =>
        ["electronics", "laptops", "smartphones"].includes(p.category?.toLowerCase())
    );

    if (filterData.length === 0) {
        return (
            <Typography sx={{ p: 5, fontSize: 20 }}>
                No electronics found
            </Typography>
        );
    }

    const handleAddToCart = (deviceId) => {
        if (!user) {
            alert("please Login to add items to cart");
            navigate("/login");
            return
        }

         addToCart(deviceId);
    };

    const handleAddToWishlist = (deviceId) => {
        if(!user) {
            alert("please Login to add items to wishlist");
            navigate("/login");
            return;
        }
        addToWishList(deviceId);
    };

    const handleRemovefromWishlist = (deviceId) => {
        if(!user){
            alert("please Login to remove items to wishlist");
            navigate("/login");
            return;
        }
        removeFromWishlist(deviceId);
    }
    return (

        <Box
            sx={{
                pl: 5,
                pr: 5,

            }}>


            <Box >
                <Typography sx={{
                    fontSize: 40,
                    fontWeight: "bold",
                    p: 3,

                    "&:hover": {
                        background: "linear-gradient(30deg ,  rgba(243, 21, 21, 1), rgba(44, 44, 232, 1), rgba(9, 241, 9, 1), rgb(226, 226, 25))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        cursor: "pointer"
                    }
                }}>Electronics</Typography>
            </Box>
            <Box sx={{
                // display: "grid",
                backgroundColor: "#edcbb998",
                gap: 3,
                p: 5,
                borderRadius: 5,
                mr: 4,
                ml: 4,
                display: "grid",
                gridTemplateColumns: "repeat(4 , 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                height: "auto",
                cursor: "pointer",
                mb: 5,
                // pl: 10,
                pt: 5,
                pb: 5

            }}>
                {filterData.length > 0 ? (
                    filterData.map((device) => {
                        const rating =
                            typeof device.rating === "object"
                                ? device.rating.rate
                                : device.rating ?? "N/A";
                        return (
                            <>
                                <Card key={device.id}
                                    sx={{

                                        // width: 120,
                                        // height: 150,
                                        // display : "flex",
                                        // flexDirection : "column",
                                        // width: 220,
                                        width: "auto",
                                        // height: 150,
                                        boxShadow: "2px 2px 2px  #3736375e",
                                        borderRadius: 2,
                                        // cursor: "pointer",
                                        // "&:hover": {
                                        //     transform: "scale(1.1)"
                                        // }
                                        pr: 5,
                                        position: "relative"

                                    }}>


                                    <CardMedia component="img"
                                        image={device.images ? device.images[0] : device.image}
                                        alt={device.title}

                                        sx={{
                                            width: 180,
                                            height: 180,
                                            p: (0, 7),

                                            "&:hover": {
                                                transform: "scale(1.1)"
                                            }
                                        }} />
                                    <CardContent ><Typography sx={{
                                        fontSize: 15,
                                        color: "black",
                                        // display : "-webkit-box",
                                        // WebkitBoxOrient : "vertical",
                                        // WebkitLineClamp: 2,
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
                                        // pt: 5

                                    }}>{device.title} </Typography>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between"
                                        }}>
                                            <Button sx={{
                                                fontSize: 25,
                                                color: "black",
                                                cursor: "pointer",
                                                // fontWeight: "bold",
                                                // backgroundColor: "yellow",
                                                borderRadius: 2,
                                                mt: 3,
                                                "&:hover": {
                                                    color: "Black",
                                                    fontWeight: "bold"
                                                },

                                            }}> {device.price}$</Button>
                                            <Button sx={{
                                                fontSize: 15,
                                                color: "black",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                                backgroundColor: "yellow",
                                                borderRadius: 2,
                                                mt: 3

                                            }}>{rating}</Button>
                                        </Box>

                                    </CardContent>


                                    <Box>
                                        {!!wishList?.[device.id] ? (
                                            <Button onClick={() => handleRemovefromWishlist(device.id)}
                                             sx={{
                                                position: "absolute",
                                                top: "5%",
                                                left: "78%",
                                                color: "black",

                                            }}>
                                                < FavoriteIcon sx={{ fontSize: 30 }}  />
                                            </Button>
                                        ) : <Button onClick={() =>handleAddToWishlist(device.id)} 
                                        sx={{
                                                position: "absolute",
                                                top: "5%",
                                                left: "78%",
                                                color: "black",

                                            }}>
                                            < FavoriteBorderIcon/>
                                        </Button>}
                                    </Box>

                                    <Box sx={{
                                        position: "absolute",
                                        top: "60% ",
                                        right: "5%",

                                    }}>
                                        {!cartItems[device.id] ? (
                                            <Box >
                                                <Button onClick={() => handleAddToCart(device.id)}
                                                >
                                                    <AddIcon sx={{
                                                        border: "1.5px solid black",
                                                        borderRadius: 50,
                                                        fontSize: 30,
                                                        color: "black",
                                                        "&:hover": {
                                                            borderColor: "red",
                                                            transform: "scale(1.2)"
                                                        }

                                                    }} />

                                                </Button>
                                            </Box>
                                        )
                                            : (
                                                <Box sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    border: "1px solid black",
                                                    backgroundColor: "#eceaea98",
                                                    borderRadius: 10,
                                                    position: "relative"
                                                }}>
                                                    <Button onClick={() => removeFromCart(device.id)}>
                                                        <RemoveIcon sx={{

                                                            fontSize: 30,
                                                            color: "black",
                                                            "&:hover": {
                                                                border: "2px solid black",
                                                                borderRadius: 50,
                                                                borderColor: "red",
                                                                // transform : "scale(1.2)"
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

                                                            fontSize: 30,
                                                            color: "black",
                                                            "&:hover": {
                                                                border: "2px solid black",
                                                                borderRadius: 50,
                                                                borderColor: "green",
                                                                // transform : "scale(1.2)"
                                                            }

                                                        }} />
                                                    </Button>
                                                </Box>
                                            )
                                        }
                                    </Box>

                                </Card>
                            </>

                        )
                    })
                ) : <Box> no product</Box>}
            </Box>
            <Box sx={{ pl: 5, pt: 3, pb: 1 }}><hr ></hr></Box>
        </Box>

    )
}