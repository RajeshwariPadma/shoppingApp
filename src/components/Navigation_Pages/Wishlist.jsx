import { useContext } from "react"
import { useProducts } from "../Pages/Products";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WishListContext } from "./WishlistContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";

export const Wishlist = ({ products }) => {

    const { wishList, addToWishList, removeFromWishlist } = useContext(WishListContext);
    const wishlistCart = products.filter((product) => wishList?.[product.id]);

    if (wishlistCart.length === 0) {
        return (
            <Typography sx={{
                m: 50,
                fontSize: 20,
                pl: 20
            }}>
                Empty wishList. You Can Add Items To wishList.
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
                gridTemplateRows: "repeat(auto , 1fr)",
                 p: 5,
                // m: 20,
                // backgroundColor: "red",
                 gap: 4,
            }}>
                {wishlistCart.map((device) => (

                    <Card key={device.id}
                        sx={{
                            width: "auto",
                            boxShadow: "2px 2px 2px  #3736375e",
                            borderRadius: 4,
                            pr: 5,
                            position: "relative",
                            border: "1px solid #4d4b4b98",
                        }}>
                        <CardMedia
                            component="img"
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
                        <CardContent>
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
                        <Box>
                            {!!wishList?.[device.id] ? (
                                <Button onClick={() => removeFromWishlist(device.id)}
                                    sx={{
                                        position: "absolute",
                                        top: "5%",
                                        //  left: "78%",
                                        left : "70%",
                                        color: "black",

                                    }}>
                                    < FavoriteIcon sx={{ fontSize: 30 }} />
                                </Button>
                            ) : <Button onClick={() => addToWishList(device.id)}
                                sx={{
                                    position: "absolute",
                                    top: "5%",
                                    // left: "78%",
                                    left : "70%" ,
                                    color: "black",

                                }}>
                                < FavoriteBorderIcon />
                            </Button>}
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}